import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState, reducerKey } from './reducer';

export const selectForm = createFeatureSelector<FormState>(reducerKey);

export const isEnabled = createSelector(selectForm, (state) => state.enabled);
