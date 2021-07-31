export interface SliderDto {
  id: number;
  indicator?: string;
  unit?: string;
  unitPosition?: string;
  step?: number;
  min?: number;
  max?: number;
  defaultValue?: number;
  store?: string;
  slice?: string;
}

export interface SlidersDto {
  emi: SliderDto[];
  eligible: SliderDto[];
  afford: SliderDto[];
}

export const sliders: SlidersDto = {
  emi: [
    {
      id: 1,
      indicator: 'Price',
      unit: 'Rs. ',
      min: 500000,
      max: 10000000,
      step: 1000,
      defaultValue: 1000000,
      store: 'changeEmiPrice',
      slice: 'price',
    },
    {
      id: 2,
      indicator: 'Length of loan',
      unit: ' years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
      store: 'changeEmiLength',
      slice: 'length',
    },
    {
      id: 3,
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
      store: 'changeEmiRate',
      slice: 'rate',
    },
  ],
  eligible: [
    {
      id: 4,
      indicator: 'Gross Income (Monthly)',
      unit: 'Rs. ',
      min: 10000,
      max: 1000000,
      step: 1,
      defaultValue: 25000,
      store: 'changeEligibleIncome',
      slice: 'income',
    },
    {
      id: 5,
      indicator: 'Tenure (Years)',
      unit: 'years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
      store: 'changeEligibleLength',
      slice: 'length',
    },
    {
      id: 6,
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
      store: 'changeEligibleRate',
      slice: 'rate',
    },
    {
      id: 7,
      indicator: 'Other EMI (Monthly)',
      unit: 'Rs,',
      min: 0,
      step: 1,
      max: 500000,
      defaultValue: 0,
      store: 'changeEligibleEmi',
      slice: 'emi',
    },
  ],
  afford: [
    {
      id: 8,
      indicator: 'Down Payment',
      unit: 'Rs.',
      min: 0,
      max: 10000000,
      step: 1,
      defaultValue: 100000,
      store: 'changeAffordPayment',
      slice: 'payment',
    },
    {
      id: 9,
      indicator: 'Gross Income (Monthly)',
      unit: 'Rs. ',
      min: 10000,
      max: 1000000,
      step: 1,
      defaultValue: 25000,
      store: 'changeAffordIncome',
      slice: 'income',
    },
    {
      id: 10,
      indicator: 'Length of loan',
      unit: 'years',
      unitPosition: 'right',
      step: 1,
      min: 5,
      max: 30,
      defaultValue: 10,
      store: 'changeAffordLength',
      slice: 'length',
    },
    {
      id: 11,
      indicator: 'Interest Rate (%P.A.)',
      unit: '%',
      unitPosition: 'right',
      min: 0,
      step: 0.01,
      max: 15,
      defaultValue: 6.75,
      store: 'changeAffordRate',
      slice: 'rate',
    },
    {
      id: 12,
      indicator: 'Other EMI (Monthly)',
      unit: 'Rs,',
      min: 0,
      step: 1,
      max: 500000,
      defaultValue: 0,
      store: 'changeAffordEmi',
      slice: 'emi',
    },
  ],
};
