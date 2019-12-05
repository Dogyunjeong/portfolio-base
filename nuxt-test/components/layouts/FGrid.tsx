import Grid, { GridProps } from '@material-ui/core/Grid';


export interface FGridProps extends GridProps {
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