import { createReducer, on } from '@ngrx/store';
import { resetForm, setForm } from './actions';

export interface FormState {
  food: string;
  drink: string;
}

export const initialState: FormState = {
  food: 'Sushi',
  drink: 'Lemonade',
};

export const reducerKey = 'myForm';

export const formReducer = createReducer(
  initialState,
  on(setForm, (state, values) => values),
  on(resetForm, (state) => initialState)
);
