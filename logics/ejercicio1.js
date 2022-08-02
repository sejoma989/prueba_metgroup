 // 1. Construya un objeto que reciba un arreglo o una matriz de dimensión N el cual
// contiene números de tipo entero.

// El objeto debe tener los siguientes métodos suponiendo la siguiente
// definición. o = MyMAtrix.new(matrix)

// a. o.dimension -> Devuelve el número entero que define la dimensión del
// arreglo o matriz en su mayor profundidad.

// b. o.straight -> Devuelve true o false según el siguiente criterio: -True: Si el
// arreglo o matriz contiene la misma cantidad de elementos en cada una de
// sus dimensiones (Matriz uniforme). -False: Caso contrario.

// c. o.compute -> Devuelve el número entero resultado de la suma de todos los
// números incluídos en la matriz sin importar el tamaño o dimensión.

// Parámetros para tener en cuenta: 
// -Puede utilizar el lenguaje de programación que 
// desee y con el que se sienta más cómodo. 
// -Considere los siguientes casos como
// ejemplo. Pasar los casos de ejemplo no necesariamente definirá que el ejercicio está
// bien construído. Pruebe tantos arreglos o matrices como considere necesario.

// Ejemplos: a = [1,2] b = [[1,2],[2,4]] c = [[1,2],[2,4],[2,4]] d = [[[3,4],[6,5]]] e = [[[1, 2,
// 3]], [[5, 6, 7],
// [5, 4, 3]], [[3, 5, 6], [4, 8, 3], [2, 3]]] f = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3,
// 5, 6], [4, 8, 3]]]

// MyMatrix.new(a).dimension -> 1
// MyMatrix.new(b).dimension -> 2
// MyMatrix.new(c).dimension -> 2
// MyMatrix.new(d).dimension -> 3
// MyMatrix.new(e).dimension -> 3
// MyMatrix.new(f).dimension -> 3
// MyMatrix.new(a).straight -> true
// MyMatrix.new(b).straight -> true
// MyMatrix.new(c).straight -> true
// MyMatrix.new(d).straight -> true
// MyMatrix.new(e).straight -> false
// MyMatrix.new(f).straight -> true
// MyMatrix.new(a).compute -> 3
// MyMatrix.new(b).compute -> 9
// MyMatrix.new(c).compute -> 15
// MyMatrix.new(d).compute -> 18
// MyMatrix.new(e).compute -> 70
// MyMatrix.new(f).compute -> 66

// -No existen requerimientos de complejidad, pero entre menos complejidad
// exista en el cálculo de los métodos mejor se puntuará el ejercicio.
// -Los parámetros de calificación son funcionales y de construcción de código.
// -Esfuércese por realizar el ejercicio lo más completo posible. El ejercicio
// incompleto también suma puntos.
// -Asegúrese de que no existen problemas de sintaxis o similares, el código debe
// poder ser compilado o interpretado dependiendo del lenguaje usado.
// -Escriba los comentarios que considere necesarios para explicar los
// procedimientos o algoritmos descritos.

const a = [1, 2], 
    b = [
        [1, 2],
        [2, 4],
    ],
    c = [
        [1, 2],
        [2, 4],
        [2, 4],
    ],
    d = [
        [
            [3,4],
            [6,5],
        ]
    ],
    e = [
        [
            [1, 2, 3]
        ], 
        [
            [5, 6, 7],
            [5, 4, 3]
        ],
        [
            [3, 5, 6], 
            [4, 8, 3], 
            [2, 3]
        ]
    ],
    f = [
        [
            [1, 2, 3], 
            [2, 3, 4]
        ], 
        [
            [5, 6, 7], 
            [5, 4, 3]
        ], 
        [
            [3, 5, 6], 
            [4, 8, 3]
        ]
    ],
    g = [
        [
            [1, 2, 3], 
            [2, 3, 4]
        ], 
        [
            [5, 6, 7], 
            [5, 4, 3]
        ], 
        [
            [3, 5, 6], 
            [4, 8, 3]
        ],
        [
            [4, 5, 6],
            [
                [2, 3, 8],
            ]
        ]

    ];

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);

// Objeto como clase ES2015
class Objeto {
    constructor() {
        this.dimension = function (array) {
            /**
             * Obtiene la profundidad de un arreglo.
             * @param [array]   array   Arreglo a reducir.
             * @return [number]         Entero con la profundidad del arreglo
             */
            return Array.isArray(array) ?
                    1 + Math.max(...array.map((t) => o.dimension(t))) :
                    0;
        };
        this.straight = function (array) {

            let cont = 0;
            array.forEach((element) => {
                if (array[0].length != element.length)
                    cont++;
            });
            return (cont > 0) ? false : true;
        };
        this.compute = function (array) {
            array = array.flat(this.dimension(array));

            const initialValue = 0;
            const sumWithInitial = array.reduce(
                (previousValue, currentValue) => previousValue + currentValue,
                initialValue
            );
            return sumWithInitial;
        };
    }
}

let o = new Objeto();

console.log(o.dimension(a));
console.log(o.dimension(b));
console.log(o.dimension(c));
console.log(o.dimension(d));
console.log(o.dimension(e));
console.log(o.dimension(f));
console.log(o.dimension(g));

console.log(o.straight(a));
console.log(o.straight(b));
console.log(o.straight(c));
console.log(o.straight(d));
console.log(o.straight(e));
console.log(o.straight(f));

console.log(o.compute(a));
console.log(o.compute(b));
console.log(o.compute(c));
console.log(o.compute(d));
console.log(o.compute(e));
console.log(o.compute(f));