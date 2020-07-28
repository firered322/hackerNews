import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <div className="newsitem">
      <p className="title">{props.title}</p>
      <p className="meta">By {props.by} | 2 hrs ago | hide | 18 comments</p>
    </div>
  );
};

export default NewsItem;
