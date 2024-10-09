import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { LoginPageComponent } from '../login/login-page/login-page.component';
import { RegisterPageComponent } from '../register/register-page/register-page.component';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { CartPageComponent } from '../cart/cart-page/cart-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full"
  },
  {
    path:"products",
    component:ProductListComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"cart",
    component:CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
