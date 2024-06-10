import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5146/api/Customers'; 

  constructor(private http:HttpClient) { }
  signup(customer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, customer);
  }
}
