import React from 'react'

import MListItem from '@material-ui/core/ListItem'
import MListItemIcon from '@material-ui/core/ListItemIcon'
import MListItemText from '@material-ui/core/ListItemText'
import MListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

import _ from '../../utilities/lodash.util'

import { ExpandLess, ExpandMore } from '../Icons'

export interface ListItemProps {
  className?: string
  icon?: React.ReactElement
  primary?: string
  secondary?: string
  secondaryAction?: React.ReactElement
  onClick?: React.MouseEventHandler<Element>
  open?: boolean
  children?: any
}

const ListItem: React.SFC<ListItemProps> = ({
  className, icon, primary, secondary, children, onClick, open, secondaryAction, ...others
}) => {
  const Item = (
    <>
      {icon && <MListItemIcon>{icon}</MListItemIcon>}
      {(primary || secondary) && <MListItemText primary={primary} secondary={secondary} />}
      {children}
      {!_.isNil(secondaryAction) && <MListItemSecondaryAction>{secondaryAction}</MListItemSecondaryAction>}
      {!_.isNil(open) && (open ? <ExpandLess /> : <ExpandMore />)}
    </>
  )
  if (!!onClick) {
    return (
      <MListItem className={className} button onClick={onClick}>
        {Item}
      </MListItem>
    )
  }
  return (
    <MListItem className={className}>
      {Item}
    </MListItem>
  );
}

export default ListItem;