import React from 'react'
import CustomComponentTypes from './customComponent.type'

namespace BuildTypes { // eslint-disable-line
    export type CustomComponentIncludes = {
        [key in CustomComponentTypes.CustomComponents]?: string[]
    }
    export interface AddComponentProps {
        includes?: CustomComponentIncludes
    }
    export interface BuildingTools {
        AddComponent: React.SFC<AddComponentProps>
    }
}

export default BuildTypes