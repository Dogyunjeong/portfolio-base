import React from 'react'
import CustomComponentTypes from "../../../common/types/customComponent.type";
import FGrid from '../../../common/components/Layouts/FGrid'
import { useStyles } from '../../../common/hooks/styles.hook'
import { baseStyle } from './styles'
import { setSrc } from '../../../common/utilities/common.util'

const style = {
  shopWrapper: {
    marginTop: '25vh',
  },
  instagramLogoWrapper: {
    display: 'flex',
    marginTop: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramLogo: {
    height: '4.4rem',
  },
}

export interface TatShopProps extends CustomComponentTypes.CustomComponentBaseProps {
}

const TatShop: React.SFC<TatShopProps> = ({ classes = {}, componentData }) => {
  const customClasses = useStyles({
    ...baseStyle,
    ...style,
  })
  return (
    <FGrid container>
      <FGrid item xs={12} >
        <div className={[customClasses.wrapper, customClasses.blue, customClasses.shopWrapper].join(' ')}>
          <p className={[customClasses.emphasize, customClasses.green].join(' ')}>
            <span className={customClasses.blue}>THE SHOP</span> IS
            <br/>
            CURRENTLY UNDER
            <br/>
            <span className={customClasses.yellow}>CONSTRUCTION</span> BUT
            <br/>
            CHECK OUT MY
            <br/>
            <span className={customClasses.pink}>INSTAGRAM </span>INSTEAD.
            <br/>
          </p>
          <div className={customClasses.instagramLogoWrapper}>
            <a href="https://www.instagram.com/tati_jewellery_/">
              <img className={customClasses.instagramLogo} src={setSrc('/assets/png/instagram_black_logo.png')} alt="Instagram log" />
            </a>
          </div>
        </div>
      </FGrid>
    </FGrid>
  )
}

export default TatShop