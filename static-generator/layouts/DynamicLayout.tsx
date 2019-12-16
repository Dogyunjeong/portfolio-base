import LayoutTypes from '../types/layout.type'

import Portfolio from './portfolio'


const DynamicPortfolio: React.FC<LayoutTypes.Layout> = (layoutData) => {
  switch (layoutData.uuid) {
    case 'portfolio': return <Portfolio {...layoutData} />
    default:
      return (<></>)
  }
}

export default DynamicPortfolio;