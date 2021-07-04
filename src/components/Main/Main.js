import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.scss";
import Home from "../../pages/Home";
import Form from "../../pages/Form";
import ListNews from "../../pages/ListNews";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Título",
          url: "https://noticia",
          urlImg: "https://imagen",
          descrption: "Descripcion",
        },
      ],
    };
  }

  addNewArticle = async (article) =>
    await this.setState({ articles: [...this.state.articles, article] });

  renderArticles = () =>
    this.state.articles.map((article) => <h2>{article.title}</h2>);

  render() {
    return (
      <div className='Main'>
        {this.renderArticles()}
        <Switch>
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

export default Main;
