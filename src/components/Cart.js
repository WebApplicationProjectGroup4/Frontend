import React, { useState } from 'react'
import styles from './Menu.module.css'

export default function Cart() {
    let data = JSON.parse(sessionStorage.getItem("CartItems"));

    const cartItems = data.map((menu) => (
        <div className={styles.container}>
            <div className={styles.product}>{menu.foodName}</div>
            <div className={styles.prices}>{menu.foodPrice}€</div>
            <div><button> Remove </button></div>
        </div>
      ));

      const checkOutSystem = props => {

        console.log("test");
        // checkout order -> display delivery ETA etc
      
        // when order is closed after successful delivery,
        // this should automatically post to OrderHistory
      }
return(
    <div>
        <div className={styles.title}>Cart Items</div>
        <div>
            {cartItems}
        </div>
        <div className={styles.container}>
            <div><button onClick={checkOutSystem}> Checkout </button></div>
        </div>
    </div>
)}