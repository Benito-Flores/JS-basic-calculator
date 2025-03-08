function multiplyNumeric(obj) {

    for (let product in obj) {
      if (typeof obj[product] === "number") {
        obj[product] = obj[product] * 2;
      };
    };

};

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);