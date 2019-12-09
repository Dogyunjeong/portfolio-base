import {
  Collections as MCollections,
  Info as MInfo,
} from '@material-ui/icons';
import * as MIcons from '@material-ui/icons';

export const Collections = MCollections
export const Info = MInfo

export const SelectItem: React.FC<{ iconName: string }> = ({ iconName }) => {
  let Icon = <></>
  switch (iconName) {
    case 'Collections':
      Icon = <Collections />
      break
  }
  return Icon
}

export default MIcons