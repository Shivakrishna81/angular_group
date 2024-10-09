import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from '../products/products.module';
import { HomeModule } from '../home/home.module';
import { CartModule } from '../cart/cart.module';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HomeModule,
    CartModule,
    LoginModule,
    RegisterModule,
    
  ],
  // exports:[ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
