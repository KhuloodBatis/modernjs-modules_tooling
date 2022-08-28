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

// import add, { cart } from './shoppingCart.js';
// add('bread', 5);
// add('pizza', 8);
// add('apples', 10);
// console.log(cart);
//? API 
//?get all posts
// console.log('start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json()
// console.log(data);

// console.log('Something');

//?get last Post 

// const getLastPost = async function(){
//     const res=await fetch(`https://jsonplaceholder.typicode.com/posts`);

// const data = await res.json()
// // console.log(data);

// //? to get last post
// return { title:data.at(-1).title, text: data.at(-1).body}

// };
//this return promise 
// const lastPost = getLastPost();
// console.log(lastPost);
// not very clean 
// lastPost.then(last=> console.log(last))
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (function (){
const cart = [];
const shippingCost = 10 ;
const totalPrice = 237;
const totalQuantity = 23;

const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart supplier(shippingCost is ${shippingCost})`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from `);
  };

  return{
    addToCart,
    cart,
    totalPrice,
    totalQuantity
  }
})();

// ShoppingCart2.addToCart('apple',4);
// ShoppingCart2.addToCart('pizza',2);
// console.log(ShoppingCart2);

//! commonJS Modules
//Export
// export.addToCart =  function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart supplier(shippingCost is ${shippingCost})`);
//   };

  //Import
//   const {addToCart} = require('./shoppingCart.js')


//! NPM lodash

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

// const state = {
//     cart:[{ product: 'bread', quantity:5},
// {product: 'pizza', quantity:5}],
// user:{loggedIn: true}
// }

// const stateClone = Object.assign({} , state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);
// console.log(stateDeepClone);
//! npm parcel

// if(!module.hot){
//     module.hot.accept();
// }

//!
class Person{
    #greeting = 'Hey';
    constructor(name){
        this.name = name;
        console.log(`${this.#greeting},${this.name}`);
    }
}

const jonas = new Person('Jonas')
