import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Signup from "./Signup";
import Signin from "./Signin";
import AccountSetting from "./AccountSetting";
import ResetPassword from "./ResetPassword";
import Review from "./Review";
import ReviewCard from "./ReviewCard";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import Skill from "./Skill";
import Profile from "./Profile";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/s" exact component={Signup} />
          <Route path="/a" exact component={AccountSetting} />
          <Route path="/rp" exact component={ResetPassword} />
          <Route path="/rv" exact component={Review} />
          <Route path="/rc" exact component={ReviewCard} />
          <Route path="/c" exact component={Contact} />
          <Route path="/b" exact component={BlogPost} />
          <Route path="/sk" exact component={Skill} />
          <Route path="/p" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
