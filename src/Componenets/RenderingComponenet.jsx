import React, { Component } from 'react'

class RenderingComponenet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text:"condition",
         show:true,
         fruit:["Apple","origin","graph","Apple"]
      }
    }
    showing(){
      this.setState({show : !this.state.show})
    }
  render() {
    const b=this.state.show?'hide':'show';
    return (
      <div>




      <div>
        <h1>fruit</h1>
        <ul>{
           this.state.fruit.map((f,i)=>{
            return(<li key={i}>{f}</li>)
           })
          }
        
        </ul>
      </div>
<div>RenderingComponenet
  <br></br>
        
        { this.state.show && this.state.text}
        {/* {console.log(this.state.show && this.state.text)} */}
        <button onClick={()=>{this.showing()}}>{b}</button>
      </div>
      </div>
      
    )
  }
}
export default RenderingComponenet;
