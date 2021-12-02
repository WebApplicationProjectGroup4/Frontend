import React, { useState } from "react";
//import { Redirect } from "react-router-dom";

      function Payment(props) {
        //Const for users that saves the input
        const card = UserInput('');
        const fullname = UserInput('');
        const phone = UserInput('');
        const address = UserInput('');
       
        // test to check the value
        /*const handlePayment = () => {
          payment(card.value, fullname.value, phone.value, address.value);
        }*/

        function Continue(){
            if (card.value, fullname.value, phone.value, address.value === '') //checking if the textboxes are empty or not
            console.log("The entries can not be empty") 
            else {
              console.log("Sending you to the delivery site")
            }
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
      <input className="Button" type="button" value={'Continue to order'} onClick={Continue}/><br />
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