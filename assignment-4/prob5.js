function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  let sum = 0;
  let passCount = 0;
  let failCount = 0;

  for (let mark of marks) {
    sum += mark;
    if (mark >= 40) {
      passCount++;
    } else {
      failCount++;
    }
  }

  const avg = Math.round(sum / marks.length);

  return {
    finalScore: avg,
    pass: passCount,
    fail: failCount,
  };
}
let objj = resultReport([99, 87, 67, 12, 87]);
console.log(objj);
// console.log(resultReport([]));
