import React from 'react'
import PortfolioTypes from '../../common/types/portfolio.type'

import { FGrid } from '../Layouts'

const PortfolioCollections: React.FC<PortfolioTypes.PortfolioCollectionsProps> = ({
  images = []
}) => {
  return (
    <FGrid container>
      {images.map((img, idx) => (
        <img src={img.src} alt={img.label} key={`portfolio-image-${idx}--${img.label}`}/>
      ))}
    </FGrid>
  );
}

export default PortfolioCollections;
export { PortfolioCollections }
