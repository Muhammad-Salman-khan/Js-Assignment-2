Task 1.1 – map vs forEach vs reduce (Behavior Study)
In JavaScript, `map`, `forEach`, and `reduce` are all array methods that allow you to iterate over arrays, but they have different behaviors and use cases.
The one I like the most and easy to work with is `map` because it creates a new array with the results of calling a provided function on every element in the calling array. This is particularly useful when you want to transform data without mutating the original array.

Task 1.2 – map vs forEach vs reduce (Code Examples)
First i will create an array of objects of studentStats and filter them based on there `attendent` if it's true than
we can use reduce to create a single array for those students who are present and return the data.
<==========================================>
Same for changing the condition to check the course to make them separate arrays for different courses.

Task 1.3 – Custom Array Method Simulation (Hard)
Simulate the behavior of one array method ( map , filter , or reduce ) using a normal loop.
First of all i had no clue how to do it but after some research watching Youtube Vide and trial i was able to simulate the `map` method using a normal loop.
and it worked i added the guard condition to check if the provided argument is indeed a arrry or not if not return simply empty array and also when we check the values using JSON.stringfy(customeMap) === JSON.stringfy(feildmap)
it's says true so it worked. and we checked without using
stingify it says false for two different memory aloct and diff ref that's why.
<==========================================>

Task 2.1 – Hoisting Reality Check (Summary in my words)
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use functions and variables before they are declared in the code. However, only the declarations are hoisted, not the initializations. For example, if you declare a variable with `var`, it will be hoisted but initialized to `undefined` until the line where it is assigned a value is executed. Function declarations are fully hoisted, meaning you can call them before their declaration in the code. but using let and const it won't work and simply show you the error message
Temporal Dead Zone (TDZ) is the time between entering scope and the variable being declared.

Task 2.2 – Call Stack Observation
Create multiple nested function calls that:
for that i created 4 functions first one is `fn1` which calls the second function `fn2` and that calls the third function `fn3` and inside that i added a console log to see the output when we call the first function it will go to the second function then to the third function and print the output and then it will return back to second function and then to first function and complete the execution.
Same way i added Async function using setTimeout to see how it works in call stack. and it works as expected first it will execute the synchronous code and then the asynchronous code after the specified time.
logs
The Exuction:
Sync Func Second Started
Sync Func third Started
Sync Func forth -Started
Sync third Ended
Sync Func Second Ended
Sync Func First Ended
For Sync Functions function one Called First and endend back to back
Aysnc func First -start
Async Second Started
Async third Started
Async forth Start
Async Second Ended
Async First Ended
The log Data i got
First -start
Second Started
third Started
forth -Started
third Ended
Second Ended
First Exist
Async third Ended
For ASync Functions function one Called FirstFunction first and the last was ended Third Ended Last

Task 2.3 – Closure Proof
To demonstrate closure in JavaScript, I created a function `CheckCount` that defines a variable `let value = 0` and returns an inner functions `add` `sub` and `mutiply`. The inner function accesses the `value`, showcasing how closures allow inner functions to retain access to their outer function's scope even after the outer function has finished executing.

// Task 3.1 – Destructuring with Defaults
I have a good knowlodge about destructuring with default values in JavaScript. Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. When destructuring, you can also assign default values to variables in case the unpacked value is `undefined`. This is particularly useful for handling optional properties in objects or elements in arrays.
for me using it all the time in my projects to make the code clean and easy to read using react.
<==========================================>

Task 3.2 – Rest Operator in Functions
The rest operator (`...`) in JavaScript allows a function to accept an in definite number of arguments as an array. This is useful when you want to create functions that can handle varying numbers of parameters without explicitly defining each one.

<h2>Task 3.3 – Spread Operator & References (Important)</h2>
The spread operator use for making a shallow copy of an array or object. It allows you to expand an iterable (like an array or string) or an object into individual elements or key-value pairs. This is particularly useful for creating copies of arrays or objects without maintaining references to the original, thus preventing unintended side effects from mutations.
But it's important to note that the spread operator creates a shallow copy, meaning that for nested objects or arrays, the references to the inner objects/arrays are still maintained. Therefore, changes to nested structures in the copied object/array will affect the original if they are not primitive values. use Hard copy techniques like `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)` native js provide this.

<h2>Final Project (Medium → Hard)
<br>JavaScript Data Processor App</h2>
In short I was dryrunning the logic and i told ai my dry run and it says it's good like '70%' correct and 30% we need to improve so i said tell me what's the thirty percent that i need to work.
<hr>
<p>First i created the dataset with fields like `id` `name`
`email` `active` `loyalCustomer` and then i created a function `DataProcessor` that takes the dataset as an argument and performs various operations on it. The operations include filtering `active` based on their `active`, grouping Customer, and i mutate those customer 
to `loyalCustomer= true` status. so when we want to get those loyal customer we can simply filter them based on that field.and i used Reduce to give me those name and email in an array.
 </p>
