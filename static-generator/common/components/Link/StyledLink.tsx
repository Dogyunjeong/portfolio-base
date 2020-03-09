import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "../../../components/Link";
import CustomComponentTypes from "../../../common/types/customComponent.type";

export interface CustomLinkProps extends CustomComponentTypes.LinkBase, React.DOMAttributes<Element> {
  classes?: { wrapper: string };
  customStyles?: object;

}

const useStyles = makeStyles({
    custom: (props: { custom: object }) => ({ ...props.custom })
})

const CustomLink: React.SFC<CustomLinkProps> = ({
  classes = {},
  customStyles = {},
  href,
  title,
  children,
  ...others
}) => {
  const customClasses = useStyles({ custom: customStyles });
  return (
    <Link
      className={[customClasses.custom, classes.wrapper].join(' ')}
      title={title}
      href={href}
      {...others}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
