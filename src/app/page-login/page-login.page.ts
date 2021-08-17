import { Component, OnInit } from '@angular/core';
import { LoginService } from '../api/login.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.page.html',
  styleUrls: ['./page-login.page.scss'],
})
export class PageLoginPage implements OnInit {
  data: any;
  isSubmitted = false;

  userData: any = {
    email: '',
    password: '',
  };

  constructor(
    private loginservice: LoginService,
  ) { }

  ngOnInit() {
    this.loginservice.login().subscribe((resp: any) => {
      console.log(resp);

    })

  }

  onSubmit(data:any){
    console.log(this.userData);
    console.log(data);
    
  }

}


