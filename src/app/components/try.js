// // Function to generate the array of objects with dynamically changing type
// function generateArrayOfObjects(props) {
//     // Define your logic to determine the type dynamically
//     const {data}=props;
//     let typeForSUM_weight = "SomeNewType";
//     let typeForTotal = data;

//     // Generate the array of objects with dynamically changing types
//     let arrayOfObjects = [
//       { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
//       { name: "SUM_weight", caption: "weight", type: typeForSUM_weight },
//       { name: "Total", caption: "Total Units %", type: typeForTotal }
//     ];

//     return arrayOfObjects;
//   }

//   // Usage example
//   let arrayOfObjects = generateArrayOfObjects( data='arraydata');
//   console.log(arrayOfObjects);

const arrayOfObjects = [
  { name: "SUM_revenue", caption: "revenue", type: "PercentageOfGrandTotal" },
  { name: "SUM_weight", caption: "weight" },
  { name: "Total", caption: "Total Units %" },
];

// Define the value you want to assign to the type key
const newTypeValue = "the change index";

// Loop through each object in the array and add the type key with the new value
//   arrayOfObjects.forEach(obj => {
//     obj.type = newTypeValue;
//   });

// change only index 0
for (let i = 0; i < arrayOfObjects.length; i++) {
  arrayOfObjects[i].type = newTypeValue;
}

console.log(arrayOfObjects);

let a = 2;
var b = 5;
const c = 6;

// a=10; b=15;
function Check() {
  b = 40;
  // c = 10;
  a = 40;
  console.log(a, b);
}

console.log(a,b,c);

Check();
console.log(a,b,c);

// 
// if (Array.isArray(data) && Array.isArray(valueKeys)) {
//   var formateData = data.map(record => {
//       const newRecord = { ...record };
//       valueKeys.forEach(formatSpec => {
//           if (formatSpec.numberFormat && formatSpec.numberFormat.decimalPlaces !== undefined) {
//               const decimalPlaces = parseInt(formatSpec.numberFormat.decimalPlaces, 10);
//               const key = formatSpec.responseKey;
//               const value = newRecord[key];
//               if (typeof value === 'number') {
//                   newRecord[key] = parseFloat(value.toFixed(decimalPlaces));
//               }
//           } else {
//               const decimalPlaces = 2;
//               const key = formatSpec.responseKey;
//               const value = newRecord[key];
//               if (typeof value === 'number') {
//                   newRecord[key] = parseFloat(value.toFixed(decimalPlaces));
//               }
//           }
//       });
//       return newRecord;
//   });
  // console.log(formateData);
} 