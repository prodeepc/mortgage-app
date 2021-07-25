import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from './';

const selectCalculation = (state: RootState) =>
  state.calculation || initialState;

export const selectEmiPrice = createSelector(
  [selectCalculation],
  calculationState => calculationState.emi.price,
);
