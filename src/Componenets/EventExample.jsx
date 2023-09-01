
import React, { Component } from 'react';

class EventExample extends Component {
   handleClick(){
   console.log("good programmer")
  };
  handleHover(){
    console.log("mouse is hovering");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <button onChange={this.handleHover}>Click bro</button>
      </div>
    );
  }
}

export default EventExample;
