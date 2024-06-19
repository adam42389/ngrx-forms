import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import {
  MatFormField,
  MatLabel,
  MatOption,
  MatSelect,
} from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetForm } from './store/actions';
import { MyFormService } from './form.service';

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
  ],

  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
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

  resetClick = () => {
    this.store$.dispatch(resetForm());
  };
}
