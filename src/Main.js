import './styles/Main.css'
import Footer from './components/Footer.js';
import data from './components/data.json';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShopList from './components/ShopList.js';
import Menu from './components/RestaurantMenu.js';
import Login from './components/Login.js';
//const React = require('react'); 
const ReactDOM = require('react-dom'); 
const axios = require('axios').default;


// TODO:
// customer(user) / admin ui
// components for shopping cart, login
// restaurant browsing could be the front page and automatically loaded to UI before login
// order food -> pay -> order preparing, ready, delivering... -> delivery ok, order closed
// create account
// order history
// admin component for creating restaurant

// information should not be lost during reboot so most of this has to eventually go to database

const shoppingCart = props => {
  

  // keeps track of food orders from this current customer
  // customer username/unique id could be passed to this as props
  // needs functions/components for adding & deleting stuff
}

const foodOrderingSystem = props => {

  // this will be in direct relation with shoppingCart component
  // i think we can do it all in a single component
  // checkout order -> display delivery ETA etc

  // when order is closed after successful delivery,
  // this should pass some info back to database
  // to order history
}

const adminUI = props => {


  // render more stuff
  // create restaurant etc
}


function Restaurants() {
  //Get data from the api

  axios.get('/restaurants')

  .then(function (response) {
    // handle success
    console.log(response.data);
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })

  .then(function (response) {
    // always executed
  });
}

  /*const [restaurants, getRestaurants] = useState('');
  //const url = 'http://localhost:3001/'
  getAllRestaurants();
  const getAllRestaurants = () => {
    axios.get('/restaurants');
  }
}*/

function Prototype() {

// using uuidv4 to make id:s
  const restaurants = data.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

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
          <Route path="/:restaurantId" element={ <Menu restaurants={ restaurants } /> } />
          <Route path="/" element={ <ShopList restaurants ={ restaurants }/>} />
          <Route path="/login" element={ <Login />} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </body>
  );
}

export default Prototype;
