class Calculator {
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

    this.summary = {
      products: document.querySelector('[data-id="products"]'),
      orders: document.querySelector('[data-id="orders"]'),
      package: document.querySelector('[data-id="package"]'),
      accounting: document.querySelector('[data-id="accounting"]'),
      terminal: document.querySelector('[data-id="terminal"]'),
      totalPrice: document.getElementById("total-price"),
      values: {
        products: 0,
        orders: 0,
        package: 0,
        accounting: 0,
        terminal: 0,
      },
    };
  }

  calculateTotal() {
    let result = 0;
    Object.values(this.summary.values).forEach((item) => (result += item));
    return result;
  }

  setTotal() {
    this.summary.totalPrice.children[1].innerText = `$${this.calculateTotal()}`;
  }

  setState() {
    const summaryList = document.querySelector(".calc__summary").children[0];
    [...summaryList.children].forEach((item) => {
      item.style.display = "none";
    });
    this.summary.totalPrice.children[1].innerText = "$0";
    this.form.products.addEventListener("keyup", () => {
      if (this.form.products.value == 0) {
        this.summary.products.style.display = "none";
        this.summary.values.products = 0;
      } else {
        this.summary.products.style.display = "block";
        this.summary.products.children[1].innerText = `${this.form.products.value} * $${this.prices.products}`;
        this.summary.values.products =
          this.form.products.value * this.prices.products;
        this.summary.products.children[2].innerText = `$${this.summary.values.products}`;
      }
      this.setTotal();
    });
  }
}

const calc = new Calculator();
calc.setState();
//console.log(calc.summary.totalPrice.children[1]);
