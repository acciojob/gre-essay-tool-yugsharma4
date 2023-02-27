//your code here
const h3 = document.querySelector("#wordCount");
const input = document.querySelector("#evaluatedText");
let count = 0;
h3.innerHTML = 0;
input.addEventListener("input", (e) => {
  const currentString = e.target.value;
  const enteredChar = currentString.charAt(currentString.length - 1);
  if (enteredChar == " ") {
    count++;
    h3.innerHTML = count;
  }
});

