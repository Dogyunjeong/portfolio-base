import CustomComponentTypes from './customComponent.type'
declare namespace PortfolioTypes { // eslint-disable-line
  export interface Image {
    label?: string
    src: string
  }
  export interface PortfolioCollections extends CustomComponentTypes.CustomComponentBase {
    images: Image[]
  }

  export interface PortfolioCollectionsProps extends CustomComponentTypes.CustomComponentProps {
    componentData: PortfolioCollections
  }
}

export default PortfolioTypes
