import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../container.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() productSelected = new EventEmitter<Product>();
}
