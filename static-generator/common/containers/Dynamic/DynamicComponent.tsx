import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'

import Loading from '../../components/Loading'
import * as Portfolio from '../../../custom/components/Portfolio'
import SvgLink from '../../../custom/components/Link/SvgLink'

export interface DynamicComponentProps extends CustomComponentTypes.CustomComponentProps {
}

// TODO: fix prop validation between custom component base types and each component prop definition
const DynamicComponent: React.FC<DynamicComponentProps> = (props: any) => {
  if (_.isNil(props.componentData)) return <Loading />
  switch (props.componentData.uuid) {
    case 'portfolio-collection': return <Portfolio.Collections {...props as any} />
    case 'link-svg': return <SvgLink {...props} />
    default: return <Loading />
  }
}

export default DynamicComponent;