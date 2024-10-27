// Dynamically set the value of standard DOM properties on a HTML element, the
// property is wrapped in square brackets to inform Angular that the declared value should
// be interpreted as a JavaScript statement.

import { Component } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  template: `
    <button type="submit" [disabled]="formIsInvalid">Submit</button>
  `,
})
export class SignUpForm {
  formIsInvalid = true;
}
