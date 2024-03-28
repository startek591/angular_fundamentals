import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-banner',
  template: ` <button [attr.data-test-id]="testId">Primary CTA</button> `,
})
export class AppBanner {
  testId = 'main-cta';
}
