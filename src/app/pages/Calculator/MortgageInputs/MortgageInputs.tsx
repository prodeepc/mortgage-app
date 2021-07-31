import MortgageSlider from './MortgageSlider';
import { SliderDto } from './mortgageInputs.const';
import { FC } from 'react';
import { sliderState } from '../slice/types';

type MortgageInputProps = {
  item: SliderDto[];
  slices: sliderState;
};

export const MortgageInputs: FC<MortgageInputProps> = props => {
  function mortgageSliderBlock(sliderData: SliderDto[]) {
    let data = sliderData.map(slideItem => {
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
          store={slideItem.store || ''}
          slice={slideItem.slice ? props.slices[slideItem.slice] : 0}
          unitPosition={slideItem.unitPosition || 'left'}
        ></MortgageSlider>
      );
    });
    return data;
  }

  return <>{mortgageSliderBlock(props.item)}</>;
};

export default MortgageInputs;
