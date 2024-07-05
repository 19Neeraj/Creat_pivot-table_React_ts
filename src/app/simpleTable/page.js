'use client'
import React, { useMemo } from 'react'
import ButtonSwitch from '../components/ButtonSwitch'
import SimpleTable from '../components/SimpleTable'
import StPivotTable from './StPivotTable';
import StPivotTableSec from './StPivptTableSec';
import StPivotTableTh from './StPivotTableTh';
import { restructureArray } from './TableUtils';


export default function SimpleTablePage() {
    const data = [
        { Country: 'United States', State: 'Kentucky', City: 'Henderson', Sales: 261.96, Quantity: 2, SUM_Sales: 15661.01, SUM_Quantity: '185' },
        { Country: 'United States', State: 'California', City: 'Los Angeles', Sales: 14.62, Quantity: 2, SUM_Sales: 175851.34, SUM_Quantity: '2879' },
        { Country: 'United States', State: 'Florida', City: 'Fort Lauderdale', Sales: 957.5775, Quantity: 5, SUM_Sales: 4929.53, SUM_Quantity: '65' },
        { Country: 'United States', State: 'North Carolina', City: 'Concord', Sales: 15.552, Quantity: 3, SUM_Sales: 5111.84, SUM_Quantity: '44' },
        { Country: 'United States', State: 'Washington', City: 'Seattle', Sales: 407.976, Quantity: 3, SUM_Sales: 119540.74, SUM_Quantity: '1590' },
        { Country: 'United States', State: 'Texas', City: 'Fort Worth', Sales: 68.81, Quantity: 5, SUM_Sales: 6602.71, SUM_Quantity: '102' },
        { Country: 'United States', State: 'Utah', City: 'West Jordan', Sales: 55.5, Quantity: 2, SUM_Sales: 311.85, SUM_Quantity: '16' },
        { Country: 'United States', State: 'Utah', City: 'W j', Sales: 55.5, Quantity: 2, SUM_Sales: 311.85, SUM_Quantity: '16' },
        { Country: 'United States', State: 'Utah', City: ' DC', Sales: 55.5, Quantity: 2, SUM_Sales: 311.85, SUM_Quantity: '16' },
        { Country: 'United States', State: 'Utah', City: ' DC Check', Sales: 55.5, Quantity: 2, SUM_Sales: 311.85, SUM_Quantity: '16' },
        { Country: 'United States', State: 'California', City: 'San Francisco', Sales: 8.56, Quantity: 2, SUM_Sales: 112669.09, SUM_Quantity: '1935' },
        { Country: 'United States', State: 'Pennsylvania', City: 'Philadelphia', Sales: 71.372, Quantity: 2, SUM_Sales: 109077.01, SUM_Quantity: '1981' },
        { Country: 'United States', State: 'Nebraska', City: 'Fremont', Sales: 19.46, Quantity: 7, SUM_Sales: 1119.01, SUM_Quantity: '33' },
        { Country: 'United Statess', State: 'Utah', City: 'Orem', Sales: 1044.63, Quantity: 3, SUM_Sales: 2994.09, SUM_Quantity: '32' },
        { Country: 'United Statess', State: 'Utaha', City: 'Oremss', Sales: 1044.63, Quantity: 3, SUM_Sales: 2994.09, SUM_Quantity: '33' },
        { Country: 'United Statess', State: 'Utaha', City: 'Orems', Sales: 1044.63, Quantity: 3, SUM_Sales: 2994.09, SUM_Quantity: '3000' },
        { Country: 'United Statess', State: 'Wisconsin', City: 'Madison', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'India', State: 'Haryana', City: 'Gurugram', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'India', State: 'Haryana', City: 'Karnal', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'India', State: 'Haryana', City: 'Rewari', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'UK', State: 'Wisconsin', City: 'Madison', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'UK', State: 'Wisconsin', City: 'Madison', Sales: 665.88, Quantity: 6, SUM_Sales: 5346.79, SUM_Quantity: '37' },
        { Country: 'UK', State: 'Washingtons', City: 'Seattles', Sales: 407.976, Quantity: 3, SUM_Sales: 119540.74, SUM_Quantity: '1590' },
        { Country: 'UK', State: 'Washingtons', City: 'Seattles', Sales: 407.976, Quantity: 3, SUM_Sales: 119540.74, SUM_Quantity: '1590' },

      ];
      const Data=restructureArray(data);
      console.log(Data);
      
      const columns = useMemo(() => [
        {
          Header: 'Location',
          columns: [
            { Header: 'Country', accessor: 'Country' },
            { Header: 'State', accessor: 'State' },
            { Header: 'City', accessor: 'City' },
          ],
        },
        {
          Header: 'Details',
          columns: [
            { Header: 'Quantity', accessor: 'Quantity' },
            { Header: 'SUM of Sales', accessor: 'SUM_Sales' },
            { Header: 'SUM of Quantity', accessor: 'SUM_Quantity' },
          ],
        },
      ], []);
      // const columns = useMemo(() => [
      //   { Header: 'Country', accessor: 'Country' },
      //   { Header: 'State', accessor: 'State' },
      //   { Header: 'City', accessor: 'City' },
      //   { Header: 'Quantity', accessor: 'Quantity' },
      //   { Header: 'SUM of Sales', accessor: 'SUM_Sales' },
      //   { Header: 'SUM of Quantity', accessor: 'SUM_Quantity' },
      // ], []);
    
  return (
    <main>
      <div className="flex justify-center mt-20  ">
        <ButtonSwitch></ButtonSwitch>
        
        
      </div>

      <div className='mt-10 m-10'>
      {/* <SimpleTable columns={columns} data={data} ></SimpleTable> */}
      {/* <StPivotTable columns={columns} data={data} ></StPivotTable> */}
      <StPivotTableSec columns={columns} data={data}></StPivotTableSec>
      {/* <StPivotTableTh columns={columns} data={Data} ></StPivotTableTh> */}
      </div>
    </main>
  )
}
