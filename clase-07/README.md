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
        <title>Ranking QS: Arte y Diseño 2026</title>
        <style>
            :root {
                --color-bg: #eaeaea;
                --color-heading: #2b2b2b;
                --color-text: #33383b;
                --color-label: #767676;
                --color-borde: #cfcfcf;
                --font-heading: "Helvetica Neue", Helvetica, Arial, sans-serif;
                --font-body: Georgia, "Times New Roman", serif;
            }

            *, *::before, *::after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                font-family: var(--font-body);
                color: var(--color-text);
                background: var(--color-bg);
                max-width: 900px;
                margin: 0 auto;
                padding: 1.5rem;
                line-height: 1.6;
            }

            .container {
                margin: 0 auto;
                width: 90%;
                max-width: 700px;
            }

            h1, h2, h3, h4 {
                font-family: var(--font-heading);
                font-weight: 700;
                color: var(--color-heading);
                line-height: 1.2;
                margin-bottom: 0.6rem;
            }

            h1 { font-size: 2rem; }
            h2 { font-size: 1.4rem; margin-top: 2rem; }
            h3 { font-size: 1.1rem; margin-top: 1.5rem; }

            p { margin-bottom: 1rem; }

            strong { color: var(--color-heading); }

            a { color: var(--color-heading); }

            th {
                text-align: left;
                font-family: var(--font-heading);
                color: var(--color-label);
                font-size: 0.8rem;
                text-transform: uppercase;
                letter-spacing: 0.03em;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-bottom: 1.5rem;
                font-family: var(--font-body);
            }
            th,
            td {
                border-bottom: 1px solid var(--color-borde);
                padding: 0.4rem 0.6rem;
            }
            .nota {
                background: #dedede;
                border-left: 4px solid var(--color-label);
                padding: 0.8rem 1rem;
                font-size: 0.95rem;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Ranking QS: Las mejores universidades del mundo en Arte y Diseño</h1>

            <p>El <strong>QS World University Rankings by Subject</strong> evalúa anualmente el desempeño académico por disciplinas específicas. Elaborado por la consultora británica Quacquarelli Symonds (QS), el proyecto nació en 2004 en alianza con <em>Times Higher Education</em> (THE) bajo el nombre <em>THE-QS World University Rankings</em>. Tras la separación de ambas entidades en 2009, QS consolidó tanto su clasificación institucional general (<em>QS World University Rankings</em>) como sus mediciones específicas por materias. Puedes explorar la tabla completa y actualizada en el <a href="https://www.topuniversities.com/university-subject-rankings/art-design" target="_blank" rel="noopener">sitio oficial de QS Top Universities</a>.</p>

            <p>En la entrega correspondiente a <strong>Arte y Diseño <span id="anio"><script>document.write(new Date().getFullYear())</script></span></strong>, la evaluación abarca a más de 300 instituciones alrededor del mundo. A diferencia de otras disciplinas del ranking, en Arte y Diseño no se miden citas de investigación ni el <a href="https://uchile.cl/informacion-y-bibliotecas/ayudas-y-tutoriales/indice-h" target="_blank" rel="noopener">índice H</a>: la clasificación se apoya únicamente en dos encuestas de reputación, una entre académicos y otra entre empleadores.</p>

            <h3>Claves de la edición 2026</h3>

            <ul>
                <li><strong>Liderazgo especializado:</strong> El <em>Royal College of Art</em> (RCA, Reino Unido) ocupa el primer lugar mundial, seguido por la <em>University of the Arts London</em> (UAL), también británica.</li>
                <li><strong>Presencia continental europea en el Top 10:</strong> El <em>Politecnico di Milano</em> (Italia) ocupa el puesto 7 y la <em>Aalto University</em> (Finlandia) el puesto 9, confirmando que la élite del ranking no se limita a Inglaterra.</li>
                <li><strong>Metodología basada en reputación:</strong> El puntaje de Arte y Diseño se construye exclusivamente con encuestas de reputación académica y de empleadores, sin componentes bibliométricos. Esto genera debate, ya que introduce una carga de subjetividad mayor que en otras disciplinas del ranking.</li>
            </ul>

            <h2>Distribución regional (Top 100)</h2>

            <h3>América</h3>
            <p>Instituciones de países americanos presentes en el listado obtenido vía fetch, ordenadas según su aparición en la API.</p>
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

            <h3>Europa</h3>
            <p>Instituciones europeas presentes en el listado obtenido vía fetch.</p>
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

            <h3>Asia, Oceanía y otras regiones</h3>
            <p>Todas las demás instituciones del listado que no calzan con las dos listas anteriores.</p>
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

            <h2>Oportunidades de movilidad para estudiantes de Diseño en la Universidad de Chile</h2>

            <p>Para el estudiantado de la Escuela de Diseño de la Facultad de Arquitectura y Urbanismo (FAU) de la Universidad de Chile, la nómina de convenios vigentes incluye alternativas en Europa y América posicionadas en el Top 100 mundial de Arte y Diseño según el Ranking QS:</p>

            <ul>
                <li><strong>Politecnico di Milano (Italia)</strong>: Es la principal opción europea del ranking con convenio directo disponible.</li>
                <li><strong>Universidade de São Paulo (Brasil)</strong>: Referente regional destacado en la clasificación mundial de Arte y Diseño.</li>
                <li><strong>Universidad de Buenos Aires (Argentina)</strong>: una de las instituciones históricas más prominentes de Sudamérica dentro del índice.</li>
                <li><strong>Tecnológico de Monterrey (México)</strong>: presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.</li>
                <li><strong>Universidad Nacional Autónoma de México (México)</strong>: una de las macro-universidades más reconocidas de la región en artes y humanidades.</li>
            </ul>

            <div class="nota">
                <p><strong>Nota:</strong> La disponibilidad de cupos, requisitos de idioma y llamados a postulación para las oportunidades de movilidad deben verificarse cada año, así como el resultado del Ranking QS.</p>
            </div>
        </div>

        <script>

            const tbodyAmerica = document.querySelector("#america");
            const tbodyEuropa = document.querySelector("#europa");
            const tbodyOtros = document.querySelector("#otros");

            const URL = "…";

            const paisesAmerica = ["Argentina", "Brazil", "Canada", "Chile", "Colombia", "Mexico", "United States"];

            const paisesEuropa = ["Austria", "Belgium", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Ireland", "Italy", "Netherlands", "Sweden", "Switzerland", "United Kingdom"];

            fetch(URL)
                .then((respuesta) => {

                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }

                    return respuesta.json();
                })
                .then((datos) => {
                    const universidades = datos.data;
                    console.log("Datos recibidos:", universidades);

                    universidades.forEach((u) => {

                        const esAmericana = paisesAmerica.some((pais) => u.location.includes(pais));
                        const esEuropea = paisesEuropa.some((pais) => u.location.includes(pais));

                        const pais = u.location.split(", ").pop();

                        if (esAmericana) {
                            tbodyAmerica.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                        } else if (esEuropea) {
                            tbodyEuropa.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                        } else {
                            tbodyOtros.innerHTML += `<tr><td>${u.rank}</td><td>${u.name}</td><td>${pais}</td></tr>`;
                        }
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });
        </script>
    </body>
</html>
```

- - - - - - - - -

Partamos por comprender el CSS, para después avanzar a otras cosas más complejas: 

`*, *::before, *::after {…}`: Es el borrón y cuenta nueva que fuerza al navegador a abandonar sus reglas arbitrarias en favor de un sistema de medidas uniforme. Al aplicar `border-box`, neutralizamos el modelo de caja por defecto (donde el padding y el border añadían tamaño extra), estableciendo un entorno de renderizado predecible en toda la interfaz.

`:root {}`: Es el espacio ideal para definir variables CSS (propiedades personalizadas). Centralizar aquí valores repetitivos como colores o tipografías permite realizar cambios globales instantáneos —como activar un modo oscuro— y garantiza la escalabilidad del proyecto.

`background-image: url('data:image/svg+xml;utf8,<svg></svg>')`: Permite incrustar iconos o formas directamente en el CSS sin depender de archivos externos. Para que funcione, el código SVG (como los de [Bootstrap Icons](https://icons.getbootstrap.com/icons/search-heart-fill/)) debe ser procesado por un [codificador URL (URL encoder)](https://www.svgbackgrounds.com/tools/svg-to-css/) para "escapar" caracteres especiales. Por ejemplo, un color #ffffff debe convertirse en %23ffffff para que el navegador no lo interprete como un error de sintaxis.

`:nth-child(n)`: Esta pseudoclase permite seleccionar elementos basándose en su posición exacta dentro de un contenedor padre. Podremos reemplazar a la `n` por un número, como en `:nth-child(2)` y seleccionar solo al segundo hijo. Así también podemos usar patrones tales como `:nth-child(odd)` para tomar los impartes, o `:nth-child(3n)`para tomar cada tres elementos.


_ _ _ _ 

[clase-06](https://github.com/profesorfaco/troncal/blob/main/clase-06/README.md) ⇆ [clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md)
