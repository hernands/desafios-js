let alumnosAnotados = 'Alumnos inscriptos:\n ';

alert("¡Bienvenido al seminario de javascript! Por favor, inscríbase antes de que se agoten los cupos (máximo: 10 alumnos).");


for (let i = 1; i < 11; i++) {
    let preguntarUsuario = prompt("Ingrese nombre del alumno o escriba 'esc' para salir del programa");
    if (preguntarUsuario == 'esc') {
        alert("Saliste del programa.");
        break
    } else {
        let usuarioAnotado = `\n ${i} - ${preguntarUsuario}`;
        alert(`Alumno anotado: ${usuarioAnotado}`);
        alumnosAnotados += usuarioAnotado;
    }
}

alert(`¡Lo sentimos! No quedan más lugares :( \n ${alumnosAnotados}`);


