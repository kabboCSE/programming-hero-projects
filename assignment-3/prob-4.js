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
