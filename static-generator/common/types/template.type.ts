import LayoutTypes from './layout.type'
import ComponentTypes from './component.type'

declare namespace TemplateTypes { // eslint-disable-line
  export interface PageContent  extends ComponentTypes.ComponentBase{
    uuid: string
    path: string
    layout?: LayoutTypes.Layout
    components: ComponentTypes.ComponentBase[]
    pages: PageContent[]
  }

  export interface TemplateV01 {
    version: number,
    creator: string,
    createdAt: string
    updatedAt: string
    layout: LayoutTypes.Layout
    index: PageContent,
    [key: string]: any | PageContent
  }

  export interface PageConfig {
    firstCol?: string
    firstItem?: string
    secondCol?: string
    secondItem?: string
    thirdCol?: string
    thirdItem?: string
  }
  export interface PageDetail {
    pageDetail: ComponentTypes.Component
    pageLayout: LayoutTypes.Layout
  }
  export interface PageList {
    [key: string]: PageList
  }
}

export default TemplateTypes