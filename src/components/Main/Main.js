import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Main.scss";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ListNews from "../../pages/ListNews";
import { userContext } from "../../context/userContext";
import axios from "axios";

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
    } else if (prevState.isLogged && user.name === "") {
      await this.setState({ isLogged: false });
    } else if (
      !userCont.isLogged &&
      this.state.isLogged === prevState.isLogged &&
      this.state.articles.length !== prevState.articles.length
    ) {
      await this.setState({ isLogged: false });
    }
  };

  cargarNoticias = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.REACT_APP_NOTICE_API}`
    );
    const articles = res.data.articles.slice(0, 5);

    await this.setState({ articles });
  };

  addNewArticle = async (article) => {
    await this.setState({ articles: [...this.state.articles, article] });
    console.log(this.state.articles);
  };
  renderArticles = () =>
    this.state.articles.map((article) => <h2>{article.title}</h2>);

  componentDidMount = () => {
    this.cargarNoticias();
  };

  updateArticles = async (articles) => {
    await this.setState({ articles });
  };

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
              render={() => (
                <ListNews
                  articles={this.state.articles}
                  updateArticles={this.updateArticles}
                />
              )}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default Main;
