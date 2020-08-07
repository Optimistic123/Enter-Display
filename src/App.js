import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//All pages are impported here
import About from "./Components/About/About";
import Students from "./Components/ECE/ECE";
import Form from "./Components/Home/Form";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <Router>
      <div className="row_poster">
        <Nav />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/about" component={About} />
          <Route path="/students" component={Students} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
