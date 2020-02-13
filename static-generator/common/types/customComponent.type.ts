import BuildTypes from './build.type'

namespace CustomComponentTypes { // eslint-disable-line
    // Component has two kind, component and container
    export enum CustomComponents {
        // container
        area = 'area', // TODO: area might be just layout
        layout = 'layout',
        // component
        imageCollections = 'imageCollections',
        button = 'button',
        link = 'link',
    }
    export type CustomComponentType = keyof typeof CustomComponents
    export interface CustomComponentBase {
        uuid: string
        type: CustomComponentType
        name: string
        components?: CustomComponentBase[]
        [key: string]: any
    }

    export interface CustomComponentBaseProps {
        // Building props. Building props will be exiting only when build prop is true
        // TODO: Building props may be need to be seperate and have another type like CustomBuildingComponentBase
        //      Currently, I postpone the decision.
        build?: boolean
        buildingTools?: BuildTypes.BuildingTools
    }

    export interface CustomComponentProps extends CustomComponentBaseProps {
        componentData?: CustomComponentBase
    }

    export interface CustomComponentListItem {
        uuid: string
        type: CustomComponentType
        name: string
    }
    export type CustomComponentList = CustomComponentListItem[]
}

export const initialCustomComponentData: CustomComponentTypes.CustomComponentBase = { uuid: '', name: '', type: CustomComponentTypes.CustomComponents.area }

export default CustomComponentTypes