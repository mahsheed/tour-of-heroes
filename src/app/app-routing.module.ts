import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent }   from './aboutpage/aboutpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreInventoryComponent } from './store-inventory/store-inventory.component';

// This is where all the routes are added

const routes: Routes = [
  //The first one that the path is empty is the default route
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutpageComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'store-inventory', component: StoreInventoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}