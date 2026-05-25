# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 12 → 2 de junio

### Aplicando HTML, SVG y JavaScript

La evaluación sumativa depende de dos notas. Ambas notas comparten un punto base, que se compone de la siguiente manera: 

→ **0,5** por crear un repositorio en github con un README.md, activar GitHub Pages. Tomar la dirección donde se despliega la página (que mientras tanto sólo muestra el contenido en su README.md). Ingresarla a la MEDIO PUNTO BASE DE LA TERCERA NOTA antes de que den las 15:30 hrs.

→ **0,5** por defender su propuesta individual, ya operativa en la dirección informada, a partir de las 17:00 hrs.

- - - - - 

**Primera nota (6,0 + 1,0 base)**: 

| Criterio y logro esperado | Puntaje |
|:---------|:-----:|
| En el lugar correspondiente, un subtítulo plantea una pregunta clara, directa y bien formulada sobre la temática elegida | **1,0** |
| Se responde a la pregunta con una visualización de datos bien implementada con chart.js | **1,0** |
| Se explica la pertinencia del tipo de gráfico elegido (barras, líneas, etc.) con apoyo en el Catálogo de Visualización de Datos o la Tabla Periódica de Métodos de Visualización, que está debidamente vinculado. | **1,0** | 
| Se cierra con un comentario para la respuesta visualizada. | **1,0** | 
| Ambas preguntas y respuestas en la página se complementan para presentar un único relato, con encabezado correspondiente en lo visual y textual. | **2,0** |

- - - - -

**Segunda nota (6.0 + 1.0 base)**: 

| Criterio de Evaluación | Descriptor de logro esperado | Puntaje |
|:----|:----|:----:|
| **Modularidad y Separación de Código** | Separa correctamente el código fuente del proyecto, aislando la estructura en `index.html`, los estilos en `style.css` y la lógica del gráfico en `script.j`s. Vincula los archivos de forma externa sin dejar código embebido. | **1,0** | 
| **Respeto a las restricciones de CSS** | El código dentro de la etiqueta `<style>` mantiene su orden y definiciones iniciales. Se aceptan modificaciones cuando son funcionales a la presentación de estructura y semántica | **0,5** |
| **Estructura y Semántica HTML** | Integra el nuevo contenido respetando la jerarquía (`<h4>`, `<p>`, `<ul>`). La visualización en este nuevo contenido está envuelta en una estructura `<figure>` que incluye su `<canvas>` con una ID única y su respectivo `<figcaption>` con vinculos a la fuente original de los datos. | **1,0** |
| **Calidad de los Datos y Fuentes** | Reemplaza los nombres de la autoría original, actualiza las fuentes al final del documento con datos reales (ej. SIES, Mifuturo, CNA) e incluye hipervínculos válidos y funcionales hacia ellas. |  **1,5** |
| **Implementación Técnica de Chart.js** | Inicializa un segundo objeto `new Chart()` apuntando a la nueva ID del `<canvas>`. Configura correctamente el tipo de gráfico, los datasets y adapta las opciones (escalas, tooltips) sin generar errores en la consola. | **2,0** |

_ _ _ _ 

[clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md) ⇆ [clase-13](https://github.com/profesorfaco/troncal/blob/main/clase-13/README.md)
