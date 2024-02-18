import { Component } from '@angular/core';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  template: `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="https://www.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg" alt="" />
    </a>
    <div class="p-5">
        <a class= "text-orange-300 border-orange-300 border rounded text-[12px] p-1 ml-[260px] ">
        Category
        </a>
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Item Name</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Item Description</p>
        <div class="flex flex-row justify-between">
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            x years
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Location
        </a>
        </div>
    </div>
</div>

  `,
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

}
