import * as React from 'react';
import CustomLayoutTypes from '../../../common/types/customLayout.type'

const Footer: React.FC<CustomLayoutTypes.FooterProps> = ({ footerData }) => {
  return (
    <footer>
      <p>
        Copy right
        <span>@{!footerData.createdAt ? '2019' : new Date(footerData.createdAt).getFullYear()}</span>
        by
        <span>{footerData.rightHolder}</span>
      </p>
      <p>
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
export { Footer }
