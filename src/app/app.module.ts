import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ComplaintRegisterComponent } from './complaint-register/complaint-register.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import { CustomerStatusCheckComponent } from './customer-status-check/customer-status-check.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdminLoginComponent,
    FrontpageComponent,
    ComplaintRegisterComponent,
    StatusCheckComponent,
    CustomerStatusCheckComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
