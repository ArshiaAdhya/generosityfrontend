import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
import { Router } from '@angular/router'; // Import essential Router module
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    AboutUsComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
  <div class="bg-blue-800 mb-3 p-2 shadow-xl border-b-blue-800 h-10 w-full flex flex-row justify-evenly items-center">
    <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300 text-white"><a [routerLink]="['/']" routerLinkActive="router-link-active" >About Us</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300 text-white"><a [routerLink]="['/']">Our Mission</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300 text-white"><a [routerLink]="['/']">Core Values</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300 text-white"><a [routerLink]="['/login_or_signup']" routerLinkActive="router-link-active" >Login</a></button> 
  </div>
  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router) {} // Inject Router in constructor

  navigateToLogin() {
  this.router.navigate(['/login']); // Replace with your actual login route path
  }
}
