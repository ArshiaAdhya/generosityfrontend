import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
  ],
  template: `
    <app-nav-bar> </app-nav-bar>
    <div class="flex flex-col items-center w-full">
    <div class = "flex flex-col items-center">
      <p class="font-bold text-3xl p-4">Contact us</p>
      <p class="text-center p-8">We would love to hear from you. Contact us with any questions, comments or enquiries. Your support and feedback are important to us</p>
    </div>
    <div class="md:flex md:flex-row justify-between sm:flex sm:flex-col sm:items-center sm:w-full">
      <div class="w-1/2 flex flex-col justify-around">
        <img src="/assets/Contact-us.jpg">
        <div class="text-center py-6 font-light text-xl">
          Timings:<br>
          Monday, Tuesday: 08:30 AM - 05:30 PM<br>
          Wednesday, Thursday, Friday: 09:15 AM - 06:15 PM<br>
          Saturday, Sunday: 09:30 AM - 06:30 PM<br>
        </div>
      </div>
      <!-- class="flex flex-column items-center" -->
      <div class="w-1/2" style="display: flex; flex-direction: column; align-items: end;">
          <p class ="text-left w-full p-4 font-thin text-2xl"><legend>Generosity Headquarters</legend></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="First Name" >First Name</label><br></p>
          <p class="w-full px-8"><input name="First Name" type="text" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="Last Name" >Last Name</label><br></p>
          <p class="w-full px-8"><input name="Last Name" type="text" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="email" >Email</label><br></p>
          <p class="w-full px-8"><input name="email" type="email" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="phone" >Phone</label><br></p>
          <p class="w-full px-8"><input name="phone" type="number" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="subject" >Subject</label><br></p>
          <p class="w-full px-8"><input name="subject" type="text" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          <p class="text-left w-full p-8 font-thin text-xl"><label for="Message" >Message</label><br></p>
          <p class="w-full p-8"><input name="Message" type="text" class="w-full bg-transparent focus:outline-none border-x-0 border-t-0 border-b-blue-800 border-b-2"><br></p>
          
      </div>
    </div>
    </div>
    <app-footer> </app-footer>
  
  `,
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
