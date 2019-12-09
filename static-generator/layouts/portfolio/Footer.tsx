import LayoutTypes from '../../types/layout.type'

const Footer: React.FC<LayoutTypes.footer> = ({ rightHolder, createdAt }) => {
  return (
    <footer>
      <p>
        Copy right
        <span>@{!createdAt ? '2019' : new Date(createdAt).getFullYear()}</span>
        by
        <span>{rightHolder}</span>
      </p>
      <p>
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
export { Footer }
