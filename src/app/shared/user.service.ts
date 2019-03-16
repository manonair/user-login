import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { Tocken } from '../auth/tocken.model';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' 
  })
}

    httpOptions.headers.append('authorization', 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==');
    httpOptions.headers.append('content-type', 'multipart/form-data;');
 
@Injectable()
export class UserService {
  rootUrl:string = 'http://localhost:1111/api';
  tockenURI :string= '/user-service/oauth/token';


   


  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'api/User/Register', body,{headers : reqHeader});
  }
 
  userAuthentication1(loginForm:FormData){
    const url=  'http://localhost:2233/oauth/token'
        
    console.log(loginForm);
     return this.http.post<any>(url, loginForm,httpOptions);/* 
     .pipe(
      tap((resp: any) => console.log('resp from post ')),
      catchError(this.handleError<any>('userAuthentication'))
    ); */

  }

 /*  userAuthentication(loginForm:FormData) {
    const url=  'http://localhost:2233/oauth/token'
    console.log("inside service:"+loginForm);
    return this.http.post(url, loginForm,httpOptions);
  }
 */

userAuthentication(loginForm:FormData) {
  const url=  'http://localhost:1111/api/roster-microservice/reservation/all'
  console.log("inside service:"+loginForm);
  return  this.http.get<any[]>(url, httpOptions);
}

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log('${operation} failed: ${error.message}');
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }




  login(authCredentials:FormData) {
    const url=  'http://localhost:2233/oauth/token'
    
    var reqHeader = new HttpHeaders({'Authorization':'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==' });
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Authorization', 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==');
  return this.http.post(url  , authCredentials,httpOptions);
  }


}