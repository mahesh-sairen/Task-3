import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[];
  total: number;

  constructor(private cartService: CartService) {
    this.cartItems = [];
    this.total = 0;
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(
      response => {
        this.cartItems = response;
        this.calculateTotal();
      },
      error => {
        // Handle error
      }
    );
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }
}


}



  