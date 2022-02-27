import template from "../template";
import TemplateTypes from "../types/template.type";
import ComponentTypes from "../types/component.type";
import UserService from "./user.service";
import _ from "../utilities/lodash.util";
import CustomLayoutTypes from "../common/types/customLayout.type";
import ExpectedError from "../common/utilities/ExpectedError.util";

export default class TemplateService {
  private static instance: TemplateService;
  private _data: any;

  private constructor(template: any) {
    this._data = template;
  }
  static async getInstance() {
    if (!TemplateService.instance) {
      TemplateService.instance = new TemplateService(template);
    }
    return TemplateService.instance;
  }

  private get data() {
    return this._data;
  }
  private getPageContent(
    pageConfig: TemplateTypes.PageConfig
  ): TemplateTypes.PageContent {
    let pageContent: TemplateTypes.PageContent = this._data;
    Object.values(pageConfig).forEach((val: string) => {
      if (_.isNil(val)) return;
      pageContent = pageContent[val];
    });
    return pageContent;
  }
  static async header(): Promise<CustomLayoutTypes.Header> {
    const instance = await TemplateService.getInstance();
    return {
      title: instance.data.layout.header.title,
      navItems: instance.data.layout.header.navItems,
    };
  }
  static async footer(): Promise<CustomLayoutTypes.Footer> {
    const instance = await TemplateService.getInstance();
    const creator = await UserService.getByID(instance.data.creator);
    return {
      rightHolder: creator.name,
      createdAt: instance.data.createdAt,
    };
  }

  static async getPageDetail(
    pageConfig: TemplateTypes.PageConfig = {}
  ): Promise<{
    pageDetail: ComponentTypes.Component;
    pageLayout: CustomLayoutTypes.Layout;
  }> {
    const instance = await TemplateService.getInstance();
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(
      pageConfig
    );
    const pageDetail: ComponentTypes.Component = pageContent.index;
    let pageLayout: CustomLayoutTypes.Layout = instance.data.layout;
    if (pageContent.layout) {
      pageLayout = pageContent.layout;
    }
    return {
      pageDetail,
      pageLayout,
    };
  }

  static async addPage(
    pageConfig: TemplateTypes.PageConfig = {},
    url: string
  ): Promise<void> {
    const instance = await TemplateService.getInstance();
    const pageContent: TemplateTypes.PageContent = instance.getPageContent(
      pageConfig
    );
    if (pageContent[url]) {
      throw new ExpectedError();
    }
  }
}
