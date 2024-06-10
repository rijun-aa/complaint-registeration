import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/complaint.model';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private userUrl = 'https://localhost:7028/api/Customers'; // Adjust this URL as needed

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<Customer> {
    return this.http.get<Customer>(`${this.userUrl}/current`);
  }
}
