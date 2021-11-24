import './styles/Main.css'
import Footer from './components/Footer.js';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShopListDB from './components/ShopListDB.js';
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

var globalDBArray = []; // global array for DB restaurants

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

    var globalDBObject = {name: "", operatingHours: "", address: "", priceLevel: 0};
    // this gets pushed to globalDBArray
    // we are pushing an object because we can name the fields for rendering purposes

    globalDBObject.name = res.data[i].Name;
    globalDBObject.operatingHours = res.data[i].OperatingHours;
    globalDBObject.address = res.data[i].Address;
    globalDBObject.priceLevel = res.data[i].PriceLevel; // loop through response, add to object fields

    dbArray.push(globalDBObject); // push to array
  }

  globalDBArray = dbArray;
  console.log("globalDBArray in handleRestaurants(): ",globalDBArray);
}

Restaurants();

function Prototype() {

  const dbRestaurants = globalDBArray.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  // wrong order during browser refresh
  //it renders a null globalDBArray

  if (globalDBArray.length === 0) 
    console.log("globalDBArray is null!");
  else
    console.log("globalDBArray is not null, render should be ok?");
  
  return (
    <body>
    <BrowserRouter>
      <nav>
         <ul>
           <Link to="/" ><li>Home</li></Link>
           <li> <input class="searchBar" type="text" placeholder="Implementing soon..." /> </li>
           <li> Help </li>
           <li></li>
           <Link to="/login" ><button class="loginButton" > Kirjaudu </button></Link>
        </ul>
      </nav>
        <Routes>
          {/* Depending on route, renders that component */}
          {/*<Route path="/:restaurantId" element={ <MenuDB restaurants={ dbRestaurants } /> } /> */}
          <Route path="/" element={ <ShopListDB restaurants ={ dbRestaurants }/> } />
          <Route path="/login" element={ <Login />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </body>
  );
}

export default Prototype;
