import { Injectable } from '@angular/core';
import { CartSubjectService } from './cart-subject.service';
import { CartProduct } from '../interfaces/cart-product';
import { Product } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartCount = 0;
  cartContent: CartProduct[] = [];
  cartContentTotalPrice: number = 0;

  constructor( private subjectService: CartSubjectService ) {
  }

  subjectServiceFun() {
    this.cartCount = this.calculateCartTotalCount(this.cartContent);
    this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectService.cartContentChanged.next({
      cartContentKey: this.cartContent,
      cartCountKey: this.cartCount,
      cartTotalKey: this.cartContentTotalPrice
    });
  }

  FirstAddToCart(pdct: Product) {
    this.cartContent.push({
      product: pdct,
      count: 1
    });
    // this.cartCount += 1;
    // this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectServiceFun();
    // this.subjectService.cartContentChanged.next({
    //   cartContentKey: this.cartContent,
    //   cartCountKey: this.cartCount,
    //   cartTotalKey: this.cartContentTotalPrice
    // });
  }
  
  CartCountPlus(pdct: Product) {
    this.cartContent.forEach(element => {
      if ( pdct.id === element.product.id ) {
        element.count += 1;
      }
    });
    // this.cartCount += 1;
    // this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectServiceFun();
    // this.subjectService.cartContentChanged.next({
    //   cartContentKey: this.cartContent,
    //   cartCountKey: this.cartCount,
    //   cartTotalKey: this.cartContentTotalPrice
    // });
    
  }
  
  CartCountMinus(pdct: Product) {
    this.cartContent.forEach( (element, index) => {
      if ( pdct.id === element.product.id ) {
        if ( element.count === 1 ) {
          this.cartContent.splice( index, 1 );
        }
        if ( element.count > 1 ) {
          element.count -= 1;
        }
      }
    });
    // this.cartCount -= 1;
    // this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectServiceFun();
    // this.subjectService.cartContentChanged.next({
    //   cartContentKey: this.cartContent,
    //   cartCountKey: this.cartCount,
    //   cartTotalKey: this.cartContentTotalPrice
    // });
  }

  removeFromCart( cartRemovePdct: CartProduct ) {
    const itemCount = cartRemovePdct.count;
    const itemIndex = this.cartContent.indexOf(cartRemovePdct);
    this.cartContent.splice(itemIndex, 1);
    // this.cartCount -= itemCount;
    // this.cartCount = this.calculateCartTotalCount(this.cartContent);
    // this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectServiceFun();
    // this.subjectService.cartContentChanged.next({
    //   cartContentKey: this.cartContent,
    //   cartCountKey: this.cartCount,
    //   cartTotalKey: this.cartContentTotalPrice
    // });
  }

  setCartCount( adjustedCartPdct: CartProduct ) {
    this.cartContent.forEach(element => {
      if ( adjustedCartPdct.product.id === element.product.id ) {
        element.count = adjustedCartPdct.count;
      }
    });
    this.cartCount = this.calculateCartTotalCount(this.cartContent);
    // this.cartContentTotalPrice = this.calculateCartTotalSum( this.cartContent );
    this.subjectServiceFun();
    // this.subjectService.cartContentChanged.next({
    //   cartContentKey: this.cartContent,
    //   cartCountKey: this.cartCount,
    //   cartTotalKey: this.cartContentTotalPrice
    // });
  }

  calculateCartTotalSum(pdctArr) {
    var sum: number = 0;
    pdctArr.forEach(element => {
      sum += ( element.count * element.product.price );
    });
    return sum;
  }

  calculateCartTotalCount(pdctArr) {
    var sum: number = 0;
    pdctArr.forEach(element => {
      sum += +element.count;
    });
    return sum;
  }

  returnCartCount() {
    return this.cartCount;
  }

  returnCartContent() {
    return this.cartContent;
  }

  returnCartContentTotalPrice() {
    return this.cartContentTotalPrice;
  }

}
