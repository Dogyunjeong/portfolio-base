// TODO: remove component types and using customComponent types
namespace ComponentTypes { // eslint-disable-line
  export enum ComponentEnum {
    Loading = 'Loading',
    ImageCollections = 'ImageCollections',
    Layout = 'Layout',
  }
  export type ComponentType = keyof typeof ComponentEnum
  export interface ComponentBase {
    uuid: string
    type: ComponentType
    [key: string]: any
  }
  export interface Image {
    label?: string
    src: string
  }
  export interface ImageCollections extends ComponentBase {
    images: Image[]
  }

  export type Component = ComponentBase | ImageCollections
}

export const initialComponentData: ComponentTypes.ComponentBase = { uuid: '', type: 'Loading'}

export default ComponentTypes
