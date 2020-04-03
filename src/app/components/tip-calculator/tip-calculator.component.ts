import { Component, OnInit } from '@angular/core';
import { TipService } from 'src/app/services/tip.service';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  billAmount = 0;
  tipPercentage = .2;
  amountOfTip = 0;
  totalToBePaid = 0;
  saved: boolean;
  constructor(private service: TipService) { }

  ngOnInit(): void {
  }
  updateAmount(amount: number) {
    console.log(amount);
    this.billAmount = amount;
    this.updateData();
  }

  changeTipAmount(tipPercentage: number) {
    this.tipPercentage = tipPercentage;
    this.updateData();
  }

  updateData() {
    this.amountOfTip = this.billAmount * this.tipPercentage;
    this.totalToBePaid = +this.amountOfTip + +this.billAmount;
    this.saved = false;
  }

  addMeal() {
    this.service.addMeal({
      billAmount: this.billAmount,
      tipAmount: this.amountOfTip,
      totalBill: this.totalToBePaid,
      date: new Date().toISOString(),
      tipPercentage: this.tipPercentage
    });
    this.saved = true;
  }
}
