import React, { Component } from 'react';

class HomeClass extends React.Component {
        constructor(props) {
          super(props)
        
          this.state = {
             text:"condition",
             show:false,
          }
        }


    render() {
        return (
            <div>
               <h1>Home Class Component</h1> 
                {this.state.show}
                {this.state.text}
                <button></button>
            </div>
        );
    }
}

export default HomeClass;