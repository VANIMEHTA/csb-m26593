const input = document.getElementById("bill-col");
const tipchoosen = document.querySelectorAll(".btn");
const customTip = document.getElementById("customTip");
const people = document.getElementById("people");
const reset = document.querySelector(".reset");
const totaltip = document.getElementById("totaltip");
const totalamount = document.getElementById("totalamount");

let billVal = 0;
let peopleVal = 1;
let tipVal = 0.15;

input.addEventListener("input", validateBill);

function validateBill() {
  if (input.value.includes(",")) {
    input.value.replace(",", ".");
  }
  billVal = parseFloat(input.value);
  calculate();
  console.log(billVal);
}
customTip.addEventListener("input", tipCustomVal);
people.addEventListener("input", setPeopleVal);
reset.addEventListener("click", handleReset);

tipchoosen.forEach(function (val) {
  val.addEventListener("click", handleClick);
});
function handleClick(event) {
  tipchoosen.forEach(function (val) {
    if (event.target.innerHTML === val.innerHTML) {
      tipVal = parseFloat(val.innerHTML) / 100;
    }
  });
  calculate();
}


function tipCustomVal() {
  tipVal = parseFloat(customTip.value / 100);

  if (customTip.value !== 0) {
    calculate();
  }
  console.log(tipVal);
}

function setPeopleVal() {
  peopleVal = parseFloat(people.value);

  console.log(peopleVal);
  calculate();
}
function calculate() {
  if (peopleVal >= 1) {
    let tip = (billVal * tipVal) / peopleVal;
    let totalAmountnow = (billVal * (tipVal + 1)) / peopleVal;

    totaltip.innerHTML = "$" + tip.toFixed(2);
    totalamount.innerHTML = "$" + totalAmountnow.toFixed(2);
  }
}

function handleReset() {
  input.value = 0.0;
  validateBill();

  tipchoosen[2].click();
  people.value = 1;
  setPeopleVal();
}
