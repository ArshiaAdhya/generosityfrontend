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
    
    <div class="flex flex-col">
      <div class="sticky top-0">
      <app-navbar-main> </app-navbar-main>
      </div>
    
    <div id="donate-main" class ="flex flex-col justify-center items-center float-left w-full" style="font-family: Bree-Serif;">
      <!-- <p class=" p-4 ">Donate here</p> -->
      <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-center items-center w-full">
        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" class="w-1/2">
        <button Class="bg-blue-800 px-6 w-1/2 py-3 rounded-lg mt-3 text-white text-md font-bold">Upload Image</button>
        </div>
        <div class=" w-full p-4">
          <form class="flex flex-col justify-end">
            <label for="title" class="text-lg font-semibold">Name of the Item:</label>
            <input name="title" placeholder="Title" class="focus:border-blue-800 border border-blue-300 p-4 m-4 focus:outline-none focus:border-2 rounded-lg"><br>
            <label for="category" class="text-lg font-semibold">Category of the Item:</label>
            <input name="category" placeholder="Category " class="focus:border-blue-800 border border-blue-300 p-4 m-4 focus:outline-none focus:border-2 rounded-lg"><br>
            <label for="location" class="text-lg font-semibold">Age of the Item:</label>
            <input name="location" placeholder="Age" class="focus:border-blue-800 border border-blue-300 p-4 m-4 focus:outline-none focus:border-2 rounded-lg"><br>
            <label for="location" class="text-lg font-semibold">Location of the owner:</label>
            <input name="location" placeholder="Location" class="focus:border-blue-800 border border-blue-300 p-4 m-4 focus:outline-none focus:border-2 rounded-lg"><br>
            <label for="desc" class="text-lg font-semibold">Provide a short description of the item:</label>
            <textarea name="desc" placeholder="Description" class="focus:border-blue-800 border border-blue-300 p-4 m-4 focus:outline-none focus:border-2 rounded-lg"></textarea>
          </form>
        </div>
      </div>
    </div>
    <app-footer> </app-footer>
    </div>
    

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