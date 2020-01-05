import React from 'react'
import DynamicPage from '../../generator-containers/DynamicPage/DynamicPage'

import TemplateTypes from '../../types/template.type'

export interface GeneratorHolderProps {
  pageConfig: TemplateTypes.PageConfig
}

const GeneratorHolder: React.FC<GeneratorHolderProps> = (props) => {
  return (
    <DynamicPage
      pageConfig={props.pageConfig}
    />
  )
}

export default GeneratorHolder