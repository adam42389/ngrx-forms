import { createAction, props, emptyProps } from '@ngrx/store';
import { FormState } from './reducer';

export const setForm = createAction('Update form', props<FormState>());
export const resetForm = createAction('Reset form', emptyProps);
export const toggleVisible = createAction('Toggle Visible', emptyProps);
