import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'

import Loading from '../../components/Loading'
import * as Portfolio from '../../../custom/components/Portfolio'

export interface DynamicComponentBuilderProps extends CustomComponentTypes.CustomComponentProps {
}

const DynamicComponentBuilder: React.FC<DynamicComponentBuilderProps> = (props) => {
  if (_.isNil(props.componentData)) return <Loading />
  switch (props.componentData.uuid) {
    // TODO: props passing must be like DynamicLayout nad DynamicLayoutBuilder
    case 'portfolio-collection': return <Portfolio.Collections {...props as any} />
    default: return <Loading />
  }
}

export default DynamicComponentBuilder;