import LayoutTypes from '../types/layout.type'

import Portfolio from './portfolio'

export interface DynamicPortfolioProps extends LayoutTypes.layoutProps{
  uuid: string
}

const DynamicPortfolio: React.FC<DynamicPortfolioProps> = ({
  uuid,
  ...others
}) => {
  switch (uuid) {
    case 'portfolio': return <Portfolio {...others} />
    default:
      return (<></>)
  }
}

export default DynamicPortfolio;