import React, { useState } from 'react'
import { useStyles } from '../../hooks/styles.hook'


const styles = {
    compBorder: {
        border: '1px solid blue',
    }
}

export interface ModifyComponentProps {
}
 
const ModifyComponent: React.SFC<ModifyComponentProps> = ({
    children,
}) => {
    const classes = useStyles(styles)
    const [showComponentBorder, setShowComponentBorder] = useState(false)
    const toggleShowBoarder = (event: React.MouseEvent) => {
        event.stopPropagation()
        console.log('test')
        setShowComponentBorder(!showComponentBorder)
    }
    return (
        <>
            <div
                className={`${showComponentBorder ? classes.compBorder : ''}`}
                onMouseEnter={toggleShowBoarder}
                onMouseLeave={toggleShowBoarder}
            >
                {children}
            </div>
        </>
    )
}
 
export default ModifyComponent;