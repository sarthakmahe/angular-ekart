import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Input()
  categories: string[] = [];

  @Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> =
    new EventEmitter<string>();

  @Output()
  categoryChanged = new EventEmitter<string>();

  @Output()
  sortChanged = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';
  selectedCategory: string = 'all';
  selectedSort: string = 'default';

  onSelectedFilterRadioButtonChanged() {
    this.selectedFilterRadioButtonChanged.emit(
      this.selectedFilterRadioButton
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }

  onSortChanged() {
    this.sortChanged.emit(this.selectedSort);
  }
}
