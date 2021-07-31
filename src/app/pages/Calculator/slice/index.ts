import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { mortgageCalculatorState } from './types';

export const initialState: mortgageCalculatorState = {
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
    // EMI
    changeEmiPrice(state, action: PayloadAction<number>) {
      state.emi.price = action.payload;
    },
    changeEmiLength(state, action: PayloadAction<number>) {
      state.emi.length = action.payload;
    },
    changeEmiRate(state, action: PayloadAction<number>) {
      state.emi.rate = action.payload;
    },

    // Eligible
    changeEligibleIncome(state, action: PayloadAction<number>) {
      state.eligible.income = action.payload;
    },
    changeEligibleLength(state, action: PayloadAction<number>) {
      state.eligible.length = action.payload;
    },
    changeEligibleRate(state, action: PayloadAction<number>) {
      state.eligible.rate = action.payload;
    },
    changeEligibleEmi(state, action: PayloadAction<number>) {
      state.eligible.emi = action.payload;
    },

    // Afford
    changeAffordPayment(state, action: PayloadAction<number>) {
      state.afford.payment = action.payload;
    },
    changeAffordIncome(state, action: PayloadAction<number>) {
      state.afford.income = action.payload;
    },
    changeAffordLength(state, action: PayloadAction<number>) {
      state.afford.length = action.payload;
    },
    changeAffordRate(state, action: PayloadAction<number>) {
      state.afford.rate = action.payload;
    },
    changeAffordEmi(state, action: PayloadAction<number>) {
      state.afford.emi = action.payload;
    },
  },
});

export const { actions: calculationActions } = slice;

export const useCalculationSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
