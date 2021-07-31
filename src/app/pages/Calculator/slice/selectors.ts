import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './';

const selectCalculation = (state: RootState) =>
  state.mortgageCalculator || initialState;

// EMI
export const selectEmiPrice = createSelector(
  [selectCalculation],
  calculationState => calculationState.emi.price,
);

export const selectEmiLength = createSelector(
  [selectCalculation],
  calculationState => calculationState.emi.length,
);

export const selectEmiInterest = createSelector(
  [selectCalculation],
  calculationState => calculationState.emi.rate,
);

// Eligible
export const selectEligibleIncome = createSelector(
  [selectCalculation],
  calculationState => calculationState.eligible.income,
);
export const selectEligibleLength = createSelector(
  [selectCalculation],
  calculationState => calculationState.eligible.length,
);
export const selectEligibleRate = createSelector(
  [selectCalculation],
  calculationState => calculationState.eligible.rate,
);
export const selectEligibleEmi = createSelector(
  [selectCalculation],
  calculationState => calculationState.eligible.emi,
);

// Afford
export const selectAffordPayment = createSelector(
  [selectCalculation],
  calculationState => calculationState.afford.payment,
);

export const selectAffordIncome = createSelector(
  [selectCalculation],
  calculationState => calculationState.afford.income,
);

export const selectAffordLength = createSelector(
  [selectCalculation],
  calculationState => calculationState.afford.length,
);

export const selectAffordRate = createSelector(
  [selectCalculation],
  calculationState => calculationState.afford.rate,
);

export const selectAffordEmi = createSelector(
  [selectCalculation],
  calculationState => calculationState.afford.emi,
);
