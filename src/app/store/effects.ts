import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { tap } from 'rxjs';
import { resetForm } from './actions';
import { initialState } from './reducer';
import { MyFormService } from '../form.service';

@Injectable()
export class FormEffects {
  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(resetForm),
        tap(() => {
          this.formService.myForm.patchValue(initialState);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private formService: MyFormService) {}
}
