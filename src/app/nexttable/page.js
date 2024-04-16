import React from 'react'
import PivotTable from './PivotTable';

export default function Nexttable() {
    const data = [
        { rowLabel: 'Row 1', columnLabel: 'Column 1', value: 10 },
        { rowLabel: 'Row 1', columnLabel: 'Column 2', value: 20 },
        { rowLabel: 'Row 3', columnLabel: 'Column 1', value: 30 },
        { rowLabel: 'Row 2', columnLabel: 'Column 2', value: 40 },
      ];
  return (
    <div>
      <h1>Pivot Table Example</h1>
      <PivotTable data={data} />
      
    </div>
  )
}
