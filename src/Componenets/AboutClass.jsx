import React, { Component } from 'react';

export class AboutClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      message: "Hello, World!",
      name: this.props.name,
      work: this.props.work,
    };

    // Binding the event handler to the correct 'this' context
    this.handleClick = this.handleClick.bind(this);
  }

  // Use arrow function for event handler to avoid 'this' issues
  handleClick() {
    this.setState({
      name: "Abdul kareem",
      count:this.state.count+1,
      
    });
  }
  inputChange(e){
    this.setState({
        username:e.target.value,
    })
  }
  

  render() {
    return (
      <div>
        <h1>AboutClass</h1>
        <br></br>
        <b>name:</b> {this.state.name}
        <br></br>
        passion: {this.state.work}
        <p>Count: {this.state.count}</p>
        <p>username{this.state.username}</p>
        {/* Use the bound event handler */}
        <input 
        onChange={(e)=>{this.inputChange(e)}}
        
        /><br></br>
        <button onClick={this.handleClick}>Click to Change</button>
      </div>
    );
  }
}

export default AboutClass;
