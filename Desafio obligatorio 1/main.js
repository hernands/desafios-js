alert("Bienvenido al conversor de moneda");

let cotizacionUSD = 115.73;

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


while (eleccion != 4) {

    switch (eleccion) {

        case 1:

            alert('Elegiste Ver cotización del dolar');

            alert(`La cotización actual del dolar es 1 USD= ${cotizacionUSD} ARS.`);

            break;

        case 2:

            alert('Elegiste convertir dolares a pesos');

            let inputDolares = parseFloat(prompt('Ingrese cantidad de USD'));

            resultadoConversionUSD = usdToArs(inputDolares);

            alert(`El monto equivale a AR$ ${resultadoConversionUSD}.`);

            break;

        case 3:

            alert('Elegiste convertir pesos a dolares');

            let inputPesos = parseFloat(prompt('Ingrese cantidad de ARS'));

            resultadoConversionARS = arsToUsd(inputPesos);

            alert(`El monto equivale a U$D ${resultadoConversionARS}.`);

            break;

        default:

            alert('Por favor ingrese una opcion valida');

            break;
    }

    eleccion = parseInt(promptearUsuario());

}

