import BuildTypes from './build.type'

namespace CustomComponentTypes { // eslint-disable-line
    // Component has two kind, component and container
    export enum CustomComponents {
        // container
        area = 'area', // TODO: area might be just layout
        layout = 'layout',
        // content component
        imageCollections = 'imageCollections',
        button = 'button',
        link = 'link',
    }
    export type CustomComponentType = keyof typeof CustomComponents
    export interface CustomComponentBase {
        // TODO: Need Uuid for Component, this uuid should be for customComponent template Data itself
        uuid: string
        type: CustomComponentType
        name: string
        components?: CustomComponentBase[]
        [key: string]: any
    }

    export interface CustomCompBuildingProps {
        // Building props. Building props will be exiting only when build prop is true
        // TODO: Building props may be need to be seperate and have another type like CustomBuildingComponentBase
        //      Currently, I postpone the decision.
        build?: boolean
        buildingTools?: BuildTypes.BuildingTools
    }

    // Todo: Deprecate
    export interface CustomComponentBaseProps extends CustomCompBuildingProps {
        componentData?: CustomComponentBase
    }


    export interface NewCustomComponentBaseProps extends CustomCompBuildingProps, CustomComponentBase {
    }
    export interface CustomComponentProps extends CustomComponentBaseProps {
        classes?: { [key: string]: string }
        componentData?: CustomComponentBase
    }

    export interface LinkBase {
        title: string
        href: string
    }

    export interface LinkProps extends LinkBase, NewCustomComponentBaseProps {
    }

    export interface CustomComponentListItem {
        uuid: string
        type: CustomComponentType
        name: string
    }

    export type CustomComponentList = CustomComponentListItem[]

    export type CustomStyles = object
}

export const initialCustomComponentData: CustomComponentTypes.CustomComponentBase = { uuid: '', name: '', type: CustomComponentTypes.CustomComponents.area }

export default CustomComponentTypes