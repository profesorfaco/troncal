# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 06 → 23 de septiembre

Ya adelantamos algo del uso de GitHub, quedando informadas las siguientes cuentas:

|	N°	|	Nombre	|	Cuenta en GitHub	|	Grupo	|
|:------:|:-------------------------|:-------------------------|:------:|
|	1	|	Sofía Aliaga	|	https://github.com/SofiaAliaga	|	3	|
|	2	|	Constanza Astudillo	|	https://github.com/cinnamonrolllabubu	|	3	|
|	3	|	Sophia Bahamonde	|	https://github.com/sophibahamonde	|	4	|
|	4	|	Irenko Blasco	|	https://github.com/Irenk0	|	1	|
|	5	|	Nicole Cerpa	|	https://github.com/nicoc1404	|	1	|
|	6	|	Matias Chavez	|	https://github.com/macc965	|	1	|
|	7	|	Anyela Cid	|	https://github.com/anyelacid	|	4	|
|	8	|	José Cortez 	|	…	|	4	|
|	9	|	Valentina Cristi	|	https://github.com/Balee10	|	4	|
|	10	|	Damien Czugaj	|	…	|	…	|
|	11	|	Alberto Gallegos	|	https://github.com/Alberto101102	|	1	|
|	12	|	Constanza Garrido	|	https://github.com/NikoGarrido	|	5	|
|	13	|	Carla González	|	…	|	3	|
|	14	|	Pía Muñoz	|	https://github.com/piamunoz	|	3	|
|	15	|	Martina Muñoz	|	https://github.com/lionmarty	|	2	|
|	16	|	Belén  Porras	|	…	|	2	|
|	17	|	Macarena Torres	|	https://github.com/MacNCheese03	|	5	|
|	18	|	Paz Valenzuela	|	…	|	2	|
|	19	|	Francys Vásquez	|	https://github.com/Francys-vs	|	5	|

En sus cuentas publicaron un [primer-ejercicio](https://profesorfaco.github.io/primer-ejercicio/), basado en datos de los trabajos desarrollado por los 5 grupos hasta la [clase-05](https://github.com/profesorfaco/troncal/tree/main/clase-05).

- - - - - - - 

### Recogiendo y compartiendo datos: Desde las hojas de cálculo al CSV y JSON

Ahora podemos retomar la explicación respecto de la estructura del JSON consultado considerando, primero, que lo que cuenta, cuenta. Y cómo se registre y comparta lo que se ha contado es el primer paso para evitar la propagación de información falsa.

En la primera clase recordamos y/o aprendimos algunas funciones útiles en las Hojas de cálculo. 

Desde cualquier Hoja de cálculo podemos obtener un [CSV](https://www.adobe.com/es/acrobat/resources/document-files/text-files/csv-file.html), sigla de Comma Separated Values (Valores separados por comas). 

Esto porque **CSV** está entre las opciones de "exportar como…" para cada Hoja de Cálculo. En el ejemplo del artículo de Wikipedia para [Valores separados por comas](https://es.wikipedia.org/wiki/Valores_separados_por_comas), tenemos los siguientes datos:

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

Noten como en los casos de `Extended Edition, Very Large` y `MUST SELL! air, moon roof, loaded` se usan las comillas, para que la coma entre las plabras no sea considerada como nueva celda.

Si nos quedamos con la primera fila (de arriba hacia abajo) podemos notar su función de encabezado de columna: Le da sentido a lo que sigue abajo, sean años, marcas, modelos, descripciones o precios.

Desde un CSV podemos pasar a JSON con "trampita": https://csvjson.com/csv2json 

[JSON](https://www.json.org/json-es.html) es sigla de JavaScript Object Notation (Notación de Objetos en JavaScript). Ambos son formatos de texto ligero que nos permiten intercambiar datos. 

Manteniendo la idea de tener algo que de sentido al dato que se comparte, en el siguiente **JSON** bastaría con mirar a la izquierda para ver el índice entre comillas, antes de los dos puntos, para saber de qué se trata cada cosa:

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


Conviene saber algo de la notación de JavaScript par poder comprender la estructura más allá del par de índice y dato contenido: 

- https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


Y conviene cuidarnos de problemas en el intercambio de datos ajustándonos a una importante limitación que nos ponen todos los lenguajes de programación escritos en inglés: ¡No saben cómo tratar con tildes ni acentos!

O sea, entre los índices no conviene tener `Año`, por su `ñ`, ni `Descripción`, por su `ó`:

```
[
    {
        "year": 1997,
        "Marca": "Ford",
        "Modelo": "E350",
        "description": "ac, ABS, moon",
        "Precio": 3000
    },
    { 
      "year": 1999, 
      "Marca": "Chevy", 
      "Modelo": "Venture", 
      "description": "Extended Edition", 
      "Precio": 4900 
    },
    { 
      "year": 1999, 
      "Marca": "Chevy", 
      "Modelo": "Venture", 
      "description": "Extended Edition, Very Large", 
      "Precio": 5000 
    },
    { 
      "year": 1996, 
      "Marca": "Jeep", 
      "Modelo": "Grand Cherokee", 
      "description": "MUST SELL! air, moon roof, loaded", 
      "Precio": 4799
    }
]
```

Luego, sólo para mantener la lógica, conviene tener cada índice con la misma caja (sea baja o alta; forma clásica de referirse a la caja de tipografías minúsculas de abajo y mayúsculas de arriba), y en inglés:

```
[
    {
        "year": 1997,
        "manufacturer": "Ford",
        "model": "E350",
        "description": "ac, ABS, moon",
        "price": 3000
    },
    { 
      "year": 1999, 
      "manufacturer": "Chevy", 
      "model": "Venture", 
      "description": "Extended Edition", 
      "price": 4900 
    },
    { 
      "year": 1999, 
      "manufacturer": "Chevy", 
      "model": "Venture", 
      "description": "Extended Edition, Very Large", 
      "price": 5000 
    },
    { 
      "year": 1996, 
      "manufacturer": "Jeep", 
      "model": "Grand Cherokee", 
      "description": "MUST SELL! air, moon roof, loaded", 
      "price": 4799
    }
]
```

Para no quedar cortos de formatos ligeros para el intercambio de datos que son denominados por sus siglas descriptivas, corresponde referir al [XML](https://www.adobe.com/es/acrobat/resources/document-files/text-files/xml-file.html), el *eXtensible Markup Language* que, hoy por hoy, es más utilizado en el intercambio de metadatos que datos:

```
<?xml version="1.0" encoding="UTF-8" ?>
 <root>
     <item>
         <year>1997</year>
         <manufacturer>Ford</manufacturer>
         <model>E350</model>
         <description>ac, ABS, moon</description>
         <price>3000</price>
     </item>
     <item>
         <year>1999</year>
         <manufacturer>Chevy</manufacturer>
         <model>Venture</model>
         <description>Extended Edition</description>
         <price>4900</price>
     </item>
     <item>
         <year>1999</year>
         <manufacturer>Chevy</manufacturer>
         <model>Venture</model>
         <description>Extended Edition, Very Large</description>
         <price>5000</price>
     </item>
     <item>
         <year>1996</year>
         <manufacturer>Jeep</manufacturer>
         <model>Grand Cherokee</model>
         <description>MUST SELL! air, moon roof, loaded</description>
         <price>4799</price>
     </item>
 </root>
```

Convendría recortar este `<markup>…</markup>` al momento de volver a trabajar con `HTML` y comenzar a trabajar con `SVG`.

- - - - 


[clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md) ⇆ [clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md)
