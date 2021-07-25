export type SliderDto = {
  indicator?: string;
  unit?: string;
  unitPosition?: string;
  step?: number;
  min?: number;
  max?: number;
  defaultValue?: number;
};

export type SlidersDto = {
  emi: SliderDto[];
  eligible: SliderDto[];
  afford: SliderDto[];
};

export const sliders: SlidersDto = {
  emi: [
    {
      indicator: 'Price',
      unit: 'Rs. ',
      min: 500000,
      max: 10000000,
      step: 1000,
      defaultValue: 1000000,
    },
    {
      indicator: 'Length of loan',
      unit: ' years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
    },
    {
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
    },
  ],
  eligible: [
    {
      indicator: 'Gross Income (Monthly)',
      unit: 'Rs. ',
      min: 10000,
      max: 1000000,
      step: 1,
      defaultValue: 25000,
    },
    {
      indicator: 'Tenure (Years)',
      unit: 'years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
    },
    {
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
    },
    {
      indicator: 'Other EMI (Monthly)',
      unit: 'Rs,',
      min: 0,
      step: 1,
      max: 500000,
      defaultValue: 0,
    },
  ],
  afford: [
    {
      indicator: 'Down Payment',
      unit: 'Rs.',
      min: 0,
      max: 10000000,
      step: 1,
      defaultValue: 100000,
    },
    {
      indicator: 'Gross Income (Monthly)',
      unit: 'Rs. ',
      min: 10000,
      max: 1000000,
      step: 1,
      defaultValue: 25000,
    },
    {
      indicator: 'Length of loan',
      unit: 'years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
    },
    {
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
    },
    {
      indicator: 'Other EMI (Monthly)',
      unit: 'Rs,',
      min: 0,
      step: 1,
      max: 500000,
      defaultValue: 0,
    },
  ],
};
