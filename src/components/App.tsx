import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export const App = () => (
  <Router>
    <div>Route sample</div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/form">
        <FormTop />
      </Route>
    </Switch>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/form/name">go to form</Link>
  </div>
);

const FormTop = () => {
  return (
    <div>
      <h2>Form</h2>
      <Switch>
        <Route exact path="/form/name">
          <Name />
        </Route>
        <Route exact path="/form/age">
          <Age />
        </Route>
        <Route exact path="/form/email">
          <Email />
        </Route>
      </Switch>
    </div>
  );
};

const Name = () => {
  return (
    <div>
      <h2>Name</h2>
      <label htmlFor="name">Name</label>
      <input name="name" />
      <Link to="/form/age">next age</Link>
    </div>
  );
};
const Age = () => (
  <div>
    <h2>Age</h2>
    <Link to="/form/email">next email</Link>
  </div>
);
const Email = () => (
  <div>
    <h2>Email</h2>
    <Link to="/">submit</Link>
  </div>
);
