import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {
  constructor(
    public wishlist: WishlistService,
    public cart: CartService,
    private notification: NotificationService
  ) {}

  trackOrder(): void {
    this.notification.show('Place an order from your cart to get a tracking ID.');
  }
}
