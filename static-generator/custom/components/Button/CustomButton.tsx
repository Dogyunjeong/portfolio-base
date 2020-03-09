import React from 'react';
import Button from '../../../common/components/Button/Button';
import { makeStyles } from '@material-ui/core/styles';

export interface CustomButtonProps extends React.DOMAttributes<Element> {
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