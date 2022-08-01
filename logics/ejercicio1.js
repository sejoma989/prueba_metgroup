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

let o ={
    dimension: function(array){
        return Array.isArray(array) ?
            1 + Math.max(...array.map((t) => o.dimension(t))) :
            0;
    },
}

const ob = Object.create(o);

console.log(ob.dimension(a));
console.log(ob.dimension(b));
console.log(ob.dimension(c));
console.log(ob.dimension(d));
console.log(ob.dimension(e));
console.log(ob.dimension(f));
console.log(ob.dimension(g));
