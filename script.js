// text box
const txtBox = document.querySelector(".text-box");

// equal button
const equalBtn = document.querySelector(".equal-btn");

// operator buttons
const addBtn = document.querySelector(".add-btn");
const minusBtn = document.querySelector(".minus-btn");
const timesBtn = document.querySelector(".times-btn");
const divideBtn = document.querySelector(".divide-btn");

// number buttons
const zeroBtn = document.querySelector(".zero-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");

// clear and decimal buttons
const decimalBtn = document.querySelector(".decimal-btn");
const clearBtn = document.querySelector(".clear-btn");

// global variables
let total = 0;
let boxContent = [];

// clears text box, array, and sets global total to zero
clearBtn.addEventListener("click", () => {
  txtBox.innerHTML = "";
  boxContent = [];
  total = 0;
});

// adds number to text box
zeroBtn.addEventListener("click", () => {
  if (boxContent.length > 0) {
    boxContent.push(0); // stores new index to array
    txtBox.textContent = boxContent.join("");
  };
});

oneBtn.addEventListener("click", () => {
  boxContent.push(1); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

twoBtn.addEventListener("click", () => {
  boxContent.push(2); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

threeBtn.addEventListener("click", () => {
  boxContent.push(3); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

fourBtn.addEventListener("click", () => {
  boxContent.push(4); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

fiveBtn.addEventListener("click", () => {
  boxContent.push(5); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

sixBtn.addEventListener("click", () => {
  boxContent.push(6); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

sevenBtn.addEventListener("click", () => {
  boxContent.push(7); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

eightBtn.addEventListener("click", () => {
  boxContent.push(8); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

nineBtn.addEventListener("click", () => {
  boxContent.push(9); // stores new index to array
  txtBox.textContent = boxContent.join("");
});

divideBtn.addEventListener("click", () => {
  console.log(typeof boxContent[0]);
});

