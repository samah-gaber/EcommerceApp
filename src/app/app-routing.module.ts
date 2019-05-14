import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CartComponent } from './cart/cart.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SinglePdctComponent } from './products/single-pdct/single-pdct.component';
import { PdctDetailsComponent } from './products/pdct-details/pdct-details.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    // path: 'products', loadChildren: './products/products.module.ts#ProductsModule'
    path: '', component: ProductsComponent, children: [
      { path: 'pdctdetails', component: PdctDetailsComponent }
    ]
  },
  {
    path: 'signin', component: LoginFormComponent
  },
  {
    path: 'signup', component: SignupFormComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'order', component: OrderComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
