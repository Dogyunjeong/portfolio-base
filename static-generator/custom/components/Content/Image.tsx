import React from "react";
import CustomComponentTypes from "../../../common/types/customComponent.type";
import { makeStyles, useStyles } from "../../../common/hooks/styles.hook";
import { setSrc } from "../../../common/utilities/common.util";

export interface ImageComponent
  extends CustomComponentTypes.CustomComponentBase {
  src: string;
  alt: string;
}

export interface ImageProps
  extends CustomComponentTypes.CustomComponentBaseProps {
  src: string;
  alt: string;
  componentData: ImageComponent;
}

const useBaseClasses = makeStyles({
  image: {
    width: "100%",
  },
});

const Image: React.SFC<ImageProps> = ({ classes = {}, componentData }) => {
  const { src, alt, customStyles } = componentData;
  const customClasses = useStyles(customStyles);
  const baseClasses = useBaseClasses();
  return (
    <div
      className={[baseClasses.root, classes?.root, customClasses.img].join(" ")}
    >
      <img className={baseClasses.image} src={setSrc(src)} alt={alt} />
    </div>
  );
};

export default Image;
