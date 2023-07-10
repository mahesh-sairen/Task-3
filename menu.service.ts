import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://api.example.com/menu'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any> {
    const url = `${this.apiUrl}/items`;
    return this.http.get(url);
  }

  getCategoryInventory(category: string): Observable<any> {
    const url = `${this.apiUrl}/inventory/${category}`;
    return this.http.get(url);
  }
}
