import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ContainerComponent } from './container/container.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { SetBackground } from './CustomDirective/SetBackground.directive';
import { HighlightDirective } from './CustomDirective/highlight.directive';
import { AppHoverDirective } from'./CustomDirective/app-hover.directive';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    ContainerComponent,
    ProductListComponent,
    FooterComponent,
    FilterComponent,
    AboutUsComponent,
    SetBackground,
    HighlightDirective,
    AppHoverDirective,
    CartComponent,
    WishlistComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
