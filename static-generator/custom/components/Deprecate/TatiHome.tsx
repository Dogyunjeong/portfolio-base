import React from 'react'
import clsx from 'clsx'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'

export interface TatiHomeProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatiHome: React.SFC<TatiHomeProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles({
    ...baseStyle,
    greeting: {
      margin: '0.67em 0 0 0'
    },
    homeWrapper: {
      marginTop: '8vh',
    }
  })
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={clsx(customClasses.wrapper, customClasses.homeWrapper)}>
          <h1 className={customClasses.emphasize}>
             WELCOME TO TATI‘S
            <br/>
            <span className={customClasses.yellow}>COLORFUL WORLD!</span>
          </h1>
          <p>
            TATI is a multidisciplinary artist who is based in Paris, France. 
            Currently, she explores Knitwear for Fashion in her Master degree at the Institut Français de la Mode.
            Previously, she studied Fashion Design at the Academy of Art and Design FHNW in Switzerland and at the Royal Academy of Arts in Holland.
            She has been interning for Charles Jeffrey LOVERBOY based in London, UK and the print designer CUSCUS THE CUCKOOS in Bangkok, Thailand.
          </p>
          <p>
            TATI combines reused materials, knitwear, chemical process and objects to turn them into an assemblage of memories on the body.
          </p>
          <p>
            TATI’s products are shaped on a made-to-order basis and therefore is only in a limited edition available.
          </p>
          <p>
            TATI’s things capture our generation's identity to create a new value of materials, objects, jewellery and clothes.
          </p>
          <p className={[customClasses.green, customClasses.emphasize, customClasses.greeting].join(' ')}>
            HOPE YOU FIND HAPPINESS IN HERE.
            <br/>
            <span className={customClasses.blue}>GOOD LUCK!</span>
          </p>
        </div>
      </FGrid>
    </FGrid>
  )
}

export default TatiHome