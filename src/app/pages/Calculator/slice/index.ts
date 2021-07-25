import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';

export interface sliderState {
  price?: number;
  payment?: number;
  income?: number;
  length?: number;
  rate?: number;
  emi?: number;
}

export interface CalculationState {
  emi: sliderState;
  eligible: sliderState;
  afford: sliderState;
}

export const initialState: CalculationState = {
  emi: {
    price: 1000000,
    length: 10,
    rate: 6.75,
  },
  eligible: {
    income: 25000,
    length: 10,
    rate: 6.75,
    emi: 0,
  },
  afford: {
    payment: 100000,
    income: 25000,
    length: 10,
    rate: 6.75,
    emi: 0,
  },
};

const slice = createSlice({
  name: 'mortgageCalculator',
  initialState,
  reducers: {
    changeEmiPrice(state, action: PayloadAction<number>) {
      state.emi.price = action.payload;
    },
    changeEligibleIncome(state, action: PayloadAction<number>) {
      state.eligible.income = action.payload;
    },
    changeAffordPayment(state, action: PayloadAction<number>) {
      state.afford.payment = action.payload;
    },
  },
});

export const { actions: calculationActions, reducer } = slice;

export const useCalculatorSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
