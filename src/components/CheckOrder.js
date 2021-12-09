import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/Menu.module.css'

const axios = require('axios').default;

var orderArray = [];

function UpdateOrder(response) {
var res = response;
var dbArray = [];

for(var i = 0; i < res.data.length; i++) {
  var orderObject = {price: 0, date: 0, idRestaurant: 0, orderedItems: ""};

    orderObject.price = res.data[i].Price;
    orderObject.date = res.data[i].Date;
    orderObject.idRestaurant = res.data[i].Restaurants_idRestaurant;
    orderObject.orderedItems = res.data[i].OrderedItems;

    dbArray.push(orderObject);

}
if (res.data === "No orders by this account!"){
   console.log("error");
}

  orderArray = dbArray;
  console.log(orderArray);
} 

class CheckOrder extends React.Component {

  constructor(props) {
  super();
  this.state = { data: []
  };
  }
async componentDidMount(){

  await axios.get('http://localhost:3001/orderhistory')

      .then(function (response) {
          UpdateOrder(response);
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
    </div>
  );
  return (
    <div>
      <div className={styles.title}>Orders</div>
      {content}
  <div className="Login">
    <Link to="/" ><button class="Button" > Close </button> </Link> 
  </div>
  </div>
);
}
}

export default CheckOrder;