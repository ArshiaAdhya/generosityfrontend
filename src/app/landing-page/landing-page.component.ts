import { CommonModule } from '@angular/common';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutUsComponent,
    NavBarComponent,
    FooterComponent,
  ],
  template: `
    <div>
    <div style = " position: sticky; top: 0; z-index : 100">
    <app-nav-bar></app-nav-bar>
    </div>
    <app-header></app-header>
    <app-about-us></app-about-us>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  
}