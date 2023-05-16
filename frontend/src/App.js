import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import io from "socket.io-client";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BackImage from "./logo.png";

import CreateMember from "./components/create-member.component";
import EditStudent from "./components/edit-student.component";
import { StudentList } from "./components/student-list.component";
var sectionStyle = {
  backgroundImage: `url(${BackImage})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `right`,
  
  backgroundSize: `large`,
  height:`100%`,
  borderRadius:`4%`,
};

//var socket;
class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:3000/member-list",
    };
    
  }
  render() {
    return (
      <div className="App"  responsive>
        <Router>
          <header className="App-header" responsive>
            <Navbar bg="dark" variant="dark" >
              <Container style={sectionStyle} >
              
                <Navbar.Brand>
            
                  <Link to={"/"} className="nav-link" >
                   
                    Elfora Payment Records
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" />
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route
                      exact
                      path="/create-member"
                      component={(props) => <CreateMember {...props} />}
                    />
                    <Route
                      exact
                      path="/"
                      component={(props) => <CreateMember {...props} />}
                    />
                    <Route
                      exact
                      path="/edit-student/:id" 
                      component={(props) => <EditStudent {...props} />}
                    />
                    <Route
                      exact
                      path="/member-list"
                      component={(props) => <StudentList {...props} />}
                    />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}
export default App;
