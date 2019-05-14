import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { SinglePdctComponent } from './single-pdct/single-pdct.component';
import { PdctDetailsComponent } from './pdct-details/pdct-details.component';
import { PdctFilterPipe } from '../pdct-filter.pipe';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    ProductsComponent,
    SinglePdctComponent,
    PdctDetailsComponent,
    PdctFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    // MatAutocompleteModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatInputModule
  ],
  exports: [
    ProductsComponent,
    // MatFormFieldModule
  ],
  entryComponents: [
    PdctDetailsComponent
  ]
})
export class ProductsModule { }
