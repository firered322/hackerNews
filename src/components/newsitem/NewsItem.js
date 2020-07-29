import React from "react";
import "./NewsItem.css";
import { findStory } from "../../api/index";

class NewsItem extends React.Component {
  constructor() {
    super();
    this.state = {
      story: {},
    };
  }

  componentDidMount() {
    findStory(this.props.story).then(
      (data) => data && this.setState({ story: data })
    );
  }

  render() {
    return this.state.story ? <p>{this.state.story.title}</p> : "loading";
  }
}

export default NewsItem;
