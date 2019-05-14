import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product-interface';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PdctDetailsComponent } from '../pdct-details/pdct-details.component';
import { TargetLocator } from 'selenium-webdriver';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { CartProduct } from '../../interfaces/cart-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-pdct',
  templateUrl: './single-pdct.component.html',
  styleUrls: ['./single-pdct.component.scss']
})
export class SinglePdctComponent implements OnInit {

  cardCartCount = 0;
  cartPdctList: CartProduct[];
  modalOption: NgbModalOptions = {};

  constructor(
    private modalService: NgbModal,
    private cartCountService: CartService,
    private router: Router
  ) { }

  @Input () product: Product;
  @Input () pdctListView: string;

  ngOnInit() {
    this.cartPdctList = this.cartCountService.returnCartContent();
    this.cartPdctList.forEach(elt => {
      if(elt.product.id === this.product.id) {
        this.cardCartCount = elt.count;
      }
    });
  }
  openLg() {
    let pdctName = this.product.name.split(' ').join('-');
    this.router.navigate(['/', 'pdctdetails'], { queryParams: { name: pdctName, id: this.product.id } });
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    this.modalOption.size = 'lg';
    this.modalOption.centered = true;
    const modalRef = this.modalService.open(PdctDetailsComponent, this.modalOption);
    modalRef.componentInstance.productDetails = this.product;
    modalRef.componentInstance.cardCartCount = this.cardCartCount;
    modalRef.componentInstance.passCart.subscribe(
      recievedCount => {
        this.cardCartCount = recievedCount;
      }
    )
  };

  addToCart() {
    this.cardCartCount = 1;
    this.cartCountService.FirstAddToCart(this.product);
  }

  decrementCart(pdctId) {
    this.cardCartCount -= 1;
    this.cartCountService.CartCountMinus(this.product);
  }

  incrementCart(pdctId) {
    this.cardCartCount += 1;
    this.cartCountService.CartCountPlus(this.product);
  }
}
