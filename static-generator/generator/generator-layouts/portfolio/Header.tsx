import React from 'react';
import CustomLayoutTypes from '../../common/types/customLayout.type'

import LeftDrawer from '../../generator-components/Layouts/LeftDrawer'

const Header: React.FC<CustomLayoutTypes.Header> = ({ title, navItems }) => {
  return (
    <header>
      <LeftDrawer
        navItems={navItems}
      />
      {title}
    </header>
  );
}

export default Header;
export { Header }
