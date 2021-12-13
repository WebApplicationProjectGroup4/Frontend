import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const axios = require('axios').default;

function Payment(props) {
  let navigate = useNavigate();
  const card = UserInput('');
  const fullname = UserInput('');
  const phone = UserInput('');
  const address = UserInput('');

  function Confirm(){
    if (card.value && fullname.value && phone.value && address.value !== ''){

      let menuItems = sessionStorage.getItem('menuItems');
      let totalPrice = sessionStorage.getItem('totalPrice');
      let idUser = sessionStorage.getItem('idUser');
      let idRestaurant = sessionStorage.getItem('idRestaurant');
      const nameCheck = (fullname.value.includes(" "));
      const addressCheck = (isNaN(parseInt(address.value)));
      const idUserFound = (idUser !== null && idUser !== undefined);

      if (!idUserFound) 
        alert("You have to login first");

      if (!nameCheck)
        alert("Your full name is required ( name + surname )");

      if (!addressCheck)
        alert("Address cannot be just a number!");

      if (nameCheck && addressCheck && idUserFound) {
        axios.post('https://awagroup4project.herokuapp.com/orderhistory', {
          orderedItems: menuItems, 
          price: totalPrice,
          idUser: idUser,
          idRestaurant: idRestaurant
        })
        .then(function (response) {
          console.log("POST OK");
          navigate('/delivery');
        })
        .catch(function (error) {
          console.log("An error has occurred while trying to post order history.", error);
        })
      } 
    }
    else alert("The entries can not be empty!");      
  } 
 
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
      <input type="number" {...phone} />
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