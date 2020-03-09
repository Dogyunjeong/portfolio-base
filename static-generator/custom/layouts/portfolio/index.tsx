import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import LeftDrawer from '../../components/Nav/LeftDrawer'
import DynamicComponent from '../../../common/containers/Dynamic/DynamicComponent'
import _ from '../../../common/utilities/lodash.util';
import { useStyles } from '../../../common/hooks/styles.hook';

interface PortfolioProps extends CustomLayoutTypes.LayoutProps {
}

const Portfolio: React.FC<PortfolioProps> = ({ layoutData, children, build, buildingTools }) => {
  const classes = useStyles(layoutData.header.drawerStyle)
  return (
    <>
      <Header
        left={
          <LeftDrawer
            build={build}
            buildingTools={buildingTools}
          >
            <div className={classes.drawer}>
              {_.map(layoutData.header.drawer, (drawer, idx) => (
                <DynamicComponent
                  classes={{ wrapper: classes.navItem }}
                  key={`header-drawer-item-${idx}`}
                  componentData={drawer}
                />
              ))}
            </div>
          </LeftDrawer>
        }
        headerData={layoutData.header}
      />
      <main>
        {children}
      </main>
      <Footer
        footerData={layoutData.footer}
      />
    </>
  );
}

export default Portfolio;
export {
  Portfolio
}