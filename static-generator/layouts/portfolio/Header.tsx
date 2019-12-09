import React from 'react';
import LayoutTypes from '../../types/layout.type'

import LeftDrawer from '../../components/layouts/LeftDrawer'

export interface HeaderProps {
  title?: string
  navItems?: LayoutTypes.navItems
}

const Header: React.FC<HeaderProps> = ({ title, navItems }) => {
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
