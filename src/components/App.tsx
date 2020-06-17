import React, { useContext, useCallback } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { FormProvider, FormContext } from "./FormContext";

export const App = () => (
  <Router>
    <div>Route sample</div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <FormProvider>
        <Route path="/form">
          <FormTop />
        </Route>
      </FormProvider>
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
  const { state } = useContext(FormContext);
  return (
    <div>
      <h2>Form</h2>
      <section>
        <div>
          form value
          <ul>
            <li>name: {state.name}</li>
            <li>age : {state.age}</li>
            <li>email : {state.email}</li>
          </ul>
        </div>
      </section>
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
  const { dispatch, state } = useContext(FormContext);
  const onChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      dispatch({ type: "name", payload: e.currentTarget.value });
    },
    [dispatch, state]
  );
  return (
    <div>
      <h2>Name</h2>
      <label htmlFor="name">Name</label>
      <input name="name" value={state.name} onChange={onChange} />

      <Link to="/form/age">next age</Link>
    </div>
  );
};
const Age = () => {
  const { dispatch, state } = useContext(FormContext);
  const onChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      dispatch({ type: "age", payload: Number(e.currentTarget.value) });
    },
    [dispatch, state]
  );
  return (
    <div>
      <h2>Age</h2>
      <label htmlFor="age">age</label>
      <input name="age" type="number" value={state.age} onChange={onChange} />

      <Link to="/form/email">next email</Link>
    </div>
  );
};
const Email = () => {
  const { dispatch, state } = useContext(FormContext);
  const onChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) => {
      dispatch({ type: "email", payload: e.currentTarget.value });
    },
    [dispatch, state]
  );
  return (
    <div>
      <h2>Email</h2>
      <label htmlFor="email">Email</label>
      <input name="email" value={state.email} onChange={onChange} />
      <Link to="/">submit</Link>
    </div>
  );
};
