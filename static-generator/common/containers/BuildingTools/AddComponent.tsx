import React, { useState } from 'react'
import CustomComponentType from '../../types/customComponent.type'
import BuildTypes from '../../types/build.type'
import { useStyles } from '../../hooks/styles.hook'
import DynamicComponent from '../Dynamic/DynamicComponent'

import CustomComponentList from './CustomComponentList'

const baseStyle = {
    dimBackground: {
        position: 'fixed',
        left: '0px',
        top: '0px',
        backgroundColor: '#eee',
        opacity: 0.8,
        width: '100vw',
        height: '100vh',
        zIndex: 9000,
    },
    addingComponent: {
        backgroundColor: 'red',
        position: 'relative',
        zIndex: 9100,
    }
}

// TODO: improve UI with hover button with + icon
// TODO: What happens, if choose a customComponent container?, We need to show nested add component. somehow.
const AddComponent: React.SFC<BuildTypes.AddComponentProps> = ({
    children,
    ...listProps
}) => {
    const classes = useStyles(baseStyle)
    const [isAddingComponent, setAddingComponent] = useState(false)
    const [selectedComponentData, setComponentData] = useState<CustomComponentType.CustomComponentBase | null>(null)
    const toggleAdding = (event: React.MouseEvent) => {
        event.stopPropagation()
        setAddingComponent(true)
    }
    const handleSelectComponent = (componentData: CustomComponentType.CustomComponentBase) => {
        setComponentData(componentData)
        setAddingComponent(false)
    }
    return (
        <div className={classes.addComponent} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <div className={classes.addingComponent}>
                Test
                {selectedComponentData
                    ? <DynamicComponent build componentData={selectedComponentData} />
                    : 'Component Area'}
            </div>
            <div>{children}</div>
            {!isAddingComponent && <button onClick={toggleAdding}>Add Component</button>}
            {isAddingComponent && (
                <div className={classes.dimBackground}>
                    {/* TODO: Create positioning wrapper. Need to position component list differently Depend on called component position */}
                    <CustomComponentList onSelect={handleSelectComponent} {...listProps} />
                </div>
            )}
        </div>
    )
}

export default AddComponent;