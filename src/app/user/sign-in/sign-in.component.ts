import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  isLoginError: boolean = false;
  loginForm: NgForm;
  loading = false;
  submitted = false;
  returnUrl: string = '/home';
  formModel = {
    username: '',
    password: '',
    grant_type: 'password',
    client_id: 'spring-security-oauth2-read-write-client'
  }



  constructor(private userService: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }


  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
    this.userService.userAuthentication(loginForm.value)
      .subscribe(
        (res: any) => {
          localStorage.setItem('userToken', res.access_token);
          this.router.navigateByUrl('/home');
        },
        err => {
          if (err.status == 400)
            this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          else
            console.log(err);
        }
      );
  }

}
