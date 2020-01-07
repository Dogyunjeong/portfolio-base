import * as React from 'react'

import Default from './Default'

export interface DynamicLayoutBuilderProps {

}

const DynamicLayoutBuilder: React.SFC<DynamicLayoutBuilderProps> = (props) => {
  return (
    <Default {...props} />
  )
}

export default DynamicLayoutBuilder;