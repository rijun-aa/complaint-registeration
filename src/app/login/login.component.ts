// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email: string = '';
  Password: string = '';

  constructor(private customerService: CustomerService, private router: Router) { }

 
  onSubmit() {
    this.customerService.login(this.Email, this.Password).subscribe(
      response => {
        if (response) {
          alert('Login successful');
          this.customerService.setCustomer(response);
          this.router.navigate(['/home']);
        } else {
          alert('Invalid email or password');
        }
      },
      error => {
        console.error('Error occurred during login', error); // Log the error
        alert('Error occurred during login');
      }
    );
  }
   }

