import React from "react";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import VisitorInputForm from "./components/visitorsInputForm";
import LoginForm from "./components/login";
import Logout from "./components/logout";
import VisitorDetails from "./components/visitorsDetails";
import { getUser } from "./components/service/user";
function App() {

  const user = getUser();
  return (
    <React.Fragment>
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/visitorform" component={VisitorInputForm} />
          <Route path="/visitordetails" component={VisitorDetails} />
          <Route path="/logout" component={Logout} />
          <Redirect from="/" exact to="/visitorform" />
          <Redirect to="/visitorform" />
        </Switch>
      </main>
    </React.Fragment>
  );
}
export default App;
