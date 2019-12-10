namespace ComponentType {
  export type ComponentType = 'ImageCollection'
  export interface Component {
    uuid: string
    type: string
    [key: string]: any
  }
  export interface Image {
    label?: string
    src: string
  }
  export interface ImageCollections extends Component {
    images: Image[]
  }
}

export default ComponentType
