import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CustomLayoutTypes from '../../../common/types/customLayout.type'
import CustomComponentTypes from '../../../common/types/customComponent.type'
import { Menu } from '../../../common/components/Icons/index'
import { SelectItem } from '../../../common/components/Icons'
import { useStyles } from '../../../common/hooks/styles.hook'
import Link from '../../../components/Link'

interface SideListProps extends CustomComponentTypes.CustomCompBuildingProps {
  onClose: () => void,
  navItems?: CustomLayoutTypes.NavItems,
}
const SideList: React.FC<SideListProps> = ({
  onClose, navItems = [], build, buildingTools
}) => {
  const classes = useStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });
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
      </List>
    </div>
  );
}

export interface LeftDrawerProps extends CustomComponentTypes.CustomComponentProps {
  navItems?: CustomLayoutTypes.NavItems
  opened?: boolean
  classes?: { root?: string, drawer?: string }
}

// TODO: all things provided by builder should be come from context API so any component can use it
const LeftDrawer: React.FC<LeftDrawerProps> = ({ classes = {}, navItems = [], opened = false, build, buildingTools, children }) => {
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

  const customClasses = useStyles({
    menuWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '2vh',
      left: '3vw',
      width: '3rem',
      height: '3rem',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
  })

  return (
    <div>
      <div className={customClasses.menuWrapper}>
        <Menu fontSize="large" onClick={toggleDrawer} />
      </div>
      <SwipeableDrawer
        className={classes.drawer}
        open={isOpenDrawer || opened}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        {navItems && navItems.length !== 0 && (
          <SideList
            onClose={handleClose}
            navItems={navItems}
            build={build}
            buildingTools={buildingTools}
          />
        )}
        <div onClick={handleClose}>
          {children}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default LeftDrawer
export {
  LeftDrawer,
}
