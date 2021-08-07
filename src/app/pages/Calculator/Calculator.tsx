import {
  Container,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import MortgageInputs from './MortgageInputs';
import { Helmet } from 'react-helmet-async';
import MortgageDetails from './MortgageDetails';
import MortgageBanner from './MortgageBanner';
import mainTheme from './calculator.theme';
import { TabPanel } from './MortgageInputs/TabPanel';
import React from 'react';
import { sliders } from './MortgageInputs/mortgageInputs.const';
import { mortgageCalculatorState } from './slice/types';
import { useSelector } from 'react-redux';
import {
  selectAffordEmi,
  selectAffordIncome,
  selectAffordLength,
  selectAffordPayment,
  selectAffordRate,
  selectEligibleEmi,
  selectEligibleIncome,
  selectEligibleLength,
  selectEligibleRate,
  selectEmiInterest,
  selectEmiLength,
  selectEmiPrice,
} from './slice/selectors';

export function Calculator() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const sliderStates: mortgageCalculatorState = {
    emi: {
      price: useSelector(selectEmiPrice) || 0,
      length: useSelector(selectEmiLength) || 0,
      rate: useSelector(selectEmiInterest) || 0,
    },
    eligible: {
      income: useSelector(selectEligibleIncome) || 0,
      length: useSelector(selectEligibleLength) || 0,
      rate: useSelector(selectEligibleRate) || 0,
      emi: useSelector(selectEligibleEmi) || 0,
    },
    afford: {
      payment: useSelector(selectAffordPayment) || 0,
      income: useSelector(selectAffordIncome) || 0,
      length: useSelector(selectAffordLength) || 0,
      rate: useSelector(selectAffordRate) || 0,
      emi: useSelector(selectAffordEmi) || 0,
    },
  };

  const tabsMapping = [
    { index: 0, item: 'emi' },
    { index: 1, item: 'eligible' },
    { index: 2, item: 'afford' },
  ];

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function renderTabPanelBlock(tab) {
    return (
      <TabPanel key={'tab-panel-' + tab.index} value={value} index={tab.index}>
        <MortgageInputs
          item={sliders[tab.item]}
          slices={sliderStates[tab.item]}
        ></MortgageInputs>
        <MortgageDetails slices={sliderStates[tab.item]}></MortgageDetails>
      </TabPanel>
    );
  }

  function renderTabsBlock() {
    return (
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab className={classes.tabLabels} label="EMI Calculator" />
        <Tab className={classes.tabLabels} label="Eligibility" />
        <Tab className={classes.tabLabels} label="Affordability" />
      </Tabs>
    );
  }

  return (
    <>
      <Helmet>
        <title>Home Loan Calculator</title>
        <meta
          name="description"
          content="Calculate how much mortgage you need to pay depending on your borrowed amount."
        />
      </Helmet>
      <Container maxWidth="sm">
        <ThemeProvider theme={mainTheme}>
          <div className={classes.content}>
            <Typography variant="subtitle1">Home Loan</Typography>
            <Typography variant="h1">Calculator</Typography>
            <MortgageBanner></MortgageBanner>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                {renderTabsBlock()}
              </Paper>
            </div>
            {tabsMapping.map(tab => {
              return renderTabPanelBlock(tab);
            })}
          </div>
        </ThemeProvider>
      </Container>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  tabLabels: {
    fontSize: '1.2rem',
  },
  paper: {
    marginTop: '2rem',
  },
  content: {
    marginTop: '2.5rem',
    padding: '2.5rem',
    backgroundColor: 'white',
    borderRadius: '40px',
  },
});
