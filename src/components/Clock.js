import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 10} //setting the time for the counter
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1 //countdown
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000); //1 second interval for timer update
  }
  
  render() {

    if(this.state.currentCount > 5 ) { //updating the text-render based on the current count (=time elapsed)
      return(
        <div>
        <h1>We have received your order!</h1>
        </div>
      );
    }
    
    else if (this.state.currentCount > 1 ) {
      return(
        <div>
        <h1>Your order is ready and being delivered!</h1>
        </div>
      );
    }
  
    else if(this.state.currentCount = 1 ) {
      return(
        <div>
        <h1>Delivery complete, enjoy your food!</h1>
        <Link to="/" ><button class="Button" > Close order </button> </Link>
        <Link to="/checkorder" ><button class="Button" > See your order history </button> </Link>
        </div>
      );
    }
  }
}

export default Clock;