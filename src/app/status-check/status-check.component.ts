import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from '../models/complaint.model';

@Component({
  selector: 'app-status-check',
  templateUrl: './status-check.component.html',
  styleUrls: ['./status-check.component.css']
})
export class StatusCheckComponent implements OnInit {
  complaints: Complaint[] = [];
  filteredComplaints: Complaint[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchComplaints();
  }

  fetchComplaints() {
    this.http.get<Complaint[]>('https://localhost:7028/api/Complaints').subscribe({
      next: (complaints) => {
        console.log(complaints);
        this.complaints = complaints;
        this.filteredComplaints = complaints; // Initialize the filtered complaints
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
    complaint.status = 'close';
    this.http.put(`https://localhost:7028/api/Complaints/${complaint.id}`, complaint).subscribe({
      next: () => {
        console.log('Complaint marked as closed');
      },
      error: (error) => {
        console.error('Error marking complaint as closed', error);
      }
    });
  }
}
