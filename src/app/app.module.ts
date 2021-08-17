import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClient, HttpClientModule}from '@angular/common/http'; 
import { LoginService } from './api/login.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  LoginService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
