import jsPDF from "jspdf";
import "jspdf-autotable";

import { format } from "date-fns";

const generatePDF = tickets => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    // define the columns we want and their titles
    const tableColumn = ["Name", "Email", "Age", "Mobile", "Sex",
     "Packages", "Duration", "Membership_type", "Paid Amount","Date",
     "Cashier's Name"];
    // define an empty array of rows
    const tableRows = [];
  
    // for each ticket pass all its data into an array
    tickets.forEach(ticket => {
      const ticketData = [
        ticket.name,
        ticket.email,
        ticket.age,
        ticket.mobile,
        ticket.sex,
        ticket.packages,
        ticket.duration,
        ticket.Memb_type,
        ticket.amount,
        ticket.pay_date,
        ticket.cashier_name,

        // called date-fns to format the date on the ticket
        format(new Date(ticket.updated_at), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(ticketData);
    });
  
  
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text("Maxview Gym Members list", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  };
  
  export default generatePDF;