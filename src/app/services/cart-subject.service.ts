import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})

export class CartSubjectService {
  cartContentChanged = new Subject();
}
