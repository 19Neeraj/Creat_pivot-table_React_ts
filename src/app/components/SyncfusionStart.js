"use client";
import Image from "next/image";
import {
  PivotViewComponent,
  FieldList,
  CalculatedField,
  Inject,
} from "@syncfusion/ej2-react-pivotview";

import datasource from "../components/data.json";
// import "./globals.css";
const data = datasource.pivotData;

// console.log(data);
export default function SyncfusionStart() {
  
  return (
    <div id="wrapper">
      <PivotViewComponent
        height={"600"}
        width={"100%"}
        dataSourceSettings={{
          dataSource: data,
          rows: [{ name: "zone" }, { name: "region" }],
          columns: [
            { name: "customer_category" },
            { name: "Product_Group_ID" },
          ],
          values: [
    { name: "SUM_revenue", caption: "revenue", type:"" },
    { name: "SUM_weight", caption: "weight" },
    { name: "Total", caption: "Total Units  %", type: "CalculatedField" },
  ], // { name: "Total", caption: "Total Units", type: "CalculatedField" }
          filters: [{ name: "Quarter" }],
          calculatedFieldSettings: [
            {
              name: "Total",
              formula: "Sum(SUM_revenue)" + "Sum(SUM_weight)",
            },
          ],
        }}
        showFieldList={true}
        allowCalculatedField={true}
      >
        <Inject services={[FieldList, CalculatedField]}></Inject>
      </PivotViewComponent>
    </div>
  );
}
