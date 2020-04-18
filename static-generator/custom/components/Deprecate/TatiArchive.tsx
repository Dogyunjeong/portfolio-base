import React, { useState } from 'react'
import clsx from 'clsx'
import FGrid from '../../../common/components/Layouts/FGrid'
import _ from '../../../common/utilities/lodash.util'
import { List, ListItem } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import { setSrc } from "../../../common/utilities/common.util"
import useStyles from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'
import VimeoEmbed from '../Content/VimeoEmbed'

export interface TatiArchiveProps {

}

const styles = {
  ...baseStyle,
  list: {
    width: '100%',
    marginTop: '6vh',
  },
  listItem: {
    width: '100%',
    backgroundColor: 'white',
    margin: '2rem 0',
    padding: 0,
    justifyContent: 'center',
    border: '2px solid black',
    minHeight: '6rem',
    zIndex: 100,
    textAlign: 'center',
  },
  selected: {
    position: 'sticky',
    top: 0,
  },
  contentWrapper: {
    '& $content': {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
      maxHeight: '95vh',
      margin: 'auto',
      boxShadow: '0px 0px 15px grey',
    },
    '& $content:not(:first-child)': {
      marginTop: '2rem',
    },
    '& $mobile': {
      width: '32.4%',
    }
  },
  content: {},
  listItemText: {},
  mobile: {},
}

// const TatiArchive: React.SFC<TatiArchiveProps> = ({ classes = {}, componentData }) => {
const TatiArchive: React.SFC<TatiArchiveProps> = (props) => {
  const [openList, setOpenList] = useState<string | null>(null)
  const handleClickItem = _.memoize((list: string) => (event: any) => {
    if (openList !== list) {
      setTimeout(() => {
        setOpenList(list)

      }, 200)
    }
    setOpenList(null)
  })
  const classes = useStyles(styles)

  return (
    <FGrid container>
      <List
        component="ul"
        classes={{
          root: classes.list
        }}
      >
        {_.map(testDataSet, (data) => {
          // shared styles should be as an con  cat of global classes
          const sharedStyles = _.map(data.sharedStyles?.root, (name) => classes[name])
          const selected = openList === data.uuid
          return (
            <>
              <ListItem
                id={data.uuid}
                key={`${data.uuid}-label`}
                alignItems="center"
                onClick={handleClickItem(data.uuid)}
                classes={{
                  root: clsx(classes.listItem, classes.emphasize, sharedStyles, {
                    [classes.selected]: selected
                  }),
                }}
              >
                {data.label}
              </ListItem>
                <Collapse
                  className={classes.contentWrapper}
                  in={selected}
                  unmountOnExit
                >
                  {/* Should be image collection in portfolio */}
                  {_.map(data.videos, (video) => {
                    return (
                      <VimeoEmbed
                        className={clsx(classes.content, video.size && classes[video.size])}
                        componentData={{ vimeoId: video.vimeoId }}
                      />
                    )
                  })}
                  {_.map(data.images, (img, idx) => {
                    return  (
                      <img
                        className={classes.content}
                        key={`${data.uuid}-image-${idx}`}
                        src={setSrc(img)}
                      />
                    )
                  })}
                </Collapse>
            </>
          )
        })}
      </List>
    </FGrid>
  )
}

export default TatiArchive

const testDataSet = [
  {
    uuid: 'ARCHIVING SELF FW20',
    label: 'ARCHIVING SELF FW20',
    sharedStyles: { root: ['yellow'] },
    images: [
      '/assets/portfolio/Archiving_self_1.jpg',
      '/assets/portfolio/Archiving_self_2.jpg',
      '/assets/portfolio/Archiving_self_3.jpg',
      '/assets/portfolio/Archiving_self_4.jpg',
      '/assets/portfolio/Archiving_self_5.jpg',
      '/assets/portfolio/Archiving_self_6.jpg',
      '/assets/portfolio/Archiving_self_7.jpg',
      '/assets/portfolio/Archiving_self_8.jpg',
      '/assets/portfolio/Archiving_self_9.jpg',
      '/assets/portfolio/Archiving_self_10.jpg',
      '/assets/portfolio/Archiving_self_11.jpg',
      '/assets/portfolio/Archiving_self_12.jpg',
      '/assets/portfolio/Archiving_self_13.jpg',
      '/assets/portfolio/Archiving_self_14.jpg',
      '/assets/portfolio/Archiving_self_15.jpg',
      '/assets/portfolio/Archiving_self_16.jpg',
      '/assets/portfolio/Archiving_self_17.jpg',
      '/assets/portfolio/Archiving_self_18.jpg',
      '/assets/portfolio/Archiving_self_19.jpg',
    ],
  },
  {
    uuid: 'VIDEOS',
    label: 'VIDEOS',
    sharedStyles: { root: ['green'] },
    videos: [
      { vimeoId: '406250865' },
      { vimeoId: '406269296' },
      { vimeoId: '406258426' },
      { vimeoId: '399422881', size: 'mobile' },
    ]
  },
  {
    uuid: 'THE THINGS, WE ARE. SS20',
    label: 'THE THINGS, WE ARE. SS20',
    images: [
      '/assets/portfolio/the_things_we_are1.jpg',
      '/assets/portfolio/the_things_we_are2.jpg',
      '/assets/portfolio/the_things_we_are3.jpg',
      '/assets/portfolio/the_things_we_are4.jpg',
      '/assets/portfolio/the_things_we_are5.jpg',
      '/assets/portfolio/the_things_we_are6.jpg',
      '/assets/portfolio/the_things_we_are7.jpg',
      '/assets/portfolio/the_things_we_are8.jpg',
      '/assets/portfolio/the_things_we_are9.jpg',
      '/assets/portfolio/the_things_we_are10.jpg',
      '/assets/portfolio/the_things_we_are11.jpg',
      '/assets/portfolio/the_things_we_are12.jpg',
      '/assets/portfolio/the_things_we_are13.jpg',
      '/assets/portfolio/the_things_we_are14.jpg',
      '/assets/portfolio/the_things_we_are15.jpg',
      '/assets/portfolio/the_things_we_are16.jpg',
    ]
  },
  {
    uuid: 'SURELY, WE JEST. SS19',
    label: 'SURELY, WE JEST. SS19',
    sharedStyles: { root: ['blue'] },
    images: [
      '/assets/portfolio/Surely_we_jest1.jpg',
      '/assets/portfolio/Surely_we_jest2.jpg',
      '/assets/portfolio/Surely_we_jest3.jpg',
      '/assets/portfolio/Surely_we_jest4.jpg',
      '/assets/portfolio/Surely_we_jest5.jpg',
      '/assets/portfolio/Surely_we_jest6.jpg',
      '/assets/portfolio/Surely_we_jest7.jpg',
      '/assets/portfolio/Surely_we_jest8.jpg',
      '/assets/portfolio/Surely_we_jest9.jpg',
      '/assets/portfolio/Surely_we_jest10.jpg',
      '/assets/portfolio/Surely_we_jest11.jpg',
    ]
  },
  {
    uuid: 'DESIRE MACHINE FW18',
    label: 'DESIRE MACHINE FW18',
    sharedStyles: { root: ['green'] },
    images: [
      '/assets/portfolio/desire_machine1.jpg',
      '/assets/portfolio/desire_machine2.jpg',
      '/assets/portfolio/desire_machine3.jpg',
      '/assets/portfolio/desire_machine4.jpg',
      '/assets/portfolio/desire_machine5.jpg',
      '/assets/portfolio/desire_machine6.jpg',
      '/assets/portfolio/desire_machine7.jpg',
      '/assets/portfolio/desire_machine8.jpg',
      '/assets/portfolio/desire_machine9.jpg',
      '/assets/portfolio/desire_machine10.jpg',
      '/assets/portfolio/desire_machine11.jpg',
      '/assets/portfolio/desire_machine12.jpg',
      '/assets/portfolio/desire_machine13.jpg',
      '/assets/portfolio/desire_machine14.jpg',
      '/assets/portfolio/desire_machine15.jpg',
    ]
  },
  {
    uuid: 'SELF-DRAMATIZATION SS18',
    label: 'SELF-DRAMATIZATION SS18',
    sharedStyles: { root: ['yellow'] },
    images: [
      '/assets/portfolio/Self_dramatization1.jpg',
      '/assets/portfolio/Self_dramatization2.jpg',
      '/assets/portfolio/Self_dramatization3.jpg',
      '/assets/portfolio/Self_dramatization4.jpg',
      '/assets/portfolio/Self_dramatization5.jpg',
      '/assets/portfolio/Self_dramatization6.jpg',
      '/assets/portfolio/Self_dramatization7.jpg',
      '/assets/portfolio/Self_dramatization8.jpg',
      '/assets/portfolio/Self_dramatization9.jpg',
      '/assets/portfolio/Self_dramatization10.jpg',
      '/assets/portfolio/Self_dramatization11.jpg',
      '/assets/portfolio/Self_dramatization12.jpg',
      '/assets/portfolio/Self_dramatization13.jpg',
      '/assets/portfolio/Self_dramatization14.jpg',
      '/assets/portfolio/Self_dramatization15.jpg',
      '/assets/portfolio/Self_dramatization16.jpg',
      '/assets/portfolio/Self_dramatization17.jpg',
    ]
  },
]
