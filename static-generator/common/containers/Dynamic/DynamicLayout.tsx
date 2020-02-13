import React from 'react';
import CustomLayoutTypes from '../../types/customLayout.type'

import Portfolio from '../../../custom/layouts/portfolio'


const DynamicLayout: React.FC<CustomLayoutTypes.LayoutProps> = (props) => {
console.log("TCL: props", props)
  switch (props.layoutData.uuid) {
    case 'portfolio': return <Portfolio {...props} />
    default:
      return (<></>)
  }
}

export default DynamicLayout;