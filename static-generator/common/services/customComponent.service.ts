import CustomComponentTypes from '../types/customComponent.type'
import CustomComponentApi from '../apis/customComponent.api'

export default class CustomComponentService {
    private static instance: CustomComponentService
    private _types: CustomComponentTypes.CustomComponentType[]
    private _list: {
        [key: string]: CustomComponentTypes.CustomComponentList
    }

    private constructor () {
        this._list = {}
        this._types = []
    }

    static async getInstance () {
      if (!CustomComponentService.instance) {
        CustomComponentService.instance = new CustomComponentService()
      }
      return CustomComponentService.instance
    }

    static async getTypes (): Promise<CustomComponentTypes.CustomComponentType[]> {
        const instance = await CustomComponentService.getInstance()
        if (!instance._types) {
            instance._types = await CustomComponentApi.listType()
        }
        return instance._types
    }

    static async listByType (type: string): Promise<CustomComponentTypes.CustomComponentList> {
        const instance = await CustomComponentService.getInstance()
        if (!instance._list[type]) {
            instance._list[type] = await CustomComponentApi.listByType(type)
        }
        return instance._list[type]
    }
}
