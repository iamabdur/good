import React, { Component } from 'react';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: null,
    };
  }

  generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    this.setState({ randomNumber: randomNum });
  };

  render() {
    const { randomNumber } = this.state;

    return (
      <div>
        <h2>Random Number Generator</h2>
        <button onClick={this.generateRandomNumber}>Generate Random Number</button>
        {randomNumber !== null && (
          <p>Random Number: {randomNumber}</p>
        )}
      </div>
    );
  }
}

export default Random;
