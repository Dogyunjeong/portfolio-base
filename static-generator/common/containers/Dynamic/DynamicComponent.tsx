import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'

import Loading from '../../components/Loading'
import * as Portfolio from '../../../custom/components/Portfolio'

export interface DynamicComponentProps {
  componentData: CustomComponentTypes.CustomComponentBase
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ componentData }) => {
  if (_.isNil(componentData)) return <Loading />
  switch (componentData.uuid) {
    case 'portfolio-collection': return <Portfolio.Collections images={componentData.images} />
    default: return <Loading />
  }
}

export default DynamicComponent;