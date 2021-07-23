import React, { FC } from 'react';
import { Grid, Slider } from '@material-ui/core';

type MortgageSliderProps = {
  indicator: string;
  unit: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

export const MortgageSlider: FC<MortgageSliderProps> = prop => {
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleSliderChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    setSliderValue(newValue as number);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <label htmlFor="">{prop.indicator}</label>
        </Grid>
        <Grid item xs={6}>
          <span className="price">{prop.unit + sliderValue}</span>
        </Grid>
      </Grid>

      <div>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          min={prop.min}
          max={prop.max}
          step={prop.step}
          defaultValue={prop.defaultValue}
          aria-labelledby="continuous-slider"
        />
      </div>
    </>
  );
};
