import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../container.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();

  constructor(
    public wishlist: WishlistService,
    private cart: CartService,
    private notification: NotificationService
  ) {}

  addToCart(product: Product): void {
    if (!product.inStock) {
      return;
    }

    this.cart.add(product);
    this.notification.show(product.name + ' added to cart.');
  }

  buyNow(product: Product): void {
    if (!product.inStock) {
      return;
    }

    this.cart.add(product);
    this.cart.open();
  }

  toggleWishlist(product: Product): void {
    const added = this.wishlist.toggle(product);
    this.notification.show(added ? 'Saved to wishlist.' : 'Removed from wishlist.');
  }
}
