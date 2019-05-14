import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { SinglePdctComponent } from './single-pdct/single-pdct.component';
import { PdctDetailsComponent } from './pdct-details/pdct-details.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
