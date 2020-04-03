import { Component, OnInit } from '@angular/core';
import { TipService } from 'src/app/services/tip.service';
import { MealModel } from 'src/app/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  mealHistory: MealModel[] = [];
  constructor(private service: TipService) { }

  ngOnInit(): void {
    this.mealHistory = this.service.getMeals();
  }
}
