# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 07 → 02 de octubre

## UNIDAD 2: Introducción a la estructura y captura de datos

### Introducción al desarrollo front-end: Captura e inyección dinámica de datos estructurados en interfaces HTML mediante `fetch` en JavaScript.

Hoy conectamos el diseño con el código interactivo. Comenzaremos a explorar las bases del desarrollo front-end, analizando cómo una estructura HTML básica puede adquirir dinamismo cuando las programadoras y los programadores consumen datos externos de forma asíncrona. Utilizaremos la función `fetch` en JavaScript para capturar los archivos de datos estructurados e inyectarlos de manera dinámica dentro de la interfaz. Al finalizar la sesión, se les entregará el enunciado de la segunda evaluación sumativa a todas y todos los estudiantes.

-----

### Presentando datos con HTML y (un `fetch` de) JavaScript

Vamos directo a la práctica. 

Corresponde a cada estudiante usar que ya pudo publicar en [myjson](https://myjson.online/) para reemplazar los puntos suspensivos (…) en el valor asignado a la `const URL`:

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ranking QS • Arte y Diseño • 2026</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet" />
        <style>
            /* Variables globales: si cambias algo aquí, cambia en todos los lugares donde se use esa variable */
            :root {
                /* Formas de definir colores (Hexadecimal, HSL, RGB, RGBA con A de Alpha, Nombrándolo) */
                --color-bg: #eaeaea;
                --color-bg-nota: hsl(30, 5%, 85%);
                --color-text: rgb(60, 60, 60);
                --color-text-dark: rgb(30, 30, 30);
                --color-text-light: rgba(90, 90, 90, 1);
                --color-border: silver;
                /* Tipografías: si la primera opción no existe, pasa a la siguiente */
                --font-sans: "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
                --font-serif: "Newsreader", Georgia, "Times New Roman", serif;
            }

            /* Se resetean TODOS los elementos (y sus pseudoelementos antes/después) para reiniciar márgenes y controlar el tamaño real de las cajas */
            *,
            *::before,
            *::after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            /* Base general de lo que se ve en el cuerpo de la página */
            body {
                font-family: var(--font-serif);
                color: var(--color-text);
                background: var(--color-bg);
                margin: 0 auto;
                padding: 1.5rem;
                line-height: 1.6;
                font-size: 1.2rem;
            }

            /* a de anchor: Enlaces (links) */
            a {
                color: var(--color-text-dark);
                text-decoration: underline;
                text-decoration-style: dotted;
                text-underline-offset: 3px;
                transition: all ease 0.5s;
            }

            /* Efecto al pasar el mouse sobre un enlace */
            a:hover {
                text-decoration-style: solid;
            }


            /* p (de párrafo) */
            p {
                margin-bottom: 1rem;
            }

            /* em (de emphasis) da énfasis semántico a una palabra/frase; por defecto, el navegador lo muestra en cursiva */
            em {
                font-weight: 500;
            }

            /* abbr (de abbreviation): siglas o abreviaturas; el atributo title muestra su significado al pasar el mouse */
            abbr {
                font-size: 0.85em; /* un poco más chica que el texto, como hacía <small> */
                text-decoration: none; /* el navegador la subraya punteada; la quitamos para no confundirla con los enlaces */
                cursor: help; /* el cursor avisa que hay una explicación disponible */
            }

            /* Listas desordenadas (las que llevan viñetas o "puntos", no números) */
            ul {
                list-style-position: inside;
            }
            ul li {
                margin-bottom: 0.5rem;
            }

            /* Contenedor principal: centra el contenido y le pone un ancho máximo para mantener un ancho de línea legible */
            .container {
                margin: 0 auto;
                width: 90%;
                max-width: 700px;
            }

            /* Títulos principales (del h1 al h6, no existen otros niveles) */
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: var(--font-sans);
                line-height: 1.2;
            }

            h1,
            h2,
            h3,
            h4 {
                font-weight: 700;
            }

            h5,
            h6 {
                font-weight: 400;
                text-align: center;
                color: var(--color-text-light);
            }

            h1 {
                font-size: calc(1.5rem + 2vw);
                text-align: center;
                margin-top: 10vh;
            }
            h2 {
                font-size: calc(1.5rem + 1.5vw);
                text-align: center;
                margin-bottom: 5vh;
            }
            h3 {
                font-size: 1.2rem;
                margin: 2rem 0 0.5rem 0;
            }

            /* Icono de maleta solo en el ÚLTIMO <h3> dentro de su contenedor (:last-of-type cuenta hermanos del mismo tag) */
            h3:last-of-type {
                text-indent: 1.5rem;
                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-luggage-fill" viewBox="0 0 16 16"><path d="M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h.5A1.5 1.5 0 0 1 8 6.5V7H7v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H4v1H2.5v.25a.75.75 0 0 1-1.5 0v-.335A1.5 1.5 0 0 1 0 13.5v-7A1.5 1.5 0 0 1 1.5 5H2zM3 5h2V2H3z"/><path d="M2.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m10 1v-.5A1.5 1.5 0 0 0 11 6h-1a1.5 1.5 0 0 0-1.5 1.5V8H8v8h5V8zM10 7h1a.5.5 0 0 1 .5.5V8h-2v-.5A.5.5 0 0 1 10 7M5 9.5A1.5 1.5 0 0 1 6.5 8H7v8h-.5A1.5 1.5 0 0 1 5 14.5zm9 6.5V8h.5A1.5 1.5 0 0 1 16 9.5v5a1.5 1.5 0 0 1-1.5 1.5z"/></svg>');
                background-repeat: no-repeat;
                background-size: 1rem 1rem;
            }

            h4 {
                font-size: 1.1rem;
                margin-top: 1.5rem;
            }

            /* Icono de trofeo solo en el ÚLTIMO <h4> dentro de su contenedor */
            h4:last-of-type {
                text-indent: 1.5rem;
                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/></svg>');
                background-repeat: no-repeat;
                background-size: 0.9rem;
                background-position: 0rem 0.15rem;
            }

            h5 {
                font-size: 0.9rem;
                margin-bottom: 0.5rem;
            }

            h5 a {
                font-weight: 600;
                color: var(--color-text-dark);
                text-decoration: none;
            }

            h5 a:hover {
                text-decoration: underline;
                text-decoration-style: dotted;
            }

            h6 {
                font-size: 0.8rem;
                margin-bottom: 3rem;
            }

            /* Estilos de tablas de datos */
            table {
                border-collapse: collapse;
                width: calc(100% + 1.5rem);
                margin: 0 -0.75rem 2.5rem -0.75rem;
                font-family: var(--font-sans);
                font-size: 85%;
                font-weight: 300;
            }

            tr,
            tr:hover {
                transition: background ease 0.4s;
            }

            /* Cambia el fondo de la fila cuando el usuario pasa el mouse por encima */
            tbody tr:hover {
                background: rgba(255, 255, 255, 0.5);
            }

            th {
                text-align: left;
                font-family: var(--font-sans);
                text-transform: uppercase;
                letter-spacing: 0.1em;
                font-size: 90%;
            }

            th,
            td {
                border-bottom: 1px solid var(--color-border);
                padding: 0.4rem 0.8rem;
            }

            /* Centra solo la primera columna en todas las tablas, EXCEPTO en la última tabla de la página */
            table:not(:last-of-type) th:nth-child(1),
            table:not(:last-of-type) td:nth-child(1) {
                text-align: center;
                padding: 0.4rem 0.2rem;
            }

            /* Le pone un borde superior únicamente a la última tabla de la página */
            table:last-of-type {
                border-top: 1px solid var(--color-border);
            }

            td span {
                font-size: 90%;
                color: rgba(0, 0, 0, 0.5);
            }

            /* Cuadro destacado para una nota importante */
            .nota {
                background: var(--color-bg-nota);
                border-left: 3px solid var(--color-border);
                padding: 0.7rem 0.5rem;
                padding-left: 0.75rem;
                font-size: 0.95rem;
                margin: 2rem -0.5rem;
                line-height: 1.3;
            }

            /* Lista de descripción (<dl>), usada frecuentemente para glosarios, fuentes o metadatos */
            dl {
                font-family: var(--font-sans);
                font-size: 80%;
                letter-spacing: 0.025rem;
                margin-bottom: 10vh;
            }

            /* Término o título de la descripción (<dt>) */
            dl dt {
                font-weight: 700;
            }

            /* Definición o detalle de la descripción (<dd>) */
            dl dd {
                font-size: 90%;
                color: var(--color-text-light);
                margin-top: 0.25rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            
            <h1>Ranking QS</h1>
            
            <h2>Las mejores universidades del mundo en Arte y Diseño</h2>
            
            <h5>Por <a href="">Nombre Apellido</a></h5>
            
            <h6>Publicado el viernes 2 de octubre, 2026 &nbsp;&nbsp; 6:00 p.m. GMT-3</h6>

            <p>El <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings by Subject</em> evalúa anualmente el desempeño académico por disciplinas específicas. Elaborado por la consultora británica <em>Quacquarelli Symonds</em> (<abbr title="Quacquarelli Symonds">QS</abbr>), el proyecto nació en 2004 en alianza con <em>Times Higher Education</em> (<abbr title="Times Higher Education">THE</abbr>) bajo el nombre <em><abbr title="Times Higher Education - Quacquarelli Symonds">THE-QS</abbr> World University Rankings</em>. Tras la separación de ambas entidades en 2009, <abbr title="Quacquarelli Symonds">QS</abbr> consolidó tanto su clasificación institucional general (<em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings</em>) como sus mediciones específicas por materias.</p>

            <!-- El año lo calcula JavaScript: cambia solo, sin editar el HTML -->
            <p>En la entrega correspondiente a Arte y Diseño <script>document.write(new Date().getFullYear())</script>, la evaluación abarca a más de 300 instituciones alrededor del mundo. A diferencia de otras disciplinas del ranking, en Arte y Diseño no se miden citas de investigación ni el <a href="https://uchile.cl/informacion-y-bibliotecas/ayudas-y-tutoriales/indice-h" target="_blank" rel="noopener">índice <abbr title="Hirsch">H</abbr></a>; la clasificación se apoya únicamente en dos dimensiones, una de reputación académica y otra de reputación en empleabilidad, con ambas reputaciones obtenidas de encuestas.</p>

            <h3>Claves de la edición 2026 para Arte y Diseño</h3>

            <ul>
                <li><em>Liderazgo especializado:</em> El Royal College of Art (<abbr title="Royal College of Art">RCA</abbr>, Reino Unido) ocupa el primer lugar mundial, seguido por la University of the Arts London (<abbr title="University of the Arts London">UAL</abbr>, también del Reino Unido).</li>
                <li><em>Presencia continental europea entre las 10 mejores:</em> El Politecnico di Milano (Italia) ocupa el puesto 7 y la Aalto University (Finlandia) el puesto 9, confirmando que la élite del ranking no se limita al Reino Unido.</li>
                <li><em>Metodología basada en reputación:</em> El puntaje de Arte y Diseño se construye exclusivamente con encuestas de reputación académica y de empleadores, sin componentes bibliométricos. Esto genera debate, ya que introduce una carga de subjetividad mayor que en otras disciplinas del ranking.</li>
            </ul>

            <h3>Distribución regional de las 100 mejores</h3>

            <h4>América</h4>
            <p>Instituciones en países americanos.</p>
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Institución</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody id="america"></tbody>
            </table>

            <h4>Europa</h4>
            <p>Instituciones en países europeos.</p>
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Institución</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody id="europa"></tbody>
            </table>

            <h4>Otros continentes</h4>
            <p>Instituciones en países de otros continentes.</p>
            <table>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Institución</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody id="otros"></tbody>
            </table>

            <h4>Resumen</h4>
            <p>Un conteo más visual de lo presentado arriba, con la distribución de las 100 mejores</p>
            <table>
                <tr>
                    <td>América</td>
                    <td id="puntos_americanos"></td>
                </tr>
                <tr>
                    <td>Europa</td>
                    <td id="puntos_europeos"></td>
                </tr>
                <tr>
                    <td>Resto del mundo</td>
                    <td id="puntos_otros"></td>
                </tr>
            </table>

            <h3>Oportunidades para estudiantes de la Universidad de Chile</h3>

            <p>Para la Carrera de Diseño de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile, la nómina de convenios vigentes incluye alternativas posicionadas entre las 100 mejores en Arte y Diseño según el Ranking QS:</p>

            <ul>
                <li><strong>Politecnico di Milano (polimi; Italia):</strong> Es la principal opción europea del ranking con convenio directo disponible.</li>
                <li><strong>Universidade de São Paulo (Brasil):</strong> Referente regional destacado en la clasificación mundial de Arte y Diseño.</li>
                <li><strong>Universidad de Buenos Aires (<abbr title="Universidad de Buenos Aires">UBA</abbr>; Argentina):</strong> Una de las instituciones históricas más prominentes de Sudamérica dentro del índice.</li>
                <li><strong>Tecnológico de Monterrey (Tec; México):</strong> Presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.</li>
                <li><strong>Universidad Nacional Autónoma de México (<abbr title="Universidad Nacional Autónoma de México">UNAM</abbr>; México):</strong> Una de las macro-universidades más reconocidas de la región en artes y humanidades.</li>
            </ul>

            <div class="nota"><strong>Nota:</strong> La disponibilidad de cupos, requisitos de idioma y llamados a postulación deben verificarse cada año, así como el resultado del Ranking QS.</div>

            <dl>
                <dt>Fuentes</dt>
                <dd>
                    <strong>Datos:</strong> Tomados el 21 de septiembre de 2026 desde <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener" >QS World University Rankings for Art and Design</a>.
                </dd>
                <dd>
                    <strong>Procesamiento:</strong> Datos estructurados y servidos en JSON mediante <a href="https://myjson.online/" target="_blank" rel="noopener">myJson</a> y consulta asíncrona (<a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener">Fetch API</a>).
                </dd>
                <dd>
                    <strong>Referente:</strong> Estructura basada en el reportaje <a href="https://www.reuters.com/graphics/NEPAL-FLOODS/HYDROPOWER/jnpwoymwkpw/" target="_blank" rel="noopener" >Nepal's tunnel maze that trapped hydropower workers</a> de <a href="https://www.reuters.com/authors/vijdan-mohammad-kawoosa/" target="_blank" rel="noopener">Vijdan Mohammad Kawoosa</a> para <a href="https://www.reuters.com/graphics/" target="_blank" rel="noopener">Reuters Graphics</a>, lo que implica adoptar un estándar global de validación visual y periodística aportado por una agencia internacional de noticias.
                </dd>
                <dd>
                    <strong>Contexto:</strong> Proyecto desarrollado como ejercicio práctico para la asignatura <a href="https://github.com/profesorfaco/troncal" target="_blank" rel="noopener">Diseño y Visualización de Información</a>.
                </dd>
                <dd>
                    <strong>Oportunidades para estudiantes:</strong> Se aprovecha la nómina completa de intercambios recibida por la Jefatura de Carrera el 7 de septiembre de 2026 desde la Dirección Académica y de Relaciones Internacionales de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile.
                </dd>
            </dl>
        </div>

        <script>
            // Referencias a los tres <tbody> vacíos del HTML, donde iremos insertando filas
            const tbodyAmerica = document.querySelector("#america");
            const tbodyEuropa = document.querySelector("#europa");
            const tbodyOtros = document.querySelector("#otros");

            // Dirección desde donde vamos a pedir los datos (myJson).
            const ENDPOINT = "…";

            // Listas de países para clasificar cada universidad por continente.
            // "some()" revisará, dentro del forEach, si AL MENOS UNO de estos strings aparece en u.location
            const paisesAmerica = ["Argentina", "Brazil", "Canada", "Chile", "Colombia", "Mexico", "United States"];
            const paisesEuropa = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Ireland", "Italy", "Netherlands", "Sweden", "Switzerland", "United Kingdom"];

            // Contadores para el resumen final (cuántas universidades cayeron en cada grupo)
            var cuenta_america = 0;
            var cuenta_europa = 0;
            var cuenta_otros = 0;

            // 1) fetch(ENDPOINT) hace la petición y devuelve una PROMESA:
            //    algo que "a futuro" se resolverá con la respuesta del servidor.
            fetch(ENDPOINT)
                // 2) Cuando la promesa se resuelve, entramos a este primer .then()
                //    con la respuesta "cruda" (todavía no es el JSON, es el objeto Response)
                .then((respuesta) => {
                    // .ok es true si el status HTTP está entre 200 y 299 (todo bien)
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    // .json() también devuelve una promesa: hay que leer/parsear el body
                    return respuesta.json();
                })
                // 3) Este segundo .then() recibe los datos ya convertidos en objeto/array JS
                .then((datos) => {
                    const universidades = datos.data;
                    console.log("Datos recibidos:", universidades); // útil para revisar la forma de los datos

                    // 4) Recorremos cada universidad y decidimos en qué tabla va
                    universidades.forEach((u) => {
                        const esAmericana = paisesAmerica.some((pais) => u.location.includes(pais));
                        const esEuropea = paisesEuropa.some((pais) => u.location.includes(pais));

                        // location viene como "Ciudad, País": nos quedamos con lo que sigue después de la coma
                        const pais = u.location.split(", ").pop();

                        // 5) Según la clasificación, agregamos una fila (<tr>) al <tbody> que corresponde.
                        //    "+=" con innerHTML AGREGA la fila nueva sin borrar las anteriores.
                        if (esAmericana) {
                            tbodyAmerica.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                            cuenta_america = cuenta_america + 1;
                        } else if (esEuropea) {
                            tbodyEuropa.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                            cuenta_europa = cuenta_europa + 1;
                        } else {
                            tbodyOtros.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                            cuenta_otros = cuenta_otros + 1;
                        }
                    });

                    // 6) Con los conteos finales, llenamos la tabla de resumen
                    document.querySelector("#puntos_americanos").innerHTML = bolitas(cuenta_america);
                    document.querySelector("#puntos_europeos").innerHTML = bolitas(cuenta_europa);
                    document.querySelector("#puntos_otros").innerHTML = bolitas(cuenta_otros);
                })
                // 7) .catch() atrapa cualquier error de la cadena de arriba (red caída, JSON inválido, etc.)
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            // 0) Esta es una función para mostrar un número de bolitas correspondientes al valor que reemplace x. Por ejemplo: bolitas(3) => " ● ● ● "
            function bolitas(x) {
                var visual = "";
                for (let i = 0; i < x; i++) {
                    visual += " ● ";
                }
                return "<span>" + visual + "</span>";
            }
        </script>
    </body>
</html>
```

- - - - - - - - -

Partamos por comprender el CSS, para después avanzar a otras cosas más complejas: 

`:root {}`: Es el espacio ideal para definir variables CSS (propiedades personalizadas). Centralizar aquí valores repetitivos como colores o tipografías permite realizar cambios globales instantáneos —como activar un modo oscuro— y garantiza la escalabilidad del proyecto.

`*, *::before, *::after {…}`: Es el borrón y cuenta nueva que fuerza al navegador a abandonar sus reglas arbitrarias en favor de un sistema de medidas uniforme. Al aplicar `border-box`, neutralizamos el modelo de caja por defecto (donde el padding y el border añadían tamaño extra), estableciendo un entorno de renderizado predecible en toda la interfaz.

`background-image: url('data:image/svg+xml;utf8,<svg>…</svg>')`: Permite incrustar iconos o formas directamente en el CSS sin depender de archivos externos. Para que funcione, el código SVG (como los de [Bootstrap Icons](https://icons.getbootstrap.com/icons/search-heart-fill/)) debe ser procesado por un [codificador URL (URL encoder)](https://www.svgbackgrounds.com/tools/svg-to-css/) para "escapar" caracteres especiales. Por ejemplo, un color #ffffff debe convertirse en %23ffffff para que el navegador no lo interprete como un error de sintaxis.

`:last-of-type` y `:not(:last-of-type)`: Utilizar `:last-of-type` permite seleccionar exclusivamente el último elemento de su tipo en un contenedor, mientras que  `:not(:last-of-type)` permite aplicar estilos a todos los elementos salvo al final.

_ _ _ _ 

[clase-06](https://github.com/profesorfaco/troncal/blob/main/clase-06/README.md) ⇆ [clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md)
