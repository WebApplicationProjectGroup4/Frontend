import './styles/Main.css'
import Footer from './components/Footer.js';
import data from './components/data.json';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ShopList from './components/ShopList.js';
import Menu from './components/RestaurantMenu.js';

//const React = require('react'); 
const ReactDOM = require('react-dom'); 


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

/*
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data,
      SearchString: ""
    }
  }

  onChange = (event) => {
    this.setState({SearchString: event.target.value});
  }
  
  render()
  {
    return (
      
      <body>
        <BrowserRouter>
      <nav>
         <ul>
           <Link to="/"><li>Home</li></Link>
           <li> <input class="searchBar" type="text" onChange={this.onChange} value={this.state.SearchString} /> </li>
           <li> Asiakaspalvelu </li>
           <li></li>
           <button class="loginButton" onClick= {() => login()}> Kirjaudu </button>
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={ <ShopList items={this.state.items.filter((item) => item.name.includes(this.state.SearchString))} /> }>
            <Route path={data.id} element={ <Menu />   }/>
          </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
      </body>
    )
  }
}
*/

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
           <li> Asiakaspalvelu </li>
           <li></li>
           <button class="loginButton" onClick= {() => login()}> Kirjaudu </button>
        </ul>
      </nav>
        <Routes>
          {/* Depending on route render x  */}
          <Route path="/:restaurantId" element={ <Menu restaurants={ restaurants } /> } />
          <Route path="/" element={ <ShopList restaurants ={ restaurants }/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </body>
  );
}

export default Prototype;

/*

const [searchTerm,setSearchTerm] = useState('')

<input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
{data.filter((val)=>{
    if(searchTerm == ""){
      return val
    }
    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
      return val;
    }
  }).map((val)=>{
    return <div>{val.name} </div>
  })}
 */