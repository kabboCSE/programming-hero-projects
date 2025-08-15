function bestTeam(player1, player2) {
  // You have to write your code here
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

const team1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const team2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
const result = bestTeam(team1, team2);
console.log(result);
