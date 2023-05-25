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
  const [searchValue, setSearchValue] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [chequeNumberSearchValue] = useState("");

  const pageSize = 5; // Number of items per page

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    filterAndSortStudents(value, sortColumn, sortDirection, chequeNumberSearchValue);
  };

  
  
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
    filterAndSortStudents(searchValue, column, sortDirection);
  };

  const filterAndSortStudents = (search, column, direction, chequeNumber) => {
    const filtered = students.filter(
      (student) =>
        (student.name.toLowerCase().includes(search) || student.age.toString().includes(search)) &&
        (chequeNumber === "" || student.age === parseInt(chequeNumber))
    );
    const sorted = filtered.sort((a, b) => {
      if (direction === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return b[column] > a[column] ? 1 : -1;
      }
    });
    setFilteredStudents(sorted);
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
  
    const filteredStudents = students.filter((student) =>
   
      student.name.toLowerCase().includes(searchValue)
    );
  
    const sortedStudents = filteredStudents.sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortColumn] - b[sortColumn];
      } else {
        return b[sortColumn] - a[sortColumn];
      }
    });
  
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
    
    const tableData = sortedStudents.map((student) => [
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
  }    

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
            placeholder="Search by Company Name"
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
              <th onClick={() => handleSort("name")}>
                Payment/Transfer to
                {sortColumn === "name" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
              </th>
              <th onClick={() => handleSort("chequeNumber")}>
                Cheque Number
                {sortColumn === "chequeNumber" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
              </th>
              <th onClick={() => handleSort("chequeAmount")}>
                Cheque Amount
                {sortColumn === "chequeAmount" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
              </th>
              <th onClick={() => handleSort("date")}>
                Date
                {sortColumn === "date" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
              </th>
              <th onClick={() => handleSort("bank")}>
                Bank
                {sortColumn === "bank" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
              </th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((student, index) => (
                <MemberTableRow student={student} key={index} />
              ))}
          </tbody>
          
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
