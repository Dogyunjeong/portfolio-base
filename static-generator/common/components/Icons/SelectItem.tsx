import * as React from 'react';
import {
  Collections,
} from './MIcons'

export const SelectItem: React.FC<{ iconName: string }> = ({ iconName }) => {
  let Icon = <></>
  switch (iconName) {
    case 'Collections':
      Icon = <Collections />
      break
  }
  return Icon
}

export default SelectItem