# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 01 → 10 de marzo

### Presentación del curso y sus datos en hojas de cálculo


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

Será desde una tabla desde donde avanzaremos a una *configuración visual* para resolver varios encargos de diseño y visualización de información.

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

- - - - 

#### Referencias:

Boehm, G. (2007). Jenseits der Sprache? Anmerkungen zur Logik der Bilder. En su: Wie Bilder Sinn erzeugen (pp.34-53). Berlin University Press. 

Boehm, G. (2011). ¿Más allá del lenguaje? Apuntes sobre la lógica de las imágenes. En: Ana García Varas (Ed.). Filosofía de la imagen (pp.87-106). Ediciones Universidad Salamanca.

Koponen, J. & Hildén, J. (2019). Data Visualization Handbook. Aalto korkeakoulusäätiö.

- - - - 

[clase 02](https://github.com/profesorfaco/troncal/blob/main/clase-02/README.md)
