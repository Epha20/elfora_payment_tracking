// import React from "react";
// import { Workbook } from "exceljs";
// import saveAs from "file-saver";


// const PaymentReport = ({data}) => {
 
  
//   let title = "IE NETWORKS SOLUTIONS PLC";
//   let title2 = " Inventory Items List";
//   let title3 = " List";
//   let count = 0;
//   const downloadExcel = async () => {
//     // Create a new workbook and set the default sheet
//     const workbook = new Workbook();
//     const worksheet = workbook.addWorksheet();
//     // const headersCost = data?.map(
//     //   (items) => `${items?.p} Planned Cost `
//     // );
//     // const headersRevenue = result?.map(
//     //   (items) => `${items?.start_date} Planned Revenue `
//     // );
   
//     // const item_names = result?.map((items,index) =>
//     // result[index]?.events[0]?.variance_project[0].project_name
//     // );
//     // const headersActualCost = result?.map((items) =>
//     //   items?.events
//     //     .map((e, index) => Number(e?.actual_cost))
//     //     .reduce((a, b) => {
//     //       return a + b;
//     //     } 
//     //     )
//     //     );
//     // const headersPlannedCost = result?.map((items) =>
//     //   items?.events
//     //     .map((e, index) => Number(e?.planned_cost))
//     //     .reduce((a, b) => {
//     //       return a + b;
//     //     } 
//     //     )
//     // );
   
//     // let PlannedTotalCost = 0;
//     // headersPlannedCost.map((item)=> (

//     //   PlannedTotalCost+=item

//     //  ) 
//     //   )

//     //   let ActualTotalCost = 0;
//     //   headersActualCost.map((item) => (
       

//     //        ActualTotalCost+=item
             
//     //   ));
    
//     // console.log(PlannedTotalCost, "headersPlannedCost");
//     // Add title cell above the table headers
//     worksheet.mergeCells("A1:I1");
//     worksheet.mergeCells("A2:I2");
//     worksheet.mergeCells("A3:I3");
//     const titleCell = worksheet.getCell("A1");
//     const titleCell2 = worksheet.getCell("A2");
//     const titleCell3 = worksheet.getCell("A3");
    
//     titleCell.value = title;
//     titleCell.alignment = { horizontal: "center", vertical: "middle" };
//     titleCell2.value = title2;
//     titleCell2.alignment = { horizontal: "center", vertical: "middle" };
//     titleCell3.value = title3;
//     titleCell3.alignment = { horizontal: "center", vertical: "middle" };
    
   


//     titleCell3.font = {
      
//       name: "Times New Roman",
//     };
//     titleCell3.fill = {
//       type: "pattern",
//       pattern: "solid",
//       fgColor: { argb: "8EA9DB" },
//     };
//     titleCell2.font = {
      
//       name: "Times New Roman",
//     };
//     titleCell2.fill = {
//       type: "pattern",
//       pattern: "solid",
//       fgColor: { argb: "8EA9DB" },
//     };
//     titleCell.font = {
      
//       name: "Times New Roman",
//     };
    
    
//     titleCell.fill = {
//       type: "pattern",
//       pattern: "solid",
//       fgColor: { argb: "8EA9DB" },
//     };
   




//     // Create the table headers
//    const headerRow = worksheet.addRow([
//       "No",
//       "Item Name",
//       "Model",
//       "Type",
//       "Store",
//       "Amount",
//       "Project",
//       "Status",
//       "Description",
      
//     ]);
//     headerRow.eachCell((cell) => {
//       cell.fill = {
//         type: "pattern",
//         pattern: "solid",
//         fgColor: { argb: "BFBFBF" },
//       };
//       cell.font = {
//         color: { argb: "000000" },
//         bold: true,
//         size: 12,
//         name: "Times New Roman",
//       };
//       cell.border = {
//         top: { style: "thin", color: { argb: "000000" } },
//         left: { style: "thin", color: { argb: "000000" } },
//         bottom: { style: "thin", color: { argb: "000000" } },
//         right: { style: "thin", color: { argb: "000000" } },
//       };
//       cell.alignment = {
//         vertical: "middle",
//         horizontal: "center",
//         wrapText: true,
//       };
//     });
    
     

    

//     // Set column widths
//     worksheet.getColumn(1).width = 10;
//     worksheet.getColumn(2).width =40;
//     worksheet.getColumn(3).width = 30;
//     worksheet.getColumn(4).width = 30;
//     worksheet.getColumn(5).width = 20;
//     worksheet.getColumn(6).width = 30;
//     worksheet.getColumn(7).width = 30;
//     worksheet.getColumn(8).width = 30;
//     worksheet.getColumn(9).width = 30;
//     worksheet.getColumn(10).width = 30;
//     worksheet.getColumn(11).width = 30;
//     worksheet.getColumn(12).width = 35;
//     // Set the header row to bold
//     worksheet.getRow(2).font = { bold: true };
//     worksheet.getRow(4);
    

//     // Populate the table with data from the map
//  data?.map((items) => {
//     const  dataRow =  worksheet?.addRow([
//           (count += 1),
//           items.item_name,
//           items.model,
//           items.type?.inventory_type,
//           items.store!=null?items.store?.store_name:"-",
//           items.uom?.is_countable,
//           items.project!=null?items.project?.project_name:"-",
//           items.status?.status_name,
//           items.status!=null?items.status?.description:"-",
          
//         ])
//       dataRow.eachCell((cell) => {
//         cell.border = {
//             top: { style: "thin", color: { argb: "000000" } },
//             left: { style: "thin", color: { argb: "000000" } },
//             bottom: { style: "thin", color: { argb: "000000" } },
//             right: { style: "thin", color: { argb: "000000" } },
//           };
//     })
//     });
   
   

//     // const FooterRow = worksheet.addRow([
//     //   " ",
//     //   "Total",
//     //   PlannedTotalCost,
//     //   " ",
//     //   " ",
//     //   ActualTotalCost,
//     //   " ",
//     //   " ",
//     //   " ",
//     //   " ",
//     //   ]);
//     //   FooterRow.eachCell((cell) => {
//     //     cell.fill = {
//     //       type: "pattern",
//     //       pattern: "solid",
//     //       fgColor: { argb: "BFBFBF" },
//     //     };
//     //     cell.font = {
//     //       color: { argb: "000000" },
//     //       bold: true,
//     //       size: 12,
//     //       name: "Times New Roman",
//     //     };
//     //     cell.border = {
//     //       top: { style: "thin", color: { argb: "000000" } },
//     //       left: { style: "thin", color: { argb: "000000" } },
//     //       bottom: { style: "thin", color: { argb: "000000" } },
//     //       right: { style: "thin", color: { argb: "000000" } },
//     //     };
//     //     cell.alignment = {
//     //       vertical: "middle",
//     //       horizontal: "right",
//     //       wrapText: true,
//     //     };
//     //   });
      

//     // Save the workbook and download the Excel file
//     const buffer = await workbook.xlsx.writeBuffer();
//     const blob = new Blob([buffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, "map-data.xlsx");
//   };

//   return  <button onClick={downloadExcel} className="add-client-representative">
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8043 15.021 15.413 15.413C15.021 15.8043 14.55 16 14 16H2ZM8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z"
//       fill="white"
//     />
//   </svg>
// </button>;
// };

// export default PaymentReport;
