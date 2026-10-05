import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  step: 'cart' | 'checkout' | 'success' = 'cart';
  customerName = '';
  customerPhone = '';
  customerAddress = '';
  orderId = '';

  constructor(
    public cart: CartService,
    private notification: NotificationService
  ) {}

  close(): void {
    this.cart.close();
    this.step = 'cart';
  }

  startCheckout(): void {
    if (!this.cart.items.length) {
      return;
    }

    this.step = 'checkout';
  }

  placeOrder(): void {
    if (!this.customerName.trim() || !this.customerPhone.trim() || !this.customerAddress.trim()) {
      this.notification.show('Please fill in your name, phone and address.');
      return;
    }

    this.orderId = 'EK' + Date.now().toString().slice(-8);
    this.cart.clear();
    this.step = 'success';
    this.customerName = '';
    this.customerPhone = '';
    this.customerAddress = '';
  }

  continueShopping(): void {
    this.close();
  }
}
