import { Container, makeStyles } from '@material-ui/core';
import { MortgageInputs } from './MortgageInputs';
import { Helmet } from 'react-helmet-async';
import { MortgageDetails } from './MortgageDetails';

export function Calculator() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Calculate Mortgage</title>
        <meta
          name="description"
          content="Calculate how much mortgage you need to pay depending on your borrowed amount."
        />
      </Helmet>
      <Container maxWidth="sm">
        <div className={classes.content}>
          <h1 className={classes.title}>Calculate Mortgage</h1>
          <MortgageInputs></MortgageInputs>
          <MortgageDetails></MortgageDetails>
        </div>
      </Container>
    </>
  );
}

const useStyles = makeStyles({
  content: {
    marginTop: '30px',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '40px',
  },
  title: {
    marginTop: '0',
  },
});
