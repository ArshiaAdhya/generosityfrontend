import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
<!-- footer.component.html -->

<footer class="bg-blue-800 text-white py-12 flex flex-col items-center align-middle">
  <div class="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center align-middle">
    <div class="flex flex-col items-center">
      <img src="../assets/Generosity_logo.png" alt="Logo" class="h-80 mr-4 ">
    </div>
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
  </div>
  <br><br>
  <div class="mt-20">
    <div class="flex items-center">
      <div class="mr-4">
        <a href="#" class=" text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-meta" viewBox="0 0 24 18">
        <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.614-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.136 0 .27.018Z"/>
        </svg>
        </a>
      </div>
      <div class="mr-4">
        <a href="#" class="text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-twitter-x" viewBox="0 0 24 18">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
        </a>
      </div>
      <div>
        <a href="#" class="text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="white" class="bi bi-linkedin" viewBox="0 0 24 18">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
        </a>
      </div>
    </div> 
  </div>

  <p class="mt-3 -mb-3 p-5 font-extralight text-xs">&copy; 2024 Generosity: All rights reserved</p>
</footer>

  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
