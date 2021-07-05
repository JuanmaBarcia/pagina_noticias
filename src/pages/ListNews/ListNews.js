import React, { Component } from "react";
import "./ListNews.scss";
import Notice from "./Notice";
import axios from "axios";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  cargarNoticias = async () => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.REACT_APP_NOTICE_API}`
    );
    const articles = res.data.articles.slice(0, 5);
    await this.setState({ articles });
    await this.setState({
      articles: [...this.state.articles, ...this.props.articles],
    });
  };

  renderArticles = () =>
    this.state.articles.map((notice, i) => (
      <Notice data={notice} key={i} remove={() => this.removeArticle(i)} />
    ));

  removeArticle = (i) => {
    let filteredArray = this.state.articles.filter((item, j) => i !== j);
    this.setState({ articles: filteredArray });
  };

  componentDidMount() {
    this.cargarNoticias();
  }

  render() {
    return <div className='ListNews'>{this.renderArticles()}</div>;
  }
}

export default ListNews;
