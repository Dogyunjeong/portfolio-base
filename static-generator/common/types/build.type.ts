import React from 'react'
import { AddComponentProps } from '../containers/BuildingTools/AddComponent'

namespace BuildTypes { // eslint-disable-line
    export interface BuildingTools {
        AddComponent: React.SFC<AddComponentProps>
    }
}

export default BuildTypes