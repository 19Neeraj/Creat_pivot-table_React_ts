import React from 'react';
import { useTable } from 'react-table';

const SimpleTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="w-full bg-gray-200">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left border border-gray-400 text-sm font-semibold text-gray-700"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row)=> {
            prepareRow(row);
            return ( 
              <tr {...row.getRowProps()}  className={`hover:bg-gray-100 $${(2 % 2 === 0) ?'bg-white':'bg-gray-700'}`}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SimpleTable;
