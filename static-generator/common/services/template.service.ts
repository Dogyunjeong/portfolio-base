import template from '../template'
import LayoutTypes from '../types/layout.type'
import TemplateTypes, { PAGE_CONFIG_PROPERTY } from '../types/template.type'
import ComponentTypes from '../types/component.type'
import UserService from './user.service'
import _ from '../utilities/lodash.util'
import ExpectedError from '../utilities/ExpectedError.util'
import { t } from '../utilities/i18n.util'
import uuidGen from '../utilities/uuid.util'
import { BUILDER_BASE } from '../configs/domain.config'

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

  private findPageContent (pageContent: TemplateTypes.PageContent, pagePath?: string) {
    if (_.isNil(pageContent.pages))
      return null
    return pageContent.pages.find((page) => page.path === pagePath)
  }

  private getPageContent (pageConfig: TemplateTypes.PageConfig): TemplateTypes.PageContent {
    let pageContent: TemplateTypes.PageContent = this._data
    
    TemplateService.pageConfigProperty.forEach((property: TemplateTypes.PageConfigProperty) => {
      if (pageConfig[property]) {
        const content = this.findPageContent(pageContent, pageConfig[property])
        pageContent = content || pageContent
      }
    })
    return pageContent
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

  public static async header (): Promise<LayoutTypes.Header> {
    const instance = await TemplateService.getInstance()
    return {
      title: instance.data.layout.header.title,
      navItems: instance.data.layout.header.navItems,
    }
  }
  public static async footer (): Promise<LayoutTypes.Footer> {
    const instance = await TemplateService.getInstance()
    const creator = await UserService.getByID(instance.data.creator)
    return {
      rightHolder: creator.name,
      createdAt: instance.data.createdAt
    }
  }

  public static async getPageList (): Promise<TemplateTypes.PageList> {
    const instance = await TemplateService.getInstance()
    const template = instance.data
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
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(pageConfig)
    const components: ComponentTypes.Component[] = pageContent.components
    let layout: LayoutTypes.Layout = instance.data.layout
    if (pageContent.layout) {
      layout = pageContent.layout
    }
    return {
      path: TemplateService.pageConfigToUrl(pageConfig),
      components,
      layout,
    }
  }

  public static async addPage(baseUrl: string, path: string): Promise<void> {
    const pageConfig: TemplateTypes.PageConfig = TemplateService.urlToPageConfig(baseUrl)
    const instance = await TemplateService.getInstance()
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(pageConfig)
    if (pageContent.pages && instance.findPageContent(pageContent, path)) {
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