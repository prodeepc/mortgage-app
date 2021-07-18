import React from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import { MortgageSlider } from './MortgageSlider';

export function MortgageInputs() {
  const [value, setValue] = React.useState(0);

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
        <ul>
          <li>
            <MortgageSlider></MortgageSlider>
          </li>
          <li>
            <MortgageSlider></MortgageSlider>
          </li>
          <li>
            <MortgageSlider></MortgageSlider>
          </li>
        </ul>
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
