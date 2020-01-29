import template from '../template'
import LayoutTypes from '../types/layout.type'
import TemplateTypes from '../types/template.type'
import ComponentTypes from '../types/component.type'
import UserService from './user.service'
import _ from '../common-utilities/lodash.util'

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

  static async getPageDetail (
    pageConfig: TemplateTypes.PageConfig = {}
  ): Promise<{
    pageDetail: ComponentTypes.Component,
    pageLayout: LayoutTypes.Layout
  }> {
    const instance = await TemplateService.getInstance()
    let pageDetail = instance.data
    let pageLayout = instance.data.layout
    if (!pageConfig.firstCol) {
      pageDetail = instance.data.index
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