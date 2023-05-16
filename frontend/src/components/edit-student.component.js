import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Table from "react-bootstrap/Table";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onChangeStudentMobile = this.onChangeStudentMobile.bind(this);
   
    this.onChangeStudentSex = this.onChangeStudentSex.bind(this);
    this.onChangeStudentDuration = this.onChangeStudentDuration.bind(this);
    this.onChangeStudentMembership = this.onChangeStudentMembership.bind(this);
    this.onChangeStudentAmount = this.onChangeStudentAmount.bind(this);
    this.onChangeStudentDate = this.onChangeStudentDate.bind(this);
    this.onChangeStudentCName = this.onChangeStudentCName.bind(this);
    this.onChangeStudentApproved = this.onChangeStudentApproved.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      email: "",
      age: null,
      mobile: null,
    
      sex: "",
      duration: "",
      membership: "",
      amount: null,
      date: "",
      cname: "",
      approved: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          age: res.data.age,
          mobile: res.data.mobile,
         
          sex: res.data.sex,
          duration: res.data.duration,
          membership: res.data.membership,
          amount: res.data.amount,
          date: res.data.date,
          cname: res.data.cname,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeStudentAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeStudentMobile(e) {
    this.setState({ mobile: e.target.value });
  }
 

  onChangeStudentSex(e) {
    this.setState({ sex: e.target.value });
  }
  onChangeStudentDuration(e) {
    this.setState({ duration: e.target.value });
  }
  onChangeStudentMembership(e) {
    this.setState({ membership: e.target.value });
  }
  onChangeStudentAmount(e) {
    this.setState({ amount: e.target.value });
  }
  onChangeStudentDate(e) {
    this.setState({ date: e.target.value });
  }
  onChangeStudentCName(e) {
    this.setState({ cname: e.target.value });
  }
  onChangeStudentApproved() {
    this.setState((prevState) => ({
      approved: !prevState.approved,
    }));
  }
  onSubmit(e) {
    e.preventDefault();
    
    let arr = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        arr.push(key);
        arr.toString();
        
      }
    }

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
      mobile: this.state.mobile,
      checkbox: this.state.checkbox,
      sex: this.state.sex,
      duration: this.state.duration,
    
      amount: this.state.amount,
      date: this.state.date,
      cname: this.state.cname,
        membership: this.state.membership
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to member List
    this.props.history.push("/member-list");
  }

  render() {
    return (
      <div className="wrapper2">
        <Form onSubmit={this.onSubmit} spellcheck="false"  autoComplete="off">
          <Table stripped borderless size="lg" id="tab_logic">
            <thead>
              <tr>
                <th class="text-center">Name</th>
                <th class="text-center">Age</th>
                <th class="text-center">Mobile</th>
                <th class="text-center">Email</th>
               
                <th class="text-center">Gender</th>
                <th class="text-center">Duration</th>
                
              </tr>
            </thead>
            <tbody>
              <tr id="addr1">
                <td>
                  <Form.Group controlId="MainName">
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.onChangeStudentName}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="Agenumber">
                    <Form.Control
                      type="Number"
                      value={this.state.age}
                      onChange={this.onChangeStudentAge}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="Mobilenumber">
                    <Form.Control
                      type="Number"
                      value={this.state.mobile}
                      onChange={this.onChangeStudentMobile}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      value={this.state.email}
                      onChange={this.onChangeStudentEmail}
                    />
                  </Form.Group>
                </td>

               
                <td>
                  <Form.Group controlId="selectsex">
                    <Form.Control
                      as="select"
                      custom
                      onChange={this.onChangeStudentSex}
                    >
                      <option>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Form.Control>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="selectduration">
                    <Form.Control
                      as="select"
                      custom
                      onChange={this.onChangeStudentDuration}
                    >
                      <option>Select Duration </option>
                      <option value="1 month">1 month</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="1 year">1 year</option>
                    </Form.Control>
                  </Form.Group>
                </td>
               
              </tr>
            </tbody>
            <br />
            <br />
            <thead>
              <tr>
                <th class="text-center">Membership type</th>
                <th class="text-center">Amount</th>
                <th class="text-center">payment Date</th>
                <th class="text-center">Cashier's Name</th>
                
              </tr>
            </thead>
            <tbody>
            <td>
                  <Form.Group controlId="selectmembership">
                    <Form.Control
                      as="select"
                      custom
                      onChange={this.onChangeStudentMembership}
                    >
                      <option>Memb.Type </option>
                      <option value="New">New membership</option>
                      <option value="Renewal">Renewal</option>
                    </Form.Control>
                  </Form.Group>
                </td>
              <td>
                <Form.Group controlId="Amount">
                  <Form.Control
                    type="Number"
                    value={this.state.amount}
                    onChange={this.onChangeStudentAmount}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="Date">
                  <Form.Control
                    type="Date"
                    value={this.state.date}
                    onChange={this.onChangeStudentDate}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="Name2">
                  <Form.Control
                    type="Name"
                    value={this.state.cname}
                    onChange={this.onChangeStudentCName} spel
                  />
                </Form.Group>
              </td>
            
            </tbody>
          </Table>
          <Form.Group controlId="checkbox3">
            <Form.Check
              type="checkbox"
              label="Payment Approved"
              checked={this.state.approved}
              onChange={this.onChangeStudentApproved}
            />
          </Form.Group>
          <br />
          <br />
          <Button
            variant="danger"
            size="lg"
            block="block"
            type="update"
            disabled={!this.state.approved} 
          >
            Save
          </Button>
          <br/><br/>
        </Form>
      </div>
    );
  }
}
