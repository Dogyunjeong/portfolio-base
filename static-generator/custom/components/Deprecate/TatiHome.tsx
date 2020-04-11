import React from 'react'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'

export interface TatiHomeProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatiHome: React.SFC<TatiHomeProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles(baseStyle)
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={customClasses.wrapper}>
          <h1 className={customClasses.emphasize}>
             WELCOME TO TATI‘S
            <br/>
            <span className={customClasses.yellow}>COLORFUL WORLD!</span>
          </h1>
          <p>
            TATI is a multidisciplinary artist who is currently based in Basel, Switzerland.
            She studied Fashion Design at the Academy of Art and Design FHNW in Switzerland and at the Royal Academy of Arts in Holland.
            She has been interning for Charles Jeffrey LOVERBOY based in London, UK and the print designer CUSCUS THE CUCKOOS in Bangkok, Thailand.
          </p>
          <p>
            TATI combines reused materials, knitwear, chemical process and objects to turn them into an assemblage of memories on the body.
          </p>
          <p>
            TATI’s products are shaped on a made-to-order basis and therefore is only in a limited edition available.
          <br/>
            TATI’s things capture our generations identity to create a new value of materials, objects, jewellery and clothes.
          </p>
          <p className={[customClasses.green, customClasses.emphasize].join(' ')}>
            HOPE YOU FIND HAPPINESS IN HERE.
            <span className={customClasses.blue}>GOOD LUCK!</span>
          </p>
        </div>
      </FGrid>
    </FGrid>
  )
}

export default TatiHome