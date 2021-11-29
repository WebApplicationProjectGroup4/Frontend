import React, { useState } from 'react'
import styles from './Menu.module.css'

export default function Restaurants() {
    let data = JSON.parse(sessionStorage.getItem("CartItems"));

    const cartItems = data.map((menu) => (
        <div>
          {`${menu.foodName}:${menu.foodPrice}€`}
        </div>
      ));

return(
    <div>
        <div className={styles.title}>Cart Items</div>
        <div className={styles.container}>
            <div><button onClick={() => console.log(data)}>test</button></div>
            {cartItems}
        </div>
    </div>
)}