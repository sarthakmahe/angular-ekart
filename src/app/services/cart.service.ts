import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { CartItem } from '../Models/cart-item';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();
  itemCount$ = this.items$.pipe(
    map(items => items.reduce((sum, item) => sum + item.quantity, 0))
  );

  private openSubject = new BehaviorSubject(false);
  isOpen$ = this.openSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  get itemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  add(product: Product, quantity: number = 1): void {
    if (!product.inStock) {
      return;
    }

    const items = [...this.items];
    const existing = items.find(item => item.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      const item = new CartItem();
      item.product = product;
      item.quantity = quantity;
      items.push(item);
    }

    this.itemsSubject.next(items);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.remove(productId);
      return;
    }

    const items = this.items.map(item => {
      if (item.product.id === productId) {
        item.quantity = quantity;
      }
      return item;
    });

    this.itemsSubject.next(items);
  }

  remove(productId: number): void {
    this.itemsSubject.next(this.items.filter(item => item.product.id !== productId));
  }

  clear(): void {
    this.itemsSubject.next([]);
  }

  open(): void {
    this.openSubject.next(true);
  }

  close(): void {
    this.openSubject.next(false);
  }
}
