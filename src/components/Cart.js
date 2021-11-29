import React, { useState } from 'react'
import styles from './Menu.module.css'

export default function Restaurants() {
    let data = sessionStorage.getItem("CartItems")
return(
    <div>
    <div className={styles.title}>Cart Items</div>
    <div className={styles.container}>
    <div><button onClick={() => console.log(data)}>test</button></div>
    </div>
  </div>
)}