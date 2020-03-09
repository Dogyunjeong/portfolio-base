import React, { useState, useEffect } from "react";
import CustomComponentTypes from "../../../common/types/customComponent.type";
import StyledLink from "../../../common/components/Link/StyledLink";

const IMPORT_PATH: {[key: string]: string} = {
  ['/assets/svg/nav_item_01.svg']: require('../../../assets/svg/nav_item_01.svg'),
  ['/assets/svg/nav_item_02.svg']: require('../../../assets/svg/nav_item_02.svg'),
  ['/assets/svg/nav_item_03.svg']: require('../../../assets/svg/nav_item_03.svg'),
  ['/assets/svg/nav_item_04.svg']: require('../../../assets/svg/nav_item_04.svg'),
}

const importSvg = async (path: string) => {
  return await import(path)
}

export interface SvgLink extends CustomComponentTypes.LinkBase {
  svgSrc: string;
  hoverSvgSrc?: string;
  hoverTitle?: string
}
export interface SvgLinkProps
  extends CustomComponentTypes.LinkProps {
    componentData: SvgLink
    classes: { wrapper: string }
}

const setSrc = (src: string) => {
  if (src.startsWith('http')) {
    return src
  }
  return IMPORT_PATH[src]
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

  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <StyledLink
      classes={classes}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={!isHover ? title : (hoverTitle || title)}
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
