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
// customer / admin ui
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

const login = props => {

console.log("test");

// this could render a username + pw window/element
// save it to local variables, pass to database
// compare returned username + pw from database to local variables

// admin check in here or in mysql
// we could add an admin entry to user table in mysql
// if admin == true launch admin UI else customer UI (default)
}

function App() {

  // get
  axios.get('/customers')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    return null;
}

function Restaurants() {
  //Get data from the api
  const [restaurants, getRestaurants] = useState('');
  const url = 'http://localhost:3001/'
  const getAllRestaurants = () => {
    axios.get(`${url}restaurants`)
  }
}

function Prototype() {

// using uuidv4 to make id:s
  const restaurants = data.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  return (
    <body>
    
    <BrowserRouter>
    <App />
      <nav>
         <ul>
           <Link to="/" ><li>Home</li></Link>
           <li> <input class="searchBar" type="text" placeholder="Implementing soon..." /> </li>
           <li> Asiakaspalvelu </li>
           <li></li>
           <Link to="/login" ><button class="loginButton" onClick= {() => login()}> Kirjaudu </button></Link>
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
