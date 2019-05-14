import { Component, OnInit } from '@angular/core';
import { PdctListService } from '../services/pdct-list.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  pdctList = [];
  pdctListview = 'grid';
  pdctListArr;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  
  constructor( private productListService: PdctListService ) {
    this.pdctList = productListService.returnList();
  }
  
  
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  
  filteredStatus = '';
  gridView() {
    this.pdctListArr = document.querySelectorAll('[data-type]');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.pdctListArr.length; ++i) {
      this.pdctListArr[i].setAttribute('class', 'col-4');
      this.pdctListArr[i].classList.add('mb-5');
    }
    this.pdctListview = 'grid';
  }

  listView() {
    this.pdctListArr = document.querySelectorAll('[data-type]');
    // tslint:disable-next-line:prefer-for-of
    for ( let i = 0 ; i < this.pdctListArr.length ; i++) {
      this.pdctListArr[i].setAttribute('class', 'col-12');
      this.pdctListArr[i].classList.add('mb-5');
    }
    this.pdctListview = 'list';
  }
}
