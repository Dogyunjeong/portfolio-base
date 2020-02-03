import * as React from 'react'

import { FGrid } from '../../common/components/Layouts'
import GeneratorHolder from '../GeneratorHolder/GeneratorHolder'
import PageBuilder from './PageBuilder'
import test from './test'
export interface BuilderProps {
}

const Builder: React.FC<BuilderProps> = () => {
  return (
    <FGrid container>
      <FGrid item xs={8}>
        <GeneratorHolder
          pageConfig={{}}
        />
      </FGrid>
      <FGrid item xs={4}>
        <PageBuilder />
      </FGrid>
    </FGrid>
  )
}

export default Builder;