import { Component } from '@angular/core';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  template: `
<div class="form-container sign-up-container">
  <form (submit)="handleOnSubmit($event)">
    <h1>Create Account</h1>
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
    <span>or use your email for registration</span>
    <input
      type="text"
      name="name"
      (input)="handleChange($event, 'name')"
      placeholder="Name"
    />
    <input
      type="email"
      name="email"
      (input)="handleChange($event, 'email')"
      placeholder="Email"
    />
    <input
      type="password"
      name="password"
      (input)="handleChange($event, 'password')"
      placeholder="Password"
    />
    <button type="submit">Sign Up</button>
  </form>
</div>

  `,
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  state = {
    name: '',
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

    const { name, email, password } = this.state;
    alert(`You are sign up with name: ${name}, email: ${email}, and password: ${password}`);

    for (const key in this.state) {
      this.state = {
        ...this.state,
        [key]: ''
      };
    }
  }
}
