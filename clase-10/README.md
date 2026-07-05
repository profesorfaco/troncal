# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 10 → 23 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Coordenadas cartesianas en un ViewPort: Estructura y codificación de gráficos vectoriales escalables (SVG) integrados de forma nativa en HTML.

En la sesión de hoy cambiaremos la forma de proyectar el espacio gráfico en la pantalla. Analizaremos cómo opera el plano geométrico del *ViewPort* web y aprenderán a codificar y estructurar Gráficos Vectoriales Escalables (SVG) directamente dentro del código HTML. Dejaremos de abordar los archivos vectoriales como simples imágenes estáticas importadas por las ilustradoras y los ilustradores para entenderlos ahora como código limpio y manipulable por cada una y cada uno de ustedes, compuesto por nodos, líneas, polígonos y coordenadas.

---

#### HTML y SVG para visualizar los datos

Recordemos:

1. **¿Qué muestra el archivo? (HTML):** El *HyperText Markup Language* describe la **estructura**. Su bloque básico es el **elemento**, escrito entre etiquetas: `<etiqueta>contenido</etiqueta>`.

2. **¿Cómo se ve? (CSS):** Las *Cascading Style Sheets* describen la **presentación**. Su bloque básico es la **regla**, compuesta por un **selector** y pares de `propiedad: valor;`.

3. **¿Qué hace? (JavaScript):** El lenguaje de programación que controla el **comportamiento** y la interactividad. Lo hemos estado usando para hacer [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) de un [JSON](https://www.json.org/json-es.html) que preparamos, [validamos](https://jsonlint.com/) y finalmente alojamos en [myJson](https://myjson.online/). Con el resultado del [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), manipulamos el [DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model) para generar e inyectar dinámicamente elementos de HTML (o formas de SVG) que no estaban escritos originalmente en el código fuente de la página.

4. **¿Cómo representamos los gráficos? (SVG):** A diferencia de las imágenes rasterizadas (JPG/PNG), el *Scalable Vector Graphics* es un dialecto de XML que describe **gráficos vectoriales**. No pierde calidad al escalarse y puede ser manipulado directamente con etiquetas como `<circle>` o `<path>`.

**Para la vuelta del receso:**

Hoy comenzamos a trabajar para la tercera calificación (**martes 2 de junio**). Será un **trabajo individual con evaluación sumativa**, donde aplicaremos HTML, SVG y JavaScript para presentar comparaciones entre carreras de Diseño. Por ello, es fundamental iniciar hoy con una triangulación de datos sólida.

_ _ _ _ 

[clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md) ⇆ [clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md)
