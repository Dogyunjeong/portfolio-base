import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import LeftDrawer from '../../components/Nav/LeftDrawer'
import DynamicComponent from '../../../common/containers/Dynamic/DynamicComponent'
import _ from '../../../common/utilities/lodash.util';
import { useStyles } from '../../../common/hooks/styles.hook';
import { useWindowSize } from '../../../common/hooks/browser.hook';

interface PortfolioProps extends CustomLayoutTypes.LayoutProps {
}

const Portfolio: React.FC<PortfolioProps> = ({ layoutData, children, build, buildingTools }) => {
  const customClasses = useStyles(layoutData.header.customStyles)
  const size = useWindowSize()
  const fixed = size.width > 1600
  const classes = useStyles({
    '@global': {
      'main': {
        minHeight: '100vh',
      }
    },
    fixed: {
      display: 'flex',
      '& $fixedNav': {
        maxHeight: '100vh',
        marginRight: '2rem',
        position: 'sticky',
        top: 0
      },
    },
    content: {
      padding: '1rem 2rem'
    },
    fixedNav: {},
  })

  const navContent = (
    <div className={customClasses.drawer}>
      {_.map(layoutData.header.drawer, (drawer, idx) => (
        <DynamicComponent
          classes={{ root: customClasses[drawer.class], child: customClasses[drawer.childClass] }}
          key={`header-drawer-item-${idx}`}
          componentData={drawer}
        />
      ))}
    </div>
  )

  let mainContent = (
    <main className={classes.content}>
      {children}
    </main>
  )

  if (fixed) {
    mainContent = (
      <main className={classes.fixed} >
        <nav className={classes.fixedNav}>
          {navContent}
        </nav>
        <div className={classes.content}>
          {children}
        </div>
      </main>
    )
  }

  return (
    <>
      <Header
        fixedNav={fixed}
        left={
          <LeftDrawer
            build={build}
            buildingTools={buildingTools}
            classes={{root: customClasses.leftDrawer }}
          >
            {navContent}
          </LeftDrawer>
        }
        headerData={layoutData.header}
      />
      {mainContent}
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