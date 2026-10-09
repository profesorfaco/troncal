# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 08 → 09 de octubre

## UNIDAD 2: Introducción a la estructura y captura de datos

### **Evaluación Sumativa 2 (Individual - 20%):** Encargo práctico de resolución autónoma en sala de laboratorio.

Corresponde enfrentar la primera evaluación práctica de manera estrictamente individual y en tiempo real, utilizando las estaciones de trabajo del laboratorio. ~~Cada estudiante recibirá un conjunto de datos y un requerimiento técnico específico, debiendo demostrar su capacidad para estructurar una interfaz HTML y automatizar el consumo dinámico de datos. ~~ Deberán resolver el encargo de manera estrictamente individual porque la sesión no contempla la asistencia del profesor.

~~Comenzando la clase se creará~~ Se ha creado una [**Tarea en U-Cursos**](https://www.u-cursos.cl/fau/2026/2/AUD5V027/1/tareas/detalle?id=947905). En la tarea tendrán que ingresar la dirección de un repositorio que crearán para presentar la prueba. 

~~También, comenzando la clase, se pegará en lo que sigue un listado de instrucciones; por el cumplimiento de cada instrucción se irán sumando puntos. Toda instrucción se relacionará con lo ya presentado o comentado.~~

#### Lo primero:

Crear un repositorio en GitHub para la entrega y calificación de este trabajo. Activar, de inmediato, GitHub Pages (recuerde las 2 tuercas).

Ingresar la URL donde se visualizará su página web en la **Tarea en U-Cursos** que se cerrará a las 15:30 hrs.

Resolviendo lo recién indicado, junto con el trabajo de clases 6 y 7, cada estudiante ya cuenta con 1,0 base en su calificación. En la pauta que sigue se indica cómo agregar 6,0 a su 1,0, para sumar 7,0.

---

#### La pauta de evaluación / instrucciones del trabajo en clase, con lo que corresponde resolver hasta las 18:15 hrs.

| Instrucción | Puntaje |
| --- | --- |
| Use el código fuente que encontrará debajo de esta tabla | 1,0 |
| Reemplace el valor de la constante `ENDPOINT` por la URL de un JSON publicado en su cuenta de [myJSON](https://myjson.online/) [0,5] e ingrese en dicho JSON las dos instituciones indicadas más abajo del código fuente [0,5]. La condición de autoría es estricta: La URL del JSON debe ser única para cada estudiante. Si dos o más entregas comparten la misma URL de myJSON, este ítem y todos los que siguen se evalúan con 0 para las partes involucradas (quien copia y quien comparte) | 1,0 |
| Evite errores sintácticos o de formato en el ingreso de las 2 instituciones al JSON propio, asegurando el despliegue correcto de las instituciones correspondientes en cada una de las tres tablas | 0,25 |
| Divida el código fuente en 3 archivos: `index.html`, `style.css` y `script.js` [0,5], asegurando que su vinculación funcione cuando suba todo a GitHub con los mismos nombres indicados [0,5] | 1,0 |
| En el título de quinto nivel, reemplace Nombre y Apellido por los suyos [0,25], y vincule correctamente a su cuenta de GitHub [0,25] | 0,5 |
| En la lista sin numerar que está bajo el subtítulo de *Claves de la edición 2026 para Arte y Diseño*, agregue un tercer ítem sobre el caso chileno que desplace al actual tercero (*Metodología basada en reputación*) al cuarto lugar. El nuevo punto debe destacar que solo 3 instituciones chilenas figuran en la medición. No limite el ítem a los datos; considere que *lo que se cuenta, cuenta* frente a una [Latinoamérica con sólo 24 instituciones de 6 países](https://www.topuniversities.com/university-subject-rankings/art-design?region=Latin%20America&countries=mx%2Ccl%2Cbr%2Cco%2Car%2Cpe), mientras [*United Kingdom* presenta 34](https://www.topuniversities.com/university-subject-rankings/art-design?items_per_page=50&region=Europe&countries=gb). La etiqueta unificada de *UK*, que es referente del centro del mundo cartográfico, opera como un bloque homogéneo que infla la representatividad central de la *metrópoli*, difuminando las tensiones identitarias entre sus naciones constitutivas y acentuando la brecha de visibilidad frente a nuestra región | 0,25 |
| Despliegue, en la tabla correspondiente a América, las 3 instituciones chilenas en el ranking (PUC, UDD y UCH) | 0,25 |
| En la función de javascript de `bolitas()`, cambie el despliegue de cada `●` por un `span` que tenga de fondo un pictograma tomado de [Bootstrap Icons](https://icons.getbootstrap.com/), que actúe como unidad discreta visualmente adecuada para representar 1 institución que ofrece Arte y Diseño | 0,5 |
| En el estilo CSS modifique la selección tipográfica apoyada en Google Fonts, dejando para los títulos una alternativa *sans-serif* distinta de *Source Sans 3* [0,25] y para los textos una *serif* distinta de *Newsreader* [0,25] | 0,5 |
| En el último de los títulos de tercer nivel cambie el pictograma definido en CSS | 0,25 |

#### El código fuente

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
            :root {
                --color-bg: #eaeaea;
                --color-bg-nota: hsl(30, 5%, 85%);
                --color-text: rgb(60, 60, 60);
                --color-text-dark: rgb(30, 30, 30);
                --color-text-light: rgba(90, 90, 90, 1);
                --color-border: silver;
                --font-sans: "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif;
                --font-serif: "Newsreader", Georgia, "Times New Roman", serif;
            }

            *,
            *::before,
            *::after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                font-family: var(--font-serif);
                color: var(--color-text);
                background: var(--color-bg);
                margin: 0 auto;
                padding: 1.5rem;
                line-height: 1.6;
                font-size: 1.2rem;
            }

            a {
                color: var(--color-text-dark);
                text-decoration: underline;
                text-decoration-style: dotted;
                text-underline-offset: 3px;
                transition: all ease 0.5s;
            }

            a:hover {
                text-decoration-style: solid;
            }

            p {
                margin-bottom: 1rem;
            }

            em {
                font-weight: 500;
            }

            abbr {
                font-size: 0.85em;
                text-decoration: none;
                cursor: help;
            }

            ul {
                list-style-position: inside;
            }
            ul li {
                margin-bottom: 0.5rem;
            }

            .container {
                margin: 0 auto;
                width: 90%;
                max-width: 700px;
            }

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

            h4:last-of-type {
                text-indent: 1.5rem;
                background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pie-chart-fill" viewBox="0 0 16 16"><path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015"/></svg>');
                background-repeat: no-repeat;
                background-size: 0.9rem;
                background-position: 0rem 0.05rem;
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

            table:not(:last-of-type) th:nth-child(1),
            table:not(:last-of-type) td:nth-child(1) {
                text-align: center;
                padding: 0.4rem 0.2rem;
            }

            table:last-of-type {
                border-top: 1px solid var(--color-border);
            }

            td span {
                font-size: 90%;
                color: rgba(0, 0, 0, 0.5);
            }

            .nota {
                background: var(--color-bg-nota);
                border-left: 3px solid var(--color-border);
                padding: 0.7rem 0.5rem;
                padding-left: 0.75rem;
                font-size: 0.95rem;
                margin: 2rem -0.5rem;
                line-height: 1.3;
            }

            .nota span {
                font-weight: 700;
            }

            dl {
                font-family: var(--font-sans);
                font-size: 80%;
                letter-spacing: 0.025rem;
                margin-bottom: 10vh;
            }

            dl dt {
                font-weight: 700;
            }

            dl dd {
                font-size: 90%;
                color: var(--color-text-light);
                margin-top: 0.25rem;
            }

            dl dd em{
                font-style: normal;
                font-weight: 700;
                color: var(--color-text-light);
            }
        </style>
    </head>
    <body>
        <div class="container">
            
            <h1>Ranking QS</h1>
            
            <h2>Las mejores escuelas del mundo en Arte y Diseño</h2>
            
            <h5>Por <a href="">Nombre Apellido</a></h5>
            
            <h6><time datetime="2026-10-09T17:00-03:00">Publicado el viernes 9 de octubre, 2026 &nbsp;&nbsp; 5:00 p.m. GMT-3</time></h6>            

            <p>El <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings by Subject</em> evalúa anualmente el desempeño académico por disciplinas específicas. Elaborado por la consultora británica <em>Quacquarelli Symonds</em> (<abbr title="Quacquarelli Symonds">QS</abbr>), el proyecto nació en 2004 en alianza con <em>Times Higher Education</em> (<abbr title="Times Higher Education">THE</abbr>) bajo el nombre <em><abbr title="Times Higher Education - Quacquarelli Symonds">THE-QS</abbr> World University Rankings</em>. Tras la separación de ambas entidades en 2009, <abbr title="Quacquarelli Symonds">QS</abbr> consolidó tanto su clasificación institucional general (<em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings</em>) como sus mediciones específicas por disciplinas.</p>

            <p>En la medición específica para Arte y Diseño, con <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener">resultados publicados el 25 de marzo de 2026</a>, el Ranking <abbr title="Quacquarelli Symonds">QS</abbr> evalúa y posiciona a 302 instituciones de todo el mundo.</p>

            <h3>Claves de la edición 2026 para Arte y Diseño</h3>

            <ul>
                <li><em>Liderazgo especializado:</em> Arte y Diseño en el <a href="https://www.rca.ac.uk/" target="_blank" rel="noopener">Royal College of Art</a> (<abbr title="Royal College of Art">RCA</abbr>, Reino Unido) ocupa el primer lugar mundial, seguido por la <a href="https://www.arts.ac.uk/" target="_blank" rel="noopener">University of the Arts London</a> (<abbr title="University of the Arts London">UAL</abbr>, también del Reino Unido).</li>
                <li><em>Presencia continental europea entre las 10 mejores:</em> El <a href="https://www.polimi.it/" target="_blank" rel="noopener">Politecnico di Milano</a> (Italia) ocupa el puesto 7 y la <a href="https://www.aalto.fi/en" target="_blank" rel="noopener">Aalto University</a> (Finlandia) el puesto 9, confirmando que la élite del ranking no se limita al Reino Unido.</li>
                <li><em>Metodología basada en reputación:</em> A diferencia de otras disciplinas del Ranking <abbr title="Quacquarelli Symonds">QS</abbr>, en Arte y Diseño no se miden citas de investigación ni el <a href="https://uchile.cl/informacion-y-bibliotecas/ayudas-y-tutoriales/indice-h" target="_blank" rel="noopener">índice <small>H</small></a>; la clasificación se apoya únicamente en dos dimensiones, una de reputación académica y otra de reputación por empleabilidad, con ambas reputaciones obtenidas de encuestas. Esto genera debate, ya que introduce una carga de subjetividad mayor que en otras disciplinas.</li>
            </ul>

            <h3>Distribución regional de las 100 mejores</h3>

            <h4>América</h4>
            
            <p>Arte y Diseño en países americanos. Se agregan al final de la lista dos instituciones chilenas que figuran en el ranking, sin estar entre las 100 mejores.</p>
            
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
            
            <p>Arte y Diseño en países europeos.</p>
            
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
            
            <p>Arte y Diseño en países de otros continentes.</p>
            
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
            
            <p>Un conteo más visual de lo presentado arriba, con la distribución de las 100 mejores.</p>
            
            <table>
                <tbody>
                    <tr>
                        <td>América</td>
                        <td id="bolitas_americanas"></td>
                    </tr>
                    <tr>
                        <td>Europa</td>
                        <td id="bolitas_europeas"></td>
                    </tr>
                    <tr>
                        <td>Resto del mundo</td>
                        <td id="bolitas_otras"></td>
                    </tr>
                </tbody>
            </table>

            <h3>Oportunidades para estudiantes de la Universidad de Chile</h3>

            <p>Para la Carrera de Diseño de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile, la nómina de convenios vigentes incluye alternativas posicionadas entre las 100 mejores en Arte y Diseño según el Ranking QS:</p>

            <ul>
                <li><em>Politecnico di Milano (polimi; Italia):</em> Es la principal opción europea del ranking con convenio directo disponible.</li>
                <li><em>Universidade de São Paulo (Brasil):</em> Referente regional destacado en la clasificación mundial de Arte y Diseño.</li>
                <li><em>Universidad de Buenos Aires (<abbr title="Universidad de Buenos Aires">UBA</abbr>; Argentina):</em> Una de las instituciones históricas más prominentes de Sudamérica dentro del índice.</li>
                <li><em>Tecnológico de Monterrey (Tec; México):</em> Presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.</li>
                <li><em>Universidad Nacional Autónoma de México (<abbr title="Universidad Nacional Autónoma de México">UNAM</abbr>; México):</em> Una de las macro-escuelas más reconocidas de la región en artes y humanidades.</li>
            </ul>

            <div class="nota"><span>Nota:</span> La disponibilidad de cupos, requisitos de idioma y llamados a postulación deben verificarse cada año, así como el resultado del Ranking QS.</div>

            <dl>
                <dt>Fuentes</dt>
                <dd>
                    <em>Datos:</em> Tomados el 21 de septiembre de 2026 desde <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener">QS World University Rankings for Art and Design</a>.
                </dd>
                <dd>
                    <em>Procesamiento:</em> Datos estructurados y servidos en JSON mediante <a href="https://myjson.online/" target="_blank" rel="noopener">myJson</a> y consulta asíncrona (<a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" rel="noopener">Fetch API</a>).
                </dd>
                <dd>
                    <em>Referente:</em> Estructura basada en el reportaje <a href="https://www.reuters.com/graphics/NEPAL-FLOODS/HYDROPOWER/jnpwoymwkpw/" target="_blank" rel="noopener">Nepal's tunnel maze that trapped hydropower workers</a> de <a href="https://www.reuters.com/authors/vijdan-mohammad-kawoosa/" target="_blank" rel="noopener">Vijdan Mohammad Kawoosa</a> para <a href="https://www.reuters.com/graphics/" target="_blank" rel="noopener">Reuters Graphics</a>, lo que implica adoptar un estándar global de validación visual y periodística aportado por una agencia internacional de noticias.
                </dd>
                <dd>
                    <em>Contexto:</em> Proyecto desarrollado como ejercicio práctico para la asignatura <a href="https://github.com/profesorfaco/troncal" target="_blank" rel="noopener">Diseño y Visualización de Información</a>.
                </dd>
                <dd>
                    <em>Oportunidades para estudiantes:</em> Se aprovecha la nómina completa de intercambios recibida por la Jefatura de Carrera el 7 de septiembre de 2026 desde la Dirección Académica y de Relaciones Internacionales de la Facultad de Arquitectura y Urbanismo de la Universidad de Chile.
                </dd>
            </dl>
        </div>

        <script>
            const tbodyAmerica = document.querySelector("#america");
            const tbodyEuropa = document.querySelector("#europa");
            const tbodyOtros = document.querySelector("#otros");

            const ENDPOINT = "…";

            const paisesAmerica = ["Argentina", "Brazil", "Canada", "Chile", "Colombia", "Mexico", "United States"];
            const paisesEuropa = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Ireland", "Italy", "Netherlands", "Sweden", "Switzerland", "United Kingdom"];

            let htmlAmerica = "";
            let htmlEuropa = "";
            let htmlOtros = "";

            var cuenta_america = 0;
            var cuenta_europa = 0;
            var cuenta_otros = 0;

            fetch(ENDPOINT)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    const escuelas = datos.data;

                    escuelas.forEach((e) => {
                        const esAmericana = paisesAmerica.some((pais) => e.location.includes(pais));
                        const esEuropea = paisesEuropa.some((pais) => e.location.includes(pais));

                        const pais = e.location.split(", ").pop();
                        const fila = `<tr><td>${e.rank}</td><td>${e.name}</td><td>${pais}</td></tr>`;

                        if (esAmericana) {
                            htmlAmerica += fila;
                            cuenta_america = cuenta_america + 1;
                        } else if (esEuropea) {
                            htmlEuropa += fila;
                            cuenta_europa = cuenta_europa + 1;
                        } else {
                            htmlOtros += fila;
                            cuenta_otros = cuenta_otros + 1;
                        }
                    });

                    tbodyAmerica.innerHTML = htmlAmerica;
                    tbodyEuropa.innerHTML = htmlEuropa;
                    tbodyOtros.innerHTML = htmlOtros;

                    document.querySelector("#bolitas_americanas").innerHTML = bolitas(cuenta_america);
                    document.querySelector("#bolitas_europeas").innerHTML = bolitas(cuenta_europa);
                    document.querySelector("#bolitas_otras").innerHTML = bolitas(cuenta_otros);
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

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

---

#### La tabla con dos instituciones para agregar a su JSON en [myJSON](https://myjson.online/)

| rank | name | location | academic_reputation | employer_reputation | overall_score |
| --- | --- | --- | --- | --- | --- |
| 101-150 | Universidad del Desarrollo | Santiago, Chile | 55.9 | 72.7 | N/A |
| 151-200 | Universidad de Chile | Santiago, Chile | 52.5 | 78.5 | N/A |

_ _ _ _ 

[clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md) ⇆ [clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md)
