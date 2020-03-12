import template from '../template'
import CustomLayoutTypes from '../types/customLayout.type'
import TemplateTypes, { PAGE_CONFIG_PROPERTY } from '../types/template.type'
import CustomComponentTypes from '../types/customComponent.type'
import UserService from './user.service'
import _ from '../utilities/lodash.util'
import ExpectedError from '../utilities/ExpectedError.util'
import { t } from '../utilities/i18n.util'
import uuidGen from '../utilities/uuid.util'
import { BUILDER_BASE } from '../../configs/domain.config'

const builderPathMatcher = new RegExp(BUILDER_BASE)
export default class TemplateService {
  private static instance: TemplateService
  private _data: any

  private constructor (template: any) {
    this._data = template
  }
  static async getInstance () {
    if (!TemplateService.instance) {
      TemplateService.instance = new TemplateService(template)
    }
    return TemplateService.instance
  }

  private get data () {
    return this._data
  }

  private _findPageContent (pageContent: TemplateTypes.PageContent, pagePath?: string) {
    if (_.isNil(pageContent.pages))
      return null
    return pageContent.pages.find((page) => page.path === pagePath)
  }

  private _getPageInfo (pageConfig: TemplateTypes.PageConfig)
  : { pageContent: TemplateTypes.PageContent, layout: CustomLayoutTypes.Layout } {
    let pageContent: TemplateTypes.PageContent = this._data.pages[0]
    let layout: CustomLayoutTypes.Layout  = pageContent.layout as CustomLayoutTypes.Layout
    TemplateService.pageConfigProperty.forEach((property: TemplateTypes.PageConfigProperty) => {
      if (pageConfig[property]) {
        const content = this._findPageContent(pageContent, pageConfig[property])
        pageContent = content || pageContent
        if (pageContent.layout) {
          layout = pageContent.layout
        }
      }
    })
    return { pageContent, layout }
  }

  private async _baseFooter (): Promise<CustomLayoutTypes.Footer> {
    const creator = await UserService.getByID(this.data.creator)
    return {
      rightHolder: creator.name,
      createdAt: this.data.createdAt
    }
  }

  public static get pageConfigProperty () {
    return PAGE_CONFIG_PROPERTY
  }

  public static urlToPageConfig (url: string): TemplateTypes.PageConfig {
    const urlArr: string[] = url.replace(builderPathMatcher, '').split('/')
    const pageConfig: TemplateTypes.PageConfig = {}
    urlArr.forEach((colName, idx) => {
      pageConfig[TemplateService.pageConfigProperty[idx]] = colName
    })
    return pageConfig
  }

  public static pageConfigToUrl (pageConfig: TemplateTypes.PageConfig): string {
    const pathArr: string[] = []
    TemplateService.pageConfigProperty.forEach((key) => {
      if (pageConfig[key]) {
        pathArr.push(pageConfig[key] as string)
      }
    })
    return pathArr.join('/')
  }

  public static async getPageList (): Promise<TemplateTypes.PageList> {
    const instance = await TemplateService.getInstance()
    const template = instance.data.pages[0]
    const pageList: TemplateTypes.PageList = {
      [template.path]: {}
    }
    const makePageList = (pageContent: TemplateTypes.PageContent, list: TemplateTypes.PageList) => {
      list[pageContent.path] = {}
      if (pageContent.pages && pageContent.pages.length > 0) {
        pageContent.pages.forEach((page) => makePageList(page, list[pageContent.path]))
      }
      return list
    }
    return makePageList(template, pageList)
  }

  public static async getPageDetail (
    pageConfig: TemplateTypes.PageConfig = {}
  ): Promise<TemplateTypes.PageDetail> {
    const instance = await TemplateService.getInstance()
    const { pageContent, layout }: { pageContent: TemplateTypes.PageContent, layout: CustomLayoutTypes.Layout } = instance._getPageInfo(pageConfig)
    const components: CustomComponentTypes.CustomComponentBase[] = pageContent.components
    const baseFooter: CustomLayoutTypes.Footer = await instance._baseFooter()

    return {
      path: TemplateService.pageConfigToUrl(pageConfig),
      components,
      layout: {
        footer: baseFooter,
        ...layout,
      },
    }
  }

  public static async addPage(baseUrl: string, path: string): Promise<void> {
    const pageConfig: TemplateTypes.PageConfig = TemplateService.urlToPageConfig(baseUrl)
    const instance = await TemplateService.getInstance()
    const { pageContent }: { pageContent: TemplateTypes.PageContent } = instance._getPageInfo(pageConfig)
    if (pageContent.pages && instance._findPageContent(pageContent, path)) {
      throw new ExpectedError(t('error.duplicate_path'))
    }
    if (!pageContent.pages) {
      pageContent.pages = []
    }
    pageContent.pages.push({
      path,
      uuid: uuidGen(),
      components: [],
    })
    return
  }
}