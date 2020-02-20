import { useState, useEffect } from 'react'
import CustomComponentType from '../types/customComponent.type'
import CustomComponentService from '../services/customComponent.service'
export interface UseCustomComponentParam {
    includes?: CustomComponentType.CustomComponentType[]
}
export const useCustomComponentTypes = ({ includes }: UseCustomComponentParam) => {
    const [customComponentTypes, setCustomComponentTypes] = useState<CustomComponentType.CustomComponentType[]>([])
    useEffect(() => {
        (async () => {
            let types = await CustomComponentService.getTypes()
            if (includes && includes.length > 0) {
                types = types.filter((type) => includes.includes(type))
            }
            setCustomComponentTypes(types)
        })()
    }, [])
    return customComponentTypes
}

export interface customComponentListParam {
    type?: string,
    includes?: string[],
}
export const useCustomComponentList = ({ type, includes }: customComponentListParam) => {
    const [customComponentList, setCustomComponentList] = useState<CustomComponentType.CustomComponentList>([])
    useEffect(() => {
        (async () => {
            if (!type) {
                return []
            }
            let list = await CustomComponentService.listByType(type)
            if (includes) {
                list = list.filter((item) => includes.includes(item.uuid))
            }
            setCustomComponentList(list)
        })()
    }, [type, includes])
    return customComponentList
}

