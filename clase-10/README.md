# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 10 → 12 de mayo

### HTML y SVG

#### Datos para visualizar

Utilizaremos tres servicios oficiales para buscar información sobre la oferta académica en la carrera de **“Diseño”**:

* **Mi Futuro:** [Buscador de Carreras](https://mifuturo.cl/buscador-de-carreras/)

* **Acceso Mineduc:** Buscador de carreras [universitarias](https://acceso-sup.mineduc.cl/acceso-buscador/buscador-cu) y [técnico profesionales](https://acceso-sup.mineduc.cl/acceso-buscador/buscador-ctp)

* **Elige Carrera:** [Sitio oficial](https://www.eligecarrera.cl/)

Los resultados brutos de estas consultas han sido recopilados en las siguientes hojas de cálculo para su análisis:

* **Fuente 1:** [Mi Futuro](https://docs.google.com/spreadsheets/d/1uvcH8RWy_IIintY6mYKdDGM5LyZ33CvlVL7NcC5ajHI/)

* **Fuente 2:** [Acceso Mineduc](https://docs.google.com/spreadsheets/d/1hpy4oHQ7955Uzcg5Drsxu7vnb91zxZERT41Q0sr46jM/)

* **Fuente 3:** [Elige Carrera](https://docs.google.com/spreadsheets/d/1MriBowxXOUrFZwbtKZOcxdMNoRhDjIJzqyJj662S6Hw/)

**¿Por qué 3? Por la triangulación de datos**

En el análisis de datos, la **triangulación** es el proceso de validar una misma información a través de múltiples fuentes. Al igual que en la navegación costera o el uso de GPS, si tres puntos distintos coinciden en una ubicación, podemos tener una alta certeza de que el dato es correcto.

**¿Para qué sirve la triangulación de datos?** Fundamentalmente para confirmar la veracidad de la información, reducir el sesgo de una fuente única y asegurar que la base de nuestra visualización final sea confiable.

Para triangular con éxito, seguiremos estos pasos críticos antes de pasar a la etapa de diseño visual:

* **Limpieza (*Data Cleansing*):** Eliminar ruidos, formatos inconsistentes o caracteres especiales que impidan el cruce de datos entre tablas.

* **Mapeo:** Identificar columnas equivalentes (ej: ¿el campo "Institución" en la Fuente 1 es el mismo que "Nombre IES" en la Fuente 2?).

* **Deduplicación:** Detectar y gestionar registros que aparecen repetidos en las distintas fuentes para evitar inflar las cifras.

* **Detección de *Outliers* (Anomalías):** Identificar datos extraños o errores de captura. Estos hallazgos nos obligan a volver a la fuente original para determinar el dato verídico y garantizar la integridad de la visualización.

También podría ser necesario buscar más fuentes, y para ayudar en tal búsqueda puede considerarse el siguiente Catastro de Matrícula ReDis.

La **Red de Escuelas de Diseño de Universidades del Consejo de Rectores (ReDis)** constituye la instancia de coordinación académica que agrupa a las siguientes instituciones:

* Pontificia Universidad Católica de Chile
* Universidad Austral de Chile (UACh)
* Universidad Católica de Temuco
* Universidad Católica de Valparaíso (UV)
* Universidad de Antofagasta
* Universidad de Chile (UCh)
* Universidad de la Serena
* Universidad de Playa Ancha (UPLA)
* Universidad de Santiago de Chile (USACh)
* Universidad de Talca
* Universidad de Tarapacá
* Universidad de Valparaíso (UV)
* Universidad del Bío-Bío (UBB)
* Universidad Diego Portales (UDP)
* Universidad Tecnológica Metropolitana (UTEM)

El actual director de la ReDis, **Javier Lorca** (Académico de la Universidad de Talca), trabajando para cuantificar la realidad de la matrícula de diseño a nivel nacional, **aporta los siguientes datos**:

La formación en diseño representa el **1,66%** de la matrícula total del sistema superior, con un universo de **18.772 estudiantes** distribuidos en 208 programas. La participación por tipo de institución es:

* **Instituciones no universitarias (IP/CFT):** 51,1% (9.592 estudiantes).
* **Universidades:** 48,9% (9.180 estudiantes).

Dentro del segmento universitario, las instituciones pertenecientes al CRUCH **podrían concentrar a cerca de 5.800 estudiantes**. Esto sitúa la representatividad de la Red ReDis en un **30,9%** de la matrícula total nacional de la disciplina.

En mayo de 2026, la distribución de la matrícula en las instituciones que componen la ReDis es la que se detalla a continuación:

| Institución | Matrícula Reportada |
|:-----|:-----:|
| Universidad de Chile (UCh) | 834 |
| Universidad Tecnológica Metropolitana (UTEM) | 511 |
| Universidad de Santiago de Chile (USACh)* | 448 |
| Universidad de Valparaíso (UV) | 383 |
| Pontificia Universidad Católica de Valparaíso (PUCV) | 298 |
| Universidad del Bío-Bío (UBB) | 223 |
| Universidad Austral de Chile (USACh) | 216 |
| Universidad de Antofagasta | 171 |
| Universidad de Playa Ancha (UPLA) | 70 |
| **Subtotal instituciones catastradas** | **3.154** |

**Desglose USACh: 227 en Diseño en Comunicación Visual y 221 en Diseño Industrial.*

**Nota:** El remanente de **2.546 estudiantes** para completar el universo estimado corresponde a las instituciones de la ReDis cuyos datos específicos se encuentran en proceso de actualización o validación por sus respectos representantes.


#### HTML y SVG para visualizar los datos

Recordemos lo aprendido en la [clase 2](https://github.com/profesorfaco/troncal/tree/main/clase-02) sobre las capas de la web:

1. **¿Qué muestra el archivo? (HTML):** El *HyperText Markup Language* describe la **estructura**. Su bloque básico es el **elemento**, escrito entre etiquetas: `<etiqueta>contenido</etiqueta>`.

2. **¿Cómo se ve? (CSS):** Las *Cascading Style Sheets* describen la **presentación**. Su bloque básico es la **regla**, compuesta por un **selector** y pares de `propiedad: valor;`.

3. **¿Qué hace? (JavaScript):** El lenguaje de programación que controla el **comportamiento** y la interactividad. Lo hemos estado usando para hacer [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) de un [JSON](https://www.json.org/json-es.html) que preparamos, [validamos](https://jsonlint.com/) y finalmente alojamos en [myJson](https://myjson.online/). Con el resultado del [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), manipulamos el [DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model) para generar e inyectar dinámicamente elementos de HTML (o formas de SVG) que no estaban escritos originalmente en el código fuente de la página.

4. **¿Cómo representamos los gráficos? (SVG):** A diferencia de las imágenes rasterizadas (JPG/PNG), el *Scalable Vector Graphics* es un dialecto de XML que describe **gráficos vectoriales**. No pierde calidad al escalarse y puede ser manipulado directamente con etiquetas como `<circle>` o `<path>`.

**Para la vuelta del receso:**

Hoy comenzamos a trabajar para la tercera calificación (**martes 2 de junio**). Será un **trabajo individual con evaluación sumativa**, donde aplicaremos HTML, SVG y JavaScript para presentar comparaciones entre carreras de Diseño. Por ello, es fundamental iniciar hoy con una triangulación de datos sólida.

_ _ _ _ 

[clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md) ⇆ [clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md)
