import React, { useMemo } from 'react';
import { useTable, useGroupBy, useExpanded } from 'react-table';

const StPivotTableSec = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        groupBy: ['Country'],
      },
    },
    useGroupBy,
    useExpanded
  );

  return (
    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                className="px-6 py-3 text-Center text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td
                

                  {...cell.getCellProps()}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {cell.isGrouped ? (
                    <>
                      <span {...row.getToggleRowExpandedProps()}>
                        {row.isExpanded ? '👇' : '👉'}
                      </span>{' '}
                      {cell.render('Cell')} ({row.subRows.length})
                      
                    </>
                    
                  ) : cell.isAggregated ? (
                    cell.render('Aggregated')
                  ) : cell.isPlaceholder ? null : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StPivotTableSec;
