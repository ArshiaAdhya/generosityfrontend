import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [

    AboutUsComponent,

  ],
  template: `
  <div class="bg-white mb-3 p-2 shadow-xl border-b-blue-800 h-10 w-full flex flex-row justify-evenly items-center">
    <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300"><a>About Us</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300"><a>Our Mission</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300"><a>Core Values</a></button> <button class= "h-10 p-2 hover:shadow-xl border-blue-800 border-05 ease-in duration-300"><a>Login</a></button> 
  </div>
  `,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
