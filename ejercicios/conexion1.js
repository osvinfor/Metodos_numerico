function calcularRaiz() {
    // Obtener el valor inicial ingresado por el usuario
    var valorInicial = parseFloat(document.getElementById("valorInicial").value);
  
    // Definir la función f(x)
    function f(x) {
      return Math.pow(x, 3) - 2 * x - 5;
    }
  
    // Definir la derivada de la función f(x)
    function fDerivada(x) {
      return 3 * Math.pow(x, 2) - 2;
    }
  
    // Definir la tolerancia
    var tolerancia = 0.0001;
  
    // Inicializar variables
    var raizAproximada = valorInicial;
    var iteracion = 0;
  
    // Aplicar el método de Newton-Raphson
    while (true) {
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
  
      if (iteracion > 100) {
        // No se pudo encontrar una raíz aproximada dentro del número máximo de iteraciones
        document.getElementById("resultado").innerHTML = "No se pudo encontrar una raíz aproximada.";
        break;
      }
    }
  }
  