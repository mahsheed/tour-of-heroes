import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreInventoryComponent } from './store-inventory/store-inventory.component';

// This is where all the routes are added

const routes: Routes = [
  //The first one that the path is empty is the default route
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'store-inventory', component: StoreInventoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}