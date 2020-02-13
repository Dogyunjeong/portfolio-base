import React from 'react';
import CustomLayoutTypes from '../../types/customLayout.type'

import Portfolio from '../../../custom/layouts/portfolio'


const DynamicLayoutBuilder: React.FC<CustomLayoutTypes.LayoutProps> = (props) => {
  switch (props.layoutData.uuid) {
    case 'portfolio': return <Portfolio {...props} />
    default:
      return (<></>)
  }
}

export default DynamicLayoutBuilder;