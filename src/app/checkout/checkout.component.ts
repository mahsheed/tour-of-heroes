import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { Form }    from '../form';

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

export class CheckoutComponent {
  model = new Form('Name', 'Address', 30062, 5555555555, 'City, State, Country',22,2);
  submitted = false;
  onSubmit() { this.submitted = true; }
  constructor() { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}