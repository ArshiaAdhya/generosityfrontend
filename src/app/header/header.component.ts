import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

<div class="image-container" style="display: flex; justify-content: center; align-items: center; height: 60vh;">
    <img src="/assets/4.png" alt="Beautiful Image" style="max-width: 100%; max-height: 100%; ">
  </div>

<div class="container mx-auto py-8">
  <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
    <!-- <h2 class="text-lg font-semibold mb-4">Quotes to Inspire Donation:</h2> -->
    <ul class="list-disc pl-6">
      "The meaning of life is to find your gift. The purpose of life is to give it away." - Pablo Picasso     <!-- <li class="mb-2">"No one has ever become poor by giving." - Anne Frank</li> -->
      <!-- <li class="mb-2">"We make a living by what we get, but we make a life by what we give." - Winston Churchill</li> -->
      <!-- <li class="mb-2">"The best way to find yourself is to lose yourself in the service of others." - Mahatma Gandhi</li> -->
      <!-- <li class="mb-2">"To give away money is an easy matter and in any man's power. But to decide to whom to give it and how large and when, and for what purpose and how, is neither in every man's power nor an easy matter." - Aristotle</li> -->
    </ul>
  </div>
</div>

 


  <div class="button-container">
    <button class="button">Donate Now</button>
    <button class="button">Register as an Organization</button>
  </div>


  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
