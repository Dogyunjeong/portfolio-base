import React from 'react'
import PortfolioTypes from '../../../common/types/portfolio.type'

import { FGrid } from '../../../common/components/Layouts'

const PortfolioCollections: React.FC<PortfolioTypes.PortfolioCollectionsProps> = ({
  componentData
}) => {
  const { images } = componentData
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
