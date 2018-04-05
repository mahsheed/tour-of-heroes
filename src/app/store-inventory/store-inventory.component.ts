import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-inventory',
  templateUrl: './store-inventory.component.html',
  styleUrls: ['./store-inventory.component.css']
})
export class StoreInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.shoppingPrice = 0;
  }
  title = 'Store Inventory1';
  count: number = 0;
  blkPrice = 1.22;
  grnPrice = 1.33;
  prpPrice = 22.33;
  brnPrice = 5.22;
  blkQuantity = 5;
  grnQuantity = 4;
  prpQuantity = 3;
  brnQuantity = 2;
  blkbtnDisabled = false;
  blkBtnText = "Add to Basket";
  shoppingPrice;

  increment() {
    this.count++;
    console.log('hello');

  }
  decrement() {
    this.count--;
    console.log('hello');
  }
  addItemToCart(color) {
    console.log(color);
    if (color == 'black') {
      this.blkQuantity = this.blkQuantity - 1;
      if (this.blkQuantity == 0) {
        this.blkbtnDisabled = true;
        this.blkBtnText = "Out of Stock";
      }
      this.shoppingPrice = this.shoppingPrice + this.blkPrice;
    }
    else if (color == 'green') {
      this.grnQuantity = this.grnQuantity - 1;
      this.shoppingPrice = this.shoppingPrice + this.grnPrice;
    }
    else if (color == 'purple') {
      this.prpQuantity = this.prpQuantity - 1;
      this.shoppingPrice = this.shoppingPrice + this.prpPrice;
    }
    else if (color == 'brown') {
      this.brnQuantity = this.brnQuantity - 1;
      this.shoppingPrice = this.shoppingPrice + this.brnPrice;
    }
    console.log(this.shoppingPrice);
  }
}