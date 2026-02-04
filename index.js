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

// console.log(
//   `1 Calling function before delcaring`,
//   canIbeCalled("Yess becuase function have Hoisting"),
// );
// function canIbeCalled(e) {
//   return e;
// }
// console.log(canIbeCalled("Yess becuase function have Hoisting"));
// console.log(`2 var variable before delcaring ${varVariable}`);
// var varVariable;
// console.log(`3 var variable after delcaring ${varVariable}`);
// try {
//   console.log(` let variable before delcaring ${helloFromTryCatch}`);
//   let helloFromTryCatch;
//   console.log(` let variable after delcaring`, helloFromTryCatch);
// } catch (e) {
//   console.log(
//     `Failed: let variable didn't work becuase it called before delcaring and it will say ReferenceError ${e.name}`,
//     e,
//   );
// }
// try {
//   console.log(`const variable before delcaring ${RealityHits}`);
//   const RealityHits = "Yes it does";
//   console.log(`const variable after delcaring ${RealityHits}`);
// } catch (e) {
//   console.log(
//     `Failed: const variable didn't work becuase it called before delcaring becuase its a ReferenceError: ${e.name} `,
//     e,
//   );
// }
// Task 2.1 – Hoisting Reality Check (Completed!)

// Task 2.2 – Call Stack Observation
// Create multiple nested function calls that:
// Log entry and exit points
// Clearly show execution order
// Add one asynchronous operation and observe the diference.

// Create multiple nested function calls that: (Started!)
// function syncFn1() {
//   console.log("Sync Func First -start");
//   syncFn2();
//   console.log("Sync Func First Ended");
// }
// function syncFn2() {
//   console.log("Sync Func Second Started");
//   syncFn3();
//   console.log("Sync Func Second Ended");
// }
// function syncFn3(z) {
//   console.log("Sync Func third Started");
//   syncFn4();
//   console.log("Sync third Ended");
// }
// function syncFn4() {
//   console.log("Sync Func forth -Started");
// }
// function AsyncFn1() {
//   console.log("Aysnc func First start");
//   AsyncFn2();
//   console.log("Async First Ended");
// }
// function AsyncFn2() {
//   console.log("Async Second Started");
//   AsyncFn3();
//   console.log("Async Second Ended");
// }
// function AsyncFn3() {
//   console.log("Async third Started");
//   setTimeout(() => console.log("Async third Ended"), 500);
//   AsyncFn4();
// }
// function AsyncFn4() {
//   console.log("Async forth Start");
// }
// syncFn1();
// AsyncFn1();

// setTimeout(() => {
//   console.log(`
//     \n\n
//     The Exuction:
// Sync Func Second Started
// Sync Func third Started
// Sync Func forth -Started
// Sync third Ended
// Sync Func Second Ended
// Sync Func First Ended
// For Sync Functions function one Called First and endend back to back
// Aysnc func First -start
// Async Second Started
// Async third Started
// Async forth Start
// Async Second Ended
// Async First Ended
// The log Data i got
// First -start
// Second Started
// third Started
// forth -Started
// third Ended
// Second Ended
// First Exist
// Async third Ended
// For ASync Functions function one Called FirstFunction first and the last was ended Third Ended Last `);
// }, 600);

// Create multiple nested function calls that: (Completed!)

// Task 2.3 – Closure Proof
// Create a function that:
// Returns another function
// Uses variables from the outer scope
// Change the outer variables after creation and observe results.

// Task 2.3 – Closure Proof(Start!)
// const CheckCount = () => {
//   let value = 0;
//   console.log(`counter initial value ${value}`);
//   return {
//     add: (e) => {
//       console.log(`counter inner value before:${value}, adding ${e} `);
//       console.log((value += e));
//       console.log(`counter inner value After adding ${e}, value:${value} `);
//     },
//     sub: (e) => {
//       console.log(`counter inner value before:${value}, sub ${e} `);
//       console.log((value -= e));
//       console.log(`counter inner value After sub ${e}, value:${value} `);
//     },
//     Multiply: (e) => {
//       console.log(`counter inner value before:${value} multiple ${e} `);
//       console.log(value * e);
//       console.log(`counter inner value After Multiply By ${e} value:${value} `);
//     },
//   };
// };
// const Fn1 = CheckCount();
// Fn1.add(2);
// Fn1.sub(3);
// const Fn2 = CheckCount();
// Fn2.add(5);
// Fn2.Multiply(10);
// Task 2.3 – Closure Proof(Ended!)

// Task 3.1 – Destructuring with Defaults
// Create an object and:
// Destructure properties with default values
// Intentionally omit some properties
// Log results and observe behavior.

// Section 3: Destructuring, Rest & Spread Operators (Start!)
// const userProfile = {
//   name: "Salman",
//   // age: 504,
//   course: "web & app dev",
//   // Present: true,
// };
// const { name, age = "Not Avalibe", course, Present = "maybe" } = userProfile;
// console.log(
//   `Name:${name}, age: ${age}, course: ${course}, Present: ${Present}`,
// );

// Section 3: Destructuring, Rest & Spread Operators (End!)

// Task 3.2 – Rest Operator in Functions
// Write a function that:
// Accepts an unknown number of arguments
// Processes them meaningfully (not just logging)
// Demonstrate behavior with diferent argument counts.
// Task 3.2 – Rest Operator in Functions (Start!)
// const usingRest = (value, ...num) => {
//   const double = num.map((e) => e * value);
//   return double;
// };
// console.log(usingRest(2, 2, 4, 5, 6, 7));
// console.log(usingRest(12, 1));
// console.log(usingRest(5));

// Task 3.2 – Rest Operator in Functions (End!)

// Task 3.3 – Spread Operator & References (Important)
// Demonstrate the diference between:
// Shallow copy using spread
// Direct reference assignment
// Modify nested values and observe efects.

// Task 3.3 – Spread Operator & References (Important)(Start!)
// const TypeScriptBio = {
//   name: "TypeScript",
//   known: {
//     bestFor: "Type Safty",
//   },
//   usedBy: {
//     Downloads: 10000000000,
//   },
// };

// const fakeCopy = { ...TypeScriptBio };
// const directRef = TypeScriptBio;
// const HardCopy = structuredClone(TypeScriptBio);

// console.log(
//   `Fake Copy Ref using spreed Operator before Changing original`,
//   fakeCopy,
// );
// console.log(`direct Reference variable before Changing original`, directRef);
// TypeScriptBio.usedBy.Downloads = "100 M";
// console.log(`Fake Copy after Changing original Ref`, fakeCopy.usedBy);
// console.log(`HardCopy Ref after Changing original Ref`, HardCopy.usedBy);
// console.log(`direct Reference after Changing original Ref `, directRef.usedBy);
// console.log(`original Ref `, TypeScriptBio);

// Task 3.3 – Spread Operator & References (Important)(Completed!)

// Final Project (Medium → Hard)
// JavaScript Data Processor App
// Build a small JavaScript data-processing app that:
// Accepts a dataset (array of objects you design)
// Uses map, flter, reduce together
// Applies destructuring and spread for transformations
// Demonstrates at least one closure
// Logs execution fow clearly
// Final Project (Medium → Hard) (Start!)
const users = [
  {
    id: 1,
    name: "Alice Morgan",
    email: "alice.morgan@example.com",
    active: true,
    loyalCustomer: false,
    lastLogin: "2024-01-20",
    address: {
      city: "Berlin",
      localAddress: "Kreuzberg 21A",
    },
  },
  {
    id: 2,
    name: "Bruno Silva",
    email: "bruno.silva@example.com",
    active: false,
    loyalCustomer: false,
    lastLogin: "2025-4-20",
    address: {
      city: "Lisbon",
      localAddress: "Rua Augusta 99",
    },
  },
  {
    id: 3,
    name: "Carla Rossi",
    email: "carla.rossi@example.com",
    active: true,
    loyalCustomer: false,
    lastLogin: "2025-2-12",
    address: {
      city: "Rome",
      localAddress: "Via Veneto 12",
    },
  },
  {
    id: 4,
    name: "Daniel Novak",
    email: "daniel.novak@example.com",
    active: true,
    loyalCustomer: false,
    lastLogin: "2025-06-25",
    address: {
      city: "Prague",
      localAddress: "Old Town Square 3",
    },
  },
  {
    id: 5,
    name: "Eva Müller",
    email: "eva.muller@example.com",
    active: false,
    loyalCustomer: false,
    lastLogin: "2025-7-3",
    address: {
      city: "Munich",
      localAddress: "Marienplatz 7",
    },
  },
  {
    id: 6,
    name: "Felix Laurent",
    email: "felix.laurent@example.com",
    active: true,
    loyalCustomer: false,
    lastLogin: "2025-01-10",
    address: {
      city: "Paris",
      localAddress: "Rue de Rivoli 45",
    },
  },
  {
    id: 7,
    name: "Hanna Kowalski",
    email: "hanna.kowalski@example.com",
    active: false,
    loyalCustomer: false,
    lastLogin: "2025-01-20",
    address: {
      city: "Warsaw",
      localAddress: "Nowy Świat 18",
    },
  },
];
const DataProcessor = (e) => {
  console.log(`Starting the process,`, e);
  if (!Array.isArray(e) || !e.length) return "its not array";
  return (e) => {
    console.log("starting the process");
    const cleanData = e
      .filter(({ active }) => active !== false)
      .map((users) => ({ ...users, loyalCustomer: true }))
      .reduce((acc, { name, email }) => {
        acc.push(`Our loyal coustomers:Name: ${name}  email: ${email}`);
        return acc;
      }, []);
    return cleanData;
  };
};
const checData = DataProcessor(users);
console.log(checData(users));

// Final Project (Medium → Hard) (End!)
// Experiment 1 Dry Run the idea
// console.log(`my thinking is like that first i make a nested arrray of objec data related to userSchema and than i will pass it inside function inside it i will filter it by some boolean value and if those peoples than map it and make there state to do something else like change values immutabile way and than use Reduce to get the data in array and return
// this is what i got from ai for dry running: It’s 70% architecturally correct, but 30% conceptually immature around reduce and purpose. without code I was giving my dry run plan and ask for make tweaks in it and correct me so it can make metal mode for me.
//  `);
