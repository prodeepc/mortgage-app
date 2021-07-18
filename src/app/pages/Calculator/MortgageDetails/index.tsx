import { Grid } from '@material-ui/core';
import { MortgageAmount } from './MortgageAmount';
import { MortgagePercentage } from './MortgagePercentage';

export function MortgageDetails() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <MortgagePercentage></MortgagePercentage>
      </Grid>

      <Grid item xs={6}>
        <MortgageAmount></MortgageAmount>
      </Grid>
    </Grid>
  );
}
