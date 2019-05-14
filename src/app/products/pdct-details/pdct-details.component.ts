import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interfaces/product-interface';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-pdct-details',
  templateUrl: './pdct-details.component.html',
  styleUrls: ['./pdct-details.component.scss']
})
export class PdctDetailsComponent implements OnInit {

  @Input() productDetails: Product;
  @Input() cardCartCount;
  @Output() passCart = new EventEmitter();

  constructor( 
    public activeModal: NgbActiveModal,
    private cartCountService: CartService
   ) { }

  ngOnInit() {
  }
  // ngOnDestroy(): void {
  //   this.activeModal.close('Modal Closed');
  // }

  passBack() {
    this.passCart.emit(this.cardCartCount);
    }

  addToCart() {
    this.cardCartCount = 1;
    this.cartCountService.FirstAddToCart(this.productDetails);
  }

  decrementCart(pdctId) {
    this.cardCartCount -= 1;
    this.cartCountService.CartCountMinus(this.productDetails);
  }

  incrementCart(pdctId) {
    this.cardCartCount += 1;
    this.cartCountService.CartCountPlus(this.productDetails);
  }

}
