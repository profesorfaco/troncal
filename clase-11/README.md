# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 11 → 27 de mayo

### ~~HTML y CSS: Dos lenguajes de descripción~~ Repaso y trabajo para la recta final

**Lea dos artículos muy breves**: 

- **https://www.productminds.io/blog-post/cual-es-la-diferencia-entre-media-mediana-y-el-promedio**

- **https://www.etilmercurio.com/em/este-es-un-articulo-promedio** (este artículo tiene un [tono de voz](https://www.nngroup.com/articles/tone-of-voice-dimensions/) muy informal, gracioso e irreverente, pero va al grano)

Con lo leído le deberían quedar claros los conceptos de **media** y **mediana**. 

Por favor aplique tal claridad al siguiente ejercicio: 

Primero [importe a Google Spreadsheet](https://support.google.com/docs/answer/3093339?hl=es-419) las **dimensiones de pantallas informadas en https://screensiz.es/**. 

Una vez importe las dimensiones, puede calcular:

- Media del ancho de pantallas en pixeles: 1390,287879
  
- Media del alto de pantallas en pixeles: 1484,651515

- Mediana del ancho de pantallas en pixeles: 1280

- Mediana del alto de pantallas en pixeles: 1280

Si usted quisiera decidir el tamaño más adecuado para las imágenes a toda pantalla: Media y mediana podrían ser insuficientes. 

Por tal insuficiencia, le conviene avanzar a los cuartiles, considerando que: 

- El cuartil superior (tercer cuartil; Q3) es la mediana de la mitad superior del conjunto de datos.

- El cuartil inferior (primer cuartil; Q1) es la mediana de la mitad inferior del conjunto de datos.

Ahora, de vuelta a las dimensiones de monitores publicadas en https://screensiz.es/monitor:

- El cuartil superior del ancho de pantalla es 1920 pixeles
  
- El cuartil superior del alto de pantalla es, también, 1920 pixeles

- El cuartil inferior del ancho de pantalla es 945 pixeles

- El cuartil inferior del alto de pantalla es 900 pixeles

Para obtener tales datos use, en [Google Spreadsheet](https://docs.google.com/spreadsheets/d/16AtMeMfXNRgx3TlRH09HCxLqR1x0ymhXWAwwY64niMk/edit?usp=sharing), la función explicada en https://support.google.com/docs/answer/3094041?hl=es-419&sjid=9125160580940894305-SA

Con los datos a la vista, le conviene decidir por el cuartil superior (1920 x 1920 pixeles como máximo para las imágenes): ¡Así podría quedar entre lo más habitual y el valor máximo! De tal manera no hará algo exageradamente grande y pesado, ni le quedará debiendo tantos pixeles a lo exageradamente ancho o alto.

Luego, ya trabajando con los 1920 pixeles como tope pare el ancho y/o alto de sus imágenes, podría mejorar los pesos de las mismas usando WebP: https://developers.google.com/speed/webp?hl=es

Puede obtener un WebP usando el “guardar para web” en [Photopea](https://www.photopea.com/), y luego puede reducir más el tamaño (o peso) del mismo archivo en [TinyPNG](https://tinypng.com/). Todo esto sin perder resolución en su imagen ni gastar un peso.

Con lo que ya leyó a aprendió, puede ajustar formato, dimensiones y tamaño (peso) de la sección que es imagen en su prototipo:

| N° |	Nombre | Imágenes que pueden ajustarse | Tamaño |
|:----:|:----------|:---------------------|:----:|
| 1	| Rodrigo Albornoz	| https://rodrigoalbornoz3.github.io/clase_troncal_10/viz/Ejemplofinall.png | 204 KB |
| 2	| Benjamín Alcántar	| https://benjaminalcantar.github.io/Clase10/viz/Eduardo%20Castillo.png | **2,8 MB** |
| 3	| Isabel Álvarez | https://isabelcarolina.github.io/Clase_10/viz/feedback-1.png | **4,8 MB** |
| 4	| Catalina Arismendi | https://caris2.github.io/Clase_10/viz/Vera_Perfil.png | 626 KB |
| 5	 | Lucas Assis | https://lucasassis7.github.io/clase-10/viz/ejemplo.png | 497 KB |
| 6	| Antonia Cáceres	| https://antoniacaceresn.github.io/clase10/viz/ejemplo.png | 947 KB | 
| 7	| Maximiliano Cantarero	 | https://maximilianocantarerog.github.io/Clase_10/viz/prueba2.png | 140 KB |
| 8	| Gabriel Castillo | https://gaboodesign.github.io/Troncal/Clases/Clase-10/viz/ejemplo.png | 406 KB |
| 9	| Valentina Cayuqueo | https://valech2.github.io/Clase10/viz/Visualizacion11.png | 840 KB |
| 10 | Jacob Gidi	| https://jacob-gidi.github.io/Clase-10/viz/Profesor-Ruben-Jacob.svg | **7,7 MB** |
| 11	| Isabel Hernández	| https://isabelh235.github.io/clase_10/viz/ejemplo.png | 122 KB |
| 12 |	Dani Oñate |	https://pockyjuno.github.io/Clase10_12Mayo/viz/Tarea_Troncal_06Mayo.png | 495 KB |
| 13 | Javiera Parra	| https://jp1702.github.io/feedback/viz/ejemplo.png | 599 KB |
| 14 | Martina Pezoa	| https://martinapezoa.github.io/Clase-10/viz/Clarisa3.png | 419 KB |
| 15	| Isidora Riffo	| https://isidorariffo.github.io/Clase_10/viz/Trabajo.png | **1,2 MB** |
| 16	| Fernanda Rivera	| https://fernanda2222.github.io/Clase_10/viz/Rebeca_Silvaaa.png | **1,7 MB** | 
| 17	| Ámbar Ruiz de Loizaga	| https://ambarruizzz.github.io/clase_10/viz/leonardo_soto.png | 153 KB |
| 18	| Maroa Tapia	| https://marotapia.github.io/Clase_10/viz/Trabajo.png | **2,3 MB** | 
| 19	| Fernanda Tejo	| https://fer1137.github.io/clase10/viz/Agregado.png | 124 KB |
| 20	| Javiera Paz Torres	| https://pazzzto.github.io/sitiowebclase10/viz/ejemplo.png | 289 KB |
| 21	| Renata Vargas	| https://bloo-omo.github.io/viz_2/viz/propuesta.png | **1,4 MB** |
| 22	| Iñigo Vasquez	| https://inigovasquez.github.io/clase_10/viz/ejemplo.png | 288 KB |
| 23	| Sofía Verdugo	| https://sofiaaaska.github.io/Clase_10_feedback/Petru_visualizacio%CC%81n_final.png | 238 KB |

Se marcan tamaño expresados en MB porque 1 MB equivale a 1000 KB. 

- - - - - - - 

Con que aprendió también puede volver a examinar los datos cuantitativos con más atención en los cuartiles.

Incluso, podría valorar más el [Diagrama de Cajas y Bigotes](https://datavizcatalogue.com/ES/metodos/diagrama_cajas_y_bigotes.html), donde se ponen a su vista resultados de cuentas que toman distancia del: «*Hay dos panes. Usted se come dos. Yo ninguno. Consumo promedio: un pan por persona*».

En el mismo [artículo desde donde se toma la frase de Nicanor Parra](https://www.etilmercurio.com/em/este-es-un-articulo-promedio) (con cambio de nombre y foto, por el tono de voz del medio), se escribe en la *Moraleja*:

> El promedio […] muchas veces no interpreta en forma correcta un conjunto de datos. Utilizar un promedio de esta forma puede causar desde errores jocosos a graves distorsiones en la comprensión de la realidad.

Tal moraleja se puede aplicar a otro caso, más conectado con lo que le queda a Usted resolver en la recta final del semestre: 

Considere un resultado real y específico de una evaluación docente, respondida en el Primer Semestre 2023 por 18 de 18 estudiantes, lo que es un sueño hecho realidad en términos de [representatividad para una encuesta](https://es.surveymonkey.com/mp/sample-size-calculator/):

Una de las afirmaciones de la dimensión de Gestión del Clima de Aula dice: *El / La docente se relacionó con las y los estudiantes sin utilizar estereotipos de género ni hacer comentarios sexistas*. Para tal afirmación la nota obtenida por el Profesor, en escala de 1 a 4, es de 3,5. 

Con ese 3,5 usted podría pensar que el curso no está totalmente de acuerdo con la afirmación. O, peor, que el curso considera que este Profesor pudo, en algún momento, utilizar estereotipos de género o hacer comentarios sexistas.

Pero son 12 estudiantes que marcan el máximo de completamente de acuerdo con que *el docente se relacionó con las y los estudiantes sin utilizar estereotipos de género ni hacer comentarios sexistas*, y sólo 1 está en el mínimo de totalmente en desacuerdo. Dicho de otro modo, aquí 12 califican al Profesor con 4 de 4, pero 1 le califica con 1 de 4.

Justo aquí es donde el 3,5 se hace insuficiente para interpretar en forma correcta un conjunto de datos; ya convendría complementarlo con la desviación estándar de 0,834 o con los cuartiles: 

Tanto el valor máximo (Q4), como el cuartil superior (Q3) y la mediana (Q2) dicen “completamente de acuerdo”, mientras el cuartil inferior (Q1) está entre “bastante de acuerdo” y “un poco de acuerdo”. Con un valor mínimo (Q0) en "totalmente en desacuerdo".

Con esto ya se puede repetir: Lo que cuenta, cuenta. Y lo que se repite puede conectarse con lo que sigue: **el modo en que se presenta lo que ya se contó también cuenta… si es que se busca evitar la propagación de información errónea y desinformación**. 

- - - - - - - 

Lo que queda para cerrar el semestre, decidiendo el 40% de su calificación final de asignatura, es darle "más vueltas" al loop del método Lean StartUp. Pero esta vuelta le corresponde hacerla desde lo aprendido de otras propuestas: 

![loop](https://github.com/user-attachments/assets/3d780d2e-ad9f-47fb-8639-10902117afca)

- - - - - - - 

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
