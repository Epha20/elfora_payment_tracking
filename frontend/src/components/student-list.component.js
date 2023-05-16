import React, {  useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MemberTableRow from "./MemberTableRow";
import Form from "react-bootstrap/Form";
import JsPDF from "jspdf";


import { renderToString } from 'react-dom/server';





const BASE_URL = "http://localhost:4000"


export const StudentList = () => {
  const [students, setStudents] = useState([])
const [filteredData] = useState(students);
 
const print = () => {
  const string = renderToString();
  const pdf = new JsPDF();
  pdf.fromHTML(string);
  pdf.save('report');
}

  const handleSearch = (event) =>{
  

    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = students.filter((data) => {
    return data.name.search(value) !== -1;
    });
    setStudents(result);
  }


  
 

  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/`)
      .then((__respond) => {
        if (__respond.data.length > students.length) {
          setStudents(__respond.data)
        }

     
        
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  setInterval(() => {
    if (students.length > 0) {
      axios
      .get(`${BASE_URL}/students/`)
      .then((__response) => {
          if (__response.data.length > students.length) {
            setStudents(__response.data)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, 5000)
 
  return (
    
    <div>
      
       <div class="d-flex justify-content-end">
  <button class="btn btn-primary" type="button" onClick={print}>
    Generate Report
  </button></div><br />
      <Form className="d-flex">


          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            //value= {filteredData}
            onChange= {handleSearch}  spellcheck="false"
          />
         
        </Form>
        
        
        
       


        <br />
        <div id="rot">
        <Table striped bordered hover size="sm" id="pdf">
          <thead>
            <tr>
              <th>Payment/Transfer to</th>
              <th>Cheque Number</th>
              <th>Cheque Amount</th>
              <th>Date</th>
              <th>Bank</th>
            <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody >
            {students.reverse().map((student, _index) => <MemberTableRow student={student} key={_index} />)}
          </tbody>
          <tbody>
            {filteredData.map((value, index) => <MemberTableRow value={value} key={index} />)}
          </tbody>
        </Table>
        </div>
     
        <br />
        <br /> 
      </div>
      
  );
  }
