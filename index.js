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
// console.log(addTaxsToProductMap);

// Task 1.1 – map vs forEach vs reduce (Behavior Study) (Completed!)
