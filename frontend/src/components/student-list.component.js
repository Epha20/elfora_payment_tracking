import React, { useEffect, useState } from "react";
import JsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import Table from "react-bootstrap/Table";
import MemberTableRow from "./MemberTableRow";
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/esm/Button";

const BASE_URL = "http://localhost:4000";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 5; // Number of items per page

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    filterStudents(value);
  };

  const filterStudents = (search) => {
    if (search.trim() === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) =>
          student.name.toLowerCase().includes(search) ||
          student.age.toString().includes(search)
      );
      setFilteredStudents(filtered);
    }
    setCurrentPage(0);
  };
  
  
  
  

  const print = () => {
    const doc = new JsPDF();
    const tableHeaders = [
      "Payment/Transfer to",
      "Cheque Number",
      "Cheque Amount",
      "Date",
      "Bank",
    ];

    const tableData = filteredStudents.map((student) => [
      student.name,
      student.age,
      student.mobile.toLocaleString(),
      formatDate(student.date), // Call formatDate with student.date as an argument
      student.duration,
    ]);

    doc.setFontSize(18); // Set font size for the title
    doc.text("Cheque Payment Report", 10, 10);
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("report.pdf");
  };

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    console.log(formattedDate); // Output: "Saturday, March 25, 2023"

    return formattedDate;
  }

  const renderTableData = () => {
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const reversedData = [...filteredStudents].reverse();
  const slicedData = reversedData.slice(startIndex, endIndex);

  if (startIndex === 0 && endIndex >= filteredStudents.length && filteredStudents.length > 0) {
    const lastAddedIndex = students.findIndex(
      (student) => student.name === filteredStudents[filteredStudents.length - 1].name
    );
    if (lastAddedIndex !== -1) {
      slicedData.unshift(students[lastAddedIndex]);
    }
  }

  return slicedData.map((student, index) => (
    <MemberTableRow student={student} key={index} />
  ));
};

  
  
  
  
  

  useEffect(() => {
    axios
      .get(`${BASE_URL}/students/`)
      .then((response) => {
        setStudents(response.data);
        setFilteredStudents(response.data); // Initialize filteredStudents with all students
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <div>
        <Button onClick={print}>Generate Report</Button>
        <br />
        <br />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search by Company Name and Cheque Number"
            className="me-2"
            aria-label="Search by Company Name"
            onChange={handleSearch}
            spellCheck={false}
          />
        </Form>
        <br />
        <br />
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
          <tbody>{renderTableData()}</tbody>
        </Table>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(filteredStudents.length / pageSize)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </Router>
  );
};
