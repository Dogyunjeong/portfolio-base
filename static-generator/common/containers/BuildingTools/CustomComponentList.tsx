import React, { useState, useEffect } from 'react'
import CustomComponentType from '../../types/customComponent.type'
import BuildTypes from '../../types/build.type'
import FGrid from '../../components/Layouts/FGrid'
import FormattedList from '../../components/List/FormattedList'
import { useCustomComponentTypes, useCustomComponentList } from '../../hooks/customComponent.hook'
import _ from '../../utilities/lodash.util'

const formatTypesForList = (customComponentTypes: string[], onSelect: Function) => {
    const formattedTypes = _.memoize((types: string[]) => {
        return types.map((type) => ({ primary: type, onClick: () => onSelect(type)}))
    })(customComponentTypes)
    return formattedTypes
}

const formatComponentList = (
    componentList: CustomComponentType.CustomComponentList,
    onSelect?: Function
) => {
    const formattedList = _.memoize((list: CustomComponentType.CustomComponentList) => {
        return list.map((item) => ({
            primary: item.name,
            onClick: onSelect ? () => onSelect(item.uuid) : undefined
        }))
    })(componentList)
    return formattedList
}

export interface CustomComponentListProps {
    includes?: BuildTypes.CustomComponentIncludes
    onSelect: (componentUuid: CustomComponentType.CustomComponentBase) => void
}
 
const CustomComponentList: React.SFC<CustomComponentListProps> = ({
    includes = {}, onSelect
}) => {
    const typeIncludes: CustomComponentType.CustomComponentType[] = Object.keys(includes) as Array<keyof typeof includes>
    const [type, setType] = useState<CustomComponentType.CustomComponentType>()
    const customComponentTypes = useCustomComponentTypes({ includes: typeIncludes })
    const customComponentList = useCustomComponentList({ type, includes: type ? includes[type] : [] })
    useEffect(() => {
        if (customComponentTypes.length === 1) {
            setType(customComponentTypes[0])
        }
    }, [customComponentTypes])
    useEffect(() => {
        if (customComponentList.length === 1) {
            onSelect(customComponentList[0])
        }
    }, [customComponentList])
    const handleSelectType = (type: CustomComponentType.CustomComponentType) => setType(type)
    const handleSelectComponent = onSelect
    return (
        <FGrid container>
            <FGrid item xs={6}>
                <FormattedList listData={formatTypesForList(customComponentTypes, handleSelectType)}/>
            </FGrid>
            {type && (
                <FGrid item xs={6}>
                    <FormattedList
                        listData={formatComponentList(customComponentList, handleSelectComponent)}
                    />
                </FGrid>
            )}
        </FGrid>
    )
}
 
export default CustomComponentList;