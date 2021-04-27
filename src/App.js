import React from "react";
import logo from "./logo.svg";
import { Button, Container, Row, Col } from "reactstrap";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import { BrowserRouter as Router, Route }  from "react-router-dom";


function App() {
  const btnHandle = () => {
    toast.success("done",{
      position:"top-right",
    });
  };

  return(
    <div>
      <Router>
        <ToastContainer /> 
        <Container>
         <Header />
         <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/add-course" component={AddCourse} exact/>
            </Col>
         </Row>
        </Container>   
      </Router>
    </div>
  );
}

export default App;
