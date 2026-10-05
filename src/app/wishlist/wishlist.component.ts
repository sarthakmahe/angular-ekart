import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { WishlistService } from '../services/wishlist.service';
import { Product } from '../Models/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['../cart/cart.component.css', './wishlist.component.css']
})
export class WishlistComponent {
  constructor(
    public wishlist: WishlistService,
    private cart: CartService,
    private notification: NotificationService
  ) {}

  addToCart(product: Product): void {
    if (!product.inStock) {
      this.notification.show('This item is currently out of stock.');
      return;
    }

    this.cart.add(product);
    this.notification.show(product.name + ' added to cart.');
  }

  moveToCart(product: Product): void {
    this.addToCart(product);
    if (product.inStock) {
      this.wishlist.remove(product.id);
    }
  }
}
