/** Problem -01 ( Divide the Asset ) */
var area = 15;
//write your code here
console.log(area / 2);

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(i + " -" + " medicine");
  } else {
    console.log(i + " -" + " rest");
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "data.docx";
//write your code here

// var test = fileName.slice(0, 1);
// console.log(test);
if (
  fileName.includes("pdf") ||
  fileName.includes("docx") ||
  fileName.slice(0, 1) === "#"
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here

console.log(
  //   student["name"] + student["roll"] + student["department"] + "@ph.ac.bd"
  student["name"]
    .concat(student["roll"])
    .concat(student["department"])
    .concat("@ph.ac.bd")
);

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
var currentSalary = startingSalary;
//write your code here

for (var i = 1; i <= experience; i++) {
  currentSalary = currentSalary * 1.05;
}
console.log(currentSalary.toFixed(2));
