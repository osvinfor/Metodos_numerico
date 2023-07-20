// newton_raphson.js
function newtonRaphson1() {
  const x0 = parseFloat(document.getElementById('x0').value);
  const result = newtonRaphsonMethod1(x0);
  document.getElementById('result1').value = result.toFixed(6);
}

function newtonRaphson2() {
  const x0 = parseFloat(document.getElementById('x0').value);
  const result = newtonRaphsonMethod2(x0);
  document.getElementById('result2').value = result.toFixed(6);
}

function newtonRaphson3() {
  const x0 = parseFloat(document.getElementById('x0').value);
  const result = newtonRaphsonMethod3(x0);
  document.getElementById('result3').value = result.toFixed(6);
}

function newtonRaphsonMethod1(x0) {
  const tolerance = 1e-6;
  let x = x0;
  
  while (true) {
    const fx = Math.pow(x, 3) - 2 * x - 5;
    const fpx = 3 * Math.pow(x, 2) - 2;
    const newX = x - fx / fpx;

    if (Math.abs(newX - x) < tolerance) {
      return newX;
    }

    x = newX;
  }
}

function newtonRaphsonMethod2(x0) {
  const tolerance = 1e-6;
  let x = x0;
  
  while (true) {
    const fx = 2 * Math.pow(x, 3) - 5 * Math.pow(x, 2) + 3 * x + 1;
    const fpx = 6 * Math.pow(x, 2) - 10 * x + 3;
    const newX = x - fx / fpx;

    if (Math.abs(newX - x) < tolerance) {
      return newX;
    }

    x = newX;
  }
}

function newtonRaphsonMethod3(x0) {
  const tolerance = 1e-6;
  let x = x0;
  
  while (true) {
    const fx = 2 * Math.pow(x, 3) - 5 * Math.pow(x, 2) + 3 * x + 1;
    const fpx = 6 * Math.pow(x, 2) - 10 * x + 3;
    const newX = x - fx / fpx;

    if (Math.abs(newX - x) < tolerance) {
      return newX;
    }

    x = newX;
  }
}
