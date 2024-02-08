import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="mb-2 w-full h-48 flex justify-center items-center flex-col relative overflow-hidden"> 
    <img src="../assets/Generosity_logo.png" class="relative object-cover h-80 " > 
    <p style="font-family: Quintessential;" class="text-blue-700/80 pb-3 mb-5 absolute right-50% transform translate-y-2 top-40 z-10">Fueling Hope; Inspiring Change</p>   
  </div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
