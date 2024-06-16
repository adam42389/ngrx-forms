import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { setForm } from './store/actions';
import { FormState } from './store/reducer';
import { selectForm } from './store/selector';

@Injectable()
export class MyFormService {
  myForm = new FormGroup({
    food: new FormControl(''),
    drink: new FormControl(''),
  });

  constructor(private store$: Store) {
    this.store$
      .select(selectForm)
      .pipe(take(1))
      .subscribe((values) => this.myForm.patchValue(values));

    this.myForm.valueChanges.subscribe((values) => {
      this.store$.dispatch(setForm(values as FormState));
    });
  }
}
