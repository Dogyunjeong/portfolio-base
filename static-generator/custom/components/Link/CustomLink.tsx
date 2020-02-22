import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from '../../../components/Link'

const useStyles = makeStyles({
    custom: (props: CustomLinkStyleProps) => ({ ...props.custom })
})

export interface CustomLinkStyleProps {
    custom: object
}
export interface CustomLinkProps {
    customStyles?: CustomLinkStyleProps
    title: string
    href: string
}
 
const CustomLink: React.SFC<CustomLinkProps> = ({ customStyles = { custom: {}}, ...others }) => {
    const classes = useStyles(customStyles)
    return (<Link className={classes.custom} {...others} />);
}
 
export default CustomLink;