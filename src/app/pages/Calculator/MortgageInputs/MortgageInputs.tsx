import React from 'react';
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import MortgageSlider from './MortgageSlider';

const useStyle = makeStyles({
  root: {
    width: 500,
  },
  tabLabels: {
    fontSize: '1.2rem',
  },
  paper: {
    marginTop: '2rem',
  },
});

export function MortgageInputs() {
  const styles = useStyle();
  const [value, setValue] = React.useState(0);
  const [price] = React.useState(1000000);
  const [years] = React.useState(10);
  const [payment] = React.useState(500000);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const sliders = [
    {
      indicator: 'Price',
      unit: 'Rs.',
      min: 500000,
      max: 10000000,
      step: 100000,
      defaultValue: price,
    },
    {
      indicator: 'Length of loan',
      unit: 'years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: years,
    },
    {
      indicator: 'Down payment',
      unit: 'Rs,',
      min: 100000,
      step: 100000,
      max: 10000000,
      defaultValue: payment,
    },
  ];

  function mortgageSliderBlock(slideItem) {
    return (
      <MortgageSlider
        indicator={slideItem.indicator}
        unit={slideItem.unit}
        min={slideItem.min}
        max={slideItem.max}
        step={slideItem.step}
        defaultValue={slideItem.defaultValue}
      ></MortgageSlider>
    );
  }

  return (
    <>
      <div className={styles.root}>
        <Paper className={styles.paper} elevation={3}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab className={styles.tabLabels} label="All" />
            <Tab className={styles.tabLabels} label="New" />
            <Tab className={styles.tabLabels} label="Resellers" />
          </Tabs>
        </Paper>
      </div>
      {[0, 1, 2].map(item => {
        return (
          <TabPanel value={value} index={item}>
            {sliders.map(slideItem => {
              return mortgageSliderBlock(slideItem);
            })}
          </TabPanel>
        );
      })}
    </>
  );
}

export default MortgageInputs;
