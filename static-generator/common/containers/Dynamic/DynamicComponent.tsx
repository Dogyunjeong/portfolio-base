import React from 'react'
import _ from '../../utilities/lodash.util'
import CustomComponentTypes from '../../types/customComponent.type'

import Loading from '../../components/Loading'
import * as Portfolio from '../../../custom/components/Portfolio'
import SvgLink from '../../../custom/components/Link/SvgLink'
import Wrapper from '../../../custom/components/Area/Wrapper'
import Image from '../../../custom/components/Content/Image'
import Paragraph from '../../../custom/components/Content/Paragraph'
import TatiHome from '../../../custom/components/Deprecate/TatiHome'
import TatiInfo from '../../../custom/components/Deprecate/TatiInfo'
import TatiShop from '../../../custom/components/Deprecate/TatiShop'
import TatiArchive from '../../../custom/components/Deprecate/TatiArchive'

export interface DynamicComponentProps extends CustomComponentTypes.CustomComponentProps {
}

// TODO: fix prop validation between custom component base types and each component prop definition
const DynamicComponent: React.FC<DynamicComponentProps> = (props: any) => {
  if (_.isNil(props.componentData)) return <Loading />
  console.log('props.componentData.uuid: ', props.componentData.uuid);
  switch (props.componentData.uuid) {
    case 'portfolio-collection': return <Portfolio.Collections {...props} />
    case 'link-svg': return <SvgLink {...props} />
    case 'area-wrapper': return <Wrapper {...props} />
    case 'content-image': return <Image {...props} />
    case 'content-paragraph': return <Paragraph {...props} />
    case 'deprecate-tati-home': return <TatiHome {...props} />
    case 'deprecate-tati-info': return <TatiInfo {...props} />
    case 'deprecate-tati-shop': return <TatiShop {...props} />
    case 'deprecate-tati-achive': return <TatiArchive {...props} />
    default: return <Loading />
  }
}

export default DynamicComponent;