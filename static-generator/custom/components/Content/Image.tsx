import React from 'react';
import CustomComponentTypes from "../../../common/types/customComponent.type";
import { useStyles } from '../../../common/hooks/styles.hook'
import { setSrc } from '../../../common/utilities/common.util'

export interface ImageComponent extends CustomComponentTypes.CustomComponentBase {
  src: string, alt: string
}

export interface ImageProps extends CustomComponentTypes.CustomComponentBaseProps {
  src: string
  alt: string
  componentData: ImageComponent
}

const Image: React.SFC<ImageProps> = ({ classes = {}, componentData }) => {
  const { src, alt, customStyles } = componentData
  const customClasses = useStyles(customStyles)
  return (
    <div className={[classes.root, customClasses.img].join(' ')}>
      <img src={setSrc(src)} alt={alt} />
    </div>
  )
}

export default Image