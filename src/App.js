import React from "react";
import TodoApp from "./Component/TodoApp/TodoApp";
import About from "./Component/About/About";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom"; //we use BrowserRouter as Router statement so that we can use Router name thats why

const App = () => {
  return (
    <Router>
      <Header /> {/* this header is common in all pages*/}
      <Routes >
      
      <Route path="/" exact Component={TodoApp} />
      <Route path="/about" Component={About} />
      </ Routes >
    </Router>
  );
};
export default App;
