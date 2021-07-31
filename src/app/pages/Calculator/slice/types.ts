export interface sliderState {
  price?: number;
  payment?: number;
  income?: number;
  length?: number;
  rate?: number;
  emi?: number;
}

export interface mortgageCalculatorState {
  emi: sliderState;
  eligible: sliderState;
  afford: sliderState;
}
