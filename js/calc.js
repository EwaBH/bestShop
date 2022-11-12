export default class Calculator {
  constructor() {
    this.prices = {
      products: 0.5,
      orders: 0.25,
      package: {
        basic: 0,
        professional: 25,
        premium: 60,
      },
      accounting: 35,
      terminal: 5,
    };

    this.form = {
      products: document.getElementById("products"),
      orders: document.getElementById("orders"),
      package: document.getElementById("package"),
      accounting: document.getElementById("accounting"),
      terminal: document.getElementById("terminal"),
    };

    this.summary = {};
  }

  doSomething() {
    console.log("sssssssssssssss");
  }
}
