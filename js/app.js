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

  initialise() {
    const summaryList = document.querySelector(".calc__summary").children[0];
    [...summaryList.children].forEach((item) => {
      item.style.display = "none";
    });

    this.form.package.children[1].style.display = "none";
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

    this.form.orders.addEventListener("keyup", () => {
      if (this.form.orders.value == 0) {
        this.summary.orders.style.display = "none";
        this.summary.values.orders = 0;
      } else {
        this.summary.orders.style.display = "block";
        this.summary.orders.children[1].innerText = `${this.form.orders.value} * $${this.prices.orders}`;
        this.summary.values.orders =
          this.form.orders.value * this.prices.orders;
        this.summary.orders.children[2].innerText = `$${this.summary.values.orders}`;
      }
      this.setTotal();
    });

    this.form.accounting.addEventListener("click", () => {
      if (this.form.accounting.checked) {
        this.summary.accounting.style.display = "block";
        this.summary.values.accounting = this.prices.accounting;
        this.summary.accounting.children[1].innerText = `$${this.summary.values.accounting}`;
      } else {
        this.summary.accounting.style.display = "none";

        this.summary.values.accounting = 0;
      }
      this.setTotal();
    });

    this.form.terminal.addEventListener("click", () => {
      if (this.form.terminal.checked) {
        this.summary.terminal.style.display = "block";
        this.summary.values.terminal = this.prices.terminal;
        this.summary.terminal.children[1].innerText = `$${this.summary.values.terminal}`;
      } else {
        this.summary.terminal.style.display = "none";

        this.summary.values.terminal = 0;
      }
      this.setTotal();
    });

    this.form.package.addEventListener("click", () => {
      if (this.form.package.children[1].style.display === "none") {
        this.form.package.children[1].style.display = "block";
      } else {
        this.form.package.children[1].style.display = "none";
      }
      this.form.package.children[0].innerText = "Choose package";
      this.summary.values.package = 0;
      this.summary.package.style.display = "none";
      this.setTotal();
    });

    [...this.form.package.children[1].children].forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        this.form.package.children[0].innerText = item.innerText;
         this.summary.package.children[1].innerText = item.innerText;
        this.form.package.children[1].style.display = "none";
        this.summary.values.package = Object.values(this.prices.package)[index];
        this.summary.package.style.display = "block";
        this.summary.package.children[2].innerText = `$${this.summary.values.package}`;
        this.setTotal();
      });
    });
  }
}

const calc = new Calculator();
calc.initialise();

