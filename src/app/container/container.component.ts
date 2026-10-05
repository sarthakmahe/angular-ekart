import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../Models/product';
import { CartService } from '../services/cart.service';
import { NotificationService } from '../services/notification.service';
import { WishlistService } from '../services/wishlist.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Output() productDetailsVisibleChange = new EventEmitter<boolean>();

  constructor(
    public wishlist: WishlistService,
    private cart: CartService,
    private notification: NotificationService
  ) {}

  products: Product[] = [

    {
      id: 1,
      name: 'Apple iPhone 15',
      category: 'Mobiles',
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500',
      price: 69999,
      oldPrice: 79999,
      discount: 20,
      rating: 4.7,
      reviews: 245,
      inStock: true,
      description: 'Apple iPhone 15 is a premium everyday smartphone for staying connected, capturing photos and enjoying your favourite apps and entertainment.',
      highlights: ['Apple smartphone with Dynamic Island', '48MP main camera system', 'USB-C connector']
    },

    {
      id: 2,
      name: 'HP Pavilion 15',
      category: 'Laptops',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      price: 59990,
      oldPrice: 69999,
      discount: 15,
      rating: 4.5,
      reviews: 189,
      inStock: true,
      description: 'The HP Pavilion 15 is a versatile notebook for everyday work, study and entertainment, with a spacious display and a familiar full-size laptop layout.',
      highlights: ['HP Pavilion laptop series', '15-inch form factor', 'Suitable for work, study and everyday use']
    },

    {
      id: 3,
      name: 'Sony WH-1000XM5',
      category: 'Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      price: 24990,
      oldPrice: 34990,
      discount: 30,
      rating: 4.8,
      reviews: 325,
      inStock: true,
      description: 'Sony WH-1000XM5 wireless headphones combine a comfortable over-ear design with noise cancelling for focused listening at home or on the go.',
      highlights: ['Over-ear wireless headphones', 'Active noise cancelling', 'Built-in microphones for calls']
    },

    {
      id: 4,
      name: 'Apple Watch Series 9',
      category: 'Smart Watches',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      price: 32999,
      oldPrice: 43999,
      discount: 25,
      rating: 4.6,
      reviews: 156,
      inStock: false,
      description: 'Apple Watch Series 9 brings activity, wellness and everyday notifications to your wrist in a lightweight smartwatch designed to work with iPhone.',
      highlights: ['Smartwatch by Apple', 'Activity and wellness features', 'Pairs with iPhone']
    },

    {
      id: 5,
      name: 'Samsung Galaxy S24',
      category: 'Mobiles',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      price: 64999,
      oldPrice: 74999,
      discount: 13,
      rating: 4.6,
      reviews: 312,
      inStock: true,
      description: 'Samsung Galaxy S24 is a flagship Android smartphone built for daily communication, photography and entertainment, with Galaxy AI features.',
      highlights: ['Samsung Galaxy S series smartphone', 'Galaxy AI features', 'Versatile mobile camera system']
    },

    {
      id: 6,
      name: 'Dell Inspiron 15',
      category: 'Laptops',
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500',
      price: 54990,
      oldPrice: 64990,
      discount: 15,
      rating: 4.4,
      reviews: 176,
      inStock: true,
      description: 'Dell Inspiron 15 is an everyday laptop for home, work and study, offering a practical design for common productivity and browsing tasks.',
      highlights: ['Dell Inspiron laptop series', '15-inch form factor', 'Everyday productivity and browsing']
    },

    {
      id: 7,
      name: 'JBL Tune 760NC',
      category: 'Headphones',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
      price: 4999,
      oldPrice: 6999,
      discount: 29,
      rating: 4.5,
      reviews: 428,
      inStock: true,
      description: 'JBL Tune 760NC headphones make it easy to enjoy wireless audio with an over-ear fit and noise cancelling for commutes and everyday listening.',
      highlights: ['Wireless over-ear headphones', 'Active noise cancelling', 'JBL sound']
    },

    {
      id: 8,
      name: 'Samsung Galaxy Watch 6',
      category: 'Smart Watches',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500',
      price: 18999,
      oldPrice: 24999,
      discount: 24,
      rating: 4.5,
      reviews: 203,
      inStock: true,
      description: 'Samsung Galaxy Watch 6 is a smartwatch for tracking daily activity, checking notifications and keeping useful information close at hand.',
      highlights: ['Samsung Galaxy smartwatch', 'Activity and wellness tracking', 'Smart notifications']
    },

    {
      id: 9,
      name: 'Canon EOS 1500D',
      category: 'Cameras',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
      price: 42990,
      oldPrice: 49990,
      discount: 14,
      rating: 4.7,
      reviews: 147,
      inStock: true,
      description: 'Canon EOS 1500D is a DSLR camera for learning photography and taking more control over everyday portraits, travel scenes and special moments.',
      highlights: ['Canon EOS DSLR camera', 'Interchangeable-lens camera system', 'Optical viewfinder']
    },

    {
      id: 10,
      name: 'Nike Air Max Running Shoes',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      price: 6999,
      oldPrice: 8999,
      discount: 22,
      rating: 4.6,
      reviews: 354,
      inStock: true,
      description: 'Nike Air Max running shoes pair a sporty profile with cushioned comfort for daily wear, walks and training sessions.',
      highlights: ['Nike Air Max design', 'Cushioned sole', 'For everyday wear and activity']
    },

    {
      id: 11,
      name: 'Sony Bluetooth Speaker',
      category: 'Speakers',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
      price: 7999,
      oldPrice: 9999,
      discount: 20,
      rating: 4.4,
      reviews: 218,
      inStock: false,
      description: 'This Sony Bluetooth speaker lets you play music wirelessly from a compatible device, at home or wherever you listen.',
      highlights: ['Wireless Bluetooth audio', 'Connects to compatible devices', 'Sony speaker']
    },

    {
      id: 12,
      name: 'American Tourister Backpack',
      category: 'Bags',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      price: 2499,
      oldPrice: 3499,
      discount: 29,
      rating: 4.3,
      reviews: 167,
      inStock: true,
      description: 'The American Tourister backpack is a practical carry option for commuting, school or short trips, with space for everyday essentials.',
      highlights: ['American Tourister backpack', 'Designed for everyday carrying', 'Suitable for commuting and travel']
    }

  ];

  selectedProduct: Product | null = null;
  selectedQuantity = 1;
  categories = [...new Set(this.products.map(product => product.category))];
  selectedCategory = 'all';
  selectedSort = 'default';


  // =========================
  // PRODUCT COUNTS
  // =========================

  totalProductCount = this.products.length;

  totalProductInStock =
    this.products.filter(p => p.inStock === true).length;

  totalProductOutOfStock =
    this.products.filter(p => p.inStock === false).length;


  // =========================
  // SEARCH & FILTER
  // =========================

  searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  filteredProducts = this.products;

  showProductDetails(product: Product) {
    this.selectedProduct = product;
    this.selectedQuantity = 1;
    this.productDetailsVisibleChange.emit(true);
  }

  addSelectedToCart() {
    if (!this.selectedProduct?.inStock) {
      return;
    }

    this.cart.add(this.selectedProduct, this.selectedQuantity);
    this.notification.show(this.selectedProduct.name + ' added to cart.');
  }

  buySelectedNow() {
    if (!this.selectedProduct?.inStock) {
      return;
    }

    this.cart.add(this.selectedProduct, this.selectedQuantity);
    this.cart.open();
  }

  toggleSelectedWishlist() {
    if (!this.selectedProduct) {
      return;
    }

    const added = this.wishlist.toggle(this.selectedProduct);
    this.notification.show(added ? 'Saved to wishlist.' : 'Removed from wishlist.');
  }

  decreaseQuantity() {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity -= 1;
    }
  }

  increaseQuantity() {
    this.selectedQuantity += 1;
  }

  showProductList() {
    this.selectedProduct = null;
    this.productDetailsVisibleChange.emit(false);
  }


  // =========================
  // SEARCH FROM HEADER
  // =========================

  onSearchChanged(value: string) {

    this.searchText = value;

    this.applyFilters();
  }


  // =========================
  // FILTER FROM FILTER COMPONENT
  // =========================

  onFilterChanged(value: string) {

    this.selectedFilterRadioButton = value;

    this.applyFilters();
  }

  onCategoryChanged(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSortChanged(sort: string) {
    this.selectedSort = sort;
    this.applyFilters();
  }


  // =========================
  // APPLY SEARCH + STOCK FILTER
  // =========================

  applyFilters() {

    this.filteredProducts = this.products.filter(product => {

      // Search condition
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            this.searchText.toLowerCase().trim()
          );


      // Stock filter condition
      const matchesStock =
        this.selectedFilterRadioButton === 'all' ||

        (
          this.selectedFilterRadioButton === 'true' &&
          product.inStock === true
        ) ||

        (
          this.selectedFilterRadioButton === 'false' &&
          product.inStock === false
        );


      const matchesCategory =
        this.selectedCategory === 'all' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesStock && matchesCategory;

    });

    if (this.selectedSort === 'price-asc') {
      this.filteredProducts = [...this.filteredProducts].sort((a, b) => a.price - b.price);
    } else if (this.selectedSort === 'price-desc') {
      this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.price - a.price);
    } else if (this.selectedSort === 'rating') {
      this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.rating - a.rating);
    } else if (this.selectedSort === 'discount') {
      this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.discount - a.discount);
    }

  }

}