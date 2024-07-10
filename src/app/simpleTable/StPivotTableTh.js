// // import React, { useMemo } from 'react';
// // import { useTable } from 'react-table';

// // const PivotTable = ({ columns, data }) => {
// //   const {
// //     getTableProps,
// //     getTableBodyProps,
// //     headerGroups,
// //     rows,
// //     prepareRow,
// //   } = useTable(
// //     {
// //       columns,
// //       data,
// //     }
// //   );

// //   // Custom function to determine if the current cell should be merged
// //   const shouldMerge = (rows, rowIndex, accessor) => {
// //     if (rowIndex === 0) return false;
// //     return rows[rowIndex].original[accessor] === rows[rowIndex - 1].original[accessor];
// //   };

// //   // Custom function to calculate row span
// //   const getRowSpan = (rows, rowIndex, accessor) => {
// //     let span = 1;
// //     for (let i = rowIndex + 1; i < rows.length; i++) {
// //       if (rows[i].original[accessor] === rows[rowIndex].original[accessor]) {
// //         span++;
// //       } else {
// //         break;
// //       }
// //     }
// //     return span;
// //   };

// //   return (
// //     <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
// //       <thead className="bg-gray-50">
// //         {headerGroups.map(headerGroup => (
// //           <tr {...headerGroup.getHeaderGroupProps()}>
// //             {headerGroup.headers.map(column => (
// //               <th
// //                 {...column.getHeaderProps()}
// //                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //               >
// //                 {column.render('Header')}
// //               </th>
// //             ))}
// //           </tr>
// //         ))}
// //       </thead>
// //       <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
// //         {rows.map((row, rowIndex) => {
// //           prepareRow(row);
// //           return (
// //             <tr {...row.getRowProps()}>
// //               {row.cells.map(cell => {
// //                 if (cell.column.id === 'Country' || cell.column.id === 'State' || cell.column.id === 'City') {
// //                   if (shouldMerge(rows, rowIndex, cell.column.id)) {
// //                     return null;
// //                   }
// //                   const rowSpan = getRowSpan(rows, rowIndex, cell.column.id);
// //                   return (
// //                     <td
// //                       {...cell.getCellProps()}
// //                       className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
// //                       rowSpan={rowSpan}
// //                     >
// //                       {cell.render('Cell')}
// //                     </td>
// //                   );
// //                 }
// //                 return (
// //                   <td
// //                     {...cell.getCellProps()}
// //                     className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
// //                   >
// //                     {cell.render('Cell')}
// //                   </td>
// //                 );
// //               })}
// //             </tr>
// //           );
// //         })}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default PivotTable;


// import React, { useMemo } from 'react';
// import { useTable } from 'react-table';

// const PivotTable = ({ columns, data }) => {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//   } = useTable(
//     {
//       columns,
//       data,
//     }
//   );

//   // Custom function to determine if the current cell should be merged
//   const shouldMerge = (rows, rowIndex, accessor) => {
//     if (rowIndex === 0) return false;
//     return rows[rowIndex].original[accessor] === rows[rowIndex - 1].original[accessor];
//   };

//   // Custom function to calculate row span
//   const getRowSpan = (rows, rowIndex, accessor) => {
//     let span = 1;
//     for (let i = rowIndex + 1; i < rows.length; i++) {
//       if (rows[i].original[accessor] === rows[rowIndex].original[accessor]) {
//         span++;
//       } else {
//         break;
//       }
//     }
//     return span;
//   };

//   return (
//     <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
//       <thead className="bg-gray-50">
//         {headerGroups.map(headerGroup => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map(column => (
//               <th
//                 {...column.getHeaderProps()}
//                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 {column.render('Header')}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
//         {rows.map((row, rowIndex) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell, cellIndex) => {
//                 if (cell.column.id === 'Country' || cell.column.id === 'State' || cell.column.id === 'City') {
//                   if (shouldMerge(rows, rowIndex, cell.column.id)) {
//                     return null;
//                   }
//                   const rowSpan = getRowSpan(rows, rowIndex, cell.column.id);
//                   return (
//                     <td
//                       {...cell.getCellProps()}
//                       className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
//                       rowSpan={rowSpan}
//                     >
//                       {cell.render('Cell')}
//                     </td>
//                   );
//                 }
//                 // Render other cells normally
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
//                   >
//                     {cell.render('Cell')}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default PivotTable;
