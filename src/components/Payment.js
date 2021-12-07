import React, { useState } from "react";
import { Link } from "react-router-dom";
const axios = require('axios').default;

      function Payment(props) {
        //Const for users that saves the input
        const card = UserInput('');
        const fullname = UserInput('');
        const phone = UserInput('');
        const address = UserInput('');

        function Confirm(){
          if (card.value, fullname.value, phone.value, address.value !== ''){ 
            //checking if the textboxes are empty 
          console.log("Delivery location: " + address.value)
          /*axios.post('/orderhistory', { 
            price: 5,
            idUser: 1,
            idRestaurant: 1
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log("An error has occurred while trying to post order history.", error);
          })*/
      }
        else 
        console.log("The entries can not be empty")  
    } 
    
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
      <div>
        Delivery location: {address.value}
      </div>
      <input className="Button" type="button" value={'Confirm'} onClick={Confirm}/><br />
      <Link to="/delivery" ><button class="Button" > Delivery </button> </Link>
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