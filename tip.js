const bill = 270;

const click = document.getElementById("tipclick");

click.onclick = function () {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;

    document.querySelector(".bill").textContent = `The Bill is  ${bill}`;
    document.querySelector(".Tip").textContent = `The Tip is  ${tip}`;

    document.querySelector(
      ".text"
    ).textContent = `The bill was ${bill}, the tip was ${tip}, and the total value is ${
      bill + tip
    }`;

    console.log(
      `The bill was ${bill}, the tip was ${tip}, and the total value is ${
        bill + tip
      }`
    );
  } else {
    const tip = bill * 0.2;
    console.log(
      `The bill was ${bill}, the tip was ${tip}, and the total value is ${
        bill + tip
      }`
    );
    document.querySelector(
      ".text"
    ).textContent = `The bill was ${bill}, the tip was ${tip}, and the total value is  ${
      bill + tip
    }`;
  }
};
