import React from 'react'
import Button from './Button'
import { makeStyles } from '@material-ui/core/styles';

export interface CustomButtonProps {
    customStyles?: Object
    onClick: React.MouseEventHandler<Element>
}
const useStyles = makeStyles({
    custom: (props: any) => ({ ...props })
})
const CustomButton: React.SFC<CustomButtonProps> = ({ customStyles = { custom: {}}, ...others }) => {
    const classes = useStyles(customStyles)
    return (<Button className={classes.custom} {...others} />)
}
 
export default CustomButton;