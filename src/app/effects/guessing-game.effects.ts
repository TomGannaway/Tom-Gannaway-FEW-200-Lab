import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, filter } from 'rxjs/operators';
import * as guessingGameActions from '../actions/guessing-game.actions';
import * as appActions from '../actions/app.actions';

@Injectable()
export class GuessingGameEffects {
  constructor(private actions$: Actions) { }

  // applicationStarted -> (read the value from localStorage for 'by') -> (countBySet(x) | nothing)
  readRandomNum$ = createEffect(() => this.actions$
    .pipe(
      ofType(appActions.applicationStarted),
      map(() => localStorage.getItem('randomNum')),
      filter(a => a !== null), // if it is null, your work done.*/
      map(retrievedRandomNum => guessingGameActions.getGeneratedRandomNum({ randomNum: +retrievedRandomNum }))
    ), {
    dispatch: true
  });

  // saveRandomNum -> write it local storage -> do nothing.
  saveRandomNum$ = createEffect(() => this.actions$
    .pipe(
      ofType(guessingGameActions.getGeneratedRandomNum),
      tap(a => localStorage.setItem('randomNum', a.randomNum.toString()))
    ), {
    dispatch: false
  });
}
