import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  FormBuilder, 
  Validators, 
  AbstractControl 
} from '@angular/forms';
import { User } from '../interfaces/user-data';
import { UsersListService } from '../services/users-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {

  signupForm: FormGroup;
  userObj: User;
  userList: User[];
  defProfImg: string = '../../assets/imgs/profile.png';
  redirect: string;

  constructor(
    private fb: FormBuilder,
    private usersListService: UsersListService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group ({
      'emailData': this.fb.group ({
        'userEmail': ['', [ Validators.required, Validators.email] ],
      }, {
        validator: this.checkEmailUnique
      }),
      'passwordData': this.fb.group ({
        'password': ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ] ],
        'confirmPassword': ['', [ Validators.required ] ]
      }, {
        validator: this.checkConfirmPasswordMatch 
      })
    })

// query params
    this.route.queryParams
    .filter(params => params.redirect)
    .subscribe(params => {
      this.redirect = params.redirect;
    })    
  }
    checkConfirmPasswordMatch ( control: AbstractControl ) {
      if(control.get('password').value !== control.get('confirmPassword').value ) {
        return {'notMatching': true};
      } else {
        return null;
      }
    }
    
  checkEmailUnique( control: AbstractControl ) {
    let tempUserList: User[] = [];
    let flag = null;
    if (localStorage.getItem('usersList')) {
      tempUserList = JSON.parse(localStorage.getItem('usersList'));
      tempUserList.forEach( elt => {
        if(elt.email == control.get('userEmail').value) {
          flag = {'notUnique' : true};
        }
      })
    }
    return flag;
  }

  onSubmit(signupForm) {
    this.userObj = {
      email: signupForm.get('emailData.userEmail').value,
      password: signupForm.get('passwordData.password').value,
      img: this.defProfImg
    }
    this.usersListService.addToUsers(this.userObj);

    if(this.redirect === 'home') {
      this.router.navigate(['/']);
    } else if (this.redirect === 'cart') {
      this.router.navigate(['/', 'cart']);
    }
    this.authService.login();
  }
}
