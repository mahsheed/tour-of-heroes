import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ]
})

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
