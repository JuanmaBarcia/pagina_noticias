import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.scss";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ListNews from "../../pages/ListNews";

class Main extends Component {
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
      <div className='Main'>
        esto es main
        <Switch>
          <Route path='/home' component={Home} exact />
          <Route path='/form' component={Form} />
          <Route path='/list' component={ListNews} />
        </Switch>
      </div>
    );
  }
}

export default Main;
