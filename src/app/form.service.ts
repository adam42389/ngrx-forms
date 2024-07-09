import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { setForm } from './store/actions';
import { FormState } from './store/reducer';
import { isEnabled, selectForm } from './store/selector';

@Injectable()
export class MyFormService {
  myForm = new FormGroup({
    food: new FormControl('', Validators.required),
    drink: new FormControl(''),
  });

  constructor(private store$: Store) {
    this.store$
      .select(selectForm)
      .pipe(take(1))
      .subscribe((values) => this.myForm.patchValue(values));

    this.store$.select(isEnabled).subscribe((isEnabled) => {
      if (isEnabled) this.myForm.enable();
      else this.myForm.disable();
    });

    // this.myForm.valueChanges.subscribe((values) => {
    //   this.store$.dispatch(setForm(values as FormState));
    // });
  }
  onSubmit = () => {
    console.log('submit', this.myForm.value);
  };
}
