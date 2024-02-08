import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-receive-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div id="receive-main" class ="flex flex-col justify-center items-center bg-white float-left w-full" style="font-family: Bree-Serif;">
      <p class="text-blue-800 p-4 ">Sign-up as an NGO</p>
      <form class="flex flex-col justify-center">
        <input type="name" placeholder="Reg. No" class="bg-blue-800/20 text-blue-800  p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-xl ease-in duration-300" ><br>
        <input type="password" placeholder="Name" class="bg-blue-800/20 text-blue-800  p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-xl ease-in duration-300"><br>
        <button class="bg-blue-800 p-2 rounded-sm hover:border-black hover:border-1 hover:shadow-2xl ease-in duration-300 text-white">CONTINUE</button><br>
        <p class=" text-blue-800 text-center">OR</p><br>
        <div class="flex flex-row items-center justify-between">
        <button class="bg-blue-800 m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300 text-white">Sign-up with whatever</button>
        <button class="bg-blue-800 m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300 text-white">Sign-up with X</button>
        <button class="bg-blue-800 m-3 p-4 rounded-sm hover:shadow-2xl ease-in duration-300 text-white">Sign-up with Meta</button>
        </div>
        <div class="text-center">Already a user? <a href="#">Sign-in</a></div>
      </form>
    </div>
  `,
  styleUrl: './receive-page.component.css'
})
export class ReceivePageComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.fadeIn(); // Initial fadeIn when component is loaded
  }

  fadeIn() {
    const donateMain = this.el.nativeElement.querySelector('#receive-main');
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
}
