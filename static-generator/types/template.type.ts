import LayoutTypes from './layout.type'
import ComponentTypes from './component.type'

namespace TemplateTypes {
  export interface PageContent {
    uuid: string
    type: string
    [key: string]: any
  }

  export interface TemplateV01 {
    version: number,
    creator: string,
    createdAt: string
    updatedAt: string
    layout: LayoutTypes.Layout
    index: PageContent,
    [key: string]: any
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
}

export default TemplateTypes