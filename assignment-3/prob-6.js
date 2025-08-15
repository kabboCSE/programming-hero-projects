/** Problem 06 :  (Current Salary )  */
var experience = 4;
var startingSalary = 45000;
var currentSalary = startingSalary;
//write your code here

for (var i = 1; i <= experience; i++) {
  var currentSalary = currentSalary * 1.05;
}
console.log(currentSalary.toFixed(2));
