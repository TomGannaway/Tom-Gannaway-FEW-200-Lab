import { Component } from '@angular/core';
import { AppState } from './reducers';
import { Store } from '@ngrx/store';
import { applicationStarted } from './actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titleForHeader = 'Tip Calculator';

  constructor(store: Store<AppState>) {
    store.dispatch(applicationStarted());
  }
}
