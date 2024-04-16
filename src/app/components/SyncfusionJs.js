'use client'
import Image from "next/image";
import { PivotViewComponent, FieldList, CalculatedField, Inject } from '@syncfusion/ej2-react-pivotview';

import datasource from './data.json';
// import "./globals.css";
const data =datasource.pivotData;

// console.log(data);
export default function SyncfusionJs() {
  return (
    <div id="wrapper">
      <PivotViewComponent 
        height={'600'}
        width={'100%'}
        dataSourceSettings={{
          dataSource: data,
          rows: [{ name: "zone" }, { name: "region" }],

          columns: [{ name: "customer_category" } , {name:"Product_Group_ID"}],
          values: [{ name: "SUM_revenue", caption: "revenue" }, { name: "SUM_weight", caption: "weight" }],// { name: "Total", caption: "Total Units", type: "CalculatedField" }
          filters: [{ name: "Quarter" }],
          // calculatedFieldSettings: [{
          //   name: "Total",
          //   formula: '"Sum(Amount)"+"Sum(Sold)"'
          // }]
        }}
        showFieldList={true}
        allowCalculatedField={true}>
        <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
}
