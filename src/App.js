import React from "react";
import logo from "./logo.svg";
import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import Opportunities from "./components/Opportunities";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import DropDown from "./components/DropDown";

  function App(){
      return (
      <div>
        <Router>
          <ToastContainer />
          <Container>
            <Header />
            <Row>
              <Col md={3}>
                <Menus />
              </Col>
              <Col md={9}>
                <Route path="/" component={Home} exact />
                <Route path="/dropdown" component={DropDown} exact />
                <Route path="/myprofile" component={MyProfile} exact />

              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }

export default App;
