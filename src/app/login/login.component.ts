import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  template: `
<div class="form-container sign-in-container">
  <form (submit)="handleOnSubmit($event)">
    <h1>Sign in</h1>
    <div class="social-container">
      <a href="#" class="social">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="social">
        <i class="fab fa-google-plus-g"></i>
      </a>
      <a href="#" class="social">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <span>or use your account</span>
    <input
      type="email"
      placeholder="Email"
      name="email"

      (input)="handleChange($event, 'email')"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"

      (input)="handleChange($event, 'password')"
    />
    <a href="#">Forgot your password?</a>
    <button type="submit">Sign In</button>
  </form>
</div>
  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  state = {
    email: '',
    password: ''
  };

  handleChange(event: Event, key: string): void {
    const value = (event.target as HTMLInputElement).value;
    this.state = {
      ...this.state,
      [key]: value
    };
  }

  handleOnSubmit(event: Event): void {
    event.preventDefault();

    const { email, password } = this.state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in this.state) {
      this.state = {
        ...this.state,
        [key]: ''
      };
    }
  }
}
