import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemComponent } from './cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CartItemComponent
  ]
})
export class CartModule { }
