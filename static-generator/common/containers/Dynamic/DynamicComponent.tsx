import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'

import Loading from '../../components/Loading'
import * as Portfolio from '../../../custom/components/Portfolio'

export interface DynamicComponentProps extends CustomComponentTypes.CustomComponentProps {
}

const DynamicComponent: React.FC<DynamicComponentProps> = (props) => {
  if (_.isNil(props.componentData)) return <Loading />
  switch (props.componentData.uuid) {
    case 'portfolio-collection': return <Portfolio.Collections {...props as any} />
    default: return <Loading />
  }
}

export default DynamicComponent;