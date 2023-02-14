import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public duration = 5000;
  public value = 84;

  currentLoan = {
    nominal: 500000,
    goal: -30,
    wattGoal: -531,
    rate: 4.2,
    discount: 0.7,
  };
}
