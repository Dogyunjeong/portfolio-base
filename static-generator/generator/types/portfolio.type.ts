declare namespace PortfolioTypes { // eslint-disable-line
  export interface Image {
    label?: string
    src: string
  }
  export interface PortfolioCollectionsProps {
    images: Image[]
  }
}

export default PortfolioTypes
