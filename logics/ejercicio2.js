/*
2. Construya un objeto que reciba como parámetro un string y reconozca mediante
expresiones regulares los siguientes criterios.

El objeto debe tener los siguientes métodos suponiendo la siguiente
definición. s = MyArray.new(string)

A. s.operation -> Devuelve un booleano según el siguiente criterio -True: Si el
texto recibido corresponde a una operación aritmética (+, -, /, *)
matemática. -False: Si el texto recibido no corresponde a ninguna operación
aritmética matemática o se encuentra mal construída.

B. s.compute -> Devuelve el valor computado de la operación aritmética, se deben
considerar los paréntesis '(' ')' como agrupaciones de la operación. Devuelve
false en el caso de que la operación no pueda ser computada por paréntesis
mal agrupados o en el caso de que s.operation sea false.

Parámetros para tener en cuenta: -Puede utilizar el lenguaje de programación que
desee y con el que se sienta más cómodo. -Considere los siguientes casos como
ejemplo. Pasar los casos de ejemplo no necesariamente definirá que el ejercicio está
bien construído. Pruebe tantas cadenas como considere necesario.

Ejemplos: a = "Hello world" b = "2 + 10 / 2 - 20" c = "(2 + 10) / 2 - 20" d = "(2 + 10 /
2 - 20"

MyArray.new(a).operation -> false
MyArray.new(b).operation -> true
MyArray.new(c).operation -> true
MyArray.new(d).operation -> false
MyArray.new(a).compute -> false
MyArray.new(b).compute -> -13
MyArray.new(c).compute -> -14
MyArray.new(d).compute -> false

-No existen requerimientos de complejidad, pero entre menos complejidad
exista en el cálculo de los métodos mejor se puntuará el ejercicio.
-Los parámetros de calificación son funcionales y de construcción de código.
-Esfuércese por realizar el ejercicio lo más completo posible. El ejercicio
incompleto también suma puntos.
-Asegúrese de que no existen problemas de sintaxis o similares, el código debe
poder ser compilado o interpretado dependiendo del lenguaje usado.
-Escriba los comentarios que considere necesarios para explicar los
procedimientos o algoritmos descritos.
*/

const a = "Hello world",
    b = "2 + 10 / 2 - 20",
    c = "(2 + 10) / 2 - 20",
    d = "(2 + 10 / 2 - 20";

class Objeto {
    constructor() {
        this.operation = function (expresion) {
            flag = true;
            if (expresion.includes("[a-z]"))
                flag = false;
            else if (expresion.includes( "-" | "+" | "*" | "/" )) {
                eval(expresion) ? flag = true : flag = false;
            } else flag = false;
            return flag;
        };
        this.compute = function (expresion) {

        }
    }
};

let s = new Objeto();

console.log(s.operation(a));
console.log(s.operation(b));