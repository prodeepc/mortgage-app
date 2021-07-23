import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import { MortgageSlider } from './MortgageSlider';

export function MortgageInputs() {
  const [value, setValue] = React.useState(0);
  const [price] = React.useState(1000000);
  const [years] = React.useState(10);
  const [payment] = React.useState(500000);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" />
          <Tab disabled label="New" />
          <Tab disabled label="Resellers" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <div>
          <MortgageSlider
            indicator="Price"
            unit="Rs."
            min={500000}
            max={10000000}
            step={100000}
            defaultValue={price}
          ></MortgageSlider>
        </div>
        <div>
          <MortgageSlider
            indicator="Length of loan"
            unit="years"
            step={1}
            min={5}
            max={30}
            defaultValue={years}
          ></MortgageSlider>
        </div>
        <div>
          <MortgageSlider
            indicator="Down payment"
            unit="Rs,"
            min={100000}
            step={100000}
            max={10000000}
            defaultValue={payment}
          ></MortgageSlider>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
}
