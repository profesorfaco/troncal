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
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Un buen título</title>

    <!-- Fuentes Google -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />

    <!-- Estilos y Scripts de Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <style>
        :root {
            --color-bg: #eaeaea;
            --color-bg-nota: hsl(30, 5%, 85%);
            --color-accent: rgb(60, 60, 90);
            --color-text: rgb(60, 60, 60);
            --color-text-dark: rgb(30, 30, 30);
            --color-text-light: rgba(90, 90, 90, 1);
            --color-border: silver;

            --font-sans: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
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
            font-size: 1.1rem;
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
            text-align: justify;
            text-align-last: left;
            text-justify: inter-word;
            word-spacing: 0.01rem;
            letter-spacing: 0.01em;
            font-kerning: normal;
            -webkit-hyphens: auto;
            -ms-hyphens: auto;
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

        ul {
            list-style-position: inside;
        }

        ul li {
            margin-bottom: 0.5rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: var(--font-sans);
            line-height: 1.2;
            font-weight: 500;
        }

        h3 + p {
            margin-top: 1rem;
        }

        .container {
            margin: 0 auto;
            width: 90%;
            max-width: 700px;
        }

        header {
            text-align: center;
            margin: 3rem auto 7rem auto;
            text-shadow: 1px 1px 4px var(--color-bg-nota);
        }

        header > svg {
            margin-bottom: 2rem;
        }

        header > svg > path {
            fill: var(--color-accent);
        }

        header > h1 {
            font-size: calc(1.1rem + 1.8vw);
            letter-spacing: 0.1rem;
            line-height: 1.1;
            text-transform: uppercase;
            color: var(--color-accent);
            font-weight: 600;
        }

        header > h2 {
            font-size: calc(1.1rem + 1.75vw);
            color: var(--color-accent);
        }

        header > h3 {
            font-size: calc(1.1rem + 1.15vw);
            color: var(--color-accent);
        }

        header > h4 {
            font-size: 1rem;
            margin-top: 1rem;
            font-weight: 500;
        }

        header > h5 {
            font-size: 0.8rem;
            letter-spacing: 0.05rem;
            margin: 1rem auto 2rem auto;
        }

        header + p {
            font-size: 120%;
            font-weight: 300;
        }

        figure {
            display: flex;
            flex-direction: row;
            gap: 0.5rem;
            margin: 0.5rem -2vw 2em -2vw;
            width: calc(100% + 4vw);
        }

        figure > div {
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        figure img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
        }

        figcaption {
            font-size: 0.8rem;
            color: #666;
            margin-top: 0.4rem;
            text-align: left;
            text-indent: 2vw;
        }

        @media (orientation: portrait) {
            figure {
                flex-direction: column;
            }
        }

        #universidades,
        #escuelas {
            font-size: 0.5rem;
            font-family: monospace;
            margin: 0.5rem -2vw 1.5rem -2vw;
            width: calc(100% + 4vw);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(1.4rem, 1fr));
            gap: 0.2rem;
        }

        #universidades span,
        #escuelas span {
            color: silver;
            border: 1px solid silver;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.25;
            box-sizing: border-box;
        }

        #universidades span.llegada,
        #escuelas span.llegada {
            color: red;
            border: 1px solid red;
            font-weight: bold;
            background: rgba(255, 0, 0, 0.1);
        }

        #universidades span.partida,
        #escuelas span.partida {
            color: blue;
            border: 1px solid blue;
            font-weight: bold;
            background: rgba(0, 0, 255, 0.1);
        }

        #universidades span.entre,
        #escuelas span.entre {
            color: black;
            border-color: black;
        }

        div#map {
            height: 400px;
            width: calc(100% + 4vw);
            margin: 1rem -2vw 0.5rem -2vw;
        }

        .leaflet-attribution-flag {
            display: none !important;
        }

        strong {
            background: yellow;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" version="1.1" viewBox="0 0 100 100">
                <path
                    d="M0,0 l1200,0 l0,100 l-1200,0 Z M1005,966 l-270,-112 l-287,256 c-71,62,-133,57,-181,37 l-92,-38 l172,-415 l-277,-115 l-43,104 l-93,-39 l43,-104 c72,-171,224,-230,396,-160 l747,309 c74,32,129,88,129,161 c0,115,-123,167,-244,116 Z M1082,782 l-748,-310 c-80,-34,-153,-24,-205,23 l349,144 l-173,416 c29,12,60,6,84,-15 l319,-305 l336,139 c110,45,146,-47,38,-92 Z M1082,782"
                    transform="matrix(0.05,0.0,0.0,-0.05,20.0,80.0)"
                />
            </svg>

            <h1>Intercambio</h1>
            <h2>un viaje no tan largo</h2>
            <h3>desde la Universidad de Chile</h3>
            <h4>Por <a href="#">Nombre Apellido</a> y <a href="#">Nombre Apellido</a></h4>
            <h5>13 de noviembre, 2026</h5>
        </header>

        <p>
            Las y los estudiantes de Diseño de la Universidad de Chile contamos con opciones de intercambio a
            instituciones tan relevantes como el <a href="#">Politécnico de Milán</a>, la
            <a href="#"><abbr title="Universidad de Buenos Aires">UBA</abbr></a>, la <a href="#">Universidad de São Paulo</a>, la
            <a href="#"><abbr title="Universidad Nacional Autónoma de México">UNAM</abbr></a> y el
            <a href="#">Tecnológico de Monterrey</a>.
        </p>
        <p>
            Tales instituciones y la nuestra pueden <em>demostrar</em> su relevancia cuando <em>aparecen</em> en las
            métricas del <a href="#" rel="vinculo a entrega 3 mejor evaluada de la dupla">Ranking <abbr title="Quacquarelli Symonds">QS</abbr></a>, un sistema londinense que opera
            en dos vertientes: <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings</em>,
            centrada en el desempeño institucional general, y
            <em><abbr title="Quacquarelli Symonds">QS</abbr> World University Rankings by Subject</em> que en
            nuestro caso corresponde a <em>Art and Design</em>. En el panorama de educación superior actual,
            <em>contar</em> con <em>presencia</em> en ambas vertientes <em>cuenta</em> como ventaja
            <em>evidente</em> sobre aquellos programas <em>invisibles</em> a las métricas de
            <abbr title="Quacquarelli Symonds">QS</abbr>.
        </p>
        <p>
            A continuación se <em>muestra</em> lo que deberías saber si tu intención es irte de intercambio a
            <strong>[COMPLETAR: Nombre de la universidad seleccionada]</strong>.
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
            En su versión publicada el 18 de junio de 2026, son <span id="totalUniversidades"></span> las
            instituciones las que <em>cuentan</em> en el Ranking <abbr title="Quacquarelli Symonds">QS</abbr> para
            Universidades.
        </p>

        <p>
            Según tal ranking, un intercambio desde la Universidad de Chile a <strong>[COMPLETAR: Destino]</strong> implica moverse entre los lugares 133 y 186 del mundo.
        </p>

        <div id="universidades"></div>
        <p>La diferencia de posiciones se explica cuando se consideran las siguientes dimensiones:</p>
        <!-- COMPLETAR: Insertar gráfico SVG de universidades -->
        <p>[Acá irá un SVG]</p>

        <h3>Diferencia entre escuelas de origen y destino</h3>
        <p>
            En su versión publicada el 25 de marzo de 2026, son <span id="totalEscuelas"></span> las instituciones
            consideradas en el Ranking QS para el área de Arte y Diseño. Según este ranking, un intercambio desde
            Diseño de la Universidad de Chile a <strong>[COMPLETAR: Destino]</strong> implica moverse entre los lugares 97 y 155 del mundo.
        </p>
        <div id="escuelas"></div>
        <p>La diferencia de posiciones se explica cuando se consideran las siguientes dimensiones:</p>
        <!-- COMPLETAR: Insertar gráfico SVG de escuelas -->
        <p>[Acá irá un SVG]</p>

        <h4>La escuela de diseño en <strong>[COMPLETAR: Destino]</strong></h4>

        <!-- Contenedor del Mapa Leaflet -->
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

        <p><!-- COMPLETAR: Presenten el destino con texto --></p>

        <h3>Cómo postular al intercambio a <strong>[COMPLETAR: Destino]</strong></h3>

        <p><!-- COMPLETAR: Averigüe y presente información fidedigna --></p>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // 1. Inicialización del Mapa (Leaflet)
            const map = L.map("map").setView([-33.4422, -70.638017], 3);

            L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",                {
                    maxZoom: 16,
                    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
                }
            ).addTo(map);

            L.marker([-33.4422, -70.638017])
                .addTo(map)
                .bindPopup("<b>Universidad de Chile</b><br />Facultad de Arquitectura y Urbanismo.")
                .openPopup();

            // 2. Funciones para los rankings interactivos
            function contador(idContenedor, total) {
                const contenedor = document.getElementById(idContenedor);
                if (!contenedor) return;
                let html = "";
                for (let i = 1; i <= total; i++) {
                    html += `<span>${i}</span> `;
                }
                contenedor.innerHTML = html;
            }

            function ranking(idContenedor, posRoja, pospartida) {
                const contenedor = document.getElementById(idContenedor);
                if (!contenedor) return;

                const puntos = contenedor.children;
                const totalLugares = puntos.length;

                const marcados = contenedor.querySelectorAll(".llegada, .partida, .entre");
                marcados.forEach((x) => x.classList.remove("llegada", "partida", "entre"));

                if (posRoja >= 1 && posRoja <= totalLugares) {
                    puntos[posRoja - 1].classList.add("llegada");
                }
                if (pospartida >= 1 && pospartida <= totalLugares) {
                    puntos[pospartida - 1].classList.add("partida");
                }

                if (posRoja >= 1 && posRoja <= totalLugares && pospartida >= 1 && pospartida <= totalLugares) {
                    const inicio = Math.min(posRoja, pospartida);
                    const fin = Math.max(posRoja, pospartida);

                    for (let i = inicio + 1; i < fin; i++) {
                        puntos[i - 1].classList.add("entre");
                    }
                }
            }

            const totalUniversidades = 1504;
            const totalEscuelas = 303;

            // Asignar valores a los spans dinámicos
            const elemUniv = document.getElementById("totalUniversidades");
            const elemEsc = document.getElementById("totalEscuelas");
            if (elemUniv) elemUniv.textContent = totalUniversidades;
            if (elemEsc) elemEsc.textContent = totalEscuelas;

            // Crear cuadrículas de números
            contador("universidades", totalUniversidades);
            contador("escuelas", totalEscuelas);

            // Marcar rangos de posiciones
            ranking("universidades", 133, 186);
            ranking("escuelas", 97, 155);
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
