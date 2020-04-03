import { Component, OnInit } from '@angular/core';
import { AppState, getRandomNum } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as actions from '../../actions/guessing-game.actions';

@Component({
  selector: 'app-guessing-game',
  templateUrl: './guessing-game.component.html',
  styleUrls: ['./guessing-game.component.css']
})
export class GuessingGameComponent implements OnInit {
  retrievedRandomNum$: Observable<number>;
  randomNumSub: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.retrievedRandomNum$ = this.store.select(getRandomNum);
  }

  pickANumber() {
    this.store.dispatch(actions.generateRandomNum());
  }

  evaluateGuess() {
    const n = actions.generateRandomNum();
    console.log('The random number generated is ' + localStorage.getItem('randomNum'));
    console.log('The random number retrieved is ' + localStorage.getItem('retrievedRandomNum'));
  }
}
