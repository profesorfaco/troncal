# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 10 → 12 de mayo

### HTML y SVG

#### Datos para visualizar

Utilizaremos tres servicios oficiales para buscar información sobre la oferta académica en la carrera de **“Diseño”**:

* **Mi Futuro:** [Buscador de Carreras](https://mifuturo.cl/buscador-de-carreras/)

* **Acceso Mineduc:** Buscador [Universitario](https://acceso-sup.mineduc.cl/acceso-buscador/buscador-cu) y [Técnico](https://acceso-sup.mineduc.cl/acceso-buscador/buscador-ctp)

* **Elige Carrera:** [Sitio oficial](https://www.eligecarrera.cl/)

Los resultados brutos de estas consultas han sido recopilados en las siguientes hojas de cálculo para su análisis:

* **Fuente 1:** [Mi Futuro](https://docs.google.com/spreadsheets/d/1uvcH8RWy_IIintY6mYKdDGM5LyZ33CvlVL7NcC5ajHI/)

* **Fuente 2:** [Acceso Mineduc](https://docs.google.com/spreadsheets/d/1hpy4oHQ7955Uzcg5Drsxu7vnb91zxZERT41Q0sr46jM/)

* **Fuente 3:** [Elige Carrera](https://docs.google.com/spreadsheets/d/1MriBowxXOUrFZwbtKZOcxdMNoRhDjIJzqyJj662S6Hw/)

**¿Por qué 3? Por la triangulación de datos**

En el análisis de datos, la **triangulación** es el proceso de validar una misma información a través de múltiples fuentes. Al igual que en la navegación costera o el uso de GPS, si tres puntos distintos coinciden en una ubicación, podemos tener una alta certeza de que el dato es correcto.

**¿Para qué sirve la triangulación de datos?** Fundamentalmente para confirmar la veracidad de la información, reducir el sesgo de una fuente única y asegurar que nuestra visualización final sea confiable y ética.

Para triangular con éxito, seguiremos estos pasos críticos antes de pasar a la etapa de diseño visual:

* **Limpieza (*Data Cleansing*):** Eliminar ruidos, formatos inconsistentes o caracteres especiales que impidan el cruce de datos entre tablas.

* **Mapeo:** Identificar columnas equivalentes (ej: ¿el campo "Institución" en la Fuente 1 es el mismo que "Nombre IES" en la Fuente 2?).

* **Deduplicación:** Detectar y gestionar registros que aparecen repetidos en las distintas fuentes para evitar inflar las cifras.

* **Detección de *Outliers* (Anomalías):** Identificar datos extraños o errores de captura. Estos hallazgos nos obligan a volver a la fuente original para determinar el dato verídico y garantizar la integridad de la visualización.

#### HTML y SVG para visualizar los datos

Recordemos lo aprendido en la [clase 2](https://github.com/profesorfaco/troncal/tree/main/clase-02) sobre las capas de la web:

1. **¿Qué muestra el archivo? (HTML):** El *HyperText Markup Language* describe la **estructura**. Su bloque básico es el **elemento**, escrito entre etiquetas: `<etiqueta>contenido</etiqueta>`.

2. **¿Cómo se ve? (CSS):** Las *Cascading Style Sheets* describen la **presentación**. Su bloque básico es la **regla**, compuesta por un **selector** y pares de `propiedad: valor;`.

3. **¿Qué hace? (JavaScript):** El lenguaje de programación que controla el **comportamiento** y la interactividad. Lo hemos estado usando para hacer [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)) de un [JSON](https://www.json.org/json-es.html) que preparamos, luego [validamos](https://jsonlint.com/) y finalmente alojamos en [myJson](https://myjson.online/).

4. **¿Cómo representamos los gráficos? (SVG):** A diferencia de las imágenes rasterizadas (JPG/PNG), el *Scalable Vector Graphics* es un dialecto de XML que describe **gráficos vectoriales**. No pierde calidad al escalarse y puede ser manipulado directamente con etiquetas como `<circle>` o `<path>`.

**Para la vuelta del receso:**

Hoy comenzamos a trabajar para la tercera calificación (**martes 2 de junio**). Será un **trabajo individual con evaluación sumativa**, donde aplicaremos HTML, SVG y JavaScript para presentar comparaciones entre carreras de Diseño. Por ello, es fundamental iniciar hoy con una triangulación de datos sólida.

_ _ _ _ 

[clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md) ⇆ [clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md)
