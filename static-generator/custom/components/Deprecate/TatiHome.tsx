import React from 'react'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'


export interface TatiHomeProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatiHome: React.SFC<TatiHomeProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles({
    wrapper: {
      maxWidth: '52rem',
      fontSize: '1.5rem',
      margin: 'auto',
    },
    title: {
      fontSize: '4rem',
      fontWeight: 200,
      color: '#df3ee0',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    yellow: {
      color: '#ffed00',
    }
  })
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={customClasses.wrapper}>
          <h1 className={customClasses.title}>
            WELCOME to TATI's
            <br/>
            <span className={customClasses.yellow}>colorful world</span>
          </h1>
          <p>
            TATI is a multidisciplinary artist who is currently based in Basel, Switzerland.
            She studied Fashion Design at the University of Arts FHNW in Switzerland and at the Royal Academy of Arts in Holland.
            She has been interning for Charles Jeffrey LOVERBOY based in London, UK and the print designer CUSCUS THE CUCKOOS in Bangkok, Thailand
          </p>
          <p>
            TATI combines reused materials, knit war, chemical process and objects and turns them into assemblage of memories on the body.
            with her work she creates new reality which questions our generations identity and a counter proposal of our normed body.
          </p>
          <p>
            TATI's products are shaped on a made-to-order basis and therefore only in a limited edition available.
            Unless you bring your own left over fabrics - yarns - jewelry. ;)
          <br/>
            TATI's things capture time and decay to create a new value of materials, objects, jewelry and clothes.
          <br/>
            TATI's wish is to create limited things which have a valued and long life where the wearer can see more clear transparency.
          </p>
          <p>
            Hope you Find happiness in here. Good luck!
            <span>Good luck!</span>
          </p>
        </div>
      </FGrid>
    </FGrid>
  )
}

export default TatiHome