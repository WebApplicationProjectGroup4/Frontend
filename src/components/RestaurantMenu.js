import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Menu.module.css'


export default function Restaurants(props) {

  const result = useParams();

  const restaurant = props.restaurants.find(restaurants => restaurants.id === result.contactId);
  if(restaurant == null) {
    return <div className={styles.container}>No matching restaurant found.</div>
  }

  return (
    <div>
      <div className={styles.title}>Menu</div>
      <div className={styles.container}>
        <div className={styles.product}>{restaurant.food1} </div>
        <div className={styles.prices}>{restaurant.food1price} </div>
        <div className={styles.cartbutton}><button>Add to cart</button></div>
      </div>
    </div>

  )
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
