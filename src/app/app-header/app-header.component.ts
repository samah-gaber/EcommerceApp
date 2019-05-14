import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartSubjectService } from '../services/cart-subject.service';
import { CartProduct } from '../interfaces/cart-product';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user-data';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  cartCount: number = 0;
  cartList: CartProduct[];
  cartTotalSum: number = 0;
  cartListLength: number = 0;
  user: User;
  signedIn: boolean = true;

  constructor(
    private cartService: CartService,
    private subjectService: CartSubjectService,
    private router: Router,
    private authService: AuthService
   ) {
    
  }

  ngOnInit() {
    this.subjectService.cartContentChanged.subscribe(
      (cartContentObj:{
        cartContentKey,
        cartCountKey,
        cartTotalKey
      }) => {
        this.cartList = cartContentObj.cartContentKey;
        this.cartCount = cartContentObj.cartCountKey;
        this.cartTotalSum = cartContentObj.cartTotalKey;
        this.cartListLength = this.cartList.length;
      }
    )
  }

  onSignout() {
    this.router.navigate(['/']);
    this.authService.logout();
  }

}
