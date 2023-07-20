function calcularRaiz() {
    // Obtener el valor inicial ingresado por el usuario
    var valorInicial = parseFloat(document.getElementById("valorInicial").value);
  
    // Definir la función f(x)
    function f(x) {
      return 2 * Math.pow(x, 3) - 5 * Math.pow(x, 2) + 3 * x + 1;
    }
  
    // Definir la derivada de la función f(x)
    function fDerivada(x) {
      return 6 * Math.pow(x, 2) - 10 * x + 3;
    }
  
    // Definir la tolerancia y el número máximo de iteraciones
    var tolerancia = 0.0001;
    var maxIteraciones = 100;
  
    // Inicializar variables
    var raizAproximada = valorInicial;
    var iteracion = 0;
  
    // Aplicar el método de Newton-Raphson
    while (iteracion < maxIteraciones) {
      var fValor = f(raizAproximada);
      var fDerivadaValor = fDerivada(raizAproximada);
  
      var raizNueva = raizAproximada - fValor / fDerivadaValor;
  
      if (Math.abs(raizNueva - raizAproximada) < tolerancia) {
        // Se alcanzó la aproximación deseada
        document.getElementById("resultado").innerHTML = "La raíz aproximada es: " + raizNueva;
        break;
      }
  
      raizAproximada = raizNueva;
      iteracion++;
    }
  
    if (iteracion === maxIteraciones) {
      // No se pudo encontrar una raíz aproximada dentro del número máximo de iteraciones
      document.getElementById("resultado").innerHTML = "No se pudo encontrar una raíz aproximada.";
    }
  }
  