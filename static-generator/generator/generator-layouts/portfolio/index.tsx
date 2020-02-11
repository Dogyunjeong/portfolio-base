import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import CustomLayoutTypes from '../../common/types/customLayout.type'

interface PortfolioProps extends CustomLayoutTypes.Layout {
}

const Portfolio: React.FC<PortfolioProps> = ({ header = {}, children, footer = {} }) => {
  return (
    <>
      <Header
        navItems={header.navItems}
        title={header.title}
      />
      <main>
        {children}
      </main>
      <Footer
        rightHolder={footer.rightHolder}
        createdAt={footer.createdAt}
      />
    </>
  );
}

export default Portfolio;
export {
  Portfolio
}