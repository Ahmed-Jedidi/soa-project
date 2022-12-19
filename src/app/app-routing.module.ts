import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

import { ShopComponent } from './shop/shop.component';

import { HomeComponent } from './home/home.component';
//Page 404
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//Animation
import { OpenCloseComponent } from './open-close/open-close.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: 'pandora', component: OpenCloseComponent,
  },
  {
    path: 'login', component: SignInComponent,
  },
  {
    path: 'logout', component: SignOutComponent,
  },
  {
    path: 'signup', component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "shop", pathMatch: "full" },
      { path: 'shop', component: ShopComponent },
      { path: 'test', component: OpenCloseComponent },
      { path: 'cart', component: CartComponent },


    ]
  },
  {
     path: "**" , component:PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
