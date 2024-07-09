import { createReducer, on } from '@ngrx/store';
import { resetForm, setForm, toggleVisible } from './actions';

export interface FormState {
  food: string;
  drink: string;
  visible: boolean;
  enabled: boolean;
}

export const initialState: FormState = {
  food: 'Sushi',
  drink: 'Lemonade',
  visible: true,
  enabled: true,
};

export const reducerKey = 'myForm';

export const formReducer = createReducer(
  initialState,
  on(setForm, (state, values) => values),
  on(resetForm, (state) => initialState),
  on(
    toggleVisible,
    (state): FormState => ({ ...state, enabled: !state.enabled })
  )
);
