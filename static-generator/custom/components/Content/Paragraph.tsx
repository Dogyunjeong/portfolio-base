import React from 'react';
import CustomComponentTypes from "../../../common/types/customComponent.type";
import { useStyles } from '../../../common/hooks/styles.hook'

export interface ParagraphComponent extends CustomComponentTypes.CustomComponentBase {
  paragraph: string
}

export interface ParagraphProps extends CustomComponentTypes.CustomComponentBaseProps {
  src: string
  alt: string
  componentData: ParagraphComponent
}

const Paragraph: React.SFC<ParagraphProps> = ({ classes = {}, componentData }) => {
  const { paragraph, customStyles } = componentData
  const customClasses = useStyles(customStyles)
  return (
    <p className={[classes.root, customClasses.root].join(' ')}>{paragraph}</p>
  )
}

export default Paragraph