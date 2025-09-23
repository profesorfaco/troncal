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
|	8	|	José Cortez 	|	https://github.com/marcedzgn	|	4	|
|	9	|	Valentina Cristi	|	https://github.com/Balee10	|	4	|
|	10	|	Damien Czugaj	|	…	|	…	|
|	11	|	Alberto Gallegos	|	https://github.com/Alberto101102	|	1	|
|	12	|	Constanza Garrido	|	https://github.com/NikoGarrido	|	5	|
|	13	|	Carla González	|	https://github.com/carlagonzalezv-del	|	3	|
|	14	|	Pía Muñoz	|	https://github.com/piamunoz	|	3	|
|	15	|	Martina Muñoz	|	https://github.com/lionmarty	|	2	|
|	16	|	Belén  Porras	|	…	|	2	|
|	17	|	Macarena Torres	|	https://github.com/MacNCheese03	|	5	|
|	18	|	Paz Valenzuela	|	…	|	2	|
|	19	|	Francys Vásquez	|	https://github.com/Francys-vs	|	5	|

- - - - - - - 

En sus cuentas publicaron un [primer-ejercicio](https://profesorfaco.github.io/primer-ejercicio/), basado en los siguientes datos https://raw.githubusercontent.com/profesorfaco/datos/refs/heads/main/datos.json 

El mismo ejercicio puede ser modificado si sólo modificamos el código fuente del `index.html` que ya subieron por lo que sigue: 

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>Trabajando con datos</title>
        <meta name="description" content="Partiendo con el troncal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            * {margin: 0; padding: 0;}
            body {font-family: monospace; color:#333; background:#fafafa; text-align: center; line-height: 1.4;}
            a{color:#222}
            a:hover{color:#000; text-decoration: none;}
            main {width: min(800px, 90%); margin:0 auto; padding: 5%; text-align: left;}
            main > div#aqui > div {margin: 1rem 0; padding: 1rem; border: 1px solid black; background:white;}
            p:first-child{margin-bottom:1rem;}
            img, svg{width:1rem; height:1rem; border-radius: 50%; margin-bottom:-0.25rem; margin-left:0.5rem;}
        </style>
    </head>
    <body>
        <svg xmlns="http://www.w3.org/2000/svg" style="display:none;">
            <symbol id="circulo" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="silver"/></symbol>
        </svg>
        <main>
            <h1>Hola mundo!</h1>
            <div id="aqui"></div>
        </main>
        <script>
            const donde = document.querySelector("#aqui");
            async function datos(raw) {
                let consulta = await fetch(raw);
                let data = await consulta.json();
                console.log(data);
                data.forEach((x) => {
                    donde.innerHTML += `<div><p>El grupo ${x.grupo}, con ${x.integrantes.length} integrantes, hizo este <a href="${x.miro}" target="_blank">tablero en miro</a>. También presentó este <a href="${x.pdf}" target="_blank">trabajo escrito</a>, con su <a href="${x.algor}" target="_blank">resumen en Algor</a>.</p><p><small>Grupo compuesto por ${integrantes(x.integrantes)}<small></p></div>`;
                });
            }
            datos("https://raw.githubusercontent.com/profesorfaco/datos/refs/heads/main/datos.json").catch((error) => console.error(error));

            function integrantes(dato) {
                let x = "";
                dato.forEach((d, i) => {
                    if (i == dato.length - 1) {
                        if(d.github.length > 1){
                            x += `<img src="${d.avatar_url}"> <a href="${d.github}" target="_blank"> ${d.nombre}</a>.`;
                        } else {
                            x += `<svg><use href="#circulo"></use></svg> ${d.nombre}.`;
                        }
                    } else {
                        if(d.github.length > 1){
                            x += `<img src="${d.avatar_url}"> <a href="${d.github}" target="_blank">${d.nombre}</a> + `;
                        } else {
                            x += `<svg><use href="#circulo"></use></svg> ${d.nombre} + `;
                        }                    }
                });
                return x;
            }
        </script>
    </body>
</html>
```

Pero antes de explicar este código fuente, conviene tener mayor claridad respecto de `CSV`, `JSON` y `XML`.

- - - - - - - 

### Recogiendo y compartiendo datos: Desde las hojas de cálculo al CSV y JSON

Ahora podemos retomar la explicación respecto de la estructura del JSON consultado considerando, primero, que lo que cuenta, cuenta. Y cómo se registre y comparta lo que se ha contado es el primer paso para evitar la propagación de información falsa.

En la [primera clase](https://github.com/profesorfaco/troncal/blob/main/clase-01/README.md) recordamos y/o aprendimos algunas funciones útiles en las Hojas de cálculo. 

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

Para ir a buscar el JSON que ya dejamos en nuestro repositorio recién creado: 

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>Trabajando solit@ con datos </title>
        <meta name="description" content="Partiendo con el troncal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
            * {margin: 0; padding: 0;}
            body {font-family: monospace; color:#333; background:#fafafa; text-align: center; line-height: 1.4;}
            a{color:#222}
            a:hover{color:#000; text-decoration: none;}
            main {width: min(800px, 90%); margin:0 auto; padding: 5%; text-align: left;}
            main > div#aqui > div {margin: 1rem 0; padding: 1rem; border: 1px solid black; background:white;}
            p:first-child{margin-bottom:1rem;}
            img, svg{width:1rem; height:1rem; border-radius: 50%; margin-bottom:-0.25rem; margin-left:0.5rem;}
        </style>
    </head>
    <body>
        <main>
            <h1>Hola mundo!</h1>
        </main>
        <script>
            async function datos(raw) {
                let consulta = await fetch(raw);
                let data = await consulta.json();
                console.log(data);
                //Asómese a la Consola de JavaScript de su navegador
            }
            datos("…").catch((error) => console.error(error));

        </script>
    </body>
</html>
```

- - - - 


[clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md) ⇆ [clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md)
