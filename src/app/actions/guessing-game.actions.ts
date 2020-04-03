import { createAction, props } from '@ngrx/store';

export const generateRandomNum = createAction(
  '[guessing-game] random number generated'
);

export const getGeneratedRandomNum = createAction(
  '[guessing-game] generated random number retrieved',
  props<{ randomNum: number }>()
);
