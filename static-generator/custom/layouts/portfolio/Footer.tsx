import * as React from 'react';
import LayoutTypes from '../../../common/types/layout.type'

const Footer: React.FC<LayoutTypes.Footer> = ({ rightHolder, createdAt }) => {
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
