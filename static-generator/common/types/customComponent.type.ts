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

    export interface CustomComponentListItem {
        uuid: string
        type: CustomComponentType
        name: string
    }
    export type CustomComponentList = CustomComponentListItem[]
}

export const initialCustomComponentData: CustomComponentTypes.CustomComponentBase = { uuid: '', name: '', type: CustomComponentTypes.CustomComponents.area }

export default CustomComponentTypes