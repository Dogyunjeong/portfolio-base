import * as React from 'react'

import GeneratorHolder from '../GeneratorHolder/GeneratorHolder'
import test from './test'
export interface BuilderProps {
}

const Builder: React.FC<BuilderProps> = () => {
  return (
    <div>
      <GeneratorHolder
        pageConfig={{}}
      />
      hellow
      {test.test}
    </div>
  )
}

export default Builder;