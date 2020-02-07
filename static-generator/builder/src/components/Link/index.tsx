import * as React from 'react'
import { Link } from 'react-router-dom'
import { BUILDER_BASE } from '../../common/configs/domain.config'
export interface WrappedLinkProps {
  to?: string
  href?: string
  title: string
}

const WrappedLink: React.SFC<WrappedLinkProps> = ({ to, href, title }) => {
  return (<Link to={to || `${BUILDER_BASE}${href}`}>{title}</Link>);
}

export default WrappedLink;
export {
  WrappedLink as Link,
}