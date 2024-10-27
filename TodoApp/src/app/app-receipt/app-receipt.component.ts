import { Component, inject } from '@angular/core';
import { CalculatorService } from '../calculator-service/calculator.service';

@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculatortService = inject(CalculatorService);
  totalCost = this.calculatortService.add(50, 25);
}
