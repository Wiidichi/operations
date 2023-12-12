boton = document.querySelectorAll('input[type="button"]');

for (let i = 0; i < boton.length; i++) {
  let botonApretado = boton[i];
  botonApretado.addEventListener("click", function (event) {
    const botonName = botonApretado.name;
    const numeros = document.querySelectorAll('input[type="number"]');
    const a = parseInt(numeros[0].value);
    const b = parseInt(numeros[1].value);
    if(a && b){
      operaciones(botonName, a, b);
    }
    
  });
}
const operaciones = (botonApretado, a, b) => {
  const inputResult = document.getElementById("resultado");
  switch (botonApretado) {
    case "suma":
      inputResult.value = a + b;
      break;
    case "resta":
      inputResult.value = a - b;
      break;
    case "multi":
      inputResult.value = a * b;
      break;
    case "div":
      inputResult.value = Number((a / b).toFixed(2));
      break;
    default:
      inputResult.value = "";
      break;
  }
};