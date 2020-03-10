import React, { useState, MouseEvent } from "react";
import CustomComponentTypes from "../../../common/types/customComponent.type";
import StyledLink from "../../../common/components/Link/StyledLink";
import { setSrc } from '../../../common/utilities/common.util'
export interface SvgLink extends CustomComponentTypes.LinkBase {
  svgSrc: string;
  hoverSvgSrc?: string;
  hoverTitle?: string
}
export interface SvgLinkProps
  extends CustomComponentTypes.LinkProps {
    componentData: SvgLink
    classes: { root: string }
}

const SvgLink: React.SFC<SvgLinkProps> = ({
  classes,
  componentData: { svgSrc, hoverSvgSrc, href, title, hoverTitle }
}) => {
  const [isHover, setHover] = useState(false);
  if (!hoverSvgSrc && !hoverTitle) {
    return (
      <StyledLink href={href} title={title} >
        <img src={setSrc(svgSrc)} />
      </StyledLink>
    )
  }

  const handleMouseOver = (e: MouseEvent) => {
    e.stopPropagation()
    setHover(true)
  }
  const handleMouseOut = (e: MouseEvent) => {
    e.stopPropagation()
    setHover(false)
  }

  return (
    <StyledLink
      classes={classes}
      href={href}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      title={title}
    >
      {!isHover && (
        <img
          src={setSrc(svgSrc)}
          alt={title}
        />
      )}
      {isHover && (hoverSvgSrc ? (
        <img
          src={setSrc(hoverSvgSrc)}
          alt={title}
        />
      ) : hoverTitle)}
    </StyledLink>
  );
};

export default SvgLink;
