namespace PortfolioTypes {
  export interface Image {
    label?: string
    src: string
  }
  export interface PortfolioCollectionsProps {
    images: Image[]
  }
}

export default PortfolioTypes
