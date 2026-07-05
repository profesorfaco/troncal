# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 04 → 04 de septiembre

## UNIDAD 1: Historia, actualidad y variables de percepción en la visualización

### Retroalimentación grupal y corrección de las primeras entregas.

La sesión de hoy se define como un espacio de taller puro y revisión colectiva. Tras examinar las primeras entregas evaluadas, las profesoras, los profesores, las ayudantes y los ayudantes abriremos una jornada dedicada por completo a resolver dudas, corregir errores de interpretación comunes y nivelar los estándares de análisis que la asignatura exige. Nos abocaremos a la revisión metodológica mediante el estudio de casos, asegurando que todas y todos ustedes asimilen una base sólida antes de transitar hacia las unidades técnicas de código que se aproximan.

---

### Diseño y visualización de información:

Hemos venido preguntádonos como los datos y la información pueden presentarse en una *configuración visual*.


Lo de *configuración visual* del párrafo anterior viene de la siguiente cita:

> En una línea de desarrollo totalmente distinta [del arte visual no figurativa], surgió, bien entrada la segunda mitad del siglo XVIII, la forma de imagen cognitiva de mayor éxito y que todavía hoy es omnipresente: la gráfica. **La gráfica es a menudo, y pese a su fuerte connotación cognitiva, una verdadera imagen, porque permite visualizar grandes magnitudes abstracta de modo casi inimaginable**. Traslada lo más abstracto (por ejemplo, los datos de volumen de intercambio, de tonelajes, de bienes, de frecuencias en relación con un intervalo temporal, etc.) a una **configuración visual** que *muestra* lo que nunca podría verse sin más en columnas de números. Con la gráfica la representación estadística se transformó radicalmente, al convertir la cantidad estadística en una cualidad visible. La condición de esto es que el campo de la imagen no se ha de considerar solo como una superficie estructurada, sino como una función de las coordenadas *x* e *y*, la abscisa y la ordenada, cuya relación matemática se muestra mediante la «solución» sobre el plano (Boehm, 2011, pp.104-105)

Podría ser que "gráfica" no haya sido la mejor traducción para el texto original en alemán, donde la palabra usada es "Diagramm":

> In einer ganz anderen Entwicklungslinie entstand wohl in der zweiten Hälfte des 18. Jahrhunderts die erfolgreichste und bis heute omnipräsente kognitive Bildform, nämlich das Diagramm. **Diagramme sind oftmals starke, wenn auch betont kognitive Bilder, weil sie eine ganz unglaubliche Veranschaulichung abstrakter Zahlengrössen zustande bringen können**. Sie versetzen das Abstrakteste, zum Beispiel Angaben über Handelsvolumen, Tonnage, Güter, Frequenzen in Bezug auf Zeitspannen etc. in eine **visuelle Konfiguration**, die zeigt, was man aus blassen Zahlenkolonnen niemals lesen könnte. Mit dem Diagramm verändert sich die Darstellung von Statistiken grundlegend. Das statistische Quantum springt um in ein anschauliches Quale. Voraussetzung war, dass das Bildfeld nicht nur als gegliederte Fläche, sondern als Funktion der Koordinaten x und y, also von Abszisse und Ordinate, betrachtet wurde, deren jeweilige mathematische Beziehung sich als »Lösung« auf der Fläche verbildlicht (Boehm, 2007, pp.51-52)

Podría ser que el alemán "Diagramm" quede más cerca del inglés "chart". 

Podría ser que tal palabra en inglés conecte mejor con un español-de-Chile señalando un "gráfico de …", tal como en "gráfico de barras", "gráfico de líneas" o "gráfico de torta". Gráficos que suelen encontrar su origen documentado en la obra de [William Playfair](https://notes.math.ca/en/article/william-playfairs-statistical-graphs/). 

Y los gráficos de William Playfair pueden conectarse con [*Las 5 visualizaciones de datos más influyentes de todos los tiempos*](https://www.tableau.com/es-es/learn/whitepapers/5-most-influential-visualizations).

Es evidente que esas 5 visualizaciones no se limitan a ser "gráfico de …". 

Pero podemos partir en los "gráficos de…" para ir [más allá de la presentación visual de datos cuantitativos en una forma esquemática](https://www.visual-literacy.org/periodic_table/periodic_table.html), considerando que: *The purpose of [visualization](https://datavizcatalogue.com/ES/buscar.html) is insights, not pictures* (Ben Shneiderman, como se cita en [Koponen & Hildén, 2019, p.190](https://www.datavizhandbook.info/)).

Ahora veamos si obtenemos algún *insight* con las visualizaciones de la [caracterización del curso](https://www.u-cursos.cl/fau/2025/2/AUD5V027/1/integrantes/stats).

Y comparemos cada *insight* con lo que cuenta y lo que para ustedes cuenta.


#### Referencias:

Boehm, G. (2007). Jenseits der Sprache? Anmerkungen zur Logik der Bilder. En su: Wie Bilder Sinn erzeugen (pp.34-53). Berlin University Press. 

Boehm, G. (2011). ¿Más allá del lenguaje? Apuntes sobre la lógica de las imágenes. En: Ana García Varas (Ed.). Filosofía de la imagen (pp.87-106). Ediciones Universidad Salamanca.

Koponen, J. & Hildén, J. (2019). Data Visualization Handbook. Aalto korkeakoulusäätiö.



- - - - -


### Entendiendo el archivo index.html

Para comprender cómo se construye un archivo que se desplegará en un navegador como página web, debemos responder a cuatro preguntas fundamentales:

#### 1. ¿Qué muestra el archivo en el navegador web?

Esta pregunta se responde con **HTML** (*HyperText Markup Language*): Lenguaje que describe la **estructura** y el contenido. Su bloque constructivo básico es el **elemento**, el cual se escribe entre etiquetas: `<etiqueta>contenido</etiqueta>`.

* **Para profundizar:** [Bases de HTML en MDN](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics).

#### 2. ¿Cómo se ve lo que muestra el navegador web?

Esta pregunta se responde con **CSS** (*Cascading Style Sheets*): Lenguaje que describe la **presentación** y el diseño visual. Su bloque constructivo básico es la **regla**, la cual se compone de un **selector** seguido de llaves `{…}` entre las que se definen pares de `propiedad: valor;`.

* **Para profundizar:** [Conceptos básicos de CSS en MDN](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics).

#### 3. ¿Qué hace el archivo mientras se muestra en el navegador?

Esta pregunta se responde con **JS** (**JavaScript**): Lenguaje de programación que controla el **comportamiento** y la interactividad. Permite realizar tareas dinámicas basándose en lógica, eventos y el uso de bibliotecas o *frameworks*.

* **Para profundizar:** [¿Qué es JavaScript? en MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

#### 4. ¿Cómo se representan los gráficos y las formas en el navegador?

Esta pregunta se puede responder con **imágenes rasterizadas** (JPG, PNG o WEBP), pero en este contexto conviene responderla con **SVG** (*Scalable Vector Graphics*): Dialecto basado en XML que describe **gráficos vectoriales**. A diferencia de los píxeles, el SVG no pierde calidad al cambiar de tamaño y puede ser manipulado directamente mediante código usando etiquetas de forma como `<circle>` o `<path>`.

* **Para profundizar:** [Guía de SVG en MDN](https://developer.mozilla.org/es/docs/Web/SVG).

**En resumen**, un archivo **index.html** constituye la base de cualquier sitio web al integrar armónicamente cuatro pilares tecnológicos: el **HTML** define la estructura y el contenido esencial; el **CSS** se encarga de la estética y el diseño; el **JS** aporta la lógica y el comportamiento interactivo; y el **SVG** permite la inclusión de gráficos vectoriales que mantienen su nitidez en cualquier resolución y pueden ser programados directamente.



- - - - -

[clase-03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md) ⇆ [clase-05](https://github.com/profesorfaco/troncal/blob/main/clase-05/README.md)
