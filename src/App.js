import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Login } from "./Pages";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="./home" component={Home} />
    </Router>
  );
}
