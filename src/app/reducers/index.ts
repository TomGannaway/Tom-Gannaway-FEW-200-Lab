
import * as fromRandomInt from './guessing-game.reducer';
import { ActionReducerMap, createSelector } from '@ngrx/store';

export interface AppState {
  randomNum: fromRandomInt.RandomNumState;
}

export const reducers: ActionReducerMap<AppState> = {
  randomNum: fromRandomInt.reducer
};

const selectRandomNum = (state: AppState) => state.randomNum;
export const getRandomNum = createSelector(selectRandomNum, b => b.randomNum);
