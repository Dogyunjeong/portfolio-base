import LayoutTypes from './layout.type'

namespace TemplateTypes {
  export interface Layout {
    uuid: string
    header: LayoutTypes.header
  }
  export interface PageContent {
    uuid: string
    [key: string]: any
  }

  export interface TemplateV01 {
    version: number,
    creator: string,
    createdAt: string
    updatedAt: string
    layout: Layout
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
}

export default TemplateTypes