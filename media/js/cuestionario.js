function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];
// -------------------- Seccion de cuestionario Aleatorio ------------------------- //

preguntas[0]=new pregunta("¿Qué caracteriza a una máquina de Turing?",
"Ejecuta instrucciones en paralelo",
"Utiliza lenguaje de alto nivel para operar",
"Opera únicamente con números reales",
"Es un modelo abstracto de una computadora con una cinta infinita",4);
preguntas[1]=new pregunta("¿Cuál es la principal capacidad de una máquina de Turing?",
"Simular el comportamiento de cualquier algoritmo computacional",
"Realizar operaciones aritméticas complejas",
"Almacenar grandes cantidades de información en su memoria",
"Resolver problemas de inteligencia artificial",1);
preguntas[2]=new pregunta("¿Qué tipo de lenguajes son aceptados por una máquina de Turing?",
"Lenguajes formales sensibles al contexto",
"Cualquier lenguaje formal reconocible por una gramática formal",
"Lenguajes formales libres de contexto",
"Solo lenguajes formales regulares",2);
preguntas[3]=new pregunta("¿Cuál de las siguientes afirmaciones es verdadera acerca de la decidibilidad en la teoría de la computabilidad?",
"Todos los problemas son decidibles mediante algoritmos",
"Existen problemas indecidibles, imposibles de resolver mediante algoritmos",
"Solo los problemas matemáticos son decidibles",
"La decidibilidad depende del lenguaje en el que está expresado el problema",2);
preguntas[4]=new pregunta("¿Qué define la computabilidad de un problema?",
"La capacidad de ser expresado en términos matemáticos",
"La existencia de una solución algorítmica",
"La dificultad del problema)",
"La cantidad de recursos computacionales requeridos para resolverlo",2);
preguntas[5]=new pregunta("¿Qué representa el concepto de lenguaje recursivamente enumerable en teoría de la computabilidad?",
"Un lenguaje que puede ser resuelto por cualquier algoritmo",
"Un lenguaje que puede ser generado por una gramática libre de contexto",
"Un lenguaje para el cual existe una máquina de Turing que lo acepta",
"Un lenguaje no computable",3);
preguntas[6]=new pregunta("¿Cuál es el papel de la función de transición en una máquina de Turing?",
"Determina el número de estados de la máquina",
"Define la entrada de la máquina",
"Especifica el comportamiento de la máquina ante un estado y un símbolo leído",
"Controla la velocidad de ejecución de la máquina",3);
preguntas[7]=new pregunta("¿Qué caracteriza a un lenguaje recursivo en teoría de la computabilidad?",
"Es un lenguaje reconocido por una máquina de Turing que siempre se detiene",
"No es aceptado por ninguna máquina de Turing",
"Puede ser resuelto por cualquier algoritmo",
"Es equivalente a un lenguaje regular",1);
preguntas[8]=new pregunta("¿Qué implica el problema de la detención en la teoría de la computabilidad?",
"Determinar si un programa se ejecuta de manera correcta",
"Saber si una máquina de Turing se detendrá o entrará en un bucle infinito",
"Resolver un problema de optimización",
"Calcular el tiempo de ejecución de un algoritmo",2);
preguntas[9]=new pregunta("¿Cuál es la relación entre la teoría de la computabilidad y la complejidad computacional?",
"La teoría de la computabilidad estudia la dificultad intrínseca de los problemas computacionales",
"La complejidad computacional se enfoca en la resolución de problemas prácticos",
"La complejidad computacional no tiene relación con la teoría de la computabilidad",
"La teoría de la computabilidad se concentra en el rendimiento de los algoritmos en situaciones reales",1);
preguntas[10]=new pregunta("¿Cuál es la relación entre la teoría de la computabilidad y la complejidad computacional?",
"La teoría de la computabilidad estudia la dificultad intrínseca de los problemas computacionales",
"La complejidad computacional no tiene relación con la teoría de la computabilidad",
"La complejidad computacional se enfoca en la resolución de problemas prácticos",
"La teoría de la computabilidad se concentra en el rendimiento de los algoritmos en situaciones reales",1);
preguntas[11]=new pregunta("¿Cuál es el objetivo principal de una máquina de Turing?",
"Resolver problemas de inteligencia artificial",
"Ejecutar programas de alto nivel",
"Modelar algoritmos computacionales",
"Analizar estructuras de datos complejas",3);
preguntas[12]=new pregunta("¿Cuál es la función principal de la cinta en una máquina de Turing?",
"Almacenar instrucciones de operación",
"Almacenar datos de entrada y salida",
"Almacenar números reales",
"Controlar el flujo de ejecución",2);
preguntas[13]=new pregunta("¿Qué representa el concepto de computabilidad en la teoría de la computación?",
"Capacidad de resolver problemas complejos",
"Existencia de una solución algorítmica para un problema",
"Complejidad intrínseca de un algoritmo",
"Facilidad de implementación de un algoritmo",2);
preguntas[14]=new pregunta("¿Qué caracteriza a un problema indecidible en la teoría de la computabilidad?",
"No existe un algoritmo que pueda resolverlo",
"Todos los problemas son decidibles",
"Puede ser resuelto por cualquier computadora",
"Depende de la codificación del problema",1);
preguntas[15]=new pregunta("¿Cuál es la función principal de una gramática en la teoría de lenguajes formales?",
"Generar lenguajes recursivos",
"Definir la estructura sintáctica de un lenguaje",
"Describir el comportamiento de una máquina de Turing",
"Establecer operaciones de entrada y salida",2);
preguntas[16]=new pregunta("¿Cuál es la diferencia entre un lenguaje recursivamente enumerable y un lenguaje recursivo?",
"Los dos términos son sinónimos",
"Los lenguajes recursivos no son aceptados por una máquina de Turing",
"Los lenguajes recursivamente enumerables pueden no ser decidibles",
"Los lenguajes recursivos siempre son finitos",3);
preguntas[17]=new pregunta("¿Cuál es el concepto central detrás del teorema de la indecidibilidad de Turing?",
"Demuestra que ciertos problemas no son resolubles por una máquina de Turing",
"Establece que todos los problemas son resolubles por una máquina de Turing",
"Define un nuevo modelo de computación más poderoso que una máquina de Turing",
"ndica que los problemas deben ser expresados en lenguajes formales",1);
preguntas[18]=new pregunta("¿Qué describe el concepto de lenguaje formal en teoría de la computabilidad?",
"Un lenguaje hablado por humanos",
"Un conjunto de cadenas sobre un alfabeto dado",
"Un lenguaje comprensible por una máquina de Turing",
"Un lenguaje utilizado en la programación de sistemas",2);
preguntas[19]=new pregunta("¿Qué representa el problema de la parada en la teoría de la computabilidad?",
"Determinar si un programa tiene errores",
"Calcular la complejidad temporal de un algoritmo",
"Establecer la eficiencia de un programa",
"Saber si un programa finalizará su ejecución o entrará en un bucle infinito",4);
preguntas[20]=new pregunta("¿Qué estudia la teoría de la complejidad computacional?",
"La dificultad de resolver problemas en tiempo polinomial",
"La eficiencia de los algoritmos en el mundo real",
"La capacidad de resolver problemas complejos en lenguajes formales",
"La cantidad de recursos necesarios para resolver problemas",4);