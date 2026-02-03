// Section 1: Array Advanced Methods (Deep Practice)
// Task 1.1 – map vs forEach vs reduce (Behavior Study)
// Create the same data transformation using:
// map
// forEach
// reduce
// Requirements:
// Use your own dataset (numbers or objects)
// Log intermediate steps inside each method
// Clearly show how data fows diferently
// Do not explain in text. The logs must tell the story.
// Task 1.1 – map vs forEach vs reduce (Behavior Study) (Started!)
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Noise-cancelling headphones with deep bass and Bluetooth 5.0 support.",
    price: 59.99,
    quantity: 25,
    category: "Audio",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    description: "Portable speaker with crisp sound and 12-hour battery life.",
    price: 39.99,
    quantity: 40,
    category: "Audio",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Smartwatch",
    description:
      "Track fitness, receive notifications, and monitor your health stats.",
    price: 99.99,
    quantity: 15,
    category: "Wearables",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    description:
      "Ergonomic mouse with customizable RGB lighting and 6 DPI levels.",
    price: 29.99,
    quantity: 50,
    category: "Accessories",
    rating: 4.3,
  },
];

// First using map adding tax  2%
// const addTaxsToProductMap = products.map((product, i) => {
//   console.log(
//     `before tax id:${i} ${product.name} - Price: ${product.price} - Product Quantity: ${product.quantity}`,
//   );
//   const aftertax = {
//     Name: product.name,
//     PriceAfterTax: (product.price * (1 + 0.2)).toFixed(2),
//   };
//   return aftertax;
// });
// console.log(`using map`,addTaxsToProductMap);

// using forEach mathod
// let Aftertax = [];
// const usingForeach = products.forEach((e, i) => {
//   console.log(`${e.name} Price: ${e.price}, Categories: ${e.category}`);
//   return Aftertax.push({
//     name: e.name,
//     price: `$${(e.price * (1 + 0.2)).toFixed(2)}`,
//     quantity: e.quantity - 5,
//   });
// });
// console.log(`using for-each`, usingForeach);
// console.log(Aftertax);

// using reduce mathod
// const usingReduceMethod = products.reduce((acc, item, index) => {
//   console.log(
//     `${item.name} Price: ${item.price} - quantity: ${item.quantity} \n`,
//   );

//   const AfterMaxket = {
//     name: item.name,
//     price: `$${(item.price * (1 + 0.5)).toFixed(2)}`,
//   };
//   acc.push(AfterMaxket);
//   return acc;
// }, []);
// console.log(`using Reduce`, usingReduceMethod);
// Task 1.1 – map vs forEach vs reduce (Behavior Study) (Completed!)

// Task 1.2 – flter + reduce Combination
// Build a small program that:
// Filters data based on a condition you defne
// Aggregates the fltered result using  reduce
// Constraint:
// You must change the condition at least twice and re-run the program
// Show how output changes
// Task 1.2 – flter + reduce Combination (Started!)
// const studentStats = [
//   { rollNum: 2123, name: "Zain", cousrse: "web & app dev", present: true },
//   { rollNum: 1204, nam: "Zaid", cousrse: "web & app dev", present: false },
//   { rollNum: 1222, name: "Ali", cousrse: "web & app dev", present: false },
//   { rollNum: 1302, name: "Moiz", cousrse: "Ai agents", present: true },
//   { rollNum: 10223, name: "Salman", cousrse: "web & app dev", present: true },
//   { rollNum: 90435, name: "Khizar", cousrse: "web & app dev", present: false },
//   { rollNum: 235, name: "Talal", cousrse: "Ai agents", present: true },
// ];
// const AttendenceChecker = studentStats
//   .filter((item) => item.present !== false)
//   .reduce((acc, item) => [...acc, item], []);
// console.log(`Present StudentList:`, AttendenceChecker);
// const courseChecker = studentStats
//   .filter(
//     (course) => course.cousrse === "Ai agents" && course.present !== false,
//   )
//   .reduce((a, course) => [...a, course], []);
// console.log(`Check Course and Attendence:`, courseChecker);
// Task 1.2 – flter + reduce Combination (Completed!)

// Task 1.3 – Custom Array Method Simulation (Hard)
// Simulate the behavior of one array method ( map ,  filter , or  reduce ) using a normal loop.
// Mandatory:
// Your function must accept a callback
// You must log when the callback is executed
// Compare output with the real method
// Task 1.3 – Custom Array Method Simulation (Started!)
// const studentStatsWithCustomMap = [
//   { rollNum: 2123, name: "Zain", cousrse: "web & app dev", present: true },
//   { rollNum: 1204, nam: "Zaid", cousrse: "web & app dev", present: false },
//   { rollNum: 1222, name: "Ali", cousrse: "web & app dev", present: false },
//   { rollNum: 1302, name: "Moiz", cousrse: "Ai agents", present: true },
//   { rollNum: 10223, name: "Salman", cousrse: "web & app dev", present: true },
//   { rollNum: 90435, name: "Khizar", cousrse: "web & app dev", present: false },
//   { rollNum: 235, name: "Talal", cousrse: "Ai agents", present: true },
// ];
// const numbersItrationCheck = [1, 2, 3, 4];
// const customMap = (array, mapCallBack) => {
//   const result = [];
//   // Checking if it's array or not and also checking the length of it
//   if (!Array.isArray(array) || !array.length) {
//     // if it isn't array or don't any length like someting inside it return early!!
//     return `array is empty []`;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       // itrating current index with the value!
//       console.log(`callback itrating on index:${i} value`, array[i]);
//       //----------------current object,itration, and array
//       result.push(mapCallBack(array[i], i, array));
//     }
//     console.log(`itration is completed retuing the result`);
//     return result;
//   }
// };

// const myResults = customMap(studentStatsWithCustomMap, (states) => states);
// const myResults2 = customMap(numbersItrationCheck, (num) => num * 2);
// console.log(`Ans Value \n`, myResults);
// console.log(`Mutated Value \n`, myResults2);
// const mapMethodResult = numbersItrationCheck.map((item) => item * 2);
// console.log(mapMethodResult);
// console.log(
//   `Match:`,
//   JSON.stringify(myResults2) === JSON.stringify(mapMethodResult),
// );
// console.log(`Match:`, myResults2 === mapMethodResult);

// Task 1.3 – Custom Array Method Simulation (Completed!)

// Section 2: JavaScript Behind the Scenes
// Task 2.1 – Hoisting Reality Check
// Write code that:
// Uses variables and functions before declaration
// Mixes  var ,  let ,  const , and function declarations
// Requirement:
// Wrap risky code in try/catch
// Log what runs, what fails, and in which orde
// Task 2.1 – Hoisting Reality Check (Started!)

console.log(
  `1 Calling function before delcaring`,
  canIbeCalled("Yess becuase function have Hoisting"),
);
function canIbeCalled(e) {
  return e;
}
console.log(canIbeCalled("Yess becuase function have Hoisting"));
console.log(`2 var variable before delcaring ${varVariable}`);
var varVariable;
console.log(`3 var variable after delcaring ${varVariable}`);
try {
  console.log(` let variable before delcaring ${helloFromTryCatch}`);
  let helloFromTryCatch;
  console.log(` let variable after delcaring`, helloFromTryCatch);
} catch (e) {
  console.log(
    `Failed: let variable didn't work becuase it called before delcaring and it will say ReferenceError ${e.name}`,
    e,
  );
}
try {
  console.log(`const variable before delcaring ${RealityHits}`);
  const RealityHits = "Yes it does";
  console.log(`const variable after delcaring ${RealityHits}`);
} catch (e) {
  console.log(
    `Failed: const variable didn't work becuase it called before delcaring becuase its a ReferenceError: ${e.name} `,
    e,
  );
}
// Task 2.1 – Hoisting Reality Check (Completed!)
