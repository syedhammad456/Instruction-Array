 // 1. Student
const StudentList = ["Ali", "Diyan", "Ahmed", "Yousuf", "Hassan"];
console.log();

// 2) No Do

// Unshift Task
studentList.unshift("Bilal");
// Push
// Add one name at the end
studentList.push("Zoya");

// Add one name at a index
let Index = Math.floor(Math.random() * studentList.length);
let newStudent = "Sana";

//  shifting elements
for (let i = studentList.length; i > randomIndex; i--) {
  studentList[i] = studentList[i - 1];
}
studentList[randomIndex] = newStudent;

console.log("After adding students:", studentList);

// 4. Update a students name
studentList[2] = "Nashit"; //

console.log(studentList);

// 5. Remove students

// Remove first student
studentList.shift();

// Remove last student
studentList.pop();

console.log(studentList);

// 6. Search for a student
function searchStudent("Ali") {
  return studentList.includes("Ali")
}

console.log(searchStudent("Ali"));   // 

// 7. Find index of a student
let studentIndex = studentList.indexOf("Ali");
console.log(studentIndex);

// 8. Show total number of students
console.log("Total students:", studentList.length);

// 9. Print all student names
console.log("All student names:");
for (let student of studentList) {
  console.log(student);
}
