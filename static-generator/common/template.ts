const midMax = '@media (max-width: 968px)'

export default {
  version: 0.1,
  uuid: 'test-static-web-prototype',
  // Creator should ID for user in the future
  creator: 'by-tati-test-id',
  createdAt: '2019-12-08T12:41:06.219Z',
  updatedAt: '2019-12-08T12:41:06.219Z',
  pages: [
    // Top level Pages
    {
      path: '',
      layout: {
        uuid: 'portfolio',
        header: {
          title: 'by Tati',
          drawer: [
            {
              uuid: 'content-image',
              type: 'content',
              alt: 'logo',
              src: '/assets/svg/logo.svg',
              class: 'logo'
            },
            {
              uuid: 'area-wrapper',
              type: 'area',
              class: 'navWrapper',
              childClass: 'navItem',
              display: 'flex',
              customStyles: {
                img: {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  backgroundPosition: 'center',
                  backgroundImage: 'url(/assets/svg/nav_background.svg)',
                  backgroundRepeat: 'no-repeat',
                  padding: '3vh 0',
                  marginTop: '10vh',
                }
              },
              components: [
                {
                  uuid: 'link-svg',
                  type: 'link',
                  title: 'home',
                  href: '/',
                  svgSrc: '/assets/svg/nav_item_01.svg',
                  hoverTitle: 'HOME',
                },
                {
                  uuid: 'link-svg',
                  type: 'link',
                  title: 'archive',
                  href: '/archive',
                  svgSrc: '/assets/svg/nav_item_02.svg',
                  hoverTitle: 'ARCHIVE',
                },
                {
                  uuid: 'link-svg',
                  type: 'link',
                  title: 'shop',
                  href: '/',
                  svgSrc: '/assets/svg/nav_item_03.svg',
                  hoverTitle: 'SHOP',
                },
                {
                  uuid: 'link-svg',
                  type: 'link',
                  title: 'info',
                  href: '/',
                  svgSrc: '/assets/svg/nav_item_04.svg',
                  hoverTitle: 'INFO',
                },

              ]
            },
          ],
          customStyles: {
            drawer: {
              width: '40rem',
              maxWidth: '80vw',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '& logo': {
                height: '13vh',
                maxHeight: '13vh'
              },
              '& $navItem': {
                width: '100%',
                height: '6rem',
                maxHeight: '8vh',
                margin: '1rem 0',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                fontSize: '8vh',
              }
            },
            navItem: {},
            logo: {},
            [midMax]: {
              drawer: {
                '& $navItem': {
                }
              }
            }
          },
        },
      },
      components: [
        {
          uuid: 'deprecate-tati-home',
          type: 'test',
        },
      ],
      pages: [
        {
          path: 'archive',
          uuid: 'tati-archive',
          components: [{
            uuid: 'portfolio-collection',
            type: 'image-collection',
            customStyles: {
              imageWrapper: {
                '& $image': {
                  maxWidth: '100%',
                  maxHeight: '100vh',
                },
                '& $image:not(:first-child)': {
                  marginTop: '2rem',
                }
              },
              image: {}
            },
            images: [
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_01.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_02.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_03.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_04.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_05.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_06.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_07.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_08.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_09.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_10.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_11.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_12.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_13.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_14.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_16.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_17.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_18.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_19.jpg',
              },
              {
                label: '',
                src:'/assets/portfolio/PORTFOLIO_Seite_20.jpg',
              },
            ]
          }],
          pages: []
        }
      ]
    },
  ],
}
