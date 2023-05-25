import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";


export default class MemberTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }  

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.student._id
      )
      .then((res) => {
        console.log("Member successfully deleted!");
        alert("Member successfully deleted!")
        window.location.reload(true);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }  
   dates(dates){
    const dateStr = dates;
    const date = new Date(dateStr);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    console.log(formattedDate, "formattedDatem"); // Output: "Saturday, March 25, 2023"

    return formattedDate;
  }

  render() {
    

    return (
      

      <tr>
        <td>{this.props.student.name}</td>
        <td>{this.props.student.age}</td>
        <td>{this.props.student.mobile.toLocaleString()}</td>
        <td>{this.dates(this.props.student.date)}</td>
        <td>{this.props.student.duration}</td>
        <td>
        <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-student/" + this.props.student._id}
            style={{ textDecoration: 'none' }}
            
          >
            Edit
          </Link>
          <br />
          <br />
          

          <Button
           className="delete-link"
            onClick={this.deleteStudent}
            size="md"
            
            
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
