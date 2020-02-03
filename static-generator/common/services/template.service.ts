import template from '../template'
import LayoutTypes from '../types/layout.type'
import TemplateTypes from '../types/template.type'
import ComponentTypes from '../types/component.type'
import UserService from './user.service'
import _ from '../utilities/lodash.util'
import ExpectedError from '../utilities/ExpectedError.util'
import { t } from '../utilities/i18n.util'
import uuidGen from '../utilities/uuid.util'

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
  private getPageContent (pageConfig: TemplateTypes.PageConfig): TemplateTypes.PageContent {
    let pageContent: TemplateTypes.PageContent = this._data
    Object.values(pageConfig).forEach((val: string) => {
      if (_.isNil(val)) return
      pageContent = pageContent[val]
    })
    return pageContent
  }
  static async header (): Promise<LayoutTypes.Header> {
    const instance = await TemplateService.getInstance()
    return {
      title: instance.data.layout.header.title,
      navItems: instance.data.layout.header.navItems,
    }
  }
  static async footer (): Promise<LayoutTypes.Footer> {
    const instance = await TemplateService.getInstance()
    const creator = await UserService.getByID(instance.data.creator)
    return {
      rightHolder: creator.name,
      createdAt: instance.data.createdAt
    }
  }

  static async getPageList (): Promise<TemplateTypes.PageList> {
    const instance = await TemplateService.getInstance()
    const template = instance.data
    const pageList: TemplateTypes.PageList = {
      [template.path]: {}
    }
    const makePageList = (pageContent: TemplateTypes.PageContent, list: TemplateTypes.PageList) => {
      list[pageContent.path] = {}
      if (pageContent.pages.length > 0) {
        pageContent.pages.forEach((page) => makePageList(page, list[pageContent.path]))
      }
      return list
    }
    return makePageList(template, pageList)
  }

  static async getPageDetail (
    pageConfig: TemplateTypes.PageConfig = {}
  ): Promise<TemplateTypes.PageDetail> {
    const instance = await TemplateService.getInstance()
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(pageConfig)
    const pageDetail: ComponentTypes.Component = pageContent.index
    let pageLayout: LayoutTypes.Layout = instance.data.layout
    if (pageContent.layout) {
      pageLayout = pageContent.layout
    }
    return {
      pageDetail,
      pageLayout,
    }
  }

  static async addPage(pageConfig: TemplateTypes.PageConfig = {}, url: string): Promise<void> {
    const instance = await TemplateService.getInstance()
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(pageConfig)
    if (pageContent[url]) {
      throw new ExpectedError(t('error.duplicate_url'))
    }
    pageContent[url] = {
      uuid: uuidGen(),
    }
  }
}