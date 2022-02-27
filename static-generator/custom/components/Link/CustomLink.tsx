import React from "react";

import CustomComponentTypes from "../../../common/types/customComponent.type";
import { useStyles } from "../../../common/hooks/styles.hook";

export interface CustomLinkProps extends CustomComponentTypes.LinkProps {}
const CustomLink: React.SFC<CustomLinkProps> = ({
  classes,
  componentData: { href, label, customStyles },
}) => {
  const customClasses = useStyles(customStyles);
  return (
    <a className={customClasses.root} href={href}>
      {label}
    </a>
  );
};

export default CustomLink;
