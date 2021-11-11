import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './Search.module.css'

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
        <div className={styles.prices}>{restaurant.food1Price} </div>
        <div className={styles.cartbutton}><button>Add to cart</button></div>
          </div>
          <div className={styles.container}>
        <div className={styles.product}>{restaurant.food2} </div>
        <div className={styles.prices}>{restaurant.food2Price} </div>
        <div className={styles.cartbutton}><button>Add to cart</button></div>
          </div>
        </div>

  )
}

/*
<div class="cart-row">
<div class = "product">
<i class="far fa-times-circle"></i>
<img src="${item.tag}.png" width="100" height="100">
<span>${item.name}</span>
</div>
<div class="delete"></div>
<div class ="prices">${item.price}€</div>
<div class ="quantity">
<i class="fas fa-arrow-circle-left decrease"></i>
<span>&nbsp;${item.inCart}&nbsp;</span>
<i class="fas fa-arrow-circle-right increase"></i> </td>
</div>
<div class="total">
${item.inCart * item.price}€</div>
</div>
</div>

*/