function history() {
    console.log("Mostrando historial...");
    alert("Mostrando historial...");
  }

  function result() {
    console.log("Mostrando resultado...");
    alert("Mostrando resultado...");
  }

  function clean() {
    let elementoModificado = document.querySelector(".section7 > span");
    elementoModificado.innerHTML = " ";
  }

  function number(numero) {
    let elementoModificado = document.querySelector(".section7 > span");
    elementoModificado.innerHTML = elementoModificado.innerHTML+numero;
  }

  function deleteNumber() {
    let elementoModificado = document.querySelector(".section7 > span");
    const newNumber = elementoModificado.innerHTML.slice(0,elementoModificado.innerHTML.length-1);
    elementoModificado.innerHTML = newNumber;
  }
