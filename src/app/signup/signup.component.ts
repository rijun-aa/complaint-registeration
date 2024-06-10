import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/complaint.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customer: Customer = {
    name: '',
    mobile: '',
    email: '',
    accountNumber: '',
    password: '',
    customerid: 0
  };

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit() {
    this.customerService.signup(this.customer).subscribe(
      response => {
        console.log('Signup successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error occurred', error);
      }
    );
  }
}
