import React, { FC, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { PrettySlider, PrettySliderLabels } from './slider.style';
import { MortgageSliderProps } from './slider.props';

export const MortgageSlider: FC<MortgageSliderProps> = prop => {
  const labelStyle = PrettySliderLabels();
  const [sliderValue, setSliderValue] = React.useState(0);

  useEffect(() => {
    setSliderValue(prop.defaultValue || 0);
  }, [prop.defaultValue]);

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
          <label className={labelStyle.root} htmlFor="">
            {prop.indicator}
          </label>
        </Grid>
        <Grid item xs={6} container direction="column" alignItems="flex-end">
          {
            <span className={labelStyle.root}>
              {prop.unitPosition === 'right'
                ? sliderValue + ' ' + prop.unit
                : prop.unit + ' ' + sliderValue}
            </span>
          }
        </Grid>
      </Grid>

      <div>
        <PrettySlider
          value={sliderValue}
          onChange={handleSliderChange}
          min={prop.min}
          max={prop.max}
          step={prop.step}
          aria-labelledby="continuous-slider"
        />
      </div>
    </>
  );
};

export default MortgageSlider;
