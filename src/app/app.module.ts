import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { AboutpageComponent }   from './aboutpage/aboutpage.component';
import { AppRoutingModule }     from './app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreInventoryComponent } from './store-inventory/store-inventory.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AboutpageComponent,
    CheckoutComponent,
    StoreInventoryComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
