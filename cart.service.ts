import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://api.example.com/cart'; 

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<any> {
    const url = `${this.apiUrl}/items`;
    return this.http.get(url);
  }

  placeOrder(items: any[]): Observable<any> {
    const url = `${this.apiUrl}/order`;
    return this.http.post(url, { items });
  }
}
