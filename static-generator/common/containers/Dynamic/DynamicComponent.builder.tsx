import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'
import DynamicComponent from './DynamicComponent'
import ModifyComponent from '../BuildingTools/ModifyComponent'

export interface DynamicComponentBuilderProps extends CustomComponentTypes.CustomComponentProps {
}

const DynamicComponentBuilder: React.FC<DynamicComponentBuilderProps> = (props) => {
  if (!props.build) {
    return <DynamicComponent {...props} />
  }
  return (
    <ModifyComponent>
      <DynamicComponent {...props} />
    </ModifyComponent>
  )
}

export default DynamicComponentBuilder;