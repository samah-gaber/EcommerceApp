import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../interfaces/cart-product';
import { CartSubjectService } from '../services/cart-subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  cartList: CartProduct[];
  // cartList: string;
  cartCount: number = 0;
  cartTotalSum: number = 0;
  cartListLength: number = 0;
  cartListObj: CartProduct[];

  constructor( 
    private cartListService: CartService,
    private  subjectService: CartSubjectService,
    private router: Router
  ) { }

  ngOnInit() {}

  ngDoCheck() { 
    this.cartList = this.cartListService.returnCartContent();
    this.cartCount = this.cartListService.returnCartCount();
    this.cartTotalSum = this.cartListService.returnCartContentTotalPrice();
  }
  

  proceedToOrder() {
    this.router.navigate(['/', 'order']);
  }

}
