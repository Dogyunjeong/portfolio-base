import React from 'react';
import CustomLayoutTypes from '../../../common/types/customLayout.type'


const Header: React.FC<CustomLayoutTypes.HeaderProps> = ({ children, headerData, left, right }) => {
  return (
    <header>
      {left}
      {children || headerData.title}
      {right}
    </header>
  );
}

export default Header;
export { Header }
