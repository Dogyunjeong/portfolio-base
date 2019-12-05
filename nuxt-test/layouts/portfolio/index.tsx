import React from 'react';
import { FGrid } from '@components/layouts/FGrid'

export interface PortfolioProps {

}

const Portfolio: React.FC<PortfolioProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
}

export default Portfolio;