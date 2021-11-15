import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/portfolio-website-main/">
          <Home />
        </Route>
        <Route path="/portfolio-website-main/about">
          <About />
        </Route>
        <Route path="/portfolio-website-main/education">
          <Education />
        </Route>
        <Route path="/portfolio-website-main/skills">
          <Skills />
        </Route>
        <Route path="/portfolio-website-main/contact">
          <Contact />
        </Route>
      </div>
    </Router>
  );
}

export default App;
