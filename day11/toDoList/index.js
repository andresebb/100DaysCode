const itemInput = document.getElementById("tareaName");
const btnAdd = document.getElementById("btnAdd");
const form = document.getElementById("form");

const listContainer = document.getElementById("listContainer");
const btnDelete = document.querySelector(".btnDelete");

const alerta = document.querySelector(".alerta");

let api = [];

/* Con este metodo se agregan elementos al local storage */
/* A localStorage.setItem("Nombre que le pondras", JSON.stringify(Que vas a guardar)); */
function setLocalStorage(api) {
  localStorage.setItem("Mis apis", JSON.stringify(api));
}

// Manejo de los botonos
const handleItem = (itemName) => {
  const items = document.querySelectorAll(".item-box");

  items.forEach((item) => {
    if (item.querySelector(".item-title").textContent === itemName) {
      // Boton de Tachar
      const tachalo = item.querySelector(".tachar");
      tachalo.addEventListener("click", () => {
        item.querySelector(".item-title").classList.toggle("tachado");
      });

      //Boton de Editar

      const editalo = item.querySelector(".editar");

      editalo.addEventListener("click", () => {
        if (itemInput.value.length > 0) {
          //Si ya tiene un valor seleccionado para editar hace esto
          alerta.style.display = "block";
          setTimeout(() => {
            alerta.style.display = "none";
          }, 2000);
        } else {
          itemInput.value = itemName;
          listContainer.removeChild(item);

          //Modifica el valor de la api
          api = api.filter((item) => {
            return item !== itemName;
          });
        }
      });

      //Boton de Eliminar

      const eliminalo = item.querySelector(".eliminar");

      eliminalo.addEventListener("click", () => {
        listContainer.removeChild(item);

        api = api.filter((item) => {
          return item !== itemName;
        });

        /* 
          Aqui nos falto agregar que al hacer click en ese item
          se eliminara de la local Storage, 
          pero no se como eliminar solo un item de
          mi "Mis apis" en la local Storage
        
        */

        itemBorrado = document.querySelector(".success");
        itemBorrado.style.display = "block";

        setTimeout(() => {
          itemBorrado.style.display = "none";
        }, 2000);
      });
    }
  });
};

const getList = (api) => {
  listContainer.innerHTML = "";

  api.forEach((item) => {
    listContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="item-box">
          <h3 class="item-title">${item}</h3>
          <div>
            <a href="#" class="tachar">✔</a>
            <a href="#" class="editar">🛠</a>
            <a href="#" class="eliminar">❌</a>
          </div>
      </div>`
    );

    handleItem(item);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tarea = tareaName.value;

  if (itemInput.value.length === 0) {
    alert("Ingresa alguna tarea");
  } else {
    api.push(tarea);
    setLocalStorage(api);
    getList(api);
  }

  itemInput.value = "";
});

// Esta es la forma que al recargar la pagina siga aparencia las listas ya escritas en el DOM
const getLocalStorage = () => {
  const todoStorage = localStorage.getItem("Mis apis");

  if (todoStorage === "undefined" || todoStorage === null) {
    api = [];
  } else {
    api = JSON.parse(todoStorage);
    getList(api);
  }
};

getLocalStorage();

btnDelete.addEventListener("click", () => {
  api = [];
  localStorage.clear();
  getList(api);
});
