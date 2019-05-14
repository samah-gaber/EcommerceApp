import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { SinglePdctCardComponent } from './single-pdct-card/single-pdct-card.component';

@NgModule({
    declarations: [
        CartComponent,
        SinglePdctCardComponent
    ],
    imports: [
      CommonModule
    ],
    exports: [
        CartComponent
    ]
  })
  export class CartModule { }