import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('searchInput')
  searchInputEl!: ElementRef;

  @Output()
  searchChanged = new EventEmitter<string>();

  searchText: string = '';

  constructor(public cart: CartService) {}

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;

    this.searchChanged.emit(this.searchText);
  }
}
