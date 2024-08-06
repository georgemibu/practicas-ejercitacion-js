//Convertir string a number
function stringToNumberParseInt(srt){
    return parseInt(srt, 2)
    /*parseInt toma dos argumentos: la cadena que deseas convertir y la base numérica (en este caso, base 10).*/
}
console.log(stringToNumberParseInt("1110"))

//uso del operador Unario
function stringToNumberParseIntUnario(srt){
    return +srt;
}
console.log(stringToNumberParseIntUnario("300"))

//Uso de Number
function stringToNumberNumber(srt){
    return Number(srt);
}
console.log(stringToNumberNumber("3"));


/*crear una función que pueda tomar cualquier entero no negativo como argumento y devolverlo con sus dígitos en orden descendente. Esencialmente, reordena los dígitos para crear el número más alto posible.*/

/*Solución:
1 Convertir el número en una cadena de texto para trabajar con los dígitos individualmente.
2 Dividir la cadena en un array de caracteres (dígitos).
3 Ordenar el array en orden descendente.
4 Unir el array de nuevo en una cadena de texto.
5 Convertir la cadena resultante de vuelta a un número (si es necesario).*/

function descendingOrder(n){
    const numStr = n.toString();
    const digitos = numStr.split('');
    console.log(digitos)
    digitos.sort((a,b)=> b - a)
    const digitosOrdenados = digitos.join('');
    return parseInt(digitosOrdenados, 10);
}
console.log(descendingOrder(1234))

//solución alternativa modo dios
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}


/*Consigna:
Implementa una función que convierta el valor booleano dado en su representación en cadena de texto.*/
function booleanToString(b){
    return b.toString();
}
console.log(booleanToString(true))

//Alternativa usando operador ternario
function booleanToString(b) {
    return b ? "true" : "false";
}


/*Consigna
El ácido desoxirribonucleico (ADN) es una sustancia química que se encuentra en el núcleo de las células y lleva las "instrucciones" para el desarrollo y funcionamiento de los organismos vivos.

Si quieres saber más: http://en.wikipedia.org/wiki/DNA

En las secuencias de ADN, los símbolos "A" y "T" son complementarios entre sí, al igual que "C" y "G". Tu función recibe una cadena de ADN (cadena de texto, excepto para Haskell); necesitas devolver el lado complementario. La cadena de ADN nunca está vacía ni existe un ADN inexistente (de nuevo, excepto para Haskell).

Explicación:
El objetivo es crear una función que tome una secuencia de ADN como entrada y devuelva su secuencia complementaria. En biología molecular, las secuencias de ADN están formadas por cuatro nucleótidos representados por las letras "A", "T", "C", y "G". Las reglas para encontrar la secuencia complementaria son:

"A" (adenina) se empareja con "T" (timina).
"T" (timina) se empareja con "A" (adenina).
"C" (citosina) se empareja con "G" (guanina).
"G" (guanina) se empareja con "C" (citosina).


Pasos:
1 Crear un objeto que mapea cada nucleótido a su complemento
2 Usar el método map para convertir cada nucleótido a su complemento
3 Luego unir los resultados en una nueva cadena
*/

function complementarioADN(adn){
    const complementario = {
        "A" : "T",
        "T" : "A",
        "C" : "G",
        "G" : "C"
    };

    return adn.split('').map(nucleotido => complementario[nucleotido]).join('');
}
console.log(complementarioADN("AACCTTG"))

/*Explicación metodo map:
El método map se usa para aplicar una función a cada elemento de un array y crear un nuevo array con los resultados. La función que se pasa a map se llama a cada elemento del array original y el valor retornado se coloca en el nuevo array.

array.map(callback(currentValue, index, array))

callback: Una función que se llama en cada elemento del array.
currentValue: El valor actual del elemento que se está procesando.
index (opcional): El índice del elemento que se está procesando.
array (opcional): El array sobre el que se llama el método map.

Ejemplo:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
*/

/*Ejercicio:
Se te dará una palabra. Tu tarea es devolver el carácter central de la palabra. Si la longitud de la palabra es impar, devuelve el carácter central. Si la longitud de la palabra es par, devuelve los dos caracteres centrales.

Ejemplos:
Kata.getMiddle("test") debería devolver "es"
Kata.getMiddle("testing") debería devolver "t"
Kata.getMiddle("middle") debería devolver "dd"
Kata.getMiddle("A") debería devolver "A"

La tarea consiste en encontrar el carácter central o los dos caracteres centrales de una cadena dada, dependiendo de si su longitud es impar o par.

Pasos para Resolver el Problema

1 Determinar la Longitud de la Cadena:
    Usa string.length para obtener la longitud de la palabra.
2 Verificar si la Longitud es Impar o Par:
    Si la longitud es impar, hay un solo carácter central.
    Si la longitud es par, hay dos caracteres centrales.
3 Encontrar el Carácter o los Caracteres Centrales:
    Para Longitud Impar: El carácter central se encuentra en la posición (length // 2).
    Para Longitud Par: Los dos caracteres centrales se encuentran en las posiciones (length // 2 - 1) y (length // 2).
 */
function getMiddle(word){
    const length= word.length;
    const mid = Math.floor(length/2)

    if (length % 2 === 0){
        return word.substring(mid-1, mid+1);
    } else {
        return word[mid]
    }
}
console.log(getMiddle("Test"))
console.log(getMiddle("Tecnology"))

/*El método substring en JavaScript es una función que se utiliza para extraer una porción de una cadena de texto. Devuelve una nueva cadena que es una subcadena de la cadena original, basada en los índices de inicio y fin que le proporciones.

string.substring(indexStart, indexEnd)

indexStart: El índice de inicio de la subcadena. El carácter en este índice es parte de la subcadena resultante.
indexEnd (opcional): El índice final de la subcadena. El carácter en este índice no es parte de la subcadena resultante. Si se omite, substring extrae hasta el final de la cadena.
*/

/*Respuesta modo dios*/
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


/*Ejercicio:
Se te pide que eleves al cuadrado cada dígito de un número y los concatenes.

Por ejemplo, si pasas 9119 a la función, el resultado será 811181, porque 9 al cuadrado es 81 y 1 al cuadrado es 1 (81-1-1-81)

Ejemplo #2: Una entrada de 765 debería devolver 493625 porque 7 al cuadrado es 49, 6 es 36 y 2 25 (49-36-25)

Resolución:
1 Convertir el número a una cadena para procesar cada dígito individualmente.
2 Elevar al cuadrado cada dígito.
3 Concatenar los resultados en una nueva cadena.
4 Devolver la cadena resultante.

*/

function squareDigits (num){
    const numCuadrado = num.toString();
    const result = numCuadrado.split('').map(digit =>{
        const square = Math.pow(parseInt(digit), 2); 
        return square.toString()
    }).join('');
    return parseInt(result);
}

console.log(squareDigits(3212))
console.log(squareDigits(2112))

console.log(squareDigits(0))



/*Curiosidad del return doble:
Hay dos return pero cada uno está en un contexto diferente:

El return en el map:

Dentro del método map, el return se usa para devolver el resultado de elevar al cuadrado cada dígito, convertido a una cadena. Este return asegura que el array resultante de map contenga los cuadrados de los dígitos en formato de cadena.

El return de la función squareDigits:

Fuera del método map, el return se usa para devolver la cadena final que resulta de concatenar todos los elementos del array generado por map. Este es el valor final que la función squareDigits devuelve como resultado.
*/

/*Ejercicio:
Dado dos enteros a y b, que pueden ser positivos o negativos, encuentra la suma de todos los enteros entre ellos e incluyendo ambos. Devuelve esta suma. Si los dos números son iguales, devuelve a o b.

Pasos:
Identificar el Rango:
    Determina cuál es el número menor y cuál es el número mayor entre a y b. Esto te dará el rango de números que necesitas sumar.
Suma de una Secuencia de Números:
    Utiliza una fórmula para sumar una secuencia de números o, alternativamente, puedes sumar los números usando un bucle.
Casos Especiales:
    Si a y b son iguales, la suma es simplemente a (o b), ya que solo hay un número en el rango.
*/

function getSum(a,b){

    if (a === b){
        return a;
    }
    const inicio = Math.min(a,b);
    const fin = Math.max(a,b);

    let sum = 0;
    for (let i = inicio; i <= fin; i++){
        sum += i;
    }
    return sum;
}

console.log(getSum(-1, 2))


/*Ejercicio:
Tu objetivo es crear una función que elimine el primer y el último carácter de una cadena de texto. Se te da un parámetro, que es la cadena original. No tienes que preocuparte por cadenas con menos de dos caracteres.
*/
function removeFirstAndLastChar(srt){
    return str.substring(1, str.length-1)
}

//alternativa
function removeFirstAndLastCharAlternativa(str) {
    return str.slice(1, -1);
}

