import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }


   OnSubmit(userName: string,password: string){

    this.userService.userAuthentication(userName,password).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          console.log('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
);

    /* this.userService.userAuthentication(userName,password).subscribe(
      data =>{
      console.log(JSON.stringify(data));
     //localStorage.setItem('userToken',data.access_token);
     
     this.router.navigate(['/home']);
   },
   (err : HttpErrorResponse)=>{
    console.log(err)
     this.isLoginError = true;
   } 
); */
  }

   /* OnSubmit1(form : NgForm){

    console.log(form.value);

    this.userService.login(form.value).subscribe((data : any)=>{
      console.log(data);
     localStorage.setItem('userToken',data.access_token);
     this.router.navigate(['/home']);
   },
   (err : HttpErrorResponse)=>{
     console.log(err.message)
     this.isLoginError = true;
   }); */
  



}
