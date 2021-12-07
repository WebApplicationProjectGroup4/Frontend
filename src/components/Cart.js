import React, { useState, useEffect } from 'react'
import styles from '../styles/Menu.module.css'
import { Link } from "react-router-dom";

var globalCartArray = [];

function removeCartItem(foodName, data) {

    var localData = data;

    for (let i = 0; i < localData.length; i++) {

        if (localData[i].foodName === foodName) {

            if (localData[i].qty > 1) 
                localData[i].qty--;
            
            else localData.splice(i, 1); 
        }
    }
    globalCartArray = localData;
}

const calculateTotal = data => {

    var total = 0;

    if (data != null) {
        data.forEach(element => { // element === array object
            total += element.foodPrice; // add to total
    
            if (element.qty > 1) {
                for (let i = 1; i < element.qty; i++) { // i starts at 1 because we've already added it to total once
                    total += element.foodPrice; // we add to total until i is no longer smaller than element qty
                }
            }
        });
    }

    sessionStorage.setItem('totalPrice', total);
    
    return total;
}

const buildMenuString = data => {

    var foodNameStr = "";

    for (let i = 0; i < data.length; i++) {
        foodNameStr += data[i].foodName;
        if (i+1 === data.length)
            console.log("MenuString is ready: ", foodNameStr);
        
        else foodNameStr += "-";
    }

    sessionStorage.setItem('menuItems', foodNameStr);
}

export default class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.cartData }
    }

    onChange = event => {
        this.setState({ data: event.target.value });
    }

    render() {

        var total = calculateTotal(this.state.data);
        // send all cart items to calculation function during rendering
        // which makes this realtime because we are dealing with state

        buildMenuString(this.state.data);
        // build menu string for db insert

        const updateCart = (foodName, functionData) => {
            removeCartItem(foodName, functionData);
            this.setState({ data: globalCartArray });
       }

        if (!this.state.data)
            return( <div className={styles.title}>Cart is empty!</div> )
        
        const cartItems = this.state.data.map((menu) => (
            <div className={styles.container}>
                <div className={styles.product}>{menu.foodName}</div>
                <div className={styles.prices}>{menu.foodPrice}€</div>
                <div className={styles.quantity}>{menu.qty}</div>
                <div><button onClick={() => updateCart(menu.foodName, this.state.data)}> Remove </button></div>
            </div>  
            ));
    
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
                <Link to="/payment" ><button class="Button" > Payment </button> </Link>
                    <h5>Total price: {total}€</h5>
                </div>
            </div>
        )
    } 
}