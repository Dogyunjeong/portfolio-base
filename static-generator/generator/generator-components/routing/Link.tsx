import React from 'react'
import Link from 'next/link'


export interface WrappedLinkProps {
  href: string
  title: string
}

const WrappedLink: React.FC<WrappedLinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
    >
      <a>{title}</a>
    </Link>
  );
}

export default WrappedLink;
export {
  WrappedLink as Link
}