# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 06 → 25 de septiembre

## UNIDAD 2: Introducción a la estructura y captura de datos

### Recopilación y estructuración de datos: de la matriz de la hoja de cálculo a los formatos de intercambio ligero (CSV y JSON)

A la vuelta del receso institucional, nos adentramos en la arquitectura de los datos digitales. Hoy aprenderán a tomar la información ordenada por las analistas y los analistas en filas y columnas tradicionales para transformarla en formatos de intercambio ligeros y estandarizados para la web, enfocándonos principalmente en las estructuras CSV y JSON. Comprender cómo se anidan y se relacionan estos datos constituye el paso fundamental para que las desarrolladoras y los desarrolladores del taller puedan automatizar su lectura y consumo en el navegador.

---


### Recogiendo y compartiendo datos: Desde las hojas de cálculo al CSV y JSON

**CSV** (Comma Separated Values): Formato ligero de intercambio de datos que resulta de exportar los datos de una Tabla, Hoja de Cálculo o Planilla de Excel.

En el ejemplo del artículo de Wikipedia para [Valores separados por comas](https://es.wikipedia.org/wiki/Valores_separados_por_comas), tenemos los siguientes datos:

| Año | Marca | Modelo | Descripción | Precio |
|:----|:-------|:-------|:------------|:-------|
| 1997	| Ford	| E350	| ac, ABS, moon	| 3000.00 |
| 1999	| Chevy	| Venture	| Extended Edition | 4900.00 |
| 1999 | Chevy | Venture | Extended Edition, Very Large	| 5000.00 |
| 1996 | Jeep | Grand Cherokee | MUST SELL! air, moon roof, loaded	| 4799.00 |

Los mismos datos en CSV:

```
Año,Marca,Modelo,Descripción,Precio
1997,Ford,E350,"ac, ABS, moon",3000.00
1999,Chevy,Venture,Extended Edition,4900.00
1999,Chevy,Venture,"Extended Edition, Very Large",5000.00
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00
```

Las filas siguen siendo filas. Las columnas son reemplazadas por la separación de las comas.

Si nos quedamos con la primera fila (de arriba hacia abajo) podemos notar su función de encabezado de columna: Le da sentido a lo que sigue abajo, sean años, marcas, modelos, descripciones o precios.

Así mismo podríamos leer un CSV con más datos: 

https://raw.githubusercontent.com/datasciencedojo/datasets/refs/heads/master/titanic.csv

Por legibilidad, conviene aprovecharnos de la manera en que GitHub muestra los CSV dentro de los repositorios:

https://github.com/datasciencedojo/datasets/blob/master/titanic.csv

Podríamos revisar en tales datos el total de pasajeros por clase, cuántos sobrevivieron, la distribución sexogenérica, etc. 

**JSON** (JavaScript Object Notation): Formato ligero de intercambio de datos, fácil de leer y escribir para los humanos y fácil de analizar y generar para las máquinas. Su bloque constructivo básico es el par "clave": valor, organizado dentro de llaves `{...}` para objetos o corchetes `[...]` para arreglos.

Los mismos datos del CSV de más arriba, se verían como sigue en un JSON: 

```
[
  {
    "Año": 1997,
    "Marca": "Ford",
    "Modelo": "E350",
    "Descripción": "ac, ABS, moon",
    "Precio": 3000
  },
  {
    "Año": 1999,
    "Marca": "Chevy",
    "Modelo": "Venture",
    "Descripción": "Extended Edition",
    "Precio": 4900
  },
  {
    "Año": 1999,
    "Marca": "Chevy",
    "Modelo": "Venture",
    "Descripción": "Extended Edition, Very Large",
    "Precio": 5000
  },
  {
    "Año": 1996,
    "Marca": "Jeep",
    "Modelo": "Grand Cherokee",
    "Descripción": "MUST SELL! air, moon roof, loaded",
    "Precio": 4799
  }
]
```

Pero, para evitar problemas al momentos hacer _programming_, conviene evitar el uso de "ñ" y "ó", caracteres incompatibles con la limitada caja de caracteres inglesa:

```
[
  {
    "year": 1997,
    "brand": "Ford",
    "model": "E350",
    "description": "ac, ABS, moon",
    "price": 3000
  },
  {
    "year": 1999,
    "brand": "Chevy",
    "model": "Venture",
    "description": "Extended Edition",
    "price": 4900
  },
  {
    "year": 1999,
    "brand": "Chevy",
    "model": "Venture",
    "description": "Extended Edition, Very Large",
    "price": 5000
  },
  {
    "year": 1996,
    "brand": "Jeep",
    "model": "Grand Cherokee",
    "description": "MUST SELL! air, moon roof, loaded",
    "price": 4799
  }
]
```

Para profundizar se recomienda consultar la página: [Trabajando con JSON en MDN](https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/JSON).

De tal página conviene tomar:

- JSON es sólo un formato de datos — contiene sólo propiedades, no métodos.

- JSON requiere usar comillas dobles para las cadenas y los nombres de propiedades. Las comillas simples no son válidas.

- Una coma o dos puntos mal ubicados pueden producir que un archivo JSON no funcione. Se debe ser cuidadoso para validar cualquier dato que se quiera utilizar (aunque los JSON generados por computador tienen menos probabilidades de tener errores, mientras el programa generador trabaje adecuadamente). Es posible validar JSON utilizando una aplicación como [JSONLint](https://jsonlint.com/).

- JSON puede tomar la forma de cualquier tipo de datos que sea válido para ser incluido en un JSON, no sólo arreglos u objetos. Así, por ejemplo, una cadena o un número único podrían ser objetos JSON válidos.

- A diferencia del código JavaScript en que las propiedades del objeto pueden no estar entre comillas, en JSON, sólo las cadenas entre comillas pueden ser utilizadas como propiedades.

- - - - - 


Ahora, si tenemos un JSON validado, podríamos utilizar los datos que nos ofrezca en una página web si es que la iniciamos con algo como lo que sigue: 

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Un fetch</title>
        <style>
            body { font-family: Helvetica, Arial, sans-serif; }
        </style>
    </head>
    <body>
        <h1>Hola mundo</h1>

        <!-- Este <ol> (lista ordenada) empieza vacío. Lo vamos a llenar con JavaScript una vez tengamos la respueta al fetch -->
        <ol id="instituciones"></ol>

        <script>
            // 1) Guardamos una referencia al elemento <ol> del DOM.

            const llenar = document.querySelector("#instituciones");

            // 2) La URL del "endpoint": el lugar de internet donde están los datos. En este caso, es una API que devuelve JSON.
            const URL = "…";

            // 3) fetch() hace una petición HTTP a esa URL.

            fetch(URL)
                // 4) Primer .then(): se ejecuta cuando el servidor responde
                .then((respuesta) => {
                    // 5) respuesta.ok es true solo si el código de estado HTTP
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }

                    // 6) respuesta.json() lee el cuerpo de la respuesta y lo convierte
                    return respuesta.json();
                })

                // 7) Segundo .then(): se ejecuta cuando ya tenemos los datos
                .then((datos) => {
                    // 8) Según cómo esté armada esta API, los registros vienen
                    var qs = datos.data;

                    // 9) console.log() no muestra nada en la página: aparece en la
                    console.log("Datos recibidos:", qs);

                    // 10) qs es un array. forEach() recorre cada elemento uno por uno.

                    qs.forEach((x) => {
                        // Nota: usar += con innerHTML dentro de un forEach funciona por ahora, pero en listas grandes es poco eficiente y seguro. 
                        llenar.innerHTML += `<li>${x.name}</li>`;
                    });
                })

                // 11) .catch(): atrapa CUALQUIER error que haya ocurrido en la cadena de arriba (fallo de red, respuesta.ok falso, JSON mal formado, etc.).
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            // RESUMEN del flujo:
            // fetch(URL)              -> pide los datos al servidor
            //   .then(respuesta)      -> llega la respuesta (aún no son los datos finales)
            //   .then(datos)          -> ya tenemos los datos listos para usar
            //   .catch(error)         -> si algo falló en cualquier paso anterior, cae aquí
        </script>
    </body>
</html>
```

Lo que queda por modificar son los puntos suspensivos, donde dice `const URL = "…";`. Para ello vamos a utilizar: 

- [Material en la Carpeta Drive del curso](https://docs.google.com/spreadsheets/d/1p8GCNRKneagede_DL0HkavLf8n6WXkYyFmHMM5jjPs8/copy)

- https://csvjson.com/csv2json

- https://myjson.online/

- - - - 


[clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md) ⇆ [clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md)
