import { Grid, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { sliderState } from '../slice/types';
import MortgageAmount from './MortgageAmount';
import MortgagePercentage from './MortgagePercentage';

const useStyle = makeStyles({
  root: {
    marginTop: '1rem',
  },
});

export const MortgageDetails: FC<{ slices: sliderState }> = props => {
  const classes = useStyle();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={6}>
        <MortgagePercentage></MortgagePercentage>
      </Grid>

      <Grid item xs={6}>
        <MortgageAmount slices={props.slices}></MortgageAmount>
      </Grid>
    </Grid>
  );
};
