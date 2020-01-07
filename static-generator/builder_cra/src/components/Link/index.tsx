import * as React from 'react';
import { Link } from "react-router-dom";
export interface WrappedLinkProps {
  href: string
  title: string
}

const WrappedLink: React.SFC<WrappedLinkProps> = ({ href, title }) => {
  return (<Link to={href}>{title}</Link>);
}

export default WrappedLink;