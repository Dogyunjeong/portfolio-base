import CustomLayoutTypes from './customLayout.type'
import ComponentTypes from './component.type'

declare namespace TemplateTypes { // eslint-disable-line
  export interface PageContent  extends ComponentTypes.ComponentBase{
    uuid: string
    type: ComponentTypes.ComponentType
    layout?: CustomLayoutTypes.Layout
    [key: string]: any | PageContent
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
}

export default TemplateTypes