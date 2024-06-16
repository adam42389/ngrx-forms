import { createFeatureSelector } from '@ngrx/store';
import { FormState, reducerKey } from './reducer';

export const selectForm = createFeatureSelector<FormState>(reducerKey);
