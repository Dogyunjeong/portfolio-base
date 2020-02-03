import React from 'react'
import Grid, { GridProps } from '@material-ui/core/Grid';

type gridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export interface FGridProps extends GridProps {
  container?: boolean
  item?: boolean
  xs?: gridSize
  sm?: gridSize
  lg?: gridSize
}

const FGrid: React.FC<FGridProps> = ({ children, ...others }) => {
  return (
    <Grid
      {...others}
    >
      {children}
    </Grid>
  );
}

export default FGrid;
export { FGrid }
