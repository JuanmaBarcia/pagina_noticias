import React, { Component } from "react";
import "./Head.scss";
import Nav from "./Nav";
import { userContext } from "../../context/userContext";

class Head extends Component {
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
