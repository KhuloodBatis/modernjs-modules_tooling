//Important Modules
// import './shoppingCart.js';
//?1
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Important Modules');
// // console.log(shippingCost);

// addToCart('bread', 5);

// console.log(price, tq);
//?2

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

//?3

import add, { cart } from './shoppingCart.js';
add('bread', 5);
add('pizza', 8);
add('apples', 10);
console.log(cart);
