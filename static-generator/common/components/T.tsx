import React from 'react'
import { Trans } from 'react-i18next'

export interface TProps {

}

const T: React.SFC<TProps> = ({ children }) => {
  return (<Trans>{children}</Trans>)
}

export default T