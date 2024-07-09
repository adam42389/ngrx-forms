import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatHint, MatInput } from '@angular/material/input';
import {
  MatFormField,
  MatLabel,
  MatOption,
  MatSelect,
} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetForm, toggleVisible } from './store/actions';
import { MyFormService } from './form.service';
import { selectForm } from './store/selector';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatSelect,
    MatOption,
    MatError,
    MatHint,
    CommonModule,
  ],

  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  selector$ = this.store$.select(selectForm);

  constructor(private store$: Store, public formService: MyFormService) {}

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  foodVal = 'pizza-1';

  changeSelect = () => {
    this.foods = [
      { value: 'pasta-0', viewValue: 'Pasta' },
      { value: 'sugar-1', viewValue: 'Sugar' },
      { value: 'oats-2', viewValue: 'Oats' },
    ];
    this.foodVal = 'oats-2';
  };

  toggleVisible = () => {
    this.store$.dispatch(toggleVisible());
  };

  resetClick = () => {
    this.store$.dispatch(resetForm());
  };
}
