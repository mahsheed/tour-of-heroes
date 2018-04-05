import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styleUrls: ['./store-inventory.component.css']
})
export class StoreInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Store Inventory1';
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}