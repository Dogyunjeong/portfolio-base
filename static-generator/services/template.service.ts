import template from '../template'
import LayoutTypes from '../types/layout.type'
import TemplateTypes from '../types/template.type'
import ComponentTypes from '../types/component.type'
import UserService from './user.service'
import _ from '../utilities/lodash.util'

export default class TemplateService {
  private static instance: TemplateService
  private _data: any

  private constructor (template: any) {
    this._data = template
  }
  static getInstance () {
    if (!TemplateService.instance) {
      TemplateService.instance = new TemplateService(template)
    }
    return TemplateService.instance
  }

  static get data () {
    return TemplateService.getInstance()._data
  }
  static async header (): Promise<LayoutTypes.Header> {
    return {
      title: TemplateService.data.layout.header.title,
      navItems: TemplateService.data.layout.header.navItems,
    }
  }
  static async footer (): Promise<LayoutTypes.Footer> {
    const creator = await UserService.getByID(TemplateService.data.creator)
    return {
      rightHolder: creator.name,
      createdAt: TemplateService.data.createdAt
    }
  }

  static async getPageDetail (
    pageConfig: TemplateTypes.PageConfig = {}
  ): Promise<{
    pageDetail: ComponentTypes.Component,
    pageLayout: LayoutTypes.Layout
  }> {
    let pageDetail = TemplateService.data
    let pageLayout = TemplateService.data.layout
    if (!pageConfig.firstCol) {
      pageDetail = TemplateService.data.index
    }
    Object.values(pageConfig).forEach((val: string) => {
      if (_.isNil(val)) return
      pageDetail = pageDetail[val].index
      if (pageDetail.layout) {
        pageLayout = pageDetail.layout
      }
    })
    return {
      pageDetail,
      pageLayout,
    }
  }
}