import React, { useState } from 'react'
import styles from './Menu.module.css'

export default function Cart() {
    let data = JSON.parse(sessionStorage.getItem("Products"));
    
    const cartItems = data.map((menu) => (
        <div className={styles.container}>
            <div className={styles.product}>{menu.foodName}</div>
            <div className={styles.prices}>{menu.foodPrice}€</div>
            <div className={styles.quantity}>{menu.qty}</div>
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
            <div className={styles.container}>
                <h5 className={styles.product}>Product</h5>
                <h5 className={styles.prices}>Price</h5>
                <h5 className={styles.quantity}>Quantity</h5>
            </div>
           {cartItems} 
        </div>
        <div className={styles.container}>
            <div><button onClick={checkOutSystem}> Checkout </button></div>
            <div><button onClick={() => console.log(data)}> Test </button></div>
        </div>
    </div>
)}

/*

*/