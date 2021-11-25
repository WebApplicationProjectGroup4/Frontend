import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Menu.module.css'

export default function Restaurants(props) {

  const result = useParams();
  // Finds restaurants and the id it has been assigned, if it matches to restaurant opens if not gives error
  const restaurant = props.restaurants.find(restaurants => restaurants.id === result.restaurantId);
  if(restaurant == null) {
    return <div className={styles.container}>No matching restaurant found.</div>
  }

  var menuArray = [];

  let food = ``; // build menu item
  let price = ``; // build menu item's price

  for (var i = 0; i < restaurant.foods.length; i++) {

    var menuObject = {foodName: "", foodPrice: 0};
    
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



  var x = 0; // using this to loop through array
  for (var a = 0; a < restaurant.foodsPrices.length; a++) {

    if (restaurant.foodsPrices[a] === '-') { // if we hit a splitter, 
      menuArray[x].foodPrice = price; // the index x is on in menuArray gets updated price from DB
      price = ``; // menu item's price str gets resetted
      x++; // increment by 1 on the array index
    } else price += restaurant.foodsPrices[a]; // else add char to menu item price str

    if (a+1 === restaurant.foodsPrices.length) {
      menuArray[x].foodPrice = price;
    } // add last menu item price to array
  }

  console.log("menu food array ", menuArray);

  const content = menuArray.map((menu) =>
    
    <div className={styles.container}>
      <div className={styles.product}>{menu.foodName}</div>
      <div className={styles.prices}>{menu.foodPrice}€</div>
      <div className={styles.cartbutton}><button>Add to cart</button></div>
    </div>
  );

  return (
    <div>
      <div className={styles.title}>Menu</div>
      {content}
    </div>
);
} 