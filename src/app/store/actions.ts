import { createAction, props, emptyProps } from '@ngrx/store';
import { FormState } from './reducer';

export const setDrink = createAction(
  'Update drink',
  props<{ drink: string }>()
);
export const resetForm = createAction('Reset form', emptyProps);
export const toggleVisible = createAction('Toggle Visible', emptyProps);
