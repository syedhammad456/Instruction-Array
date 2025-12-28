// Instruction

// 1)
// const studentName = ["Ali", "Hammad", "Omar", "Saad", "Diyan"]

// console.log(studentName);

// 2) Deep Copy

// let originalArray = [
//   { name: "Ali", age: 15 },
//   { name: "Sara", age: 16 }
// ];

// // Deep copy
// let copyArray = JSON.parse(JSON.stringify(originalArray));

// Now copyArray is independent of originalArray


// 3) Add student
const studentName = ["Ali", "Hammad", "Omar", "Saad", "Diyan"]
studentName.unshift("Starting Value")
console.log(studentName);




