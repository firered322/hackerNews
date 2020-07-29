import React from "react";
import "./NewsItem.css";
import { findStory } from "../../api/index";
import {time} from '../../helpers/time'

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
    return this.state.story ? (
      <div className="newsItem">
        <div className="articleHeader">
        <span className="articleId">{this.props.id + 1}.</span>
        <a
          href={this.state.story.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{this.state.story.title}</p>
        </a>
        </div>
        <div className="artcleDetails">
          By: <span className="articleMeta">{this.state.story.by}</span>
          Posted:{" "}
          <span>
            {time(this.state.story.time)}
          </span>
        </div>
      </div>
    ) : (
      "loading"
    );
  }
}

export default NewsItem;
