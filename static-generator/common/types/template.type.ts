import LayoutTypes, { initialLayoutData } from './layout.type'
import ComponentTypes, { initialComponentData } from './component.type'

declare namespace TemplateTypes { // eslint-disable-line
  export interface PageContent {
    uuid: string
    path: string
    components: ComponentTypes.ComponentBase[]
    layout?: LayoutTypes.Layout
    pages?: PageContent[]
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

  export type PageConfigProperty = keyof PageConfig

  export interface PageDetail {
    path: string
    components: ComponentTypes.Component[]
    layout: LayoutTypes.Layout
  }
  export interface PageList {
    [key: string]: PageList
  }
}


export const PAGE_CONFIG_PROPERTY: TemplateTypes.PageConfigProperty[] = [
  'firstCol',
  'firstItem',
  'secondCol',
  'secondItem',
  'thirdCol',
  'thirdItem'
]

export const initialPageDetailData: TemplateTypes.PageDetail = {
  path: '',
  components: [initialComponentData],
  layout: initialLayoutData
}

export default TemplateTypes