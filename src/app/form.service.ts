import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { isEnabled, selectForm } from './store/selector';
import { setDrink } from './store/actions';

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

    this.myForm.controls.drink.valueChanges.subscribe((value) => {
      if (value) this.store$.dispatch(setDrink({ drink: value }));
    });
  }
  onSubmit = () => {
    console.log('submit', this.myForm.value);
  };
}
