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
  blkBtnText2 = "Remove from Basket";
  grnbtnDisabled = false;
  grnBtnText = "Add to Basket";
  grnBtnText2 = "Remove from Basket";
  prpbtnDisabled = false;
  prpBtnText = "Add to Basket";
  prpBtnText2 = "Remove from Basket";
  brnbtnDisabled = false;
  brnBtnText = "Add to Basket";
  brnBtnText2 = "Remove from Basket";
  
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
      if (this.grnQuantity == 0) {
        this.grnbtnDisabled = true;
        this.grnBtnText = "Out of Stock";
      if (this.grnQuantity > 0) {
        this.grnbtnDisabled = false;
      }
      }
      this.shoppingPrice = this.shoppingPrice + this.grnPrice;
    }
    else if (color == 'purple') {
      this.prpQuantity = this.prpQuantity - 1;
      if (this.prpQuantity == 0) {
        this.prpbtnDisabled = true;
        this.prpBtnText = "Out of Stock";
      }
      this.shoppingPrice = this.shoppingPrice + this.prpPrice;
    }
    else if (color == 'brown') {
      this.brnQuantity = this.brnQuantity - 1;
      if (this.brnQuantity == 0) {
        this.brnbtnDisabled = true;
        this.brnBtnText = "Out of Stock";
      }
      this.shoppingPrice = this.shoppingPrice + this.brnPrice;
    }
    console.log(this.shoppingPrice);
    }
  }
  