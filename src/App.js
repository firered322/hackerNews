import React from "react";
import "./App.css";
import NewsList from "./components/newslist/NewsList";


function App() {
  return (
    <div className="container">
      <div className="navbar">
        <h4>Hacker News</h4>
      </div>
        <NewsList />
    </div>
  );
}

export default App;
