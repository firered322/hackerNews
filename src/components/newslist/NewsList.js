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
    return this.state.storyIds.map((item, id) => <NewsItem key={item} story={item} id={id} />);
  }
}

export default NewsList;
