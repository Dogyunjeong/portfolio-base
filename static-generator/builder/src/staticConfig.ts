const IMPORT_PORTFOLIO_PATH: {[key: string]: string} = {
  ['/assets/portfolio/PORTFOLIO_Seite_01.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_01.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_02.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_02.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_03.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_03.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_04.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_04.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_05.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_05.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_06.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_06.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_07.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_07.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_08.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_08.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_09.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_09.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_10.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_10.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_11.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_11.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_12.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_12.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_13.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_13.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_14.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_14.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_16.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_16.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_17.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_17.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_18.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_18.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_19.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_19.jpg'),
  ['/assets/portfolio/PORTFOLIO_Seite_20.jpg']: require('./assets/portfolio/PORTFOLIO_Seite_20.jpg'),

}

export const IMPORT_PATH: {[key: string]: string} = {
  ['/assets/svg/logo.svg']: require('./assets/svg/logo.svg'),
  ['/assets/svg/nav_item_01.svg']: require('./assets/svg/nav_item_01.svg'),
  ['/assets/svg/nav_item_02.svg']: require('./assets/svg/nav_item_02.svg'),
  ['/assets/svg/nav_item_03.svg']: require('./assets/svg/nav_item_03.svg'),
  ['/assets/svg/nav_item_04.svg']: require('./assets/svg/nav_item_04.svg'),
  ...IMPORT_PORTFOLIO_PATH,
}
