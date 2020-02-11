import React, { useState } from 'react';
import LeftDrawer, { LeftDrawerProps } from './LeftDrawer'

export interface LeftDrawerBuilderProps extends LeftDrawerProps {
    
}
// TODO: redesign Layout's component structure 
//  It seems layouts is also a container which contains several component
// TODO: need to find way how to update template.ts
// TODO: basic building tools must be accesible all components => contextAPI
const LeftDrawerBuilder: React.SFC<LeftDrawerBuilderProps> = ({ ...others }) => {
    return (
        <LeftDrawer {...others} />
    )
}
 
export default LeftDrawerBuilder;