function totalFine(fare) {
  if (fare <= 0 || typeof fare !== "number") {
    return "Invalid";
  }

  const result = fare + fare * (20 / 100) + 30;
  return result;
}
const result = totalFine("65");
console.log(result);
