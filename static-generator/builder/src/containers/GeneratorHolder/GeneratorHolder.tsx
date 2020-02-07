import React from 'react'
import DynamicPage from '../../common/containers/Dynamic/DynamicPage'

import TemplateTypes from '../../common/types/template.type'

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