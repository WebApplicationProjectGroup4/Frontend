import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Menu.module.css'

const axios = require('axios').default;

var orderArray = [];
// global array for storing ordered objects

const handleRestaurantNames = res => {

  for (var i = 0; i < orderArray.length; i++) {

    var currentID = orderArray[i].idRestaurant;

    for (var increment = 0; increment < res.data.length; increment++) {

      if (currentID === res.data[increment].idRestaurant)
        orderArray[i].restaurantName = res.data[increment].Name;

      else if (i+1 === res.data.length)
        console.log("i+1 is res.data.length: ", res.data.length);
    }
  }
}

function UpdateOrder(response) {
  var res = response;
  var dbArray = [];

  if (res.data === "No orders by this account!") {
    console.log("No orders by this account!");
  } else {

    for(var i = 0; i < res.data.length; i++) {
      var orderObject = {price: 0, date: 0, orderedItems: "", idRestaurant: 0, restaurantName: ""};

      const searchChar = 'T'; // search the char T (divider in mysql (dateTtime) (time doesn't work in mysql))
      const dateIndex = res.data[i].Date.indexOf(searchChar); // find index of T

      orderObject.price = res.data[i].Price;
      orderObject.date = res.data[i].Date.slice(0, dateIndex); // delete everything after T
      orderObject.idRestaurant = res.data[i].Restaurants_idRestaurant
      orderObject.orderedItems = res.data[i].OrderedItems.replaceAll("-", " & ");
  
      dbArray.push(orderObject);
    }
  }

  orderArray = dbArray;
  //console.log(orderArray);
} 

class CheckOrder extends React.Component {

  constructor(props) {
  super();
  this.state = { data: [] };
  }

  async componentDidMount(){

    await axios.get('http://localhost:3001/orderhistory')
    
    .then(function (response) {
      UpdateOrder(response);
    })
    
    .catch(function (error) {
      console.log(error);
    })

    await axios.get('/restaurants')

    .then(function (response) {
      handleRestaurantNames(response);
    })

    .catch(function (error) {
      console.log(error);
    })

    this.setState({ data: orderArray });
  }

  render() {
    const content = orderArray.map((orderObject) =>
    
      <div className={styles.container}>
        <div className={styles.prices}>Price:   </div>
        <div className={styles.prices}>{orderObject.price}€</div>
        <div className={styles.product}>Date:   </div>
        <div className={styles.product}>{orderObject.date}</div>
        <div className={styles.product}>Food:    </div>
        <div className={styles.product}>{orderObject.orderedItems}</div>
        <div className={styles.product}>Restaurant:    </div>
        <div className={styles.product}>{orderObject.restaurantName}</div>
      </div>
  );
    return (
      <div>
        <div className={styles.title}>Orders</div>
        {content}
        <Link to="/" ><button class="Button"> Close </button> </Link> 
      </div>
    );
  }
}

export default CheckOrder;