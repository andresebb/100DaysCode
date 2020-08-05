const jobsContainer = document.querySelectorAll(".jobs__container");
const modal = document.getElementById("modal");
const modalBox = document.querySelector(".modal__box");
const close = document.querySelector(".cierra");
const imgModal = document.querySelector(".img-modal");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
let count = 0;

jobsContainer.forEach((item) => {
  item.addEventListener("click", (image) => {
    modalBox.style.animation = "modalIn .8s";
    modal.style.display = "block";

    const filter = image.target.dataset.filter;
    console.log(filter);
    /* if (filter === "cake1") {
      imgModal.setAttribute("src", "./img/cake-1.jpeg");
    } */

    switch (filter) {
      case "cake1":
        imgModal.setAttribute("src", "./img/cake-1.jpeg");
        count = 0;
        break;
      case "cake2":
        imgModal.setAttribute("src", "./img/cake-2.jpeg");
        count = 1;
        break;
      case "cake3":
        imgModal.setAttribute("src", "./img/cake-3.jpeg");
        count = 3;
        break;
      case "cupcake1":
        imgModal.setAttribute("src", "./img/cupcake-1.jpeg");
        count = 4;
        break;
      case "cupcake2":
        imgModal.setAttribute("src", "./img/cupcake-2.jpeg");
        count = 5;
        break;
      case "cupcake3":
        imgModal.setAttribute("src", "./img/cupcake-3.jpeg");
        count = 6;
        break;
    }
  });
});

close.addEventListener("click", () => {
  modalBox.style.animation = "modalOut .8s";
  modal.style.display = "none";
});

const imagenes = [
  {
    cake: "./img/cake-1.jpeg",
  },
  {
    cake: "./img/cake-2.jpeg",
  },
  {
    cake: "./img/cake-3.jpeg",
  },
  {
    cake: "./img/cupcake-1.jpeg",
  },
  {
    cake: "./img/cupcake-2.jpeg",
  },
  {
    cake: "./img/cupcake-3.jpeg",
  },
];
console.log(btnLeft);

btnRight.addEventListener("click", () => {
  count++;
  if (count >= imagenes.length) {
    count = 0;
  }
  console.log(count);
  imgModal.setAttribute("src", imagenes[count].cake);
});

btnLeft.addEventListener("click", () => {
  console.log(count);
  count--;
  if (count < 0) {
    count = imagenes.length - 1;
  }
  imgModal.setAttribute("src", imagenes[count].cake);
});
