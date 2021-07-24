import {
  Container,
  makeStyles,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import MortgageInputs from './MortgageInputs';
import { Helmet } from 'react-helmet-async';
import { MortgageDetails } from './MortgageDetails';
import MortgageBanner from './MortgageBanner';
import mainTheme from './calculator.theme';

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
        <ThemeProvider theme={mainTheme}>
          <div className={classes.content}>
            <Typography variant="h1">
              <Typography variant="subtitle1">Calculate</Typography>
              Mortgage
            </Typography>
            <MortgageBanner></MortgageBanner>
            <MortgageInputs></MortgageInputs>
            <MortgageDetails></MortgageDetails>
          </div>
        </ThemeProvider>
      </Container>
    </>
  );
}

const useStyles = makeStyles({
  content: {
    marginTop: '2.5rem',
    padding: '2.5rem',
    backgroundColor: 'white',
    borderRadius: '40px',
  },
});