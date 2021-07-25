import { Grid, makeStyles } from '@material-ui/core';
import MortgageAmount from './MortgageAmount';
import MortgagePercentage from './MortgagePercentage';

const useStyle = makeStyles({
  root: {
    marginTop: '1rem',
  },
});

export function MortgageDetails() {
  const classes = useStyle();
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6}>
        <MortgagePercentage></MortgagePercentage>
      </Grid>

      <Grid item xs={6}>
        <MortgageAmount></MortgageAmount>
      </Grid>
    </Grid>
  );
}
