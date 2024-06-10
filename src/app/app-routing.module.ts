import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ComplaintRegisterComponent } from './complaint-register/complaint-register.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import { CustomerStatusCheckComponent } from './customer-status-check/customer-status-check.component';

const routes: Routes = [
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path: 'frontpage', component:FrontpageComponent},
  { path: 'complaint-register', component: ComplaintRegisterComponent },
  { path: 'status-check', component: StatusCheckComponent },
  { path: 'customer-status-check', component: CustomerStatusCheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
