import React, { useState } from 'react'
import CustomComopnentType from '../../types/customComponent.type'
import { useStyles } from '../../hooks/styles.hook'
import DynamicComponent from '../Dynamic/DynamicComponent'

import CustomComponentList from './CustomComponentList'

const baseStyle = {
    dimBackground: {
        backgroundColor: '#eee',
        width: '100vh',
        height: '100vw',
    },
    addingComponent: {
        backgroundColor: 'white',
        width: '300px',
        height: '100px',
    }
}

export interface AddComponentProps {
    
}

// TODO: improve UI with hover button with + icon
const AddComponent: React.SFC<AddComponentProps> = ({
    children
}) => {
    const classes = useStyles(baseStyle)
    const [isAddingComponent, setAddingComponent] = useState(false)
    const [selecteComponentData, setComponentData] = useState<CustomComopnentType.CustomComponentBase | null>(null)
    const toggleAdding = () => setAddingComponent(true)
    const handleSelectComponenet = (componentData: CustomComopnentType.CustomComponentBase) => setComponentData(componentData)
    return (
        <>
            {isAddingComponent && (
                <>
                    <div className={classes.dimBackground} />
                    <div className={classes.addingComponent}>
                        {selecteComponentData
                            ? <DynamicComponent componentData={selecteComponentData} />
                            : 'Component Area'}
                    </div>
                    <CustomComponentList onSelect={handleSelectComponenet}/>
                </>
            )}
            <div>{children}</div>
            <button onClick={toggleAdding}>Add Component</button>
        </>
    )
}
 
export default AddComponent;