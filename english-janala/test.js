const createElements = (arr) => {
  const htmlElements = arr.map((el) => `<span class = "btn"> ${el} </span>`);
  console.log(htmlElements.join(" "));
};
const synonyms = ["Kabbo", "tuhin", "siam"];
createElements(synonyms);
