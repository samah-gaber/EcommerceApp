import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    AppHeaderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ProductsModule,
    CartModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
