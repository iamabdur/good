import React, { Component } from 'react';

class LifeCycleComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ""
      }
      console.log("---")
    }
    shouldComponentUpdate(){
        console.log("componenet updated")
        return true;
    }
    componentDidMount(){//1
        console.log("complete mount")
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previouse state and props")
        console.log(prevProps,prevState);
        return null;
    }
    componentDidUpdate(){
        console.log("componenetr did update");
    }
    static getDerviedStateFromProps(props, state){
        return {name: props.name}
    }
  clickEvent() {
    console.log("clicked")
    this.setState({
        name:"update lifecycle"
    })
  }

  render() {
    console.log('render invoked');
    return (
      <div>
        LifeCycleComponent {this.state.name}
        <button onClick={() => this.clickEvent()}>update</button>
      </div>
    );
  }
}

export default LifeCycleComponent;
