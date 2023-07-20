const valorx = document.querySelector('.valor-x');
const verSolution = document.getElementById("solution");
let value;
//e^x - 2 + x^2
var e = 2.7182818285;
var previousValueX;
function result() {
    verSolution.innerText = ' ';
    let numRep = 200;
    let valueX = Number(valorx.value)
    previousValueX = null;
    let i;
    let fx;
    let fdx;
	for (i = 1; i < numRep; i++) {
		fx= e ** (valueX) -2 + valueX**2
        fdx = e**valueX +2* valueX
		valueX = valueX-(fx/fdx)
        if (previousValueX !== null && valueX === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = valueX;
        value = `Iteracion ${i}: El valor es ${valueX}<br/>`;
        mostrar();
	}
    console.log(valueX);
    
}

function mostrar() {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = value;
    verSolution.appendChild(parrafo);
}