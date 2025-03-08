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

clearBtn.addEventListener("click", () => {
  txtBox.innerHTML = "";
});

oneBtn.addEventListener("click", () => {
  txtBox.textContent = 1;
});