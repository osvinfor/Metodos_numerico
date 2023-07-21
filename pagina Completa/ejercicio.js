function EJERCICIO1() {
    var resultadosDiv = document.getElementById("resultados");
    var resultados = "";
    var a = parseFloat(document.getElementById("a").value);
  
    // Criterio de parada: la diferencia entre dos iteraciones sucesivas es menor que epsilon (tolerancia)
    var epsilon = 1e-6;
    var diff = Infinity;
    var iteraciones = 0;
    var resultado;
  
    while (Math.abs(diff) > epsilon && iteraciones < 100) {
        var fn = (a ** 3 )- (2 * a) - 5;
        var fd = 3 * (a ** 2 )- 2;
  
        resultado = a - fn / fd;
        diff = resultado - a; // Calcula la diferencia entre dos iteraciones sucesivas
        a = resultado; // Actualiza el valor de 'a' para la siguiente iteración
        iteraciones++;
    }
  
    resultados += "Raíz aproximada: " + resultado + " (Después de " + iteraciones + " iteraciones) <br/>";
    resultadosDiv.innerHTML = resultados;
  }
  
   // Función para calcular la aproximación de la raíz usando el método de Newton-Raphson
   function EJERCICIO2() {
    var resultadosDiv = document.getElementById("resultados");
    var resultados = "";
    var a = parseFloat(document.getElementById("a").value);
  
    // Criterio de parada: la diferencia entre dos iteraciones sucesivas es menor que epsilon (tolerancia)
    var epsilon = 1e-6;
    var diff = Infinity;
    var iteraciones = 0;
    var resultado;
  
    while (Math.abs(diff) > epsilon && iteraciones < 100) {
      var fn = 2 * a ** 3 - 5 * a ** 2 + 3 * a + 1;
      var fd = 6 * a ** 2 - 10 * a + 3;
        resultado = a - fn / fd;
        diff = resultado - a; // Calcula la diferencia entre dos iteraciones sucesivas
        a = resultado; // Actualiza el valor de 'a' para la siguiente iteración
        iteraciones++;
    }
  
    resultados += "Raíz aproximada: " + resultado + " (Después de " + iteraciones + " iteraciones) <br/>";
    resultadosDiv.innerHTML = resultados;
  }
  
   // Función para calcular la aproximación de la raíz usando el método de Newton-Raphson
   function EJERCICIO3() {
    var resultadosDiv = document.getElementById("resultados");
    var resultados = "";
    var a = parseFloat(document.getElementById("a").value);
  
    // Criterio de parada: la diferencia entre dos iteraciones sucesivas es menor que epsilon (tolerancia)
    var epsilon = 1e-6;
    var diff = Infinity;
    var iteraciones = 0;
    var resultado;
  
    while (Math.abs(diff) > epsilon && iteraciones < 100) {
      var fn = 2 * a ** 3 - 5 * a ** 2 + 3 * a + 1;
      var fd = 6 * a ** 2 - 10 * a + 3;
        resultado = a - fn / fd;
        diff = resultado - a; // Calcula la diferencia entre dos iteraciones sucesivas
        a = resultado; // Actualiza el valor de 'a' para la siguiente iteración
        iteraciones++;
    }
  
    resultados += "Raíz aproximada: " + resultado + " (Después de " + iteraciones + " iteraciones) <br/>";
    resultadosDiv.innerHTML = resultados;
  }
  
  function f(x) {
    return x * x - 4;
  }
  
  function EJERCICIO4() {
    var resultadosDiv = document.getElementById("resultados");
    var resultados = "";
  
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var i = parseInt(document.getElementById("i").value);
    
    for (var cont = 1; cont <= i; cont++) {
      var m = (a + b) / 2;
      var fm = f(m);
  
      resultados += "En la iteración " + cont + " el valor es " + m + " con el error |" + Math.abs(a - m) + "|<br/>";
  
      if (f(a) * fm < 0) {
        b = m;
      } else {
        a = m;
      }
    }
  
    resultadosDiv.innerHTML = resultados;
  }
  
  
    function f(x) {
      return Math.cos(x) - x;
    }
    
    function EJERCICIO5() {
      var resultadosDiv = document.getElementById("resultados");
      var resultados = "";
    
      var a = parseFloat(document.getElementById("a").value);
      var b = parseFloat(document.getElementById("b").value);
      var i = parseInt(document.getElementById("i").value);
      
      for (var cont = 1; cont <= i; cont++) {
        var m = (a + b) / 2;
        var fm = f(m);
    
        resultados += "En la iteración " + cont + " el valor es " + m + " con el error |" + Math.abs(a - m) + "|<br/>";
    
        if (f(a) * fm < 0) {
          b = m;
        } else {
          a = m;
        }
      }
    
      resultadosDiv.innerHTML = resultados;
    }