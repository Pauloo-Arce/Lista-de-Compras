const containerItems = document.getElementById("items-container");
const productoUsuario = document.getElementById("producto-text");
const cantidadUsuario = document.getElementById("producto-cantidad");
const btnAgregar = document.getElementById("btn-agregar");

btnAgregar.addEventListener("click", () => {
  // obtener los datos ingresados por el ususario
  const producto = productoUsuario.value;
  const cantidad = cantidadUsuario.value;
  console.log(producto);
  console.log(cantidad);

  // validar que el nombre y la cantidad sean validos
  const patronText = "/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/";
  const patronNumeros = "d{1,2}|100";
  if (producto == patronText && cantidad == patronNumeros) {
    alert("Ingrese una opción válida por favor.");
  } else {
    aggLista();
  }
});

function aggLista() {
  const producto = productoUsuario.value;
  // const cantidad = cantidadUsuario.value;

  let lista = document.createElement("ul");
  let itemLista = document.createElement("li");

  itemLista.append(producto);
  lista.append(itemLista);
  containerItems.append(lista);
  console.log(containerItems);
}
