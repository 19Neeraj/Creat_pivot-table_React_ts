import React from 'react';
import "../globals.css";


const data = [
  { zone: 'INN', customer_category: 'CP', SUM_revenue: 60634 },
  { zone: 'INW', customer_category: 'CP', SUM_revenue: 50499 },
  { zone: 'INS', customer_category: 'CP', SUM_revenue: 88327 },
  { zone: 'INS', customer_category: 'FR', SUM_revenue: 32765 },
  { zone: 'INS', customer_category: 'DP', SUM_revenue: 8094 },
  { zone: 'INW', customer_category: 'DP', SUM_revenue: 37823 },
  { zone: 'INE', customer_category: 'CPDP', SUM_revenue: 1668 },
  { zone: 'INW', customer_category: 'FR', SUM_revenue: 6381 },
  { zone: 'INN', customer_category: 'FR', SUM_revenue: 5737 },
  { zone: 'INS', customer_category: 'WI', SUM_revenue: 795 },
  { zone: 'INN', customer_category: 'Retail', SUM_revenue: 34482 },
  { zone: 'INN', customer_category: 'DP', SUM_revenue: 17228 },
  { zone: 'INN', customer_category: 'CPDP', SUM_revenue: 110811 }
];

const NormalTable = () => {
  // Create an object to hold the pivot table data
  const pivotTableData = {};

  // Iterate through the data and fill the pivot table object
  data.forEach(item => {
    const { zone, customer_category, SUM_revenue } = item;
    // console.log(zone);
    if (!pivotTableData[zone]) {
      pivotTableData[zone] = {};
    }
    
    pivotTableData[zone][customer_category] = SUM_revenue;
  });
console.log(pivotTableData);
  // Convert the pivot table object into an array for easier rendering
  const pivotTableArray = Object.entries(pivotTableData);
console.log(pivotTableArray);
  return (
    <main className='w-full h-[100vh] flex justify-center items-center  gap-5  flex-col'>
        <sectionm className="flex gap-10">
            <div><aside className='w-10 h-10 rounded-lg bg-gray-300'></aside><span>Zone</span></div>
            <div><aside className='w-10 h-10 rounded-lg bg-orange-300'></aside><span>category</span></div>
            {/* <div><aside className='w-10 h-10 rounded-lg bg-green-300'></aside><span>Revenue</span></div> */}
            </sectionm>
    <table className=' border-2 border-gray-300 text-center '>
      <thead className='border-2 border-gray-300'>
        <tr className='border-2 border-red-300'>
          <th className='border-2 border-gray-100 bg-slate-300'>Zone</th>
          <th className='border-2 border-gray-100 bg-orange-300'>CP</th>
          <th className='border-2 border-gray-100 bg-orange-300'>FR</th>
          <th className='border-2 border-gray-100 bg-orange-300'>DP</th>
          <th className='border-2 border-gray-100 bg-orange-300'>CPDP</th>
          <th className='border-2 border-gray-100 bg-orange-300'>WI</th>
          <th className='border-2 border-gray-100 bg-orange-300'>Retail</th>
        </tr>
      </thead>
      <tbody >
        {pivotTableArray.map(([zone, categories],index) => (
          <tr key={zone} className={` text-center p-2 ${((index) % 2 === 0) ?'bg-white':'bg-gray-100'}`} >
            <td className=' bg-slate-300'>{zone}</td>
            <td >{categories.CP || 0}</td>
            <td >{categories.FR || 0}</td>
            <td >{categories.DP || 0}</td>
            <td >{categories.CPDP || 0}</td>
            <td >{categories.WI || 0}</td>
            <td >{categories.Retail || 0}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </main>
  );
};

export default NormalTable;