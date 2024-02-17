import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';

@Component({
  selector: 'app-donate-page',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavbarMainComponent,
  ],
  template: `
    
   
    

  `,
  styleUrl: './donate-page.component.css'
})
export class DonatePageComponent {

  // constructor(private renderer: Renderer2, private el: ElementRef) {}

  // ngAfterViewInit() {
  //   this.fadeIn(); // Initial fadeIn when component is loaded
  // }

  // fadeIn() {
  //   const donateMain = this.el.nativeElement.querySelector('#donate-main');
  //   this.renderer.setStyle(donateMain, 'opacity', '0');
  //   this.renderer.setStyle(donateMain, 'transition', 'opacity 0.5s ease-in-out');

  //   setTimeout(() => {
  //     this.renderer.setStyle(donateMain, 'opacity', '1');
  //   }, 0);
  // }

    

  //   fadeOut() {
  //     const donateMain = this.el.nativeElement.querySelector('#donate-main');
  //     this.renderer.setStyle(donateMain, 'opacity', '0');
  //     this.renderer.setStyle(donateMain, 'transition', 'opacity 1s ease-in-out');
  
  //     setTimeout(() => {
  //       this.renderer.setStyle(donateMain, 'opacity', '1');
  //     }, 0);
  //   }
  
  //   onUnload(): void {
  //     //Called once, before the instance is destroyed.
  //     //Add 'implements OnDestroy' to the class.
  //     this.fadeOut();
  //   }
}