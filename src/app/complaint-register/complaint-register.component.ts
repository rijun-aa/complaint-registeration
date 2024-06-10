// complaint-register.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Complaint, Branch, Application, Service } from '../models/complaint.model';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-complaint-register',
  templateUrl: './complaint-register.component.html',
  styleUrls: ['./complaint-register.component.css']
})
export class ComplaintRegisterComponent implements OnInit {
  customerName: string = '';
  mobile: string = '';
  email: string = '';
  selectedApplication: number = 0;
  selectedService: number = 0;
  selectedBranch: number = 0;
  description: string = '';
  status: string = 'Open';

  applications: Application[] = [
    { applicationid: 1, applicationName: 'Netbanking' },
    { applicationid: 2, applicationName: 'UPI' },
    { applicationid: 3, applicationName: 'ATM' },
    { applicationid: 4, applicationName: 'Mobile Banking' },
  ];

  services: Service[] = [
    { serviceid: 1, serviceName: 'Loan' },
    { serviceid: 2, serviceName: 'Deposit' },
    { serviceid: 3, serviceName: 'Service Charges' },
    { serviceid: 4, serviceName: 'SMS Alerts' },
  ];

  branches: Branch[] = [
    { branchid: 1, branchName: 'ABC Bank', state: 'Maharashtra', district: 'Mumbai' },
    { branchid: 2, branchName: 'PQR Bank', state: 'Karnataka', district: 'Bangalore' },
    { branchid: 3, branchName: 'DEF Bank', state: 'Tamil Nadu', district: 'Chennai' },
    { branchid: 4, branchName: 'JKL Bank', state: 'Uttar Pradesh', district: 'Lucknow' },
  ];

  constructor(
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {}

  registerComplaint(complaintForm: NgForm) {
    if (complaintForm.invalid) {
      return;
    }

    const selectedApplication = this.applications.find(app => app.applicationid === this.selectedApplication);
    const selectedService = this.services.find(service => service.serviceid === this.selectedService);
    const selectedBranch = this.branches.find(branch => branch.branchid === this.selectedBranch);

    const customerId = this.customerService.getCustomerId(); // Retrieve customer ID
    if (!customerId) {
      console.error('Customer ID not available');
      return;
    }

    const complaint: Complaint = {
      id: 0,
      customerId: customerId, // Use customer ID for the complaint
      applicationId: this.selectedApplication,
      serviceId: this.selectedService,
      branchId: this.selectedBranch,
      timestamp: new Date().toISOString(),
      status: this.status,
      description: this.description,
      customer: {
        customerid: 0, // Update with actual customer ID if available
        name: this.customerName,
        mobile: this.mobile,
        email: this.email,
        accountNumber: '',
        password: ''
      },
      branch: selectedBranch || { branchid: 0, state: '', district: '', branchName: '' },
      application: selectedApplication || { applicationid: 0, applicationName: '' },
      service: selectedService || { serviceid: 0, serviceName: '' }
    };

    this.http.post<Complaint>('https://localhost:7028/api/Complaints', complaint).subscribe({
      next: (response) => {
        console.log('Complaint registered successfully', response);
        this.router.navigate(['/customer-status-check']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error registering complaint', error);
      }
    });
  }
}
