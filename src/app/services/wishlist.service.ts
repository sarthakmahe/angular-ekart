import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();
  count$ = this.items$.pipe(map(items => items.length));

  private openSubject = new BehaviorSubject(false);
  isOpen$ = this.openSubject.asObservable();

  get items(): Product[] {
    return this.itemsSubject.value;
  }

  get count(): number {
    return this.items.length;
  }

  has(productId: number): boolean {
    return this.items.some(item => item.id === productId);
  }

  toggle(product: Product): boolean {
    if (this.has(product.id)) {
      this.itemsSubject.next(this.items.filter(item => item.id !== product.id));
      return false;
    }

    this.itemsSubject.next([...this.items, product]);
    return true;
  }

  remove(productId: number): void {
    this.itemsSubject.next(this.items.filter(item => item.id !== productId));
  }

  open(): void {
    this.openSubject.next(true);
  }

  close(): void {
    this.openSubject.next(false);
  }
}
