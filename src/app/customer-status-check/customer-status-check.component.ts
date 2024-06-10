import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-status-check',
  templateUrl: './customer-status-check.component.html',
  styleUrls: ['./customer-status-check.component.css']
})
export class CustomerStatusCheckComponent implements OnInit {
  complaints: Complaint[] = [];
  filteredComplaints: Complaint[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.fetchComplaints();
  }

  fetchComplaints() {
    const customerId = this.customerService.getCustomerId();
    if (!customerId) {
      console.error('Customer ID not available');
      return;
    }

    const url = `https://localhost:7028/api/Complaints?customerId=${customerId}`;
    this.http.get<Complaint[]>(url).subscribe({
      next: (complaints) => {
        this.complaints = complaints;
        this.filteredComplaints = complaints;
      },
      error: (error) => {
        console.error('Error fetching complaints', error);
      }
    });
  }

  filterComplaints() {
    if (!this.searchTerm) {
      this.filteredComplaints = this.complaints;
    } else {
      this.filteredComplaints = this.complaints.filter(complaint =>
        complaint.application?.applicationName?.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  markAsClosed(complaint: Complaint) {
    complaint.status = 'closed';
    this.http.put(`https://localhost:7028/api/Complaints/${complaint.id}`, complaint).subscribe({
      next: () => {
        console.log('Complaint marked as closed');
        this.fetchComplaints(); // Refresh the complaints list
      },
      error: (error) => {
        console.error('Error marking complaint as closed', error);
      }
    });
  }
}
