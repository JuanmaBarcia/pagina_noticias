import React, { Component } from "react";
import "./ListNews.scss";
import Notice from "./Notice";

class ListNews extends Component {
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
      <div className='ListNews'>
        esto es listnews
        <Notice />
      </div>
    );
  }
}

export default ListNews;
