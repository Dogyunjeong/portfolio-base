import React from 'react'
import DynamicPageBuilder from '../../common/containers/Dynamic/DynamicPage.builder'

import TemplateTypes from '../../common/types/template.type'

export interface GeneratorHolderProps {
  pageConfig: TemplateTypes.PageConfig
}

const GeneratorHolder: React.FC<GeneratorHolderProps> = (props) => {
  return (
    <DynamicPageBuilder
      pageConfig={props.pageConfig}
    />
  )
}

export default GeneratorHolder