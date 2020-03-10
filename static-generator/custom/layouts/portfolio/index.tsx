import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import LeftDrawer from '../../components/Nav/LeftDrawer'
import DynamicComponent from '../../../common/containers/Dynamic/DynamicComponent'
import _ from '../../../common/utilities/lodash.util';
import { useStyles } from '../../../common/hooks/styles.hook';
import Image from '../../components/Area/Image'

interface PortfolioProps extends CustomLayoutTypes.LayoutProps {
}

const Portfolio: React.FC<PortfolioProps> = ({ layoutData, children, build, buildingTools }) => {
  const classes = useStyles(layoutData.header.customStyles)
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
                  classes={{ root: classes[drawer.class] }}
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