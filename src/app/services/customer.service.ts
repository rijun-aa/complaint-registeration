import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Customer } from '../models/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7028/api/Customers'; // Replace with your actual API URL
  private currentUser: Customer | null = null;

  constructor(private http: HttpClient) {}

  signup(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer).pipe(
      tap((newCustomer: Customer) => this.currentUser = newCustomer),
      catchError(this.handleError<Customer>('signup'))
    );
  }

  login(email: string, password: string): Observable<Customer | null> {
    return this.http.post<Customer>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((user: Customer) => this.currentUser = user),
      catchError(this.handleError<Customer>('login'))
    );
  }

  getCurrentUser(): Customer | null {
    return this.currentUser;
  }

  getCustomerId(): number | null {
    return this.currentUser ? this.currentUser.customerid : null;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
