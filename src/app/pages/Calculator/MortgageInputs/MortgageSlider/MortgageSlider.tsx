import React, { FC, useEffect } from 'react';
import { Grid, InputAdornment, InputBase } from '@material-ui/core';
import {
  InputPropsStyle,
  PrettySlider,
  PrettySliderLabels,
} from './slider.style';
import { MortgageSliderProps } from './slider.props';
import { useDispatch } from 'react-redux';
import { useCalculationSlice } from '../../slice';

export const MortgageSlider: FC<MortgageSliderProps> = prop => {
  const { actions } = useCalculationSlice();

  const labelStyle = PrettySliderLabels();

  const dispatch = useDispatch();

  useEffect(() => {
    if (prop.store) {
      dispatch(actions[prop.store](prop.defaultValue || 0));
    }
  }, [prop.defaultValue]);

  const handleSliderChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    if (prop.store) {
      dispatch(actions[prop.store](newValue as number));
    }
  };

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let value = parseInt(event.target.value);
    if (
      !isNaN(value) &&
      value >= (prop.min || 1) &&
      value <= (prop.max || 1000)
    ) {
      if (prop.store) {
        dispatch(actions[prop.store](parseInt(event.target.value)));
      }
    }
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
              <InputBase
                key={`slider-label-${prop.sliderId}`}
                id={`slider-label-${prop.sliderId}`}
                inputProps={{
                  style: {
                    ...InputPropsStyle.style,
                  },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <div style={{ color: '#000', fontSize: '1.2rem' }}>
                      {prop.unitPosition !== 'right' ? prop.unit : ''}
                    </div>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <div style={{ color: '#000', fontSize: '1.2rem' }}>
                      {prop.unitPosition === 'right' ? prop.unit : ''}
                    </div>
                  </InputAdornment>
                }
                value={prop.slice}
                onChange={handleTextFieldChange}
              />
            </span>
          }
        </Grid>
      </Grid>

      <div>
        <PrettySlider
          value={prop.slice}
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
