import React, { useState } from "react";
import { Link } from "react-router-dom";

const axios = require('axios').default;

function Payment(props) {

  const card = UserInput('');
  const fullname = UserInput('');
  const phone = UserInput('');
  const address = UserInput('');

  function Confirm(){
    if (card.value, fullname.value, phone.value, address.value !== ''){ 

      let menuItems = sessionStorage.getItem('menuItems');
      let totalPrice = sessionStorage.getItem('totalPrice');
      let idUser = sessionStorage.getItem('idUser');
      let idRestaurant = sessionStorage.getItem('idRestaurant');

      axios.post('https://awagroup4project.herokuapp.com/orderhistory', {
        orderedItems: menuItems, 
        price: totalPrice,
        idUser: idUser,
        idRestaurant: idRestaurant
      })
      .then(function (response) {
        console.log("POST OK");
      })
      .catch(function (error) {
        console.log("An error has occurred while trying to post order history.", error);
      })
    }
    else console.log("The entries can not be empty!");      
  } 
 if (card.value, fullname.value, phone.value, address.value !== ''){ 
  return (
    <div className="Login">
      <div className="Title">Please give your payment information to continue. </div>

      <div className="Details"> Credit card info<br />
        <input type="number" {...card} />
      </div>

      <div className="Details"> Full name<br />
        <input type="text" {...fullname} />
      </div>

      <div className="Details"> Phone number<br />
        <input type="text" {...phone} />
      </div>

      <div className="Details"> Address<br />
        <input type="text" {...address} />
      </div>

      <div>Delivery location: {address.value}</div>
    
      <Link to="/delivery" ><input className="Button" type="button" value={'Confirm'} onClick={Confirm}/><br /> </Link>
    </div>
  );
 }
 else
 return (
  <div className="Login">
    <div className="Title">Please give your payment information to continue. </div>

    <div className="Details"> Credit card info<br />
      <input type="text" {...card} />
    </div>

    <div className="Details"> Full name<br />
      <input type="text" {...fullname} />
    </div>

    <div className="Details"> Phone number<br />
      <input type="text" {...phone} />
    </div>

    <div className="Details"> Address<br />
      <input type="text" {...address} />
    </div>

    <div>Delivery location: {address.value}</div>
  
    <input className="Button" type="button" value={'Confirm'} onClick={Confirm}/><br />
  </div>
 );
}

const UserInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  // Sets the value of what was written
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    //returns the value
    value,
    onChange: handleChange,
  }
}

export default Payment;