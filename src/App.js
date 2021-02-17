import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Home,
  Latin,
  Login,
  MasterLatin,
  Report,
  Review,
  Reward,
} from "./Pages";

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/MasterLatin" component={MasterLatin} />
      <Route path="/Latin" component={Latin} />
      <Route path="/Report" component={Report} />
      <Route path="/Reward" component={Reward} />
      <Route path="/review" component={Review} />
    </Router>
  );
}
