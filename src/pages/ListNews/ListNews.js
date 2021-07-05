import React, { Component } from "react";
import "./ListNews.scss";
import Notice from "./Notice";

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  renderNoticias = async () => {
    await this.setState({
      articles: this.props.articles,
    });
  };

  renderArticles = () =>
    this.state.articles.map((notice, i) => (
      <Notice data={notice} key={i} remove={() => this.removeArticle(i)} />
    ));

  removeArticle = async (i) => {
    let filteredArray = this.state.articles.filter((item, j) => i !== j);
    await this.setState({ articles: filteredArray });
  };

  componentDidMount() {
    this.renderNoticias();
  }

  componentWillUnmount = () => {
    this.props.updateArticles(this.state.articles);
  };

  render() {
    return <div className='ListNews'>{this.renderArticles()}</div>;
  }
}

export default ListNews;
