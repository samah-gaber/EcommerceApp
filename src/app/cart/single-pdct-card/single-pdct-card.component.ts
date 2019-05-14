import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from '../../interfaces/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-single-pdct-card',
  templateUrl: './single-pdct-card.component.html',
  styleUrls: ['./single-pdct-card.component.scss']
})
export class SinglePdctCardComponent implements OnInit {

  @Input() cartPdctDetails: CartProduct;
  // pdctCount: number = this.cartPdctDetails.count;
  constructor( private cartService: CartService ) { }

  ngOnInit() {}

  onPdctCountChange(event) {
    this.cartPdctDetails.count = event.target.value;
    this.cartService.setCartCount(this.cartPdctDetails);
    
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.cartPdctDetails);
  }

}
