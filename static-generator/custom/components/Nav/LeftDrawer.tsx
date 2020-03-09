import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CustomLayoutTypes from '../../../common/types/customLayout.type'
import CustomComponentTypes from '../../../common/types/customComponent.type'
import { SelectItem } from '../../../common/components/Icons'
import Link from '../../../components/Link'
import CustomButton from '../../../custom/components/Button/CustomButton'


// TODO: this make styles should be wrapped
//   something like custom hooks
// TODO: need to find way how to update each components styles and update on template.ts
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

interface SideListProps extends CustomComponentTypes.CustomCompBuildingProps {
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
              <Link href={navItem.to} title={navItem.label} />
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

export interface LeftDrawerProps extends CustomComponentTypes.CustomComponentProps {
  navItems?: CustomLayoutTypes.NavItems
  opened?: boolean
  classes?: { drawer: string }
}

// TODO: all things provided by builder should be come from context API so any component can use it
const LeftDrawer: React.FC<LeftDrawerProps> = ({ classes = {}, navItems = [], opened = false, build, buildingTools, children }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(opened);

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
      <CustomButton onClick={toggleDrawer}>Open Left</CustomButton>
      <SwipeableDrawer
        className={classes.drawer}
        open={isOpenDrawer}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        {navItems && (
          <SideList
            onClose={handleClose}
            navItems={navItems}
            build={build}
            buildingTools={buildingTools}
          />
        )}
        {children}
      </SwipeableDrawer>
    </div>
  );
}

export default LeftDrawer
export {
  LeftDrawer,
}
