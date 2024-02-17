import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
<!-- footer.component.html -->
<footer class="bg-blue-800 text-white py-12">
  <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div class="flex flex-wrap items-center">
      <div class="mx-4 my-2">
        <a href="#" class="text-gray-300 hover:text-white">Home</a>
      </div>
      <div class="mx-4 my-2">
        <a href="#" class="text-gray-300 hover:text-white">About</a>
      </div>
      <div class="mx-4 my-2">
        <a href="#" class="text-gray-300 hover:text-white">Services</a>
      </div>
      <div class="mx-4 my-2">
        <a href="#" class="text-gray-300 hover:text-white">Contact</a>
      </div>
    </div>
  
    <div class="mt-8 md:mt-0 flex items-center">
      <div class="mr-4">
        <a href="#" class="text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-meta" viewBox="0 0 24 18">
            <!-- SVG content -->
          </svg>
        </a>
      </div>
      <div class="mr-4">
        <a href="#" class="text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-twitter-x" viewBox="0 0 24 18">
            <!-- SVG content -->
          </svg>
        </a>
      </div>
      <div>
        <a href="#" class="text-gray-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-linkedin" viewBox="0 0 24 18">
            <!-- SVG content -->
          </svg>
        </a>
      </div>
    </div>
  </div>

  <p class="mt-3 text-center text-xs">&copy; 2024 Generosity. All rights reserved.</p>
</footer>


  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
