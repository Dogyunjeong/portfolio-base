import React from 'react';
import CustomComponentTypes from "../../../common/types/customComponent.type";
import { useStyles } from '../../../common/hooks/styles.hook'
import { setSrc } from '../../../common/utilities/common.util'
import _ from '../../../common/utilities/lodash.util';
import DynamicComponent from '../../../common/containers/Dynamic/DynamicComponent';


export interface WrapperProps extends CustomComponentTypes.CustomComponentBaseProps {
}

// TODO: remove as any after restructure component baseProps type
const Wrapper: React.SFC<WrapperProps> = ({ classes = {} as any, componentData = {} as any, children }) => {
  const customClasses = useStyles(componentData.customStyles)
  return (
    <div className={[classes.root, customClasses.root].join(' ')}>
      {_.map(componentData.components, (component, idx) => (
        <DynamicComponent
          classes={{ root: classes.child }}
          key={`component-wrapper-child-${idx}`}
          componentData={component}
        />
      ))}
    </div>
  )
}

export default Wrapper