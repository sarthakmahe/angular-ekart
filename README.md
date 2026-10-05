# eKart

eKart is a frontend-only Angular shopping demo. Browse a sample product catalog, filter and sort products, save items to a wishlist, and try the cart and checkout flow.

## Features

- Browse sample products across multiple categories
- Search, filter, and sort the catalog
- View product details
- Add products to a cart and change quantities
- Save and remove wishlist items
- Complete a demo checkout with cash on delivery

## Tech stack

- Angular 16
- TypeScript
- RxJS
- HTML and CSS

## Getting started

### Requirements

- Node.js and npm

### Install and run

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser. The development server reloads when source files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm test` | Run unit tests with Karma |
| `npm run watch` | Rebuild when files change |

## Demo limitations

This project currently has no backend or application API. Product information is defined in the frontend, and cart, wishlist, and checkout state are held in browser memory. Orders are not saved, payments are not processed, and the generated order ID is only shown for the current checkout session. Product images, fonts, and icons are loaded from external URLs.

## Project structure

```text
src/
  app/
    cart/                 Cart and checkout UI
    container/            Product catalog and product details
    services/             Cart, wishlist, and notification state
    wishlist/             Wishlist UI
  assets/
```

## License

No license is currently specified for this project. Add a `LICENSE` file if you intend to distribute it under a particular license.
