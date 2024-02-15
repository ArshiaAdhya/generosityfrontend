import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    SignupComponent,
  ],
  template: `
<div class="App">
  <div [class.container]="true" [class.right-panel-active]="type === 'signUp'" id="container">
    <app-signup *ngIf="type === 'signUp'"></app-signup>
    <app-login *ngIf="type === 'signIn'"></app-login>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected, please login</p>
          <button class="ghost" id="signIn" (click)="handleOnClick('signIn')">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello!!</h1>
          <p>Sign-up and contribute to a better world</p>
          <button class="ghost" id="signUp" (click)="handleOnClick('signUp')">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {
  type: string = 'signIn';

  handleOnClick(text: string): void {
    if (text !== this.type) {
      this.type = text;
    }
  }
}
