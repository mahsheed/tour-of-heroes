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
  model = new Form('', '', '', '', '', '', '');
  finalValue = new Form('', '', '', '', '', '', '');
  AddSubmissionRes = "";
  ZipSubmissionRes = "";
  PhonSubmissionRes = "";
  CitySubmissionRes = "";
  CreditSubmissionRes = "";
  ExpSubmissionRes = "";
  submitted = false;
  resetSubmissionValues() {
    this.AddSubmissionRes = "";
    this.ZipSubmissionRes = "";
    this.PhonSubmissionRes = "";
    this.CitySubmissionRes = "";
    this.CreditSubmissionRes = "";
    this.ExpSubmissionRes = "";
  }
  onSubmit() {
    this.resetSubmissionValues();
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.model.name);
    if (this.model.address.length > 20) {
       this.AddSubmissionRes = "Error: the address length should be less than 20 characters";
    }
    if (this.model.zipcode.length != 5) {
      this.ZipSubmissionRes = "Error: zipcode must be exactly 5 characters";
    }
    if (this.model.phone.length >= 12) {
      this.PhonSubmissionRes = "Error: phone number must be no more than 12 characters";
    }
    if (this.model.citystatecountry.length < 10) {
      this.CitySubmissionRes = "Error: City, State, Country must be no less than 10 characters";
    }
    if (this.model.creditcard.length != 16) {
      this.CreditSubmissionRes = "Error: Credit card must be exactly 16 characters";
    }
    if (this.model.exp.length != 4) {
      this.ExpSubmissionRes = "Error: Credit card expiration must be written in MMYY format";
    }
  }
  constructor() { }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}