import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' 
  })
}

    httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
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

  /* userAuthentication(username:string, password:string) {
    console.log('inside  userAuthentication', username);
    var data = "username=" + username + "&password=" + password + "&grant_type=password&client_id=spring-security-oauth2-read-write-client";
    console.log(data);
    const url=  'http://localhost:2233/oauth/token'
    console.log(url);
    //var reqHeader = new HttpHeaders({'Authorization':'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==' });

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Authorization', 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==');

    return this.http.post(url, data, httpOptions);
  } */


  userAuthentication(username:string, password:string) {
    const url=  'http://localhost:2233/oauth/token'
    var  headers=new  HttpHeaders({ 'postman-token': 'b047f7ca-fee0-240f-87fe-7f90261410ce',
     'cache-control': 'no-cache',
     authorization: 'Basic c3ByaW5nLXNlY3VyaXR5LW9hdXRoMi1yZWFkLXdyaXRlLWNsaWVudDpzcHJpbmctc2VjdXJpdHktb2F1dGgyLXJlYWQtd3JpdGUtY2xpZW50LXBhc3N3b3JkMTIzNA==',
     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' })
    var data = "username=" + username + "&password=" + password + "&grant_type=password&client_id=spring-security-oauth2-read-write-client";
    return this.http.post(url, data, {headers : headers});
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