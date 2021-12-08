import React from "react";
import { Link } from "react-router-dom";
const axios = require('axios').default;

function UpdateOrder(props) {

    axios.get('http://localhost:3001/orderhistory')

        .then(function (response) {
            console.log(response.data);
          })
      
          .catch(function (error) {
            console.log(error);
          })
    
return (
  <div className="Login">
    <div className="Details">
        See your previous orders<br />
        
      </div>
    <input className="Button" type="button" value={'Check'} onClick={UpdateOrder}/><br />
    <Link to="/" ><button class="Button" > Close </button> </Link> 
  </div>
);
}

export default UpdateOrder;