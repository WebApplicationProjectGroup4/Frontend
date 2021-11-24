import './styles/Main.css'
import Footer from './components/Footer.js';
import data from './components/data.json';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShopList from './components/ShopList.js';
//import ShopListDB from './components/ShopListDB.js';
import Menu from './components/RestaurantMenu.js';
import Login from './components/Login.js';
//const React = require('react'); 
const ReactDOM = require('react-dom'); 
const axios = require('axios').default;

// TODO:
// admin ui (create restaurant button)
// component for shopping cart
// order food -> pay -> order preparing, ready, delivering... -> delivery ok, order closed
// create account
// order history

//Restaurants(); // get restaurants on site load

const shoppingCart = props => {
  
  // keeps track of food orders from this current customer
  // customer username/unique id could be passed to this as props
  // functions/components for adding & deleting stuff
}

const foodOrderingSystem = props => {

  // this will be in direct relation with shoppingCart component
  // i think we can do it all in a single component
  // checkout order -> display delivery ETA etc

  // when order is closed after successful delivery,
  // this should automatically post to OrderHistory
}

const adminUI = props => {

  // render create restaurant button
}

var globalDBArray = [];

function Restaurants() {
  //Get data from the api

  axios.get('/restaurants')

  .then(function (response) {
    // handle success
    console.log("GET success -> handleRestaurants(response)");
    handleRestaurants(response);
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .then(function (response) {
    // always executed
  });
}

function handleRestaurants(response) {
  var res = response;
  console.log("in handleRestaurants() ");

  var dbArray = [];

  for(var i = 0; i < res.data.length; i++) {
    dbArray.push([res.data[i].Name, res.data[i].OperatingHours, res.data[i].Address, res.data[i].PriceLevel]);
  }

  globalDBArray = dbArray;
  console.log("globalDBArray: ",globalDBArray);
}

Restaurants();

function Prototype() {

  // using uuidv4 to make id:s
  const localRestaurants = data.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  console.log(globalDBArray);

  //const dbRestaurants = dbArray.map(restaurant => {
  //  var res = Restaurants();
  //  console.log(res);
  //  return { ...restaurant, id: uuidv4() }
  //})

  return (
    <body>
    <BrowserRouter>
      <nav>
         <ul>
           <Link to="/" ><li>Home</li></Link>
           <li> <input class="searchBar" type="text" placeholder="Implementing soon..." /> </li>
           <li> Help </li>
           <li></li>
           <Link to="/login" ><button class="loginButton" onClick={Restaurants}> Kirjaudu </button></Link>
        </ul>
      </nav>
        <Routes>
          {/* Depending on route, renders that component */}
          <Route path="/:restaurantId" element={ <Menu restaurants={ localRestaurants } /> } />
          <Route path="/" element={ <ShopList restaurants ={ localRestaurants }/> } />
          {/*<Route path="/:restaurantId" element={ <Menu restaurants={ dbRestaurants } /> } /> */}
          {/*<Route path="/" element={ <ShopList restaurants ={ dbRestaurants }/> } /> */}
          <Route path="/login" element={ <Login />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </body>
  );
}

export default Prototype;
