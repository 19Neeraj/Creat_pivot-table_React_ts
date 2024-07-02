

"use client";
import Image from "next/image";
import {
  PivotViewComponent,
  FieldList,
  CalculatedField,
  ConditionalFormatting,
  Inject,
} from "@syncfusion/ej2-react-pivotview";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';


import datasource from "./data.json";
// import "./globals.css";
const data = datasource.pivotData;

console.log(data);
export default function SyncfusionConditionalFormatting() {
  const Changeval = "";
  const valueArray = [
    { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
    { name: "SUM_weight", caption: "weight" },
    { name: "Total", caption: "Total Units  %", type: "CalculatedField" },
  ];
  for (let i = 0; i < valueArray.length; i++) {
    valueArray[0].type = Changeval;
  }
  
  console.log(valueArray);
  let pivotObj;
  return (
    <div id="wrapper">
      <PivotViewComponent
      
        height={"600"}
        width={"100%"}
        dataSourceSettings={{
            expandAll: false,
        enableSorting: true,
          dataSource: data,
          rows: [{ name: "zone" }, { name: "region" }],
          columns: [
            { name: "customer_category" },
            { name: "Product_Group_ID" },
          ],
          values: valueArray, // { name: "Total", caption: "Total Units", type: "CalculatedField" }
          filters: [{ name: "Quarter" }],
          calculatedFieldSettings: [
            {
              name: "Total",
              formula: "Sum(SUM_revenue)" + "Sum(SUM_weight)",
            },
          ],
          conditionalFormatSettings: [
            {
                measure: 'SUM_weight',
                value1: 5000,
                value2:4000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#80cbc4',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            },
            {
                value1: 3400,
                value2: 40000,
                measure: 'SUM_revenue',
                conditions: 'Between',
                style: {
                    backgroundColor: '#f48fb1',
                    color: 'black',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                }
            }
        ]
        }}
        showFieldList={true}
        allowCalculatedField={true}
        allowConditionalFormatting={true}
      >
        <Inject services={[FieldList, CalculatedField,ConditionalFormatting]}></Inject>
      </PivotViewComponent>
      {/* <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Apply Formatting</ButtonComponent> */}
    </div>
  );
//   function btnClick() {
//     pivotObj.conditionalFormattingModule.showConditionalFormattingDialog();
// }
}

