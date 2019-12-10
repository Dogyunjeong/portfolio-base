import template from '../template'
import LayoutTypes from '../types/layout.type'
import TemplateTypes from '../types/teamplte.type'
import UserService from './user.service'

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

  get data () {
    return this._data
  }
  static async header (): Promise<LayoutTypes.header> {
    return {
      title: TemplateService.getInstance().data.layout.header.title,
      navItems: TemplateService.getInstance().data.layout.header.navItems,
    }
  }
  static async footer (): Promise<LayoutTypes.footer> {
    const instance = TemplateService.getInstance()
    const creator = await UserService.getByID(instance.data.creator)
    return {
      rightHolder: creator.name,
      createdAt: instance.data.createdAt
    }
  }

  static async getPageDetail (pageConfig: TemplateTypes.PageConfig) {
    if (!pageConfig.firstCol) {
      return TemplateService.getInstance().data.index
    }
  }
}