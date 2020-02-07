import React from 'react';
import LayoutTypes from '../../../common/types/layout.type'
import LeftDrawer from '../../../common/components/Layouts/LeftDrawer'


const Header: React.FC<LayoutTypes.Header> = ({ title, navItems }) => {
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
