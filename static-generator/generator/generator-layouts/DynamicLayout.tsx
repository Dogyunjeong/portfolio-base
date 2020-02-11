import React from 'react';
import CustomLayoutTypes from '../common/types/customLayout.type'

import Portfolio from './portfolio'


const DynamicPortfolio: React.FC<CustomLayoutTypes.Layout> = (layoutData) => {
  switch (layoutData.uuid) {
    case 'portfolio': return <Portfolio {...layoutData} />
    default:
      return (<></>)
  }
}

export default DynamicPortfolio;