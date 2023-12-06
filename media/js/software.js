function seleccionarOpcion(opcion) {
   // Oculta todas las secciones
   ocultarTodasLasOpciones();
   // Muestra la sección correspondiente a la opción seleccionada
   document.getElementById(opcion).classList.remove('oculto');
}

function ocultarTodasLasOpciones() {
    const opciones = ['FuncionesParciales','ProbabilidadDiscreta', 'ProbabilidadCondicional', 'Independencias', 'TeoremaDeBayes', 'Automata', 'Lenguajes'];
    opciones.forEach(opcion => {
        const elemento = document.getElementById(opcion);
        if (elemento) {
            elemento.classList.add('oculto');
        }
    });
}

function mostrarCamposEntrada() {
    var opcionSeleccionada = document.getElementById('opcion').value;

    // Ocultar todos los mensajes
    var mensajes = document.getElementsByClassName('CalculoCondicional');
    for (var i = 0; i < mensajes.length; i++) {
        mensajes[i].style.display = 'none';
    }

    // Mostrar el mensaje correspondiente
    var mensajeElement = document.getElementById('Opcion' + opcionSeleccionada);
    if (mensajeElement) {
        mensajeElement.style.display = 'block';
    }
}

function verificarCadena() {
    const cadenaUsuario = document.getElementById('LengA').value;

    const automata = {
        estados: ['q0', 'q1', 'q2', 'q3'],
        alfabeto: ['0', '1'],
        estadoInicial: 'q0',
        estadosAceptacion: ['q3'],
        transiciones: {
          q0: {
            '0': 'q1',
            '1': 'q0',
          },
          q1: {
            '0': 'q1',
            '1': 'q2',
          },
          q2: {
            '0': 'q1',
            '1': 'q3',
          },
          q3: {
            '0': 'q3',
            '1': 'q3',
          },
        },
      };

    const esAceptada = verificarCadenaConAutomata(cadenaUsuario);

    const resultado = document.getElementById('resultadoAutomata');

    resultado.innerHTML = '';
    resultado.innerHTML += `<h2>Resultado:</h2>`;
    resultado.innerHTML += `<p>La cadena ingresada es: ${cadenaUsuario}</p>`;

    if (esAceptada) {
    // Limpiar contenido anterior
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>La cadena es válida para el alfabeto {0,1}.</p>`;
    } else {
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>La cadena contiene caracteres inválidos para el alfabeto {0,1}.</p>`;
    }
    }

    function verificarCadenaConAutomata(cadena) {
    const regex = /^[01]+$/; // Expresión regular que verifica si la cadena contiene solo 0's y 1's
    return regex.test(cadena);
}

function reinicioAutomata() {
    document.getElementById('LengA').value = '';
    document.getElementById('resultadoAutomata').innerHTML = '';
}

function reinicio() {
    document.getElementById('probA').value = '';
    document.getElementById('probB').value = '';
    document.getElementById('SOS').innerHTML = '';
}


function operarLenguajes() {
    const lenguajeA = document.getElementById('LenguajeA').value;
    const lenguajeB = document.getElementById('LenguajeB').value;

    const union = [...new Set([...lenguajeA, ...lenguajeB])]; // Unión de lenguajes
    const concatenacion = lenguajeA + lenguajeB; // Concatenación de lenguajes
    const estrella = lenguajeA + '*'; // Estrella de Kleene para el primer lenguaje

    const resultado = document.getElementById('resultadoLenguaje');
    resultado.innerHTML = '';
    resultado.innerHTML += `<h2>Resultado:</h2>`;
    resultado.innerHTML += `<p>Unión de lenguajes: ${union}</p>`;
    resultado.innerHTML += `<p>Concatenación de lenguajes: ${concatenacion}</p>`;
    resultado.innerHTML += `<p>Estrella de Kleene del primer lenguaje: ${estrella}</p>`;
}


function reinicioLenguaje() {
    document.getElementById('LenguajeA').value = '';
    document.getElementById('LenguajeB').value = '';
    document.getElementById('resultadoLenguaje').innerHTML = '';
}



function evaluarFuncion() {
    const funcion = document.getElementById('Funcion').value;
    const inicio = parseFloat(document.getElementById('Inicio').value);
    const fin = parseFloat(document.getElementById('Fin').value);

    if (funcion.trim() === '' || isNaN(inicio) || isNaN(fin)) {
      document.getElementById('resultados').innerText = 'Por favor ingrese una función y un rango válido.';
      return;
    }

    let resultados = '<p>Resultados:</p>';
    for (let i = inicio; i <= fin; i++) {
      const valorX = i;
    try {
        const resultado = eval(funcion.replace(/x/g, valorX));
        resultados += `<p>${funcion.replace(/x/g, valorX)} = ${resultado}</p>`;
      } catch (error) {
        
        resultados += `<p>Error al evaluar ${funcion.replace(/x/g, valorX)}</p>`;
      }
    }
     
    // Limpiar contenido anterior
    resultados.innerHTML = '';
    document.getElementById('resultados').innerHTML = resultados;
}

// Función para limpiar los campos
function limpiar() {
    document.getElementById('Funcion').value = '';
    document.getElementById('Inicio').value = '';
    document.getElementById('Fin').value = '';
    document.getElementById('resultados').innerText = '';
}