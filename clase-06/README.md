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

Y un ejercicio, sin asustarse: 

```

<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Diseño y visualización de información</title>
    <style>
      *{ margin:0; padding:0;}
      :root{ --naranjita:#faf1f0; --naranja:#E64A19; --naranjota:#D32F2F; --gris:#7D7373;}
      a{color:var(--naranja); transform: color ease .4s;}
      a:hover{color:var(--naranjota); transform: color ease .4s;}
      html{ font-family: Helvetica, Arial, sans-serif;  background:#fafafa; font-size:0.9rem; text-align: center; }
      header, main{ text-align: left; }
      header{ width: min(86%, 700px); margin:0 auto 2% auto; }
      main{width:92%; margin:0 auto;}
      header h1{ margin:10% 0 5% 0; text-align: center; font-weight: normal; font-size:calc(1.1rem + 1.1vw); }
      header p{ line-height: 1.5; margin-bottom:2vh; text-align: justify; text-justify: inter-character; }
      header p em{ font-style:normal; font-weight: bold; }
      main article{box-shadow: 0 0 5px #eee; border-radius: 4px;}
      footer{padding:3% 15%; clear:both;}
      footer p{text-align: center; color:var(--gris)}
      footer p a{color:#635b5b; text-decoration: none}
      article{float:left; margin:1%; padding:2% 1% 1% 1%; width:21%; background:#fff; text-align: center;}
      @media (orientation: portrait) {
        article{width:46%; font-size:90%}
      }
    </style>
  </head>
  <body>
    <header>
      <h1>¿Qué porcentaje de inscripciones en Proyecto de Título II ha aprobado Examen de Título?</h1>
      <p><em>Los datos de <a href="https://github.com/profesorfaco/troncal/blob/main/clase-06/titulos.csv" target="_blank">209 Exámenes de Título aprobados</a> se cruzan con algunos datos disponibles en <a href="https://ucampus.uchile.cl/" target="_blank">UCampus</a></em>, la Plataforma de Gestión Curricular y Docente de la Universidad de Chile. En esta Plataforma se cuentan "ocupados" en distintas secciones de Proyecto de Título II, desde el segundo semestre de 2021 hasta el segundo semestre de 2024.</p> 
      <p>Cada "ocupado" corresponde a una inscripción en una misma asignatura que puede tener distintas secciones a cargo de distintos(as) Profesores(as) Guía. Contar "ocupados" en las distintas secciones de Proyecto de Título II es lo mismo que contar inscripciones en la asignatura.</p>
      <p><em>Del cruce de los datos de 209 Exámenes de Título aprobados y el conteo de <span id="total"></span> "ocupados", resulta que el porcentaje de inscripciones en Proyecto de Título II que ha aprobado Examen de Título se aproxima al <span id="parte"></span>%</em>.</p>
      <p>Para poder revisar la relación entre aprobados e inscritos por Profesor(a) Guía en Proyecto de Título II, se presentan los siguientes porcentajes aproximados:</p>
    </header>
    <main></main>
    <footer>
      <p><small><a href="https://github.com/profesorfaco/troncal" target="_blank">Diseño y visualización de información</a> | Este ejercicio, preparado por el Prof. <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://github.com/profesorfaco">Felipe Cortez</a>, es publicado bajo licencia <a href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">CC BY-NC 4.0</a></small></p>
</small></p>
    </footer>
  <script>
    const alla = document.querySelector("main");
    const numero = document.querySelector("#total");
    const porcentaje = document.querySelector("#parte");
    async function datos() {
      const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/troncal/refs/heads/main/clase-06/datos-durisimos.json");
      const data = await consulta.json();
      console.log(data);
      var total = 0;
      data.forEach((d)=>{
      alla.innerHTML += `
      <article>
        <p>${d.profe}</p>
        <svg width="100%" height="100%" viewBox="0 0 42 42"><circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranjita)" stroke-width="2"></circle><circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranja)" stroke-width="2" stroke-dasharray="${d.porcentajes} ${100-d.porcentajes}" stroke-dashoffset="25"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="7" ${color(d.porcentajes)}>${d.porcentajes}%</text><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="2" ${color(d.porcentajes)}>${d.titulades} de ${d.guiades}</text></svg>
      </article>`;
      total = total + d.guiades;
      });
      console.log(total);
      numero.innerHTML = total;
      porcentaje.innerHTML = Math.round((209*100)/total);
    }
    datos().catch((error) => console.error(error));
    function color(n){
      var texto = '';
      if(n >= 40){
        texto = 'fill="#000"';
      } else {
        texto = 'fill="var(--gris)"'
      }
      return texto;

    }
    </script>
  </body>
</html>
```

_ _ _ _ 

[clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md) ⇆ [clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md)
