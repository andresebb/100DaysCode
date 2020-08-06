const howMany = document.getElementById("howManyNumber");
const howMuch = document.getElementById("howMuchNumber");
const btnCalcular = document.getElementById("calcular");

const greatService = document.getElementById("great");
const goodService = document.getElementById("good");
const badService = document.getElementById("bad");

const select = document.getElementById("select");
let selectNumber = select.value;

const imagen = document.querySelector(".img-container");

const tipResult = document.querySelector(".tip-result");
const tipAmountText = document.getElementById("tip-amount");
const totalAmountText = document.getElementById("total-amount");
const personAmountText = document.getElementById("each-person-amount");

const worker = (e) => {
  e.preventDefault();

  imagen.style.display = "block";

  setTimeout(() => {
    imagen.style.display = "none";
  }, 2000);

  switch (select.value) {
    case "1":
      selectNumber = 20;
      break;
    case "2":
      selectNumber = 10;
      break;
    case "3":
      selectNumber = 2;
      break;
  }

  const howMuchNumber = parseInt(howMuch.value);
  const howManyNumber = parseInt(howMany.value);

  function getTip(howMuchNumber, howManyNumber, selectNumber) {
    const tipAmount = (howMuchNumber * selectNumber) / 100;
    const totalAmound = howMuchNumber + tipAmount;
    const eachPerson = totalAmound / howManyNumber;

    console.log(`Propina ${tipAmount}`);
    console.log(`Cantidad total ${totalAmound}`);
    console.log(`Cada persona ${eachPerson}`);

    tipResult.style.display = "block";
    tipAmountText.textContent = tipAmount;
  }
  getTip(howMuchNumber, howManyNumber, selectNumber);
};

btnCalcular.addEventListener("click", worker);
