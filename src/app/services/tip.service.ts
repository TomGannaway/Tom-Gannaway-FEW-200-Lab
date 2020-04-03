import { MealModel } from '../models';

export class TipService {

  private meals: MealModel[] = [];

  getMeals() {
    return this.meals;
  }

  addMeal(meal: MealModel) {
    this.meals = [meal, ...this.meals];
  }
}
