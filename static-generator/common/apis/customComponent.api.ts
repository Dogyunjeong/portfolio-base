import CustomComponentTypes from '../types/customComponent.type'

const defaultList: CustomComponentTypes.CustomComponentList = [
    {
        uuid: 'custom-link',
        type: 'link',
        name: 'CustomLink',
    }
]

export default class CustomComponentApi {
    static async listType (): Promise<CustomComponentTypes.CustomComponentType[]> {
        const types: CustomComponentTypes.CustomComponentType[] = ['button', 'link']
        return types
    }

    static async listByType (type: string): Promise<CustomComponentTypes.CustomComponentList> {
        return defaultList.filter((item) => item.type === type)
            .map(({ uuid, type, name  }) => ({ uuid, type, name }))
    }
}