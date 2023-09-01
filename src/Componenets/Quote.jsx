import React, { Component } from 'react';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
        "Life is really simple, but we insist on making it complicated. - Confucius",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke"
      ],
      currentQuote: ''
    };
  }

  generateRandomQuote = () => {
    const { quotes } = this.state;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.setState({ currentQuote: quotes[randomIndex] });
  }

  render() {
    const { currentQuote } = this.state;

    return (
      <div className="quote-container">
        <h1>Random Quote Generator</h1>
        <div className="quote">
          {currentQuote && <p>{currentQuote}</p>}
        </div>
        <button onClick={this.generateRandomQuote}>Generate Random Quote</button>
      </div>
    );
  }
}

export default Quote;
