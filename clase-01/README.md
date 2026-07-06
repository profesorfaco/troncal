Aquí tiene la versión de la Clase 01 editada minuciosamente para asegurar un trato de usted riguroso y consistente en todo el texto, manteniendo el código HTML base intacto:

---

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
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Diseño y visualización de información</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,700&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet">
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --red: #cc0000;
      --dark: #333;
      --mid: #666;
      --light: #999;
      --border: #ddd;
      --serif: 'Newsreader', Georgia, serif;
      --sans: 'Roboto Condensed', Arial, sans-serif;
    }

    body { font-family: var(--serif); -webkit-font-smoothing: antialiased; }

    .wordmark {
      font-family: var(--sans);
      font-weight: 400;
      font-size: 22px;
      color: var(--red);
      text-decoration: none;
    }
    .nav-divider { width: 1px; height: 18px; background: var(--border); }
    .nav-section {
      font-family: var(--sans);
      font-size: 12px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--mid);
      text-decoration: none;
    }

    /* LAYOUT */
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* HEADER */
    header {
      text-align: center;
      padding: 48px 20px 32px;
    }
    .kicker {
      font-family: var(--sans);
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--mid);
      margin-bottom: 12px;
    }
    h1 {
      font-size: clamp(36px, 6vw, 58px);
      font-weight: 700;
      line-height: 1.1;
      color: var(--dark);
    }

    /* ARTICLE */
    article { padding: 28px 0 40px; border-top: 1px solid var(--border); }

    h2 {
      font-size: clamp(22px, 3.5vw, 30px);
      font-weight: 700;
      line-height: 1.2;
      color: var(--red);
      margin-bottom: 8px;
    }
    .byline {
      font-family: var(--sans);
      font-size: 13px;
      color: var(--mid);
      margin-bottom: 20px;
    }
    .byline strong { color: var(--dark); }

    p {
      font-size: 17px;
      line-height: 1.75;
      margin-bottom: 18px;
      font-weight: 400;
    }

    /* FIGURE */
    figure { margin: 28px -100px 24px; }
    figure img { width: 100%; display: block; border: 1px solid var(--border); }
    figcaption {
      font-family: var(--sans);
      font-size: 12px;
      color: var(--light);
      margin-top: 6px;
      text-align: center;
    }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--border);
      padding: 24px 20px;
      text-align: center;
      font-family: var(--sans);
      font-weight: 400;
      font-size: 18px;
      color: var(--red);
    }
  </style>
</head>
<body>

  <div class="container">

    <header>
      <p class="kicker">Diseño y visualización de información</p>
      <h1>Este es un gran título<br>largo de la cuestión</h1>
    </header>

    <article>
      <h2>Una pequeña bajada</h2>
      <p class="byline">Por <strong>Nombre</strong>, <strong>Nombre</strong>, <strong>Nombre</strong> y <strong>Nombre</strong></p>

      <p>The escalating U.S.–Israeli war with Iran and Tehran's retaliation against Gulf neighbours have severely disrupted Middle Eastern energy infrastructure and global oil and gas flows. Israeli strikes on Iran's South Pars gas field and the Asaluyeh processing hub on March 18 triggered a wave of retaliatory attacks across the Gulf that hit refineries, gas plants and export terminals in Saudi Arabia, Kuwait, Qatar, the United Arab Emirates and Bahrain.</p>

      <figure>
        <img src="bloque.webp" alt="Map of affected energy infrastructure">
        <figcaption>Source: Institute for the Study of War</figcaption>
      </figure>

      <p>Multiple key facilities have been damaged or shut. Drone and missile attacks struck refineries and LNG plants in Saudi Arabia, Kuwait and Qatar, while missile debris forced the shutdown of the UAE's massive Habshan gas complex and repeated attacks targeted its Fujairah export terminal.</p>
      <p>The sites now under threat collectively account for a significant portion of global reserves, underscoring the scale of the shock to energy markets and consumers.</p>
    </article>

  </div>

  <footer>Diseño y visualización de información</footer>

</body>
</html>

```

---

[clase 02](https://github.com/profesorfaco/troncal/blob/main/clase-02/README.md)
