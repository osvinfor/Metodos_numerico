const inputValorA = document.querySelector('.valor-a');
const inputValorB = document.querySelector('.valor-b');
const verSolution = document.getElementById("solution");
let value;
//e^x - 2 + x^2
var e = 2.7182818285;
var previousValue;
function result() {
if (inputValorA.value == "" || inputValorB.value == "") {
    alert("Falto el valor"); 
    return; 
    }
    verSolution.innerText = ' ';
    let numRep = 200;
    let valueA = Number(inputValorA.value);
    let valueB = Number(inputValorB.value);
    previousValue = null;
    let m, fa,fb,fm
	let x1
    let i
	for (i = 1; i < numRep; i++) {
        m = (valueA + valueB)/2
        
        fa = e ** (valueA) -2 + valueA**2
        fb = e ** (valueB) -2 + valueB**2
        fm = e ** (m) -2 + m**2
        x1 = (fa*fm)
        if(x1 < 0) {
        valueB = m
        }
        else if(x1 > 0) {
        valueA = m
        }
        else {
        raiz = m
        }
        if (previousValue !== null && m === previousValue) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValue = m;
        value = `Iteracion ${i}: El valor es ${m}<br/>`;
        mostrar();
    }
    console.log(m);
}

function mostrar() {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = value;
    verSolution.appendChild(parrafo);
}