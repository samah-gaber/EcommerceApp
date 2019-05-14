import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  AbstractControl 
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.orderForm = this.fb.group ({
      'userAddressData': this.fb.group ({
        'userAddress': ['', [ Validators.required] ]
      }),
      'userPhoneData': this.fb.group ({
        'userPhone': ['', [ Validators.required ] ]
      }),
      'userEmailData': this.fb.group ({
        'userEmail': ['', [ Validators.required, Validators.email ] ]
      })
    })
  }

}
