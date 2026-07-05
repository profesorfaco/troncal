# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 01 → 14 de agosto

## UNIDAD 1: Historia, actualidad y variables de percepción en la visualización

### Presentación del curso, lineamientos del aula-laboratorio y exploración de datos en hojas de cálculo. Introducción a los entornos de documentación y control de versiones: GitHub y ecosistema del curso.

Hoy ponemos en marcha la asignatura y fijamos los lineamientos normativos de nuestra aula-laboratorio para las diseñadoras y los diseñadores que integran este curso. Antes de desarrollar cualquier línea de código o abocarse al diseño, es indispensable que cada una y cada uno de ustedes comprenda cómo se gestionan y ordenan los datos crudos en una hoja de cálculo tradicional. Asimismo, configuraremos el entorno de trabajo utilizando GitHub, herramienta que no solo servirán para la entrega de sus evaluaciones, sino que constituirán el ecosistema real donde residirá su portafolio profesional a lo largo del curso.

---

### Datos crudos en una hoja de cálculo tradicional

Es necesario que usted ya conozca algunas fórmulas para contar en “Hojas de Cálculos” de Google:

```
=CONTAR()
=CONTARA()
=CONTAR.SI()
=CONTAR.SI.CONJUNTO()
=CONTAR.UNICO()
=CONTAR.BLANCOS()
```

En caso no las conozca, por favor tómese 12 minutos para ver este video sobre [Contar en Google Sheets](https://www.youtube.com/watch?v=Z3B_B76HOAM).


A tales funciones corresponde agregar las de **media** y **mediana**, pero antes de hacerlo es recomendable leer este artículo: https://www.productminds.io/blog-post/cual-es-la-diferencia-entre-media-mediana-y-el-promedio

Después de la lectura del artículo podemos retomar las funciones: 

- la media (o promedio) en “Hojas de Cálculos” de Google se obtiene con [=AVERAGE()](https://support.google.com/docs/answer/3093615?hl=es-419) 

- la mediana se obtiene con [=MEDIANA()](https://support.google.com/docs/answer/3094025?hl=es-419&sjid=1363567124637463342-SA)

Pero media y mediana aún podrían ser insuficientes. Por tal insuficiencia conviene avanzar a los cuartiles inferior y superior, considerando que: 

- El cuartil inferior (primer cuartil; Q1) es la mediana de la mitad inferior del conjunto de datos.

- El cuartil superior (tercer cuartil; Q3) es la mediana de la mitad superior del conjunto de datos.

Para el cálculo de los cuartiles puede usar la función es [=CUARTIL()](https://support.google.com/docs/answer/3094041?hl=es-419&sjid=9125160580940894305-SA). 

Conociendo tales fórmulas podremos preparar rápidamente algunas tablas con datos. 

- - - - - 


### El entorno de trabajo utilizando GitHub

GitHub es una **plataforma de gestión de repositorios remotos** que abstrae las complejidades técnicas de [Git](https://git-scm.com/) para facilitar la persistencia, trazabilidad y administración integral de cualquier base de código fuente. 

Al proporcionar una interfaz intuitiva y herramientas de visualización, GitHub trasciende la ingeniería informática; permite que investigadores y profesionales de diversas disciplinas colaboren mediante flujos de trabajo estructurados (*branching* y *pull requests*), garantizando la integridad de los datos y la consolidación de un portafolio técnico tanto en el ámbito académico como profesional.

A continuación, se presentan los conceptos fundamentales para trabajar con GitHub, los cuales serán claves en este curso:

1.  **El Repositorio (Tu Carpeta Inteligente):** Piensa en el "Repo" como la carpeta raíz de tu proyecto. Al crear uno, marca la opción **"Add a README file"**. Este será tu documento de presentación donde explicas de qué trata el proyecto en lenguaje sencillo.

2.  **El Commit (La Foto del Momento):** A diferencia de un archivo de Word que guardas repetidamente, en GitHub realizas un *Commit*. Es como tomar una fotografía de tus archivos en un punto exacto.

3.  **La Rama o "Branch" (Tu Borrador de Riesgo):** Si quieres probar una idea nueva sin alterar el trabajo principal, crea una *Branch*. Es una copia exacta donde puedes experimentar. Si el resultado es erróneo, se elimina; si es exitoso, se solicita su integración.

4.  **El Pull Request (La Revisión por Pares):** Es el corazón de la colaboración. Cuando terminas una tarea en tu rama, generas un *Pull Request (PR)*. Es la solicitud formal para que el equipo revise tus cambios y, tras su aprobación, los fusione con el proyecto principal.

5.  **Issues (Tu Lista de Tareas):** No todo es código. Usa la pestaña **Issues** para registrar errores, sugerencias o tareas pendientes. Funciona como un tablero de gestión vinculado directamente a la evolución del proyecto.

**Importante:** GitHub no es una herramienta exclusiva para programadores. En disciplinas como las Ciencias Sociales o la Biología, resulta invaluable para gestionar bases de datos (CSV), manuscritos en Markdown o protocolos de laboratorio, asegurando un historial de versiones inalterable que evita la pérdida accidental de información.

### GitHub Pages

GitHub ofrece la posibilidad de activar **GitHub Pages** por cada repositorio, permitiendo publicar contenidos de forma gratuita. Antes de activarlo, **asegúrate de tener al menos un archivo llamado `index.html`** o, por defecto, un `README.md` en la raíz de tu repositorio; este será la "portada" de tu sitio web.

Sigue estos pasos para la activación:

1.  **Ingresa a la Configuración:** Entra a tu repositorio y haz clic en la pestaña **Settings**, ubicada en la barra superior.

2.  **Localiza la sección de Pages:** En el menú lateral izquierdo, bajo el apartado *Code and automation*, haz clic en **Pages**.

3.  **Define la Fuente de Despliegue:** En el apartado *Branch*, asegúrate de que esté seleccionada la opción *Deploy from a branch*.
    * Selecciona la rama: Normalmente elegirás la rama `main`.
    * Selecciona la carpeta: Elige `/(root)`.
    * Haz clic en el botón **Save**.

4.  **Espera el Procesamiento:** GitHub comenzará a construir el servidor. Cuando esté listo, verás un aviso resaltado indicando que el sitio está al aire (*live*) junto a su dirección URL.

5.  **Vincula tu URL en la portada:** Vuelve a la pestaña principal (**Code**). En la barra lateral derecha busca la sección **About** y presiona el icono del engranaje. Marca la opción **"Use your GitHub Pages website"** y guarda los cambios.



- - - - - 

### Encargo


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


- - - - 

[clase 02](https://github.com/profesorfaco/troncal/blob/main/clase-02/README.md)
