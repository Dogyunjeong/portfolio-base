import React, { useEffect } from 'react';
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import { useStyles } from '../../../common/hooks/styles.hook'


const Header: React.FC<CustomLayoutTypes.HeaderProps> = ({ children, headerData, left, right, fixedNav }) => {
  const customClasses = useStyles({
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }
  })
  useEffect(() => {
    document.title = headerData.title || ''
  }, [headerData.title])
  return (
    <header className={customClasses.header}>
      {!fixedNav && left}
      {/* {children || headerData.title} */}
      {right}
    </header>
  );
}

export default Header;
export { Header }
