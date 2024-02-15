import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  template: `
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Generosity';

  ngOnInit(): void {
    initFlowbite();
  }
}
