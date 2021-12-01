import React, { useState, useEffect } from 'react'
import styles from './Menu.module.css'

function removeCartItem(foodName, items) {

    for (let i = 0; i < items.length; i++) {

        if (items[i].foodName === foodName) {
            console.log("Menu item match found");

            if (items[i].qty > 1)
                items[i].qty--;
            
            else items.splice(i, 1);
        }
    }
}

export default function Cart() {
    let data = JSON.parse(sessionStorage.getItem("Products"));

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, []);
    
    console.log(items);
    var total = 0;

    if (items != null) {
        items.forEach(element => { // element === array object
        total += element.foodPrice; // add to total
    
        if (element.qty > 1) {
            for (let i = 1; i < element.qty; i++) { // i starts at 1 because we've already added it to total once
                total += element.foodPrice; // we add to total until i is no longer smaller than element qty
            }
        }
        });
    
        const cartItems = items.map((menu) => (
            <div className={styles.container}>
                <div className={styles.product}>{menu.foodName}</div>
                <div className={styles.prices}>{menu.foodPrice}€</div>
                <div className={styles.quantity}>{menu.qty}</div>
                <div><button onClick={() => removeCartItem(menu.foodName, items)}> Remove </button></div>
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
                    <h5>Total price: {total}€</h5>
                </div>
        </div>
        )
    } 
    else
        return( <div className={styles.title}>Cart is empty!</div> )
}