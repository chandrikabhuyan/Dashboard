import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import Meetings from "./components/Meetings";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/myprofile">
          <MyProfile />
        </Route>
        <Route path="/meetings">
          <Meetings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
