import React from 'react'
import clsx from 'clsx'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'
import { setSrc } from '../../../common/utilities/common.util';

const styles = {
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '7.5rem',
  },
  infoWrapper: {
    '& a': {
      color: 'black',
      textDecoration: 'none',
    }
  },
  profileImage: {
    width: '18rem',
    height: 'auto',
    marginTop: '6rem',
  }
}

export interface TatiInfoProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatiInfo: React.SFC<TatiInfoProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles({
    ...baseStyle,
    ...styles,
  })
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={clsx(customClasses.wrapper, customClasses.infoContainer)}>
          <div className={clsx(customClasses.infoWrapper)}>
            <h2 className={[customClasses.emphasize, customClasses.blue].join(' ')}>
              CONTACT:
            </h2>
            <p>
              <a href="mailto: tatjana@hauptfam.de">tatjana@hauptfam.de</a>
            </p>
            <h2 className={[customClasses.emphasize, customClasses.yellow].join(' ')}>
              PRESS:
            </h2>
            <p>
              <a href="https://oddamagazine.com/project/basel-designers/">interview for New York magazine ODDA</a>
            </p>
            <p>
              <a href="https://nylon.com/childlike-jewelry-trend-nostalgia">TATI jewellery featured in Nylon magazine</a>
            </p>
            <h2 className={[customClasses.emphasize, customClasses.pink].join(' ')}>
              STOCKIST:
            </h2>
            <p>
              USA
              <br/>
              <a href="https://www.shopkathleen.net/collections/tati-jewellery">
                Kathleen Shop, Los Angeles
              </a>
            </p>
          </div>
          <div>
            <img className={customClasses.profileImage} src={setSrc('/assets/png/tati_info_profile.png')} />
          </div>
        </div>
      </FGrid>
    </FGrid>
  )
}

export default TatiInfo