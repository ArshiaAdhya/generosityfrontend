import { Component } from '@angular/core';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-profile-page-donors',
  standalone: true,
  imports: [
    NavbarMainComponent,
    FooterComponent,
  ],
  template: `
    <div class="sticky top-0">
    <app-navbar-main> </app-navbar-main>
    </div>
    <div class="bg-indigo-950 flex md:flex-row sm:flex-col sm:items-center justify-between items-center">
      <div class="bg-white my-6 md:ml-8 border-blue-800 border rounded-lg p-1 flex flex-col items-center w-1/2 max-h-1/2 shadow-lg">
        <div class="w-1/2 my-5 rounded-2xl overflow-hidden shadow-xl">
          <img src="https://th.bing.com/th/id/R.68cc4dc90244fc4b3c60a94eab440a01?rik=KXIvDa5ooDwgbw&riu=http%3a%2f%2fthoughtcatalog.com%2fwp-content%2fuploads%2f2014%2f03%2fshutterstock_95286856.jpg&ehk=sOQ1HohLDPHq6SPV6rXBreBB8X0hhoxQPLJRs8h%2ffY4%3d&risl=&pid=ImgRaw&r=0" alt="">
        </div>
        <p class="p-2 ">John Doe</p>
        <p class="p-2 ">jdk&#64;gmail.com</p>
        <p class="p-2 text-center">Weekend Street, Portland, Oregon, United States</p>
      </div>
      <div class="flex flex-col w-full items-center ">
      <div class="bg-white m-6 border-blue-800 border rounded-lg p-4 flex flex-col items-center w-1/2 shadow-lg">
        <div class="flex flex-col items-center">
        <div class="p-4 border-l-2 border-t-2 ">
        "Hi, I'm John Doe. Passionate about [cause/organization]. I believe in the power of small acts to create big change. Join me in supporting [organization/cause]—together, we can make a difference! - John"
        </div>
        <p class="p-4 ">Rating</p>
        <div class="p-4 " >Payment Information</div>
        </div>
        <div class="flex flex-col items-center">
        </div>
        
      </div>
      <div class="bg-white m-6 mb-30 border-blue-800 border rounded-lg p-4 flex flex-col items-center w-1/2 shadow-lg">
          Donation History
      </div>
      </div>
    </div>
    <app-footer> </app-footer>
  `,
  styleUrl: './profile-page-donors.component.css'
})
export class ProfilePageDonorsComponent {

}
