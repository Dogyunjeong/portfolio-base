import PortfolioTypes from '../../types/portfolio.type'

import { FGrid } from '../layouts'

const PortfolioCollections: React.FC<PortfolioTypes.PortfolioCollectionsProps> = ({
  images = []
}) => {
  return (
    <FGrid container>
      {images.map((img) => (
        <img src={img.src} alt={img.label} />
      ))}
    </FGrid>
  );
}

export default PortfolioCollections;
export { PortfolioCollections }
