import React, { Component } from 'react'
import './DesignCompo.css'
export default class DesignCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         btnStyle:{
                color:"white",
                backgroundColor:"blue",
                fontSize:"30px",
                borderRadius:"60px",
                borderColor:"yellow",
                outline:"yellow"
         }
      }
    }
  render() {
    return (
      <div>
        <h1>click here</h1>
        <button  className="buttton">
            Button
        </button>
        
        <button type="button" className="btn btn-primary">Primary</button>
        
<button type="button" className="btn btn-secondary">Secondary</button><br>
<button type="button" className="btn btn-success">Success</button><br></br> <br></br>
<button type="button" className="btn btn-danger">Danger</button><br></br> <br></br>
<button type="button" className="btn btn-warning">Warning</button><br></br> <br></br>
<button type="button" className="btn btn-info">Info</button><br></br> <br></br>
<button type="button" className="btn btn-light">Light</button><br></br> <br></br>
<button type="button" className="btn btn-dark">Dark</button><br></br> <br></br>
<br></br> <br></br>
<button type="button" className="btn btn-link">Link</button>
      </div>
    )
  }
}
