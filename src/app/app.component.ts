import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/select';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { resetForm } from './store/actions';
import { MyFormService } from './form.service';

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
  ],

  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  constructor(private store$: Store, public formService: MyFormService) {}

  resetClick = () => {
    this.store$.dispatch(resetForm());
  };
}
