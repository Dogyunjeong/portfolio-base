import React from "react";

import { Link } from "../../../components/Link";
import CustomComponentTypes from "../../../common/types/customComponent.type";
import { useStyles } from '../../../common/hooks/styles.hook'

export interface CustomLinkProps extends CustomComponentTypes.LinkProps {
  customStyles?: CustomComponentTypes.CustomStyles;
}
const CustomLink: React.SFC<CustomLinkProps> = ({
  customStyles = {},
  title,
  href,
  ...others
}) => {
  const classes = useStyles(customStyles);
  return (
    <Link
      className={classes.root}
      title={title}
      href={href}
      {...others}
    />
  );
};

export default CustomLink;
