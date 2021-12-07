import './styles/Main.css'
import Footer from './components/Footer.js';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShopListDB from './components/ShopListDB.js';
import MenuDB from './components/RestaurantMenuDB.js';
import Login from './components/Login.js';
import Cart from './components/Cart.js';
import Payment from './components/Payment.js';
import Clock from './components/Clock.js';
import CreateRest from './components/CreateRestaurant.js';
//const React = require('react'); 
const ReactDOM = require('react-dom'); 
const axios = require('axios').default;

// TODO:
// admin ui (create restaurant button)
// order food -> pay -> order preparing, ready, delivering... -> delivery ok, order closed
// order history

const adminUI = props => {

  // render create restaurant button
}

var globalDBArray = []; // global array for DB restaurants

function handleRestaurants(response) {
  var res = response;
  console.log("handleRestaurants() is pushing data to globalDBArray");

  var dbArray = [];

  for(var i = 0; i < res.data.length; i++) {

    var globalDBObject = {idRestaurant: 0, name: "", operatingHours: "", address: "", priceLevel: 0, foods: "", foodsPrices: ""};
    // this gets pushed to globalDBArray
    // we are pushing an object because we can name the fields for rendering purposes

    globalDBObject.idRestaurant = res.data[i].idRestaurant;
    globalDBObject.name = res.data[i].Name;
    globalDBObject.operatingHours = res.data[i].OperatingHours;
    globalDBObject.address = res.data[i].Address;
    globalDBObject.priceLevel = res.data[i].PriceLevel;
    globalDBObject.foods = res.data[i].Foods;
    globalDBObject.foodsPrices = res.data[i].FoodsPrices; // loop through response, add to object fields

    dbArray.push(globalDBObject); // push to array
  }

  globalDBArray = dbArray;
}

class Prototype extends React.Component {

  constructor(props) {
      super();
      this.state = { data: [],
      SearchString: "",
      cartData: []
     };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({SearchString: event.target.value});
  }

  async componentDidMount() {

    await axios.get('/restaurants')

    .then(function (response) {
      handleRestaurants(response);
    })

    .catch(function (error) {
      console.log(error);
    })

    this.setState({ data: globalDBArray });
    console.log("Restaurant state data: ", this.state.data);
  }

  

  render() {

    const dbRestaurants = globalDBArray.map(restaurant => {
      return { ...restaurant, id: uuidv4() }
    })

    if (!this.state.data)
      return <div />
          
      return (
        <body>
        <BrowserRouter>
          <nav>
             <ul>
               <Link to="/" ><li>Home</li></Link>
               <li> <input class="searchBar" type="text" placeholder="Search..."  onChange={ this.onChange } /> </li>
               <li> Help </li>
               <li></li>
               <Link to="/login" ><button class="loginButton" > Login </button></Link>
               <Link to="/createrestaurant" ><button class="loginButton" > Create Restaurant </button></Link>
            </ul>
          </nav>
            <Routes>
              {/* Depending on route, renders that component */}
              <Route path="/:restaurantId" element={ <MenuDB restaurants={ dbRestaurants } cartData={ this.state.cartData }/> } />
              <Route path="/" element={ <ShopListDB restaurants ={ dbRestaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(this.state.SearchString))} /> } />
              <Route path="/login" element={ <Login />} />
              <Route path="/checkout" element={ <Cart cartData={ this.state.cartData } /> } />
              <Route path="/payment" element={ <Payment />} />
              <Route path="/delivery" element={ <Clock />} />
              <Route path="/createrestaurant" element={ <CreateRest />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </body>
      );
  }
}

export default Prototype;