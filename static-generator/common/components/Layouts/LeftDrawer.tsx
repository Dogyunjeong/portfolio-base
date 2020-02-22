
import * as React from 'react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CustomComponentTypes from '../../types/customComponent.type'
import CustomLayoutTypes from '../../types/customLayout.type'
import CustomLink from '../../../custom/components/Link/CustomLink'
import Button from '../../../common/components/Button/Button'
import { SelectItem } from '../Icons'


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

interface SideListProps extends CustomComponentTypes.CustomComponentProps {
  onClose: () => void,
  navItems?: CustomLayoutTypes.NavItems,
}
const SideList: React.FC<SideListProps> = ({
  onClose, navItems = [], build, buildingTools
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {navItems.map((navItem) => (
          <ListItem button key={navItem.to} >
            <ListItemIcon><SelectItem iconName={navItem.icon} /></ListItemIcon>
            <ListItemText>
              <CustomLink href={navItem.to} title={navItem.label} />
            </ListItemText>
          </ListItem>
        ))}
        {build && buildingTools?.AddComponent && <buildingTools.AddComponent includes={{
          link: ['custom-link'],
        }}/>}
      </List>
    </div>
  );
}

interface LeftDrawerProps extends CustomComponentTypes.CustomComponentProps {
  navItems?: CustomLayoutTypes.NavItems
}

const LeftDrawer: React.FC<LeftDrawerProps> = ({ navItems = [], build, buildingTools }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const toggleDrawer = (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setIsOpenDrawer(!isOpenDrawer);
  };

  const handleOpen = () => setIsOpenDrawer(true)
  const handleClose = () => setIsOpenDrawer(false)

  return (
    <div>
      <Button onClick={toggleDrawer}>Open Left</Button>
      <SwipeableDrawer
        open={isOpenDrawer}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <SideList
          onClose={handleClose}
          navItems={navItems}
          build={build}
          buildingTools={buildingTools}
        />
      </SwipeableDrawer>
    </div>
  );
}

export default LeftDrawer
export {
  LeftDrawer,
}
