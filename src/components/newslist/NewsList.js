import React from "react";
import "./NewsList.css";
import NewsItem from '../newsitem/NewsItem'
import { fetchTopStories } from '../../api/index'

class NewsList extends React.Component {
    constructor() {
        super()
        this.state = {
            articles: []
        }
    }

    render() {
        return (
            <div className="newslist">
                NewsList Component
            </div>
        )
    }
}

export default NewsList;
