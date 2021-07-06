import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout2/checkout2.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    Checkout2Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
