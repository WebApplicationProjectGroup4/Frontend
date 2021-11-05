import './Main.css'

const React = require('react'); 
const ReactDOM = require('react-dom'); 

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
          <li>Search bar</li>
          <li>Asiakaspalvelu</li>
          <li></li>

          <button onClick= { () => login() }> Kirjaudu </button>

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