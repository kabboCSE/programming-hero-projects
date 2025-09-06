function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  return str.split(" ").join("").toUpperCase();
}
// const res = onlyCharacter("  h e llo wor   ld");
// console.log(res);
