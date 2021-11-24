import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Menu.module.css'
//import data from './data.json';


export default function Restaurants(props) {

  const result = useParams();
  // Finds restaurants and the id it has been assigned, if it matches to restaurant opens if not gives error
  const restaurant = props.restaurants.find(restaurants => restaurants.id === result.restaurantId);
  if(restaurant == null) {
    return <div className={styles.container}>No matching restaurant found.</div>
  }

  //var menuArray = [];

  //for (var i = 0; i < restaurant.foods.length; i++) {
  //  menuArray.push(restaurant.foods[i]);
  //}

  //console.log(menuArray);

  const content = menuArray.map((menu) =>
  
    <div className={styles.container}>
      <div className={styles.product}>{menu.name}</div>
      <div className={styles.prices}>{menu.price}</div>
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

/*

export default function restaurant(props) {
  return (
    <div>
    <div className={styles.title}>Menu</div>
    <div>
      { props.restaurants.map(restaurants =>
      <div className={styles.container}>
          <div className={styles.name}>{restaurants.foods}</div>
          </div>
      )}
    </div>
    </div>
  )
}

*/
