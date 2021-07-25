import React from 'react';
import { makeStyles, Paper, Tab, Tabs } from '@material-ui/core';
import { TabPanel } from './TabPanel';
import MortgageSlider from './MortgageSlider';
import { SliderDto, sliders } from './mortgageInputs.const';

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

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function mortgageSliderBlock(sliderData: SliderDto[]) {
    let data = sliderData.map((slideItem, index) => {
      return (
        <MortgageSlider
          key={`mortgage-slider-${slideItem.id}`}
          sliderId={slideItem.id}
          indicator={slideItem.indicator || ''}
          unit={slideItem.unit || ''}
          min={slideItem.min}
          max={slideItem.max}
          step={slideItem.step}
          defaultValue={slideItem.defaultValue}
          unitPosition={slideItem.unitPosition || 'left'}
        ></MortgageSlider>
      );
    });
    return data;
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
            <Tab className={styles.tabLabels} label="EMI Calculator" />
            <Tab className={styles.tabLabels} label="Eligibility" />
            <Tab className={styles.tabLabels} label="Affordability" />
          </Tabs>
        </Paper>
      </div>
      <TabPanel value={value} index={0}>
        {mortgageSliderBlock(sliders.emi)}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {mortgageSliderBlock(sliders.eligible)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {mortgageSliderBlock(sliders.afford)}
      </TabPanel>
    </>
  );
}

export default MortgageInputs;
