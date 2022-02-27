const midMax = "@media (max-width: 968px)";
const midMin = "720px";

export default {
  version: 0.1,
  uuid: "test-static-web-prototype",
  // Creator should ID for user in the future
  creator: "by-tati-test-id",
  createdAt: "2019-12-08T12:41:06.219Z",
  updatedAt: "2019-12-08T12:41:06.219Z",
  pages: [
    // Top level Pages
    {
      path: "",
      layout: {
        uuid: "portfolio",
        header: {
          title: "by Tati",
          drawer: [
            {
              uuid: "content-image",
              type: "content",
              alt: "logo",
              src: "/assets/png/by_tati.png",
              class: "logo",
            },
            {
              uuid: "area-wrapper",
              type: "area",
              class: "navWrapper",
              childClass: "navItem",
              display: "flex",
              customStyles: {
                root: {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundPosition: "center",
                  backgroundImage: 'url("/assets/svg/nav_background.svg")',
                  width: "26rem",
                  height: "20rem",
                  gap: "15px",
                  backgroundRepeat: "no-repeat",
                  padding: "33px 0",
                  marginTop: "55px",
                  [`@media (max-width: ${midMin})`]: {
                    width: "20rem",
                  },
                },
              },
              components: [
                {
                  uuid: "link",
                  type: "link",
                  label: "home",
                  href: "/",
                  customStyles: {
                    root: {
                      all: "unset",
                      cursor: "pointer",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#39B54A",
                      },
                    },
                  },
                },
                {
                  uuid: "link",
                  type: "link",
                  label: "archive",
                  href: "/archive",
                  customStyles: {
                    root: {
                      all: "unset",
                      cursor: "pointer",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#ff6ec7",
                      },
                    },
                  },
                },
                {
                  uuid: "link",
                  type: "link",
                  label: "shop",
                  href: "/shop",
                  customStyles: {
                    root: {
                      all: "unset",
                      cursor: "pointer",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#39B54A",
                      },
                    },
                  },
                },
                {
                  uuid: "link",
                  type: "link",
                  label: "info",
                  href: "/info",
                  customStyles: {
                    root: {
                      all: "unset",
                      cursor: "pointer",
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      "&:hover": {
                        color: "#FFFF00",
                      },
                    },
                  },
                },
              ],
            },
          ],
          customStyles: {
            "@global": {
              "@font-face": {
                fontFamily: "Helvetica",
                src: 'url("assets/fonts/Helvetica.ttf") format("truetype")',
                fontStyle: "normal",
              },
              "*": {
                fontFamily: "Helvetica",
              },
            },
            drawer: {
              width: "40rem",
              maxWidth: "80vw",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              "& $logo": {
                marginTop: "11vh",
                width: "22rem",
              },
              "& $navItem": {
                width: "100%",
                height: "6rem",
                maxHeight: "8vh",
                margin: "1rem 0",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                fontSize: "4rem",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              },
              [`@media (max-width: ${midMin})`]: {
                "& $logo": {
                  width: "16rem",
                  padding: "0 1rem",
                },
              },
            },
            navItem: {},
            logo: {},
            [midMax]: {
              drawer: {
                "& $navItem": {},
              },
            },
          },
        },
      },
      components: [
        {
          uuid: "deprecate-tati-home",
          type: "test",
        },
      ],
      pages: [
        {
          path: "archive",
          uuid: "tati-archive",
          components: [
            {
              uuid: "deprecate-tati-achive",
            },
          ],
          pages: [],
        },
        {
          path: "info",
          uuid: "tati-info",
          components: [
            {
              uuid: "deprecate-tati-info",
              type: "deprecate-tati-info",
            },
          ],
        },
        {
          path: "shop",
          uuid: "tati-shop",
          components: [
            {
              uuid: "deprecate-tati-shop",
              type: "deprecate-tati-shop",
            },
          ],
        },
      ],
    },
  ],
};
