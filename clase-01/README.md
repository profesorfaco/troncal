# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 01 → 14 de agosto

## UNIDAD 1: Historia, actualidad y variables de percepción en la visualización

### Presentación del curso, lineamientos del aula-laboratorio y exploración de datos en hojas de cálculo. Introducción a los entornos de documentación y control de versiones: GitHub y ecosistema del curso.

Hoy ponemos en marcha la asignatura y fijamos los lineamientos normativos de nuestra aula-laboratorio. Antes de escribir código o abocarse al diseño, es indispensable que cada una y cada uno de ustedes comprenda cómo se gestionan los datos crudos en una hoja de cálculo tradicional. Asimismo, configuraremos nuestro entorno de trabajo utilizando GitHub, plataforma que servirá para la entrega de sus evaluaciones y constituirá el ecosistema real de su portafolio profesional a lo largo del curso.

---

### Datos crudos en una hoja de cálculo tradicional

Es necesario que usted ya conozca y maneje las siguientes fórmulas para contar en Google Sheets:

```text
=CONTAR()
=CONTARA()
=CONTAR.SI()
=CONTAR.SI.CONJUNTO()
=CONTAR.UNICO()
=CONTAR.BLANCOS()

```

📺 Si no las conoce, por favor tómese 12 minutos para revisar este video sobre [Contar en Google Sheets](https://www.youtube.com/watch?v=Z3B_B76HOAM).

A estas funciones debemos agregar las de **media** y **mediana**. Antes de utilizarlas, lea con atención este artículo: [¿Cuál es la diferencia entre media, mediana y el promedio?](https://www.productminds.io/blog-post/cual-es-la-diferencia-entre-media-mediana-y-el-promedio)

Tras la lectura, puede retomar las funciones correspondientes:

* La **media (o promedio)** se obtiene con [=AVERAGE()](https://support.google.com/docs/answer/3093615?hl=es)
* La **mediana** se obtiene con [=MEDIANA()](https://support.google.com/docs/answer/3094025?hl=es)

Como estos valores pueden ser insuficientes para caracterizar una muestra, avanzaremos hacia los **cuartiles**, considerando que:

* El **cuartil inferior (Q1)** es la mediana de la mitad inferior del conjunto de datos.
* El **cuartil superior (Q3)** es la mediana de la mitad superior del conjunto de datos.

Para calcularlos, la función correspondiente es [=CUARTIL()](https://support.google.com/docs/answer/3094041?hl=es). Con estas fórmulas automatizadas usted podrá estructurar y preparar rápidamente sus matrices de datos.

---

### El entorno de trabajo utilizando GitHub

GitHub es una plataforma de gestión de repositorios remotos basada en [Git](https://git-scm.com/) que facilita la persistencia, trazabilidad y administración de código fuente, permitiendo a profesionales de diversas disciplinas colaborar de forma estructurada.

Conceptos fundamentales clave para este curso:

1. **El Repositorio (Repo):** La carpeta raíz de su proyecto. Al crearlo, marque la opción **"Add a README file"**, que funcionará como la portada y presentación de su entrega.
2. **El Commit:** Una "fotografía" o captura de sus archivos en un punto exacto del tiempo que registra el historial de cambios.
3. **La Rama (Branch):** Una copia exacta para experimentar ideas o diseños sin alterar el trabajo de la rama principal (`main`).
4. **El Pull Request:** La solicitud formal para que su equipo o el docente revise los cambios hechos en su rama y, tras su aprobación, los fusione con el proyecto principal.
5. **Issues:** Una pestaña integrada para registrar errores, sugerencias y pendientes de diseño.

#### GitHub Pages

GitHub nos permite activar **GitHub Pages** en cada repositorio para publicar contenidos web de forma gratuita. Antes de activarlo, **asegúrese de tener un archivo llamado `index.html**` en la raíz del repositorio.

**Pasos para la activación:**

1. Vaya a su repositorio y entre a la pestaña **Settings** (barra superior).
2. En el menú lateral izquierdo (*Code and automation*), haga clic en **Pages**.
3. En *Build and deployment → Branch*, seleccione la rama `main` y la carpeta `/(root)`. Haga clic en **Save**.
4. Tras unos segundos de procesamiento, aparecerá un aviso indicando que el sitio está al aire (*live*) junto a su URL pública.
5. Vuelva a la pestaña **Code**, busque la sección **About** a la derecha, presione el engranaje, marque la opción **"Use your GitHub Pages website"** y guarde.

---

### Encargo: Evaluación Diagnóstica

#### Formato del trabajo

* **Grupos:** 4 o 5 estudiantes.
* **Soporte de presentación:** Un archivo `index.html` alojado en un repositorio de GitHub y publicado mediante **GitHub Pages**.

#### Instrucciones

1. **Selección del caso:** Cada grupo debe elegir **una visualización** desde las siguientes fuentes curatoriales:
* [Las 5 visualizaciones de datos más influyentes (Tableau)](https://www.tableau.com/es-es/learn/whitepapers/5-most-influential-visualizations)
* [5 gráficos que cambiaron el mundo (BBC)](https://www.bbc.com/mundo/noticias-65055393)
* [30 Data Visualizations That Changed the World (OthorAI)](https://blog.othor.ai/30-data-visualizations-that-changed-the-world-261be29bfa88)
* [Los datos son hermosos: 10 de los mejores ejemplos (Tableau)](https://www.tableau.com/es-mx/learn/articles/best-beautiful-data-visualization-examples)


2. **Contenido de la presentación:** Debe ser sintético, omitir datos biográficos irrelevantes y enfocarse en:
* **Contexto de la pieza:** ¿Qué problema resolvía? ¿Qué preguntas responde? (Quién, qué, dónde, cuándo).
* **Análisis de la Información:** Según las definiciones que revisaremos en la [Clase 03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md), ¿qué tipo de información predomina? (¿Verdad semántica, construcción social de poder, dato útil?).
* **Análisis Técnico:** ¿Qué datos personales o sensibles ([Ley 19.628](https://bcn.cl/2eqfn)) pudieron estar involucrados en su creación?
* **Legado:** ¿Cómo se utiliza esa misma lógica visual en casos contemporáneos?



#### Criterios de evaluación

* **Capacidad de Síntesis:** Ir directo al núcleo del problema y la visualización.
* **Referencia Comparativa:** Capacidad de encontrar y contrastar con un ejemplo actual análogo.
* **Sin efectos de PowerPoint:** La presentación **es** el propio `index.html`. Debe ser legible, contrastado y con un uso estructurado del diseño.
* **Código limpio:** Archivo HTML bien estructurado y con rutas de imágenes correctamente vinculadas.

---

### Código Base (`index.html`)

Utilicen la siguiente estructura semántica y de estilos para desarrollar su presentación diagnóstica:

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Diseño y visualización de información</title>

        <style>
            /* ESTO ES UN COMENTARIO. ABAJO ENCONTRARÁ MÁS COMENTARIOS */

            /*  RESET: Los navegadores traen márgenes y rellenos por defecto que cambian según el elemento. Los ponemos todos en cero para empezar desde una base pareja y controlar nosotros los espacios. "box-sizing: border-box" hace que el padding y el borde se cuenten DENTRO del ancho que definimos (así los cálculos son más simples). */

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            /* VARIABLES DE COLOR: Es posible guardar valores, tales como los colores, un solo lugar, así cualquier ajuste posterior sólo se repite una vez y no en tantas reglas como sea usado. */

            :root {
              --rojo: #cc0000;
              --gris-oscuro: #333;
              --gris-medio: #666;
              --gris-claro: #999;
              --borde: #ddd;
            }

            /* LO DEMÁS */

            body {
              font-family: Helvetica, Arial, serif;
              margin: 0;
              color: var(--gris-oscuro);
            }

            .contenedor {
              max-width: 800px;
              margin: 0 auto;
              padding: 0 3rem;
            }


            nav {
              padding: 1.25rem 0;
              font-size: calc(0.65rem + 0.1vw);
              letter-spacing: 0.075rem;
              text-transform: uppercase;
              box-shadow: 0 0 3px var(--borde);
            }

            nav > div.contenedor {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            div.nombre-curso {
              color: var(--gris-medio);
            }

            div.nombre-evaluacion {
              color: var(--gris-claro);
            }


            header {
              text-align: center;
              padding: 2rem 1rem;
            }

            h1 {
              margin-top: 2rem;
              font-size: 3rem;
              line-height: 1.2;
              color: var(--gris-oscuro);
            }

            h2 {
              font-size: 2rem;
              color: var(--rojo);
              margin-bottom: 1rem;
            }


            h3 {
              font-family: Arial, sans-serif;
              font-size: 0.9rem;
              color: var(--gris-medio);
              margin-bottom: 20px;w
            }

            h3 a {
              color: var(--gris-oscuro);
            }


            article {
              padding-bottom: 3rem;
            }


            p {
              font-size: 1rem;
              line-height: 1.6;
              margin-bottom: 1rem;
            }

            p > em{
              font-style: normal;
              font-weight: 800;
            }

            figure {
              margin: 2rem -2rem;
            }

            figure img {
              width: 100%;
              display: block;
              border: 1px solid var(--borde);
            }

            figcaption {
              font-family: Arial, sans-serif;
              font-size: 0.8rem;
              color: var(--gris-claro);
              text-align: center;
              margin-top: 0.2rem;
            }

            footer {
              box-shadow: 0 0 3px var(--borde);
              padding: 1.25rem 0;
              text-align: center;
              font-family: Arial, sans-serif;
              font-size: calc(0.65rem + 0.1vw);
              letter-spacing: 0.075rem;
              color: var(--rojo);
            }
        </style>
    </head>
    <body>
        <nav class="masthead">
            <div class="contenido contenedor">
                <span class="nombre-curso">Diseño y Visualización de Información</span>
                <span class="nombre-evaluacion">Evaluación diagnóstica</span>
            </div>
        </nav>

        <main class="contenedor">
            <header>
                <h1>Este es un gran título</h1>
                <h2>Esta es una bajada, que puede extender el título</h2>
                <h3>Por <a href="#">Nombre</a>, <a href="#">Nombre</a>, <a href="#">Nombre</a> y <a href="#">Nombre</a></h3>
            </header>

            <article>
                <p>
                    <em>Preámbulo. Evite caer en lo biográfico. Basta con entregar un contexto</em>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fringilla eros. Donec blandit lectus non est condimentum finibus. Sed mollis erat vel massa blandit, eget sagittis urna dictum. Etiam vitae lectus eu metus rutrum pulvinar. Nunc sagittis ante non volutpat egestas. Nunc placerat pharetra diam, quis facilisis ex. Nulla volutpat in mi a tincidunt.
                </p>

                <figure>
                    <img src="bloque.webp" alt="Describa la imagen a una persona ciega" />
                    <figcaption>Fuente: la pieza</figcaption>
                </figure>

                <p>
                    <em>Contexto de la pieza: ¿Qué problema resolvía? ¿Qué preguntas responde? (Quién, qué, dónde, cuándo)</em>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fringilla eros. Donec blandit lectus non est condimentum finibus. Sed mollis erat vel massa blandit, eget sagittis urna dictum. Etiam vitae lectus eu metus rutrum pulvinar. Nunc sagittis ante non volutpat egestas. Nunc placerat pharetra diam, quis facilisis ex. Nulla volutpat in mi a tincidunt.
                </p>

                <p>
                    <em>Legado: ¿Cómo se utiliza esa misma lógica visual en casos contemporáneos?</em> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed fringilla eros. Donec blandit lectus non est condimentum finibus. Sed mollis erat vel massa blandit, eget sagittis urna dictum. Etiam vitae lectus eu metus rutrum pulvinar. Nunc sagittis ante non volutpat egestas. Nunc placerat pharetra diam, quis facilisis ex. Nulla volutpat in mi a tincidunt.
                </p>
            </article>
        </main>

        <footer>Viernes 21 de agosto, 2026</footer>
    </body>
</html>
```

---

[clase 02](https://github.com/profesorfaco/troncal/blob/main/clase-02/README.md)
