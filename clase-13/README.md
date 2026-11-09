# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 13 → 13 de noviembre

## Desarrollo de Narrativa Visual Interactiva

### Laboratorio de Co-creación en Duplas: Arquitectura de información y diseño de interfaces narrativas complejas publicadas en línea. Sesión de mentoría y corrección de maquetas

Damos inicio a la última unidad del semestre mediante el lanzamiento oficial del encargo del Proyecto Final. Hoy se organizarán en duplas de trabajo para conceptualizar la arquitectura de información y comenzar el diseño de sus interfaces. Esta jornada funcionará bajo la dinámica de taller abierto, en el cual revisaremos sus primeras propuestas y maquetas de una interfaz web interactiva que presente a la comunidad estudiantil de **Diseño de la Universidad de Chile** una comparativa sobre una de sus opciones reales de movilidad académica entre las destacadas del área de **Arte y Diseño** según el Ranking QS, tomando como estándar gráfico y comunicacional el modelo de *Reuters Graphics*.

Las 5 instituciones internacionales entre las que corresponde escoger para la comparativa, son: 

1. **Politecnico di Milano** (polimi; Italia): Principal opción europea del ranking con convenio directo disponible.
2. **Universidade de São Paulo** (Brasil): Referente regional destacado en la clasificación mundial de Arte y Diseño.
3. **Universidad de Buenos Aires** (UBA; Argentina): Institución pública histórica y referente continental en el índice.
4. **Tecnológico de Monterrey** (Tec; México): Destacada opción privada con convenio de movilidad vigente.
5. **Universidad Nacional Autónoma de México** (UNAM; México): Una de las macro-escuelas más reconocidas del continente en artes y humanidades.

---


### Inicio del trabajo final en duplas: Visualización de datos con propósito

Hemos trabajado analizando datos sobre nuestras asignaturas electivas, proyectos de título y la "realidad" de otras carreras de Diseño (con nombre que incluye la palabra y perfil de egreso con similitudes suficientes al nuestro).

Ahora es momento de cerrar con un trabajo en duplas, donde dos cabezas (ayudadas con IA) deberán profundizar en alguna de estas temáticas (o una combinación de ellas) y proponer una página web interactiva orientada a la toma de decisiones o la divulgación de estos hallazgos.

#### 📋 Requisitos del proyecto

En este trabajo final, integraremos lo explorado a lo largo del semestre en una sola página web interactiva. En esta plataforma se debe considerar:

* **Textualidad apoyada en lo que se visualiza:** Una redacción completa, lógica y [concisa](https://www.nngroup.com/articles/be-succinct-writing-for-the-web/) conducente a preguntas a las que se responde con cinco visualizaciones de información. Este modo de redacción vuelve sobre la primera evaluación sumativa.
* **Visualizaciones en SVG:** Considera dos (2) visualizaciones generadas con [https://app.rawgraphs.io/](https://app.rawgraphs.io/) y luego ordenadas en un programa de edición vectorial. Esto vuelve sobre clases recientes.
* **Visualización en Chart.js:** Considera dos (2) visualizaciones generadas con Chart.js, cada una a desplegarse en su propio `<canvas></canvas>`. Esto vuelve sobre las clases más recientes y su tercera evaluación sumativa.
* **Comienza con lo que sigue:** A continuación se presenta una base para comenzar a trabajar:

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Un buen título</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7"></script>
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

        <style>
            :root {
                --color-bg: #eaeaea;
                --color-accent: slategray;
                --color-text: rgb(60, 60, 60);
                --color-text-dark: rgb(30, 30, 30);
                --color-text-light: rgb(90, 90, 90);
                --color-border: silver;
                --color-origen: blue;
                --color-destino: red;
                --font-sans: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
                --font-serif: "Newsreader", Georgia, "Times New Roman", serif;

                --icono-avion: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 100 100"><path fill="slategray" d="M1005,966 l-270,-112 l-287,256 c-71,62,-133,57,-181,37 l-92,-38 l172,-415 l-277,-115 l-43,104 l-93,-39 l43,-104 c72,-171,224,-230,396,-160 l747,309 c74,32,129,88,129,161 c0,115,-123,167,-244,116 Z M1082,782 l-748,-310 c-80,-34,-153,-24,-205,23 l349,144 l-173,416 c29,12,60,6,84,-15 l319,-305 l336,139 c110,45,146,-47,38,-92 Z" transform="matrix(0.05,0,0,-0.05,20,80)"/></svg>');
                --icono-avion-inclinado: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 100 100"><path fill="slategray" d="M1005,966 l-270,-112 l-287,256 c-71,62,-133,57,-181,37 l-92,-38 l172,-415 l-277,-115 l-43,104 l-93,-39 l43,-104 c72,-171,224,-230,396,-160 l747,309 c74,32,129,88,129,161 c0,115,-123,167,-244,116 Z M1082,782 l-748,-310 c-80,-34,-153,-24,-205,23 l349,144 l-173,416 c29,12,60,6,84,-15 l319,-305 l336,139 c110,45,146,-47,38,-92 Z" transform="rotate(40 50 50) matrix(0.05,0,0,-0.05,20,80)"/></svg>');
                --icono-pasaporte: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="slategray" viewBox="0 0 16 16"><path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/><path d="M3.232 1.776A1.5 1.5 0 0 0 2 3.252v10.95c0 .445.191.838.49 1.11.367.422.908.688 1.51.688h8a2 2 0 0 0 2-2V4a2 2 0 0 0-1-1.732v-.47A1.5 1.5 0 0 0 11.232.321l-8 1.454ZM4 3h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"/></svg>');
                --icono-pulgar: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="slategray" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>');
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
                font-size: 1.1rem;
                line-height: 1.6;
                color: var(--color-text);
                background: linear-gradient(to bottom, var(--color-bg), white);
            }

            a {
                color: var(--color-text-dark);
                text-decoration: underline dotted;
                text-underline-offset: 3px;
            }

            a:hover {
                text-decoration-style: solid;
            }

            p {
                margin-bottom: 1rem;
                text-align: justify;
                text-align-last: left;
                letter-spacing: 0.01em;
                hyphens: auto;
                text-wrap: pretty;
            }

            em {
                font-weight: 500;
            }

            abbr {
                font-size: 0.85em;
                text-decoration: none;
                cursor: help;
            }

            mark {
                background: yellow;
                color: inherit;
            }

            ul,
            ol {
                margin-bottom: 1rem;
                list-style-position: inside;
            }

            li {
                margin-bottom: 0.25rem;
            }

            h1,
            h2,
            h3,
            h4,
            h5 {
                font-family: var(--font-sans);
                font-weight: 500;
                line-height: 1.2;
            }

            h3 + p {
                margin-top: 1rem;
            }

            hr {
                margin: 2rem 0;
                border: 2px solid #ccc;
            }

            .container {
                width: 90%;
                max-width: 700px;
                margin: 0 auto;
            }

            /* Portada */
            header {
                margin: 3rem 0 7rem;
                text-align: center;
            }

            header h1::before {
                content: "";
                display: block;
                width: calc(1.5rem + 5vw);
                height: calc(1.5rem + 5vw);
                margin: 0 auto;
                background: var(--icono-avion) no-repeat center / contain;
            }

            header h1,
            header h2,
            header h3 {
                color: var(--color-accent);
            }

            header h1 {
                font-size: calc(1.1rem + 1.8vw);
                font-weight: 600;
                letter-spacing: 0.1rem;
                line-height: 1.1;
                text-transform: uppercase;
            }

            header h2 {
                font-size: calc(1.1rem + 1.75vw);
            }

            header h3 {
                font-size: calc(1.1rem + 1.15vw);
            }

            header h4 {
                margin-top: 1rem;
                font-size: 1rem;
            }

            header h5 {
                margin: 1rem 0 2rem;
                font-size: 0.8rem;
                letter-spacing: 0.05rem;
            }

            header + p {
                font-size: 120%;
                font-weight: 300;
            }

            /* Figuras */
            figure {
                display: flex;
                gap: 0.5rem;
                width: calc(100% + 4vw);
                margin: 0.5rem -2vw 2rem;
            }

            figure > div {
                flex: 1;
            }

            figure img {
                display: block;
                width: 100%;
                height: auto;
            }

            figcaption {
                margin-top: 0.4rem;
                font-size: 0.8rem;
                color: #666;
                text-indent: 2vw;
            }

            @media (orientation: portrait) {
                figure {
                    flex-direction: column;
                }
            }


            h3{margin-top:3rem;}

            /* Gráficos, rankings y mapa */
            .ranking,
            #map {
                width: calc(100% + 4vw);
                margin: 0.5rem -2vw 1.5rem;
            }

            .ranking {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(1.4rem, 1fr));
                gap: 0.2rem;
                font: 0.5rem/1.25 monospace;
            }

            .ranking span {
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--color-border);
                border: 1px solid var(--color-border);
            }

            .ranking .entre {
                color: black;
                border-color: black;
            }

            .ranking .destino {
                color: var(--color-destino);
                border-color: var(--color-destino);
                background: rgba(255, 0, 0, 0.1);
                font-weight: bold;
            }

            .ranking .origen {
                color: var(--color-origen);
                border-color: var(--color-origen);
                background: rgba(0, 0, 255, 0.1);
                font-weight: bold;
            }

            .grafico {
                max-width: 500px;
                margin: 2.5rem auto;
            }

            #map {
                height: 400px;
            }

            .leaflet-attribution-flag {
                display: none !important;
            }

            /* Secciones */
            h2.destino,
            h2.pasaporte {
                margin-bottom: 2rem;
                text-align: center;
            }

            h2.destino::before,
            h2.pasaporte::before {
                content: "";
                display: block;
                margin: 5rem auto 1rem;
                background: no-repeat center / contain;
            }

            h2.destino::before {
                width: calc(1rem + 5vw);
                height: calc(1rem + 5vw);
                background-image: var(--icono-avion-inclinado);
            }

            h2.pasaporte::before {
                width: calc(1rem + 2.5vw);
                height: calc(1rem + 2.5vw);
                margin-top: 3rem;
                background-image: var(--icono-pasaporte);
            }

            .infografia {
                display: block;
                width: 100%;
            }

            /* Pie */
            footer {
                margin-top: 10vh;
                padding: 4rem 0;
                background: white;
            }

            dl {
                font-family: var(--font-sans);
                font-size: 80%;
                letter-spacing: 0.025rem;
            }

            dt {
                padding-left: 1.2rem;
                font-weight: 700;
                background: var(--icono-pulgar) no-repeat 0 0.2rem / 0.9rem;
            }

            dd {
                margin-top: 0.25rem;
                font-size: 90%;
                color: var(--color-text-light);
            }

            dd em {
                font-style: normal;
                font-weight: 700;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Intercambio</h1>
                <h2>un viaje no tan largo</h2>
                <h3>desde la Universidad de Chile</h3>
                <h4>Por <a href="#" target="_blank" rel="noopener">Nombre Apellido</a> y <a href="#" target="_blank" rel="noopener">Nombre Apellido</a></h4>
                <h5>27 de noviembre, 2026</h5>
            </header>

            <p>
                Las y los estudiantes de Diseño de la Universidad de Chile contamos con opciones de intercambio a
                instituciones tan relevantes como el <a href="#" target="_blank" rel="noopener">Politécnico de Milán</a>, la
                <a href="#" target="_blank" rel="noopener"><abbr title="Universidad de Buenos Aires">UBA</abbr></a>, la
                <a href="#" target="_blank" rel="noopener">Universidad de São Paulo</a>, la
                <a href="#" target="_blank" rel="noopener"><abbr title="Universidad Nacional Autónoma de México">UNAM</abbr></a> y el
                <a href="#" target="_blank" rel="noopener">Tecnológico de Monterrey</a>.
            </p>
            <p>
                Tales instituciones y la nuestra <em>demuestran</em> su relevancia <em>apareciendo</em> en las métricas
                del
                <a href="#" target="_blank" rel="noopener">Ranking <abbr title="Quacquarelli Symonds">QS</abbr></a>, un
                sistema londinense que opera en dos vertientes:
                <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings</em>, centrada en el
                desempeño institucional general, y
                <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings by Subject</em>, que en
                nuestro caso corresponde a <em>Art and Design</em>. En el panorama de educación superior actual,
                <em>contar</em> con <em>presencia</em> en ambas vertientes <em>cuenta</em> como ventaja
                <em>evidente</em> sobre aquellos programas <em>invisibles</em> a las métricas de
                <abbr title="Quacquarelli Symonds">QS</abbr>.
            </p>
            <p>
                A continuación se <em>muestra</em> lo que deberías saber si tu intención es irte de intercambio a
                <mark>[COMPLETAR: Seleccione un destino entre Politécnico de Milán, UBA, Universidad de São Paulo, UNAM o Tecnológico de Monterrey]</mark>.
            </p>

            <figure>
                <div>
                    <img src="https://picsum.photos/id/123/500/500" alt="Foto de la Universidad de origen" />
                    <figcaption>Foto Universidad Origen</figcaption>
                </div>
                <div>
                    <img src="https://picsum.photos/id/456/500/500" alt="Foto de la Universidad de destino" />
                    <figcaption>Foto Universidad Destino</figcaption>
                </div>
            </figure>

            <h3>Diferencia entre universidades de origen y destino</h3>
            <p>
                En su versión publicada el 18 de junio de 2026, son <span data-dato="universidades.total"></span>
                las instituciones que <em>cuentan</em> en el Ranking <abbr title="Quacquarelli Symonds">QS</abbr> para
                Universidades.
            </p>
            <p>
                Según tal ranking, un intercambio desde la Universidad de Chile a <mark>[COMPLETAR: Destino]</mark>
                implica moverse entre los lugares <span data-dato="universidades.origen"></span> y
                <span data-dato="universidades.destino"></span> del mundo.
            </p>

            <div id="universidades" class="ranking"></div>
            <p>La diferencia de posiciones se explica cuando se consideran las siguientes dimensiones:</p>

            <div class="grafico"><canvas id="comparaUniversidades"></canvas></div>
            <p><mark>[COMPLETAR: Comentario que ayude a leer el gráfico]</mark></p>

            <h3>Diferencia entre escuelas de origen y destino</h3>
            <p>
                En su versión publicada el 25 de marzo de 2026, son <span data-dato="escuelas.total"></span> las
                instituciones consideradas en el Ranking <abbr title="Quacquarelli Symonds">QS</abbr> para el área de
                Arte y Diseño. Según este ranking, un intercambio desde Diseño de la Universidad de Chile a
                <mark>[COMPLETAR: Destino]</mark> implica moverse entre los lugares
                <span data-dato="escuelas.origen"></span> y <span data-dato="escuelas.destino"></span> del mundo.
            </p>

            <div id="escuelas" class="ranking"></div>
            <p>La diferencia de posiciones se explica cuando se consideran las siguientes dimensiones:</p>

            <div class="grafico"><canvas id="comparaEscuelas"></canvas></div>
            <p><mark>[COMPLETAR: Comentario que ayude a leer el gráfico]</mark></p>

            <h2 class="destino">La escuela de diseño en <mark>[COMPLETAR: Destino]</mark></h2>

            <p>
                <mark>[COMPLETAR: Texto introductorio para presentar la Escuela de Destino]</mark>. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris euismod arcu mi, at luctus lectus condimentum et. Donec
                accumsan, augue in vestibulum blandit, lacus orci ullamcorper nisi, sit amet mattis eros risus vel
                metus.
            </p>

            <div id="map"></div>

            <figure>
                <div>
                    <img src="https://picsum.photos/id/789/200/300" alt="Imagen representativa del lugar de destino 1" />
                    <figcaption>Pie destino 1</figcaption>
                </div>
                <div>
                    <img src="https://picsum.photos/id/1/200/300" alt="Imagen representativa del lugar de destino 2" />
                    <figcaption>Pie destino 2</figcaption>
                </div>
            </figure>

            <p>
                <mark>[COMPLETAR: cierre de presentación de la Escuela de Destino]</mark>. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris euismod arcu mi, at luctus lectus condimentum et. Donec accumsan,
                augue in vestibulum blandit, lacus orci ullamcorper nisi, sit amet mattis eros risus vel metus:
            </p>

            <ul>
                <li>Presenta algo a tener en cuenta</li>
                <li>Presenta algo a tener en cuenta</li>
                <li>Presenta algo a tener en cuenta</li>
                <li>Presenta algo a tener en cuenta</li>
                <li>Presenta algo a tener en cuenta</li>
            </ul>

            <hr />

            <h2 class="pasaporte">Cómo postular a un intercambio</h2>

            <p>
                Como estudiante de Diseño de la Universidad de Chile, puedes optar por 2 vías para realizar un
                intercambio internacional presencial:
            </p>

            <ol>
                <li>
                    <a
                        href="https://uchile.cl/presentacion/relaciones-internacionales/programa-de-movilidad-estudiantil---pme/estudios-parciales-en-el-extranjero/intercambio-internacional-presencial"
                        target="_blank"
                        rel="noopener"
                        >Nivel Central (PME)</a
                    >: Gestionado de forma central por el Programa de Movilidad Estudiantil de la Dirección de
                    Relaciones Internacionales para toda la universidad.
                </li>
                <li>
                    <a href="https://fau.uchile.cl/dari" target="_blank" rel="noopener">Nivel FAU</a>: Gestionado de
                    manera independiente por la oficina de relaciones internacionales de cada unidad académica mediante
                    convenios específicos.
                </li>
            </ol>

            <p>
                La opción a nivel de FAU puede resultar más conveniente debido a la especificidad de sus convenios, con
                un enfoque de carácter directamente disciplinar, ajustándose mejor a las asignaturas, áreas de estudio y
                requerimientos de Diseño.
            </p>

            <svg class="infografia" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150">
                <rect width="100" height="150" fill="lightgray" />
                <text x="1" y="3" font-size="2">Desarrolla una infografía que presente el proceso Nivel FAU</text>
            </svg>
        </div>

        <footer>
            <div class="container">
                <dl>
                    <dt>¡Gracias por tu scroll!</dt>
                    <dd>
                        <em>Datos:</em>
                        <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener">QS World University Rankings for Art and Design</a>
                        y
                        <a href="https://www.topuniversities.com/world-university-rankings" target="_blank" rel="noopener">QS World University Rankings</a>
                        consultados en noviembre de 2026.
                    </dd>
                    <dd>
                        <em>Referente:</em> Estructura basada en los reportajes publicados por
                        <a href="https://www.reuters.com/graphics/" target="_blank" rel="noopener">Reuters Graphics</a>,
                        lo que implica adoptar un estándar global de validación visual y periodística aportado por una
                        agencia internacional de noticias.
                    </dd>
                    <dd>
                        <em>Contexto:</em> Proyecto desarrollado como ejercicio final para la asignatura
                        <a href="https://github.com/profesorfaco/troncal" target="_blank" rel="noopener">Diseño y Visualización de Información</a>,
                        a cargo del Profesor Felipe Cortez.
                    </dd>
                    <dd>
                        <em>Uso de IA:</em> En este trabajo de Diseño y Visualización de Información se utilizaron
                        herramientas de inteligencia artificial generativa. [Especificar herramienta/s.] Estas fueron
                        empleadas en [indicar etapas o secciones]. [Si aplica: los prompts utilizados y la metodología
                        de integración se describen en la sección correspondiente.] Todo el contenido fue revisado y
                        validado por <a href="#" rel="me">Nombre Apellido</a> y <a href="#" rel="me">Nombre Apellido</a>,
                        quienes asumimos plena responsabilidad sobre el trabajo presentado.
                    </dd>
                    <dd>
                        <em>Recomendación:</em> Revisa otros destinos de intercambio, tales como:
                        <a href="#" target="_blank" rel="noopener">otra</a>,
                        <a href="#" target="_blank" rel="noopener">otra</a>,
                        <a href="#" target="_blank" rel="noopener">otra</a> u
                        <a href="#" target="_blank" rel="noopener">otra</a>.
                    </dd>
                </dl>
            </div>
        </footer>

        <script>
            document.addEventListener("DOMContentLoaded", () => {
                // Datos: única fuente para textos y cuadrículas
                const datos = {
                    universidades: { total: 1504, origen: 186, destino: 133 },
                    escuelas: { total: 303, origen: 155, destino: 97 },
                };

                document.querySelectorAll("[data-dato]").forEach((el) => {
                    const [grupo, campo] = el.dataset.dato.split(".");
                    el.textContent = datos[grupo][campo];
                });

                // Cuadrículas de ranking
                const ranking = (id, { total, origen, destino }) => {
                    const min = Math.min(origen, destino);
                    const max = Math.max(origen, destino);
                    const celdas = Array.from({ length: total }, (_, i) => {
                        const n = i + 1;
                        const clase = n === destino ? "destino" : n === origen ? "origen" : n > min && n < max ? "entre" : "";
                        return `<span class="${clase}">${n}</span>`;
                    });
                    document.getElementById(id).innerHTML = celdas.join("");
                };

                ranking("universidades", datos.universidades);
                ranking("escuelas", datos.escuelas);

                // Gráficos de radar
                const radar = (id) =>
                    new Chart(document.getElementById(id), {
                        type: "radar",
                        data: {
                            labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
                            datasets: [
                                {
                                    label: "Origen",
                                    data: [65, 59, 80, 81, 56, 55, 40],
                                    borderColor: "rgb(54, 162, 235)",
                                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                                },
                                {
                                    label: "Destino",
                                    data: [28, 48, 40, 19, 96, 27, 100],
                                    borderColor: "rgb(255, 99, 132)",
                                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                                },
                            ],
                        },
                    });

                radar("comparaUniversidades");
                radar("comparaEscuelas");

                // Mapa
                const map = L.map("map").setView([-33.4422, -70.638017], 3);

                L.tileLayer(
                    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
                    { maxZoom: 16, attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ" }
                ).addTo(map);

                L.marker([-33.4422, -70.638017])
                    .addTo(map)
                    .bindPopup("<b>Universidad de Chile</b><br />Facultad de Arquitectura y Urbanismo.")
                    .openPopup();
            });
        </script>
    </body>
</html>
```


#### 🛠️ Estructura técnica esperada

Manteniendo las buenas prácticas de desarrollo, el proyecto debe estructurarse de manera modular, separando estrictamente:

1. `index.html` para la descripción de estructura.
2. `style.css` para la descripción de estilo.
3. `script.js` para la programación (puede ser uno o varios archivos, según acomode a su desarrollo).

---

[clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md) ⇆ [clase-14](https://github.com/profesorfaco/troncal/blob/main/clase-14/README.md)
