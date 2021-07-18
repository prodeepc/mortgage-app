import React from 'react';
import { Slider } from '@material-ui/core';

export function MortgageSlider() {
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleSliderChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    setSliderValue(newValue as number);
  };

  return (
    <>
      <label htmlFor="">Price</label>
      <span className="price">${sliderValue}</span>
      <div>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />
      </div>
    </>
  );
}
