import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from './Menu.module.css'

export default function Restaurants(props) {

  var cartArray = props.cartData;

  const result = useParams();
  // Finds restaurants and the id it has been assigned, if it matches to restaurant opens if not gives error
  const restaurant = props.restaurants.find(restaurants => restaurants.id === result.restaurantId);
  if(restaurant == null)
    return <div className={styles.container}>No matching restaurant found.</div>
  
  console.log(restaurant);
  var menuArray = [];

  let food = ``; // build menu item
  let price = ``; // build menu item's price

  for (var i = 0; i < restaurant.foods.length; i++) {

    var menuObject = {foodName: "", foodPrice: 0, qty: 1};
    
    if (restaurant.foods[i] === '-') { // if we hit a splitter, 
      menuObject.foodName = food; // menuObject.foodName gets menu item,
      menuArray.push(menuObject); // menuObject gets pushed into menuArray,
      food = ``; // menu item str gets resetted
      } else food += restaurant.foods[i]; // else add char to menu item str

    if (i+1 === restaurant.foods.length) {
      menuObject.foodName = food;
      menuArray.push(menuObject);
    } // add last menu item to array
  }
  sessionStorage.setItem('idRestaurant', restaurant.idRestaurant);
  var x = 0; // using this to loop through array
  for (var a = 0; a < restaurant.foodsPrices.length; a++) {

    if (restaurant.foodsPrices[a] === '-') { // if we hit a splitter, 
      menuArray[x].foodPrice = parseInt(price); // the index x is on in menuArray gets updated price from DB
      price = ``; // menu item's price str gets resetted
      x++; // increment by 1 on the array index
    } else price += restaurant.foodsPrices[a]; // else add char to menu item price str

    if (a+1 === restaurant.foodsPrices.length) {
      menuArray[x].foodPrice = parseInt(price);
    } // add last menu item price to array
  }

  const addToCart = (menu) => {

    /*if (cartArray.length === 0)
      cartArray.push(menu);
    else {
      for (let i = 0; i < cartArray.length; i++) {

        if (cartArray[i].foodName === menu.foodName) {
            console.log("Menu item match found");
            console.log("Incrementing qty by 1");
            cartArray[i].qty++;
        } else cartArray.push(menu);
      }
    }*/

    const index = cartArray.indexOf(menu);
    
    if (index > -1)
      cartArray[index].qty++;
      
    else cartArray.push(menu);

    // if menu item already in cart -> increase qty
    // else add menu item to cart with qty 1
    console.log(cartArray);

  };
     
  const content = menuArray.map((menu) =>
    
    <div className={styles.container}>
      <div className={styles.product}>{menu.foodName}</div>
      <div className={styles.prices}>{menu.foodPrice}€</div>
      <div className={styles.cartbutton}><button onClick={() => addToCart(menu)}>Add to cart</button></div>
    </div>
  );
  return (
    <div>
      <div className={styles.title}>Menu</div>
      {content}
      <div className={styles.container}>
      <Link to ="/checkout"><button>Shopping cart</button> </Link>
        </div>
      
    </div>
);
}