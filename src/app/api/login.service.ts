import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private basUrl = 'https://sit-services.oolsum.com:8080/';


  constructor(private http:HttpClient) { }
  login(){
    let data={"email":"test1g@mailinator.com","password":"Admin@01"}
    return this.http.post(this.basUrl+'fo/services/v2/login/users',data)
  }
}
