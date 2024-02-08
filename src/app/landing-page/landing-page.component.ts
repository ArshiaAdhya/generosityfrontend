import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { DonatePageComponent } from '../donate-page/donate-page.component';
import { HeaderComponent } from '../header/header.component';
import { ReceivePageComponent } from '../receive-page/receive-page.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    DonatePageComponent,
    HeaderComponent,
    ReceivePageComponent,
    AboutUsComponent,
    NavBarComponent,
  ],
  template: `
    <div>
    <div style = " position: sticky; top: 0; z-index : 100">
    <app-nav-bar></app-nav-bar>
    </div>
    <app-header></app-header>
    <div class="bg-white">
    
    <div id="donate-receive" class= "bg-red-300 flex justify-center">
      <div (click)="reveal1()" class="w-full bg-blue-800 text-white px-4 py-2 rounded-sm flex justify-center items-center">Donate</div>
      <div (click)="reveal2()" class="bg-white w-full text-blue-800 px-4 py-2 rounded-sm flex justify-center items-center">Receive</div>
    </div>

    <!-- <div class= "flex flex-row justify-center h-screen"> -->
    <app-donate-page *ngIf="revealedState1 === 'revealed'" > </app-donate-page>
    <app-receive-page *ngIf="revealedState2 === 'revealed'" > </app-receive-page>
    <!-- </div> -->
    <br><br>
    </div>
    <app-about-us></app-about-us>
    </div>
  `,
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  revealedState1 = 'hidden';
  revealedState2 = 'hidden';
  
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  reveal1() {
    const container = this.el.nativeElement.querySelector('#donate-receive');
    const donateButton = container.querySelector('.bg-blue-800');
    const donatePage = container.querySelector('.bg-blue-900');
    this.renderer.setStyle(donateButton, 'transition', 'width 500ms ease-in-out');
    if (this.revealedState1 === 'hidden') {
      this.renderer.addClass(donateButton, 'expanded');
      // this.renderer.setStyle(donateButton, 'transform', 'translateX(0%)');
      this.renderer.setStyle(donateButton, 'z-index', '1');
      // this.renderer.setStyle(donatePage, "opacity",'0');
    } else {
      this.renderer.removeClass(donateButton, 'expanded');
      // this.renderer.setStyle(donateButton, 'transform', 'translateX(0%)');
      this.renderer.setStyle(donateButton, 'z-index', '1');
      // this.renderer.setStyle(donatePage, "opacity",'1');
    }

    this.revealedState1 = this.revealedState1 === 'hidden' ? 'revealed' : 'hidden';
  }  
  
  reveal2() {
    const container = this.el.nativeElement.querySelector('#donate-receive');
    const receiveButton = container.querySelector('.bg-white');
    const donatePage = container.querySelector('.flex bg-white')
    this.renderer.setStyle(receiveButton, 'transition', 'width 500ms ease-in-out');
    if (this.revealedState2 === 'hidden') {
      this.renderer.addClass(receiveButton, 'expanded');
      this.renderer.setStyle(receiveButton, 'z-index', '2');
    } else {
      this.renderer.removeClass(receiveButton, 'expanded');
      this.renderer.setStyle(receiveButton, 'z-index', '0');
    }

    this.revealedState2 = this.revealedState2 === 'hidden' ? 'revealed' : 'hidden';
  }
}