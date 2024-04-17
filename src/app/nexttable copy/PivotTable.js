'use client'
import React from 'react';
import { useTable } from 'react-table';

const PivotTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Row Labels',
        accessor: 'rowLabel',
      },
      {
        Header: 'Column Labels',
        accessor: 'columnLabel',
      },
      {
        Header: 'Values',
        accessor: 'value',
      },
    ],
    []
  );

  const pivotData = React.useMemo(() => {
    // Perform pivot operation here
    // You can use any logic to pivot your data
    // For example, you can use lodash library to perform pivot
    // Here is a simple example assuming data is already pivoted
    return data.map(({ rowLabel, ...rest }) => ({
      rowLabel,
      ...rest,
    }));
  }, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: pivotData,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PivotTable;
