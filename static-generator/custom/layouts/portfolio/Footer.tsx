import * as React from 'react';
import CustomLayoutTypes from '../../../common/types/customLayout.type'
import { useStyles } from '../../../common/hooks/styles.hook'

const Footer: React.FC<CustomLayoutTypes.FooterProps> = ({ footerData }) => {
  const classes = useStyles({
    root: {
      display: 'none',
      paddingTop: '2rem',
      '& $copyRightArea': {
        lineHeight: '2rem'
      },
      copyRightArea: {
      }
    },
  })
  return (
    <footer className={classes.root}>
      <p className={classes.copyRightArea}>
        Copy right&nbsp;
        <span>@{!footerData.createdAt ? '2019' : new Date(footerData.createdAt).getFullYear()}</span>
        &nbsp;by
        <br/>
        <span>{footerData.rightHolder}</span>
      </p>
      <p>
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
export { Footer }
