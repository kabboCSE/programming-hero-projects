function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }

  const result = fare + fare * (20 / 100) + 30;
  return result;
}
// const result = totalFine("65");
// console.log(result);

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  return str.split(" ").join("").toUpperCase();
}
// const res = onlyCharacter("  h e llo wor   ld");
// console.log(res);

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  player1 = team1.foul + team1.cardY + team1.cardR;
  player2 = team2.foul + team2.cardY + team2.cardR;

  if (player1 > player2) {
    const result = team2.name;
    return result;
  } else if (player1 < player2) {
    const result = team1.name;
    return result;
  } else if (player1 === player2) {
    const result = "tie";
    return result;
  }
}

// const team1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const team2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
// const result = bestTeam(team1, team2);
// console.log(result);

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || typeof arr1[i] !== typeof arr2[i]) {
      return false;
    }
  }
  return true;
}
// const arr1 = [2, 5, 6];
// const arr2 = 256;
// const res = isSame(arr1, arr2);
// console.log(res);

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
// console.log(resultReport([]));
