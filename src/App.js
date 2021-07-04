import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Head from "./components/Head";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { userContext } from "./context/userContext";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: { name: "" },
    };
  }

  login = (name) => this.setState({ user: name });

  render() {
    const value = {
      user: this.state.user,
      loginUser: this.login,
    };

    return (
      <div className='App'>
        <BrowserRouter>
          <userContext.Provider value={value}>
            <Head />
            <Main />
          </userContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
