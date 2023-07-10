import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  signup(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login`;
    const body = { username, password };
    return this.http.post(url, body);
  }
}

