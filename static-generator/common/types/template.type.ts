import CustomLayoutTypes, { initialLayoutData } from './customLayout.type'
import CustomComponentTypes, { initialCustomComponentData } from './customComponent.type'

declare namespace TemplateTypes { // eslint-disable-line
  export interface PageContent {
    uuid: string
    path: string
    components: CustomComponentTypes.CustomComponentBase[]
    layout?: CustomLayoutTypes.Layout
    pages?: PageContent[]
  }

  export interface TemplateV01 {
    version: number,
    creator: string,
    createdAt: string
    updatedAt: string
    layout: CustomLayoutTypes.Layout
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
    components: CustomComponentTypes.CustomComponentBase[]
    layout: CustomLayoutTypes.Layout
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
  components: [initialCustomComponentData],
  layout: initialLayoutData
}

export default TemplateTypes