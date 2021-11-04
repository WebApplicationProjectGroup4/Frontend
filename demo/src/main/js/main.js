const React = require('react'); 
const ReactDOM = require('react-dom'); 

function Header() {
    return (
      <nav>
        <ul>
          <li>Search bari</li>
          <li>Asiakaspalvelu</li>
          <li></li>
          <li>Kirjaudu</li>
        </ul>
      </nav>
    )
  }

ReactDOM.render(
	<Header />,
	document.getElementById('react')
)