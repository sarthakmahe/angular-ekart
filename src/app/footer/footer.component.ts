import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    public cart: CartService,
    public wishlist: WishlistService
  ) {}

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
