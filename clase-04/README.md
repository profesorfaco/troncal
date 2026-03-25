# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 04 → 31 de marzo

### Trabajo grupal, con evaluación diagnóstica → Sobre hitos en la historia de la visualización de datos e información

Hoy se presenta el análisis de una visualización de datos influyente utilizando el marco teórico de las clases previas, identificando cómo la estructura de los datos se transforma en información con propósito.

#### FORMATO DEL TRABAJO

* **Grupos:** 4 o 5 estudiantes.
* **Soporte de presentación:** Un archivo `index.html` alojado en un repositorio de GitHub y publicado en **GitHub Pages**.

#### INSTRUCCIONES DEL TRABAJO

**1. Selección del caso**: Cada grupo debe elegir **una visualización** de las siguientes fuentes curatoriales:

* [Las 5 visualizaciones de datos más influyentes de todos los tiempos (Tableau)](https://www.tableau.com/es-es/learn/whitepapers/5-most-influential-visualizations)
* [5 gráficos que cambiaron el mundo... para bien y para mal (BBC)](https://www.bbc.com/mundo/noticias-65055393)
* [30 Data Visualizations That Changed the World (OthorAI)](https://blog.othor.ai/30-data-visualizations-that-changed-the-world-261be29bfa88)
* [Los datos son hermosos: 10 de los mejores ejemplos de visualización de datos (Tableau)](https://www.tableau.com/es-mx/learn/articles/best-beautiful-data-visualization-examples)

**2. Contenido de la presentación**: La presentación debe ser sintética, evitando datos biográficos irrelevantes. Debe enfocarse en:

* **Contexto de la pieza:** ¿Qué problema intentaba resolver? ¿Qué "preguntas" responde? (Quién, qué, dónde, cuándo).
* **Análisis de la Información:** Según las 5 definiciones de la [Clase 03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md), ¿qué tipo de información predomina? (¿Verdad semántica, construcción social de poder, dato útil?).
* **Análisis Técnico:** ¿Qué datos personales o sensibles ([Ley 19.628](https://bcn.cl/2eqfn)) podrían haber estado involucrados en su creación?
* **Legado:** ¿Cómo se ha utilizado ese modo de visualizar (ej: mapa de puntos, gráfico de áreas polares, etc.) en casos contemporáneos?

#### CRITERIOS DE LA EVALUACIÓN (DIAGNÓSTICA)

* **Capacidad de Síntesis:** Ir directo al "corazón" de la visualización.
* **Aplicación teórica:** Uso correcto de términos como *metadatos*, *datos sensibles*, *DIKW* y *construcción social*.
* **Referencia Comparativa:** Capacidad de encontrar un ejemplo actual que use la misma lógica visual.
* **Sin efectos de PowerPoint:** La presentación **es** el `index.html`. Debe ser legible, con buen contraste y uso estratégico de imágenes.
* **Código limpio:** El archivo `index.html` debe estar correctamente estructurado y vinculado a las imágenes correspondientes.

- - - -   

La base de su `index.html` para la evaluación diagnóstica:

```
<!DOCTYPE html>
<html lang="en">
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



[clase-03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md) ⇆ [clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md)
