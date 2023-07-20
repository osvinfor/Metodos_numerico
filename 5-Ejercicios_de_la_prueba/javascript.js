const inputVal1 = document.querySelector('.val1');
const inputVal2 = document.querySelector('.val2');
const inputVal3 = document.querySelector('.val3');

const inputVal4_1 = document.querySelector('.val4-1');
const inputVal4_2 = document.querySelector('.val4-2');
const inputVal5_1 = document.querySelector('.val5-1');
const inputVal5_2 = document.querySelector('.val5-2');


const pro1 = document.getElementById("pro-1");
const pro2 = document.getElementById("pro-2");
const pro3 = document.getElementById("pro-3");
const pro4 = document.getElementById("pro-4");
const pro5 = document.getElementById("pro-5");

let numRep = 200;
var previousValueX;
function Problem1() {
    if (inputVal1.value == "") {
        alert("Falto el valor"); 
        return; 
    }
    val1 = Number(inputVal1.value)
    let i
    let fx;
    let fdx;
	for (i = 1; i < numRep; i++) {
        // x^3 - 2x - 5
        // 3x^2-2
		fx= (val1**3) - (2 * val1) - 5
		fdx= 3 * val1**2- 2
		val1= val1-(fx/fdx)

        if (previousValueX !== null && val1 === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = val1;
	}
    pro1.innerHTML = `Valor <br>${val1.toFixed(6)}`
    
}

function Problem2() {
    if (inputVal2.value == "") {
        alert("Falto el valor"); 
        return; 
    }
    val2 = Number(inputVal2.value)
    let i
    let fx;
    let fdx;
	for (i = 1; i < numRep; i++) {
        // 2x^3 - 5x^2 + 3x + 1
        // 6x^2-10x+3
		fx= 2*val2**3 - 5*val2**2 + 3*val2 + 1
		fdx= 6*val2**2 - 10*val2 + 3
		val2= val2-(fx/fdx)

        if (previousValueX !== null && val2 === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = val2;
	}
    pro2.innerHTML = `Valor <br>${val2.toFixed(6)}` 
}

function Problem3() {
    if (inputVal3.value == "") {
        alert("Falto el valor"); 
        return; 
    }
    val3 = Number(inputVal3.value)
    let i
    let fx;
    let fdx;
	for (i = 1; i < numRep; i++) {
        // 2x^3 - 5x^2 + 3x + 1
        // 6x^2-10x+3
		fx= 2*val3**3 - 5*val3**2 + 3*val3 + 1
		fdx= 6*val3**2 - 10*val3 + 3
		val3= val3-(fx/fdx)

        if (previousValueX !== null && val3 === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = val3;
	}
    pro3.innerHTML = `Valor <br>${val3.toFixed(6)}` 
}

// ----------------- Funcion Biseccion ----------------------- //

function Problem4(){
    if (inputVal4_1.value == "" || inputVal4_2.value == "") {
        alert("Falto el valor"); 
        return; 
    }
    let val4_1 = Number(inputVal4_1.value);
    let val4_2 = Number(inputVal4_2.value);
    previousValueX = null;
    let m, fa,fb,fm
	let x1, i
    for (i = 1; i < numRep; i++) {
        m = (val4_1 + val4_2)/2
        //x^2 - 4
        fa = val4_1**2 - 4
        fb = val4_2**2 - 4
        fm = m**2 - 4
        x1 = (fa*fm)
        if(x1 < 0) {
        val4_2 = m
        }
        else if(x1 > 0) {
        val4_1 = m
        }
        else {
        raiz = m
        }
        if (previousValueX !== null && m === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = m;
        
    }
    pro4.innerHTML = `Valor <br>${m.toFixed(6)}`
}

function Problem5(){
    if (inputVal5_1.value == "" || inputVal5_2.value == "") {
        alert("Falto el valor"); 
        return; 
    }
    let val5_1 = Number(inputVal5_1.value);
    let val5_2 = Number(inputVal5_2.value);
    previousValueX = null;
    let m, fa,fb,fm
	let x1, i
    for (i = 1; i < numRep; i++) {
        m = (val5_1 + val5_2)/2
        //cos(x) - x
        fa = Math.cos(val5_1) - val5_1
        fb = Math.cos(val5_2) - val5_2
        fm = Math.cos(m) - m
        x1 = (fa*fm)
        if(x1 < 0) {
        val5_2 = m
        }
        else if(x1 > 0) {
        val5_1 = m
        }
        else {
        raiz = m
        }
        if (previousValueX !== null && m === previousValueX) {
            break; // Se encontró un valor repetido, detener el bucle
        }
        previousValueX = m;
        
    }
    pro5.innerHTML = `Valor <br>${m.toFixed(6)}`
}
