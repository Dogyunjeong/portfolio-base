import { useState, useEffect } from 'react'
import CustomComopnentType from '../types/customComponent.type'
import CustomComponentService from '../services/customComponent.service'

export const useCustomComponentTypes = () => {
    const [customComponentTypes, setCustomComponentTypes] = useState<CustomComopnentType.CustomComponentType[]>([])
    useEffect(() => {
        (async () => {
            const types = await CustomComponentService.getTypes()
            setCustomComponentTypes(types)
        })()
    }, [])
    return customComponentTypes
}

export interface customComponentListParam {
    type: string,
    include?: string[],
}
export const useCustomComponentList = ({ type, include}: customComponentListParam) => {
    const [customComponentList, setCustomComponentList] = useState<CustomComopnentType.CustomComponentList>([])
    useEffect(() => {
        (async () => {
            let list = await CustomComponentService.listByType(type)
            if (include) {
                list = list.filter((item) => include.includes(item.uuid))
            }
            setCustomComponentList(list)
        })()
    }, [])
    return customComponentList
}
