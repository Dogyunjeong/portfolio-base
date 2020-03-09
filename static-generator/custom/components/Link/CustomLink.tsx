import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "../../../components/Link";
import CustomComponentTypes from "../../../common/types/customComponent.type";

export interface CustomLinkStyleProps {
  custom: object;
}
export interface CustomLinkProps extends CustomComponentTypes.LinkProps {
  customStyles?: CustomComponentTypes.CustomStyles;
}

const useStyles = makeStyles({
    custom: (props: CustomLinkStyleProps) => ({ ...props.custom })
});

const CustomLink: React.SFC<CustomLinkProps> = ({
  customStyles = {},
  title,
  href,
  ...others
}) => {
  const classes = useStyles({ custom: customStyles });
  return (
    <Link
      className={classes.custom}
      title={title}
      href={href}
      {...others}
    />
  );
};

export default CustomLink;
