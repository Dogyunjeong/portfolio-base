import React from 'react'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'

const styles = {
  info: {
    'a': {
      color: 'black',
      
    }
  }
}

export interface TatiInfoProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatiInfo: React.SFC<TatiInfoProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles(baseStyle)
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={customClasses.wrapper}>
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
      </FGrid>
    </FGrid>
  )
}

export default TatiInfo