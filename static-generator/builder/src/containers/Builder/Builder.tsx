import React from 'react'

import TemplateTypes from '../../common/types/template.type'
import { usePageConfig } from '../../common/hooks/template.hook'
import { FGrid } from '../../common/components/Layouts'
import GeneratorHolder from '../GeneratorHolder/GeneratorHolder'
import PageBuilder from './PageBuilder'

export interface BuilderProps {
}

const Builder: React.FC<BuilderProps> = () => {
  const pageConfig: TemplateTypes.PageConfig = usePageConfig()
  return (
    <FGrid container>
      <FGrid item xs={12}>
        <GeneratorHolder
          pageConfig={pageConfig}
        />
      </FGrid>
    </FGrid>
  )
  // return (
  //   <FGrid container>
  //     <FGrid item xs={8}>
  //       <GeneratorHolder
  //         pageConfig={pageConfig}
  //       />
  //     </FGrid>
  //     <FGrid item xs={4}>
  //       <PageBuilder />
  //     </FGrid>
  //   </FGrid>
  // )
}

export default Builder;