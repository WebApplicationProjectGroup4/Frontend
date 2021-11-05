import './Main.css'

const React = require('react'); 
const ReactDOM = require('react-dom'); 

// TODO:
// customer / admin ui
// components for shopping cart, login
// restaurant browsing could be the front page and automatically loaded to UI before login
// order food -> pay -> order preparing, ready, delivering... -> delivery ok, order closed
// create account
// order history

const login = props => {

console.log("bruh");
// prompt username + password
// admin check in here or in mysql
// if admin == true -> launch a different ui
}

function Header() {
    return (
      <nav>
        <ul>
          <li> Search bar </li>
          <li> Asiakaspalvelu </li>
          <li></li>

          <button onClick= {() => login()}> Kirjaudu </button>

        </ul>
      </nav>
    )
}

function Main() {
  return ReactDOM.render(
	<Header />,
	document.getElementById('root')
  )
}

export default Main;