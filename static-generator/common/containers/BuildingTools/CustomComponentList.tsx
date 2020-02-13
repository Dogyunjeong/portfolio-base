import React, { useState } from 'react'
import CustomComopnentType from '../../types/customComponent.type'
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
    componentList: CustomComopnentType.CustomComponentList,
    onSelect?: Function
) => {
    const formattedList = _.memoize((list: CustomComopnentType.CustomComponentList) => {
        return list.map((item) => ({
            primary: item.name,
            onClick: onSelect ? () => onSelect(item.uuid) : undefined
        }))
    })(componentList)
    return formattedList
}

export interface CustomComponentListProps {
    onSelect?: (componentUuid: CustomComopnentType.CustomComponentBase) => void
}
 
const CustomComponentList: React.SFC<CustomComponentListProps> = (props) => {
    const [type, setType] = useState('')
    const customComponentTypes = useCustomComponentTypes()
    const customComponentList = useCustomComponentList({ type })
    const handleSelectType = (type: string) => setType(type)
    const handleSelectComponent = props.onSelect
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