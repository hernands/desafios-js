alert("Bienvenido al conversor de moneda");

// Definicion de variables y funciones 

let cotizacionUSD = 100;

function promptearUsuario() {
    let eleccionUsuario = prompt("¿Qué desea hacer? \n1) Ver cotización del dolar \n2) Convertir dólares a pesos \n3) Convertir pesos a dólares \nO presione 4 para salir.");
    return eleccionUsuario;
}


function usdToArs(dolares) {
    let resultado = dolares * cotizacionUSD;
    return resultado;
};

function arsToUsd(pesos) {
    let resultado = pesos / cotizacionUSD;
    return resultado;
}

let eleccion = parseInt(promptearUsuario());

// Fin de definicion de variables y funciones 

// Ciclo While para verificar que el usuario no queria salir
while (eleccion != 4) {
    // Condicional que controla el flujo segun la operacion seleccionada por el usuario 
    switch (eleccion) {
        // Mostrar cotizacion del dolar 
        case 1:

            alert('Elegiste Ver cotización del dolar');

            alert(`La cotización actual del dolar es 1 USD= ${cotizacionUSD} ARS.`);

            break;
        // Conversion USD a ARS
        case 2:

            alert('Elegiste convertir dolares a pesos');

            let inputDolares = parseFloat(prompt('Ingrese cantidad de USD'));

            resultadoConversionUSD = usdToArs(inputDolares);

            alert(`El monto equivale a AR$ ${resultadoConversionUSD}.`);

            break;

        // Conversion ARS a USD 
        case 3:

            alert('Elegiste convertir pesos a dolares');

            let inputPesos = parseFloat(prompt('Ingrese cantidad de ARS'));

            resultadoConversionARS = arsToUsd(inputPesos);

            alert(`El monto equivale a U$D ${resultadoConversionARS}.`);

            break;
        // Alert de opcion invalida 
        default:

            alert('Por favor ingrese una opcion valida');

            break;

    }

    // Vuelve a promptear al usuario para volver al inicio del ciclo 
    eleccion = parseInt(promptearUsuario());

}

