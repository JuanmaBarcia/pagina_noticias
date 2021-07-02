import React, { Component } from "react";
import "./Head.scss";
import Nav from "./Nav";

class Head extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div className='Head'>
        esto es head
        <Nav />
      </div>
    );
  }
}

export default Head;
