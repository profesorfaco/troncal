# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 06 → 15 de abril

### CSV y JSON

[CSV](https://www.adobe.com/es/acrobat/resources/document-files/text-files/csv-file.html) es sigla de Comma Separated Values (Valores separados por comas). [JSON](https://www.json.org/json-es.html) es sigla de JavaScript Object Notation (Notación de Objetos en JavaScript). Ambos son formatos de texto ligero que nos permiten intercambiar datos. Como ellos es [XML](https://www.adobe.com/es/acrobat/resources/document-files/text-files/xml-file.html), sigla de eXtensible Markup Language, ya más utilizado en el intercambio de metadatos. 

**CSV** resulta de exportar los datos de una Tabla, Hoja de Cálculo o Planilla de Excel. En el ejemplo del artículo de Wikipedia para [Valores separados por comas](https://es.wikipedia.org/wiki/Valores_separados_por_comas), tenemos los siguientes datos:

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

Pueden ver un ejemplo de CSV, en bruto, aquí: https://raw.githubusercontent.com/profesorfaco/troncal/refs/heads/main/clase-06/titulos.csv

El mismo ejemplo, preparado para su visualización en GitHub: https://github.com/profesorfaco/troncal/blob/main/clase-06/titulos.csv

Y documento que exporté como CSV es este: https://docs.google.com/spreadsheets/d/1vdA3KpFNTVzDSN6wLYAh8Tq3BAzPGqn-t6NY9NH8tLA/edit?usp=drive_link

Desde un CSV podemos pasar a JSON con "trampita": https://csvjson.com/csv2json 

Manteniendo la idea de tener algo que de sentido al dato que se comparte, podemos conectar con **JSON**, donde no tenemos que volver a cada rato al tope de un documento, sino que basta mirar a la izquierda para ver el índice entre comillas, antes de los dos puntos, para saber de qué se trata cada cosa:

```
[
    {
        "profe": "Domínguez González, Pablo",
        "guiades": "?",
        "titulades": 25,
    },
    {
        "profe": "Ode Saleh, Verónica",
        "guiades": "?",
        "titulades": 15,
    },
    {
        "profe": "Jacob Dazarola, Rubén",
        "guiades": "?",
        "titulades": 13,
    }
]
```

Y ahora completemos los titulades colaborando en este documento con consultas a UCampus: https://docs.google.com/spreadsheets/d/1820xdTbmCmXQRj_k2bg2PamTkPxNoZWrSypRGWyV7so/edit?usp=sharing

Obviamente que correspode saber algo de la notación de JavaScript par poder comprender la estructura más allá del par de índice y dato contenido: 

- https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

_ _ _ _ 

[clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md) ⇆ [clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md)
