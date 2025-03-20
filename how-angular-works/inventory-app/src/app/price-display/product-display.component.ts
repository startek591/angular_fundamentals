import { Component, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  standalone: true,
  template: `<div class="price-display">\${{ price }}</div>`,
})
export class PriceDisplayComponent {
  @Input() price!: number;
}
