import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarReceiveComponent } from '../navbar-receive/navbar-receive.component';

@Component({
  selector: 'app-receive-page',
  standalone: true,
  imports: [
    CommonModule,
    ItemCardComponent,
    FooterComponent,
    NavbarReceiveComponent,
  ],
  template: `
  <div class="sticky top-0">
  <app-navbar-receive> </app-navbar-receive>
  </div>
<div class="mx-auto flex flex-col items-center justify-center align-middle">
  
  <div class=" grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center py-8 px-4">
  <app-item-card> </app-item-card>
  <app-item-card> </app-item-card>
  <app-item-card> </app-item-card>
  </div>
</div>
<app-footer> </app-footer>
  `,
  styleUrl: './receive-page.component.css'
})
export class ReceivePageComponent {
  
}
