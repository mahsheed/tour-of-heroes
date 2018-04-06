import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { Form } from '../form';

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
  model = new Form('', '', '', 0, '', '', '');
  finalValue = new Form('', '', '', 0, '', '', '');
  submissionResult = "";
  submitted = false;
  onSubmit() { 
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.model.name);
    if (this.model.address.length > 20) {
       this.submissionResult = "Error: the address length should be less than 20 characters";
    }
    
  }
  constructor() { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}