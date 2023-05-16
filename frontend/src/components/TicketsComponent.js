import React from "react";
import { Link } from "react-router-dom";

const TicketsComponent = ({ tickets }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the ticket
 
  return (
    <div className="container">
      {tickets.length === 0 ? (
        "You currently have no members"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Mobile</th>
              <th scope="col">Sex</th>
              <th scope="col">Packages</th>
              <th scope="col">Duration</th>
              <th scope="col">Memb.type</th>
              <th scope="col">Amount</th>
              <th scope="col">Pay.Date</th>
              <th scope="col">Cashier's Name</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>{ticket.request}</td>
                <td className={assignColorToTicketStatus(ticket)}>
                  {ticket.status}
                </td>
                <td>
                  <Link to={`/ticket/${ticket.id}`}>See comments</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TicketsComponent;