import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/guessing-game.actions';

export interface RandomNumState {
  randomNum: number;
}

const initialState: RandomNumState = {
  randomNum: 1
};

const reducerHelper = createReducer(
  initialState,
  on(actions.generateRandomNum, (s) => ({ ...s, randomNum: Math.floor(Math.random() * 10) + 1 })), // Object Spread Operator
  on(actions.getGeneratedRandomNum, (s, a) => ({ ...s, randomNum: a.randomNum }))
);

// when an action is dispatched, it is given the current state, the action, and it must return a new state.
export function reducer(state: RandomNumState = initialState, action: Action) {
  return reducerHelper(state, action);
}
