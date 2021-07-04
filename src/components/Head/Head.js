import React, { Component } from "react";
import "./Head.scss";
import Nav from "./Nav";
import { userContext } from "../../context/userContext";

class Head extends Component {
  // constructor(props){
  // super(props);
  // this.state = {};
  // }

  render() {
    return (
      <div className='Head'>
        <userContext.Consumer>
          {({ user }) => {
            return (
              <>
                <div className='userName'>{user.name}</div>
              </>
            );
          }}
        </userContext.Consumer>
        <Nav />
      </div>
    );
  }
}

export default Head;
