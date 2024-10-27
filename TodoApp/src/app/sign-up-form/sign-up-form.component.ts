// Dynamically set the value of standard DOM properties on a HTML element, the
// property is wrapped in square brackets to inform Angular that the declared value should
// be interpreted as a JavaScript statement.

// Dynamically bind custom HTML attributes, you might be inclined to wrap the custom attributes
// with the same square brackets.

import { Component } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  template: `
    <button [attr.data-test-id]="testId">Primary CTA</button>
    <button type="submit" [disabled]="formIsInvalid">Submit</button>
  `,
})
export class SignUpForm {
  formIsInvalid = true;
  testId = 'main-cta';
}
