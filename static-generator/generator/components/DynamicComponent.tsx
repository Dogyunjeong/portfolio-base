
import _ from '../utilities/lodash.util'
import ComponentTypes from '../types/component.type'

import Loading from './Loading'
import * as Portfolio from './Portfolio'

// export interface DynamicComponentProps {
//   firstCol?: string
//   firstItem?: string
//   secondCol?: string
//   secondItem?: string
//   thirdCol?: string
//   thirdItem?: string
// }

export interface DynamicComponentProps {
  componentData: ComponentTypes.Component
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ componentData }) => {
  if (_.isNil(componentData)) return <Loading />
  switch (componentData.uuid) {
    case 'portfolio-collection': return <Portfolio.Collections images={componentData.images} />
    default: return <Loading />
  }
}

export default DynamicComponent;