import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-donate-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div id="donate-main" class ="flex flex-col justify-center items-center bg-blue-800 float-left w-full" style="font-family: Bree-Serif;">
      <p class="text-white p-4 ">Sign-up to start donating</p>
      <form class="flex flex-col justify-center">
        <input type="name" placeholder="Email Address" class="p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-xl ease-in duration-300" ><br>
        <input type="password" placeholder="Username" class="p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-xl ease-in duration-300"><br>
        <button class="bg-white p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-2xl ease-in duration-300">SIGN UP</button><br>
        <p class="text-white text-center">OR</p><br>
        <div class="flex flex-row items-center justify-between">
        <button class="bg-white m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300">Sign-up with Google</button>
        <button class="bg-white m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300">Sign-up with X</button>
        <button class="bg-white m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300">Sign-up with Meta</button>
        </div>
        <div class="text-center text-white">Already a user? <a href="#">Sign-in</a></div>
      </form>
    </div>
  `,
  styleUrl: './donate-page.component.css'
})
export class DonatePageComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.fadeIn(); // Initial fadeIn when component is loaded
  }

  fadeIn() {
    const donateMain = this.el.nativeElement.querySelector('#donate-main');
    this.renderer.setStyle(donateMain, 'opacity', '0');
    this.renderer.setStyle(donateMain, 'transition', 'opacity 0.5s ease-in-out');

    setTimeout(() => {
      this.renderer.setStyle(donateMain, 'opacity', '1');
    }, 0);
  }

    

    fadeOut() {
      const donateMain = this.el.nativeElement.querySelector('#donate-main');
      this.renderer.setStyle(donateMain, 'opacity', '0');
      this.renderer.setStyle(donateMain, 'transition', 'opacity 1s ease-in-out');
  
      setTimeout(() => {
        this.renderer.setStyle(donateMain, 'opacity', '1');
      }, 0);
    }
  
    onUnload(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.fadeOut();
    }
}