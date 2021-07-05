import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Main.scss";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ListNews from "../../pages/ListNews";
import { userContext } from "../../context/userContext";

class Main extends Component {
  static contextType = userContext;
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLogged: false,
      name: "",
    };
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const userCont = this.context;
    const user = userCont.user;

    if (!this.state.isLogged && user.name !== "") {
      await this.setState({ isLogged: true });
    } else if (
      !userCont.isLogged &&
      this.state.isLogged === prevState.isLogged
    ) {
      await this.setState({ isLogged: false });
    }
  };

  addNewArticle = async (article) =>
    await this.setState({ articles: [...this.state.articles, article] });

  renderArticles = () =>
    this.state.articles.map((article) => <h2>{article.title}</h2>);

  render() {
    if (!this.state.isLogged) {
      return (
        <div className='Main wrapper'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route exact path='/form'>
              <Redirect to='/home' />
            </Route>
            <Route exact path='/list'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' component={Home} />
          </Switch>
        </div>
      );
    } else {
      return (
        <div className='Main wrapper'>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' component={Home} />
            <Route
              path='/form'
              render={() => <Form addNewArticle={this.addNewArticle} />}
            />
            <Route
              path='/list'
              render={() => <ListNews articles={this.state.articles} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default Main;
