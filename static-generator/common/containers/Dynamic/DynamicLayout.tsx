import React from 'react';
import CustomLayoutTypes from '../../types/customLayout.type'

import Portfolio from '../../../custom/layouts/portfolio'


const DynamicPortfolio: React.FC<CustomLayoutTypes.Layout> = (layoutData) => {
  switch (layoutData.uuid) {
    case 'portfolio': return <Portfolio {...layoutData} />
    default:
      return (<></>)
  }
}

export default DynamicPortfolio;