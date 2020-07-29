import React from "react";
import "./App.css";
import NewsList from "./components/newslist/NewsList";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={NewsList} />
      </div>
    </Router>
  );
}

export default App;
