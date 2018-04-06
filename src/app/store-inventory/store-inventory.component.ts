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
  blkQuantity = 5;
  cartBlkQuantity = 0;
  blkbtnDisabled = false;
  blkbtnDisabled2 = true;
  blkBtnText = "Add to Basket";
  blkBtnText2 = "Remove from Basket";

  grnPrice = 1.33;
  grnQuantity = 4;
  cartGrnQuantity = 0;
  grnbtnDisabled = false;
  grnbtnDisabled2 = true;
  grnBtnText = "Add to Basket";
  grnBtnText2 = "Remove from Basket";

  prpPrice = 22.33;
  prpQuantity = 3;
  cartPrpQuantity = 0;
  prpbtnDisabled = false;
  prpbtnDisabled2 = true;
  prpBtnText = "Add to Basket";
  prpBtnText2 = "Remove from Basket";
  
  brnPrice = 5.22;
  brnQuantity = 2;
  cartBrnQuantity = 0;
  brnbtnDisabled = false;
  brnbtnDisabled2 = true;
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
  removeItemFromCart(color) {
    console.log(color);
    if (color == 'black') {
      this.cartBlkQuantity--;
      this.blkQuantity++;
      if (this.cartBlkQuantity == 0) {
        this.blkbtnDisabled2 = true;
      }
      if (this.blkQuantity > 0) {
        this.blkbtnDisabled = false;
        this.blkBtnText = "Add to Basket";
      }
      this.shoppingPrice = this.shoppingPrice - this.blkPrice;
    }
    if (color == 'green') {
      this.cartGrnQuantity--;
      this.grnQuantity++;
      if (this.cartGrnQuantity == 0) {
        this.grnbtnDisabled2 = true;
      }
      if (this.grnQuantity > 0) {
        this.grnbtnDisabled = false;
        this.grnBtnText = "Add to Basket";
      }
      this.shoppingPrice = this.shoppingPrice - this.grnPrice;
    }
    if (color == 'purple') {
      this.cartPrpQuantity--;
      this.prpQuantity++;
      if (this.cartPrpQuantity == 0) {
        this.prpbtnDisabled2 = true;
      }
      if (this.prpQuantity > 0) {
        this.prpbtnDisabled = false;
        this.prpBtnText = "Add to Basket";
      }
      this.shoppingPrice = this.shoppingPrice - this.prpPrice;
    }
    if (color == 'brown') {
      this.cartBrnQuantity--;
      this.brnQuantity++;
      if (this.cartBrnQuantity == 0) {
        this.brnbtnDisabled2 = true;
      }
      if (this.brnQuantity > 0) {
        this.brnbtnDisabled = false;
        this.brnBtnText = "Add to Basket";
      }
      this.shoppingPrice = this.shoppingPrice - this.brnPrice;
    }
  }
  addItemToCart(color) {
    console.log(color);
    if (color == 'black') {
      this.blkQuantity = this.blkQuantity - 1;
      this.cartBlkQuantity++;
      if (this.blkQuantity == 0) {
        this.blkbtnDisabled = true;
        this.blkBtnText = "Out of Stock";
      }
      if (this.cartBlkQuantity > 0) {
        this.blkbtnDisabled2 = false;
      }
      this.shoppingPrice = this.shoppingPrice + this.blkPrice;
    }
    else if (color == 'green') {
      this.grnQuantity = this.grnQuantity - 1;
      this.cartGrnQuantity++;
      if (this.grnQuantity == 0) {
        this.grnbtnDisabled = true;
        this.grnBtnText = "Out of Stock";
      }
      if (this.cartGrnQuantity > 0) {
        this.grnbtnDisabled2 = false;
      }
      this.shoppingPrice = this.shoppingPrice + this.grnPrice;
    }
    else if (color == 'purple') {
      this.prpQuantity = this.prpQuantity - 1;
      this.cartPrpQuantity++;
      if (this.prpQuantity == 0) {
        this.prpbtnDisabled = true;
        this.prpBtnText = "Out of Stock";
      }
      if (this.cartPrpQuantity > 0) {
        this.prpbtnDisabled2 = false;
      }
      this.shoppingPrice = this.shoppingPrice + this.prpPrice;
    }
    else if (color == 'brown') {
      this.brnQuantity = this.brnQuantity - 1;
      this.cartBrnQuantity++;
      if (this.brnQuantity == 0) {
        this.brnbtnDisabled = true;
        this.brnBtnText = "Out of Stock";
      }
      if (this.cartBrnQuantity > 0) {
        this.brnbtnDisabled2 = false;
      }
      this.shoppingPrice = this.shoppingPrice + this.brnPrice;
    }
    console.log(this.shoppingPrice);
    }
  }
  