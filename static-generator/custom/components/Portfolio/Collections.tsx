import React from "react";
import PortfolioTypes from "../../../common/types/portfolio.type";

import { useStyles } from "../../../common/hooks/styles.hook";
import { setSrc } from "../../../common/utilities/common.util";
import { FGrid } from "../../../common/components/Layouts";

const PortfolioCollections: React.FC<PortfolioTypes.PortfolioCollectionsProps> = ({
  componentData
}) => {
  const { images, customStyles } = componentData;
  const classes = useStyles(customStyles);
  return (
    <FGrid container className={classes.imageWrapper}>
      testImageholder
      {images.map((img, idx) => (
        <img
          className={classes.image}
          src={setSrc(img.src)}
          alt={img.label}
          key={`portfolio-image-${idx}--${img.label}`}
        />
      ))}
    </FGrid>
  );
};

export default PortfolioCollections;
export { PortfolioCollections };
