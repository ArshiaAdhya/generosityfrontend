import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarReceiveComponent } from '../navbar-receive/navbar-receive.component';

@Component({
  selector: 'app-profile-page-ngos',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarReceiveComponent,
  ],
  template: `
    <div class="sticky top-0">
    <app-navbar-receive> </app-navbar-receive>
    </div>
    <div class="bg-indigo-950 flex md:flex-row sm:flex-col sm:items-center justify-between items-center">
      <div class="bg-white my-6 md:ml-8 border-blue-800 border rounded-lg p-1 flex flex-col items-center w-1/2 max-h-1/2 shadow-lg">
        <div class="w-1/2 my-5 rounded-2xl overflow-hidden shadow-xl">
          <img src="https://th.bing.com/th/id/R.68cc4dc90244fc4b3c60a94eab440a01?rik=KXIvDa5ooDwgbw&riu=http%3a%2f%2fthoughtcatalog.com%2fwp-content%2fuploads%2f2014%2f03%2fshutterstock_95286856.jpg&ehk=sOQ1HohLDPHq6SPV6rXBreBB8X0hhoxQPLJRs8h%2ffY4%3d&risl=&pid=ImgRaw&r=0" alt="">
        </div>
        <p class="p-2 ">NGO</p>
        <p class="p-2 ">ngo&#64;gmail.com</p>
        <p class="p-2 text-center">Weekend Street, Portland, Oregon, United States</p>
      </div>
      <div class="flex flex-col w-full items-center ">
      <div class="bg-white m-6 border-blue-800 border rounded-lg p-4 flex flex-col items-center w-1/2 shadow-lg">
        <div class="flex flex-col items-center">
        <div class="p-4 border-l-2 border-t-2 ">
        Dedicated to social impact, our NGO empowers communities through education, healthcare, and sustainable development projects. Committed to fostering positive change, we strive for a brighter, equitable future for all.        </div>
        <p class="p-4 ">Rating</p>
        <div class="p-4 " >Payment Information</div>
        </div>
        <div class="flex flex-col items-center">
        </div>
        
      </div>
      <div class="bg-white m-6 mb-30 border-blue-800 border rounded-lg p-4 flex flex-col items-center w-1/2 shadow-lg">
          Transactions Made
      </div>
      </div>
    </div>
    <app-footer> </app-footer>
  `,
  styleUrl: './profile-page-ngos.component.css'
})
export class ProfilePageNgosComponent {

}
