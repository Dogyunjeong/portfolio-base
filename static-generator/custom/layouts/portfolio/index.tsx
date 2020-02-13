import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import LeftDrawer from '../../../common/components/Layouts/LeftDrawer'

interface PortfolioProps extends CustomLayoutTypes.LayoutProps {
}

const Portfolio: React.FC<PortfolioProps> = ({ layoutData, children, build, buildingTools }) => {
  return (
    <>
      <Header
        left={
          <LeftDrawer
            navItems={layoutData.header.navItems}
            build={build}
            buildingTools={buildingTools}
          />
        }
        headerData={layoutData.header}
      />
      <main>
        {children}
      </main>
      <Footer
        footerData={layoutData.footer}
      />
    </>
  );
}

export default Portfolio;
export {
  Portfolio
}