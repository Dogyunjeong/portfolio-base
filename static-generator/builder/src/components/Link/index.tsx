import * as React from 'react'
import { Link } from 'react-router-dom'
import { BUILDER_BASE } from '../../configs/domain.config'
export interface WrappedLinkProps {
  className?: string
  to?: string
  href?: string
  title: string
}

const WrappedLink: React.SFC<WrappedLinkProps> = ({ to, href, title, className }) => {
  return (
    <Link
      className={className}
      to={to || `${BUILDER_BASE}${href}`}
    >{title}</Link>
  );
}

export default WrappedLink;
export {
  WrappedLink as Link,
}