import Link from 'next/link'


export interface WrappedLinkProps {
  href: string
  title: string
}

const WrappedLink: React.FC<WrappedLinkProps> = ({ href, title, children }) => {
  return (
    <Link
      href={href}
    >
      {children ? children : (<a>{title}</a>)}
    </Link>
  );
}

export default WrappedLink;
export {
  WrappedLink as Link
}