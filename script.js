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
let boxContent = "";
let operatorType = "";
txtBox.textContent = 0;

// clears text box, array, and sets global total to zero
clearBtn.addEventListener("click", () => {
  txtBox.innerHTML = "";
  boxContent = "";
  operatorType = "";
  total = 0;
  txtBox.textContent = 0;
});

// adding decimal
decimalBtn.addEventListener("click", () => {
  if (!boxContent.includes(".")) { // Prevent multiple decimals
    if (boxContent === "" || boxContent === "0") {
      boxContent = "0."; // Start with "0." if first input
    } else {
      boxContent += "."; // Append decimal normally
    }
    txtBox.textContent = boxContent;
  }
});

// operand buttons; adds number to text box
zeroBtn.addEventListener("click", () => {
  if (boxContent === "0") return; // Prevent multiple leading zeros like "00"
  
  // Allow multiple zeros after a decimal (e.g., "0.0001")
  if (boxContent.includes(".") || boxContent !== "0") {
    boxContent += "0";
    txtBox.textContent = boxContent;
  }
});

oneBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "1";
  } else {
    boxContent += "1";
  }
  txtBox.textContent = boxContent;
});

twoBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "2";
  } else {
    boxContent += "2";
  }
  txtBox.textContent = boxContent;
});

threeBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "3";
  } else {
    boxContent += "3";
  }
  txtBox.textContent = boxContent;
});

fourBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "4";
  } else {
    boxContent += "4";
  }
  txtBox.textContent = boxContent;
});

fiveBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "5";
  } else {
    boxContent += "5";
  }
  txtBox.textContent = boxContent;
});

sixBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "6";
  } else {
    boxContent += "6";
  }
  txtBox.textContent = boxContent;
});

sevenBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "7";
  } else {
    boxContent += "7";
  }
  txtBox.textContent = boxContent;
});

eightBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "8";
  } else {
    boxContent += "8";
  }
  txtBox.textContent = boxContent;
});

nineBtn.addEventListener("click", () => {
  if (boxContent === "0") {
    boxContent = "9";
  } else {
    boxContent += "9";
  }
  txtBox.textContent = boxContent;
});

// operator buttons

// equal button takes the operator type and performs that function
equalBtn.addEventListener("click", () => {
  if (operatorType === "add") {
    total = total + +boxContent;
    txtBox.textContent = total;
    boxContent = "";
  } else if (operatorType === "minus") {
    total = total - +boxContent;
    txtBox.textContent = total;
    boxContent = "";
  } else if (operatorType === "multiply") {
    total = total * +boxContent;
    txtBox.textContent = total;
    boxContent = "";
  } else if (operatorType === "divide") {
    total = total / +boxContent;
    txtBox.textContent = total;
    boxContent = "";
  };
});

// addition operator event listener
addBtn.addEventListener("click", () => {
  operatorType = "add"; // operator type for qual btn event listener
  total += +boxContent;
  boxContent = "";
  txtBox.textContent = total;
});

// minus operator event listener
minusBtn.addEventListener("click", () => {
  operatorType = "minus";
  if (boxContent !== 0 && total == 0) {
    total = +boxContent;
    boxContent = "";
    txtBox.textContent = total;
  } else {
    total -= +boxContent;
    boxContent = "";
    txtBox.textContent = total;
  }
});

// multiplication event listener
timesBtn.addEventListener("click", () => {
  operatorType = "multiply";
  if (total === 0) {
    total = +boxContent;
    boxContent = "";
  } else if (boxContent == 0) {
  // does nothing so the total doesn't set itself to zero
  // and requires a number before multiplying
  } else {
    total *= +boxContent;
    txtBox.textContent = total;
    boxContent = "";
  };
});

divideBtn.addEventListener("click", () => {
  operatorType = "divide";
  if (total === 0) {
    total = +boxContent;
    boxContent = "";
  } else if (boxContent == 0) {
  // does nothing so the total doesn't set itself to zero
  // and requires a number before dividing
  } else {
    total /= +boxContent;
    boxContent = "";
    txtBox.textContent = total;
  };
});

// decimalBtn.addEventListener("click", () => {
//   console.log(`total is ${total}`);
//   console.log(`total type is a ${typeof total}`);
//   console.log(`boxContent is ${boxContent}`);
//   console.log(`boxContent type is a ${typeof boxContent}`);
//   console.log(`operator is ${operatorType}`);
// });