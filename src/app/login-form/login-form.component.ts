import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl, 
  Validators, 
  AbstractControl, 
  FormBuilder 
} from '@angular/forms';
import { User } from '../interfaces/user-data';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  redirect: string;
  checkReg: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group ({
      'emailData': this.fb.group ({
        'userEmail': ['', [ Validators.required, Validators.email] ],
      }),
      'passwordData': this.fb.group ({
        'password': ['', [
          Validators.required
        ] ]
      })
    }
  )

    // query params
    this.route.queryParams
    .filter(params => params.redirect)
    .subscribe(params => {
      this.redirect = params.redirect;
    }) 
  }

  checkRegUser() {
    let tempUserList: User[] = [];
    let registered = false;
    if(localStorage.getItem('usersList')) {
      tempUserList = JSON.parse(localStorage.getItem('usersList'));
      tempUserList.forEach( elt => {
        if(elt.email == this.loginForm.get('emailData.userEmail').value) {
          if(elt.password == this.loginForm.get('passwordData.password').value ) {
            registered = true;
            localStorage.setItem('currentUser', JSON.stringify(elt) );
          }
        }
      })
    }
    return registered;
  }

  onLogin(loginForm) {
    let checkRegest = this.checkRegUser();
    if(checkRegest) {
      this.checkReg = true;
      if(this.redirect === 'home') {
        this.router.navigate(['/']);
      } else if (this.redirect === 'cart') {
        this.router.navigate(['/', 'cart']);
      }
    }
    this.authService.login();
  }

}
