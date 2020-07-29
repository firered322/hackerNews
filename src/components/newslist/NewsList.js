import React from "react";
import "./NewsList.css";
import NewsItem from "../newsitem/NewsItem";
import { fetchTopStoryIds } from "../../api/index";

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      storyIds: [],
    };
  }

  componentDidMount() {
    fetchTopStoryIds().then((data) => this.setState({ storyIds: data }));
  }

  render() {
    // const news = this.state.articles.map((item) => <p>{item}</p>);
    // return this.state.articles ? news : "loading";
    return this.state.storyIds.map((item) => <NewsItem story={item} />);
  }
}

export default NewsList;
