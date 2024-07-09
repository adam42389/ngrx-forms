import { createReducer, on } from '@ngrx/store';
import { resetForm, setDrink, toggleVisible } from './actions';
import { state } from '@angular/animations';
import { createImmerReducer } from 'ngrx-immer/store';

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

export const formReducer = createImmerReducer(
  initialState,
  on(setDrink, (state, value) => {
    state.drink = value.drink;
    return state;
  }),
  on(resetForm, (state) => initialState),
  on(toggleVisible, (state): FormState => {
    state.enabled = !state.enabled;
    return state;
  })
);
