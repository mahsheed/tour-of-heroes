import { NgModule }       from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { Form } from '../form';
import { RouterModule, Routes } from '@angular/router';

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
       this.AddSubmissionRes = "Error: The address length should be less than 20 characters";
       this.submitted = false;
    }
    if (this.model.zipcode.length != 5) {
      this.ZipSubmissionRes = "Error: Zipcode must be exactly 5 characters";
      this.submitted = false;
    }
    if (this.model.phone.length >= 12) {
      this.PhonSubmissionRes = "Error: Phone number must be no more than 12 characters";
      this.submitted = false;
    }
    if (this.model.citystatecountry.length < 10) {
      this.CitySubmissionRes = "Error: City, State, Country must be no less than 10 characters";
      this.submitted = false;
    }
    if (this.model.creditcard.match(/^\d{16}$/) === null) {
      this.CreditSubmissionRes = "Error: Credit card must be exactly 16 digits";
      this.submitted = false;
    }
    if (this.model.exp.match(/^(0[1-9]|1[0-2])\/\d{2}$/) === null) {
      this.ExpSubmissionRes = "Error: Credit card expiration must be written in MM/YY format";
      this.submitted = false;
    }
    if (this.submitted == true) {
      if (confirm ("Are you sure you want to submit?")) {
        window.alert ("This form was successfully submitted.");
        window.location.href = "/aboutpage";
      }
      else {
        window.alert ("Submission was cancelled.");
      }
    }
  }
}