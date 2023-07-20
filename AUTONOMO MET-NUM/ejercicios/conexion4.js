function calcularRaiz() {
    // Obtener los extremos del intervalo ingresados por el usuario
    var a = parseFloat(document.getElementById("intervaloA").value);
    var b = parseFloat(document.getElementById("intervaloB").value);

    // Definir la función f(x)
    function f(x) {
        return Math.pow(x, 2) - 4;
    }

    // Definir la tolerancia
    var tolerancia = 0.0001;

    // Inicializar variables
    var raizAproximada;
    var iteracion = 0;

    // Aplicar el método de bisección
    while (Math.abs(b - a) >= tolerancia) {
        var c = (a + b) / 2;
        var fValor = f(c);

        if (fValor === 0) {
            // Se encontró la raíz exacta
            raizAproximada = c;
            break;
        }

        if (f(a) * fValor < 0) {
            b = c;
        } else {
            a = c;
        }

        iteracion++;
    }

    if (raizAproximada) {
        // Se encontró la raíz exacta
        document.getElementById("resultado").innerHTML = "La raíz exacta es: " + raizAproximada;
    } else {
        // Se alcanzó la aproximación deseada
        document.getElementById("resultado").innerHTML = "La raíz aproximada es: " + ((a + b) / 2);
    }
}
