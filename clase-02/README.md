# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 02 → 21 de agosto

## UNIDAD 1: Historia, actualidad y variables de percepción en la visualización

### **Evaluación Diagnóstica (Grupal):** Presentación y análisis crítico de hitos en la historia de la visualización de datos e información.

En la sesión de hoy nos corresponde revisar el terreno de estudio a través de sus grandes hitos históricos. Esta actividad diagnóstica nos permitirá entender desde dónde estamos examinando los datos y evaluar la capacidad de las estudiantes y los estudiantes para analizar críticamente cómo se ha estructurado la información visual a lo largo del tiempo. Cada equipo presentará su análisis, abriendo el debate en torno a lo que consideramos una visualización efectiva, honesta y con valor público. Al cierre de la jornada, se entregará el encargo para la primera evaluación sumativa.


---

### Organizar datos de forma verdadera y útil


El latín *datum* refiere a "lo que se da”. Corresponde agregar que el inglés tomó tal [*datum*](https://www.merriam-webster.com/dictionary/datum) como el singular de [*data*](https://www.merriam-webster.com/dictionary/data), razón por la que *data* se traduce como *datos*. En su uso habitual, *lo que se da* es útil para razonamientos, debates o cálculos.

En el ámbito legal local, corresponde diferenciar:

- **Dato estadístico**, el dato que, en su origen, o como consecuencia de su tratamiento, no puede ser asociado a un titular identificado o identificable.

- **Datos de carácter personal o datos personales**, los relativos a cualquier información concerniente a personas naturales, identificadas o identificables.

- **Datos sensibles**, aquellos datos personales que se refieren a las características físicas o morales de las personas o a hechos o circunstancias de su vida privada o intimidad, tales como los hábitos personales, el origen racial, las ideologías y opiniones políticas, las creencias o convicciones religiosas, los estados de salud físicos o psíquicos y la vida sexual.

Esta definiciones corresponden a la [LEY 19.628 | SOBRE PROTECCION DE LA VIDA PRIVADA](https://bcn.cl/2eqfn). 

- - - - - - - 

Volviendo a las etimologías: El griego *μετα* refiere a lo que está "más allá" o "después de" (esa es la razón de los primeros usos de la [metafísica](https://es.wikipedia.org/wiki/Andr%C3%B3nico_de_Rodas#G%C3%A9nesis_circunstancial_de_la_palabra_metaf%C3%ADsica), denominando a los tratados de Aristóteles que iban más allá de *τα φυσικά*).

Los metadatos van un paso más allá de lo que se da para los razonamientos, debates o cálculos. Este paso ofrece datos de los datos, con funciones descriptivas, estructurales o administrativas.

Así, por ejemplo, están los [metadatos de las fotos](https://www.format.com/es/magazine/resources/fotografia/photo-metadata): 

<img width="800" height="680" alt="matadatos-foto" src="https://github.com/user-attachments/assets/885760bb-c63b-485c-9cfd-4c01728522a6" />

#### El estándar EXIF (*Exchangeable Image File Format*)
Son metadatos incrustados directamente en archivos (JPEG, RAW) que revelan detalles invisibles a simple vista:

- **Detalles Técnicos**: Marca y modelo de la cámara, apertura (f-stop), velocidad de obturación, ISO y balance de blancos.

- **Información de Imagen**: Resolución (píxeles), tipo de compresión y la **fecha y hora** exacta de la captura.

- **Datos Geográficos**: Coordenadas GPS (si el dispositivo tenía la función activa).

- **Otros**: Software de edición utilizado y derechos de autor.

- - - - - - - - 

Luego son los datos los que aportan la primera letra a la pirámide DIKW (*Data*, *Information*, *Knowledge* y *Wisdom*), una pirámide o jerarquía que presenta un supuesto de progreso: 

> Desde los datos se estructura la información, y desde ahí se hace un conocimiento que, acumulado y puesto a prueba contra el tiempo, alcanza a la sabiduría.

Pero tal supuesto de progreso, tan positivista, es criticado ya desde hace algún tiempo:

- Frické, M. (2008). *The knowledge pyramid: a critique of the DIKW hierarchy* → https://journals.sagepub.com/doi/10.1177/0165551508094050

- Frické, M. H. (2018). *Data-information-knowledge-wisdom (DIKW) pyramid, framework, continuum* → https://link.springer.com/referenceworkentry/10.1007/978-3-319-32001-4_331-1

- Weinberger, D. (2010). *The Problem with the Data-Information-Knowledge-Wisdom Hierarchy* → https://hbr.org/2010/02/data-is-to-info-as-info-is-not

Criticado incluso antes del surgimiento de desafíos tales como:

- Los problemas relacionados con la recolección cuando sólo cuenta lo que se cuenta (ver [*Data Feminism*](https://data-feminism.mitpress.mit.edu/pub/tzq8d54o/release/1))

- Peters, M. A., Jandrić, P., & Green, B. J. (2024). *The DIKW model in the age of artificial intelligence* → https://www.researchgate.net/publication/378527476_The_DIKW_Model_in_the_Age_of_Artificial_Intelligence

_ _ _ _ 

La segunda letra en la pirámide DIKW refiere a la *Information*. Si se consideran las 5 referencias recién indicadas, podríamos pensar de distintos modos en la información.

1.  **Como Verdad Semántica**: Contenido bien formado y significativo que **debe ser verdadero**. Si es falso, es desinformación.

2.  **Como Estructura de Interacción**: Una organización de datos que permite a un agente (humano o máquina) detectar diferencias y entender su entorno.

3.  **Como Dato Útil**: Datos con **relevancia y propósito**, procesados para resolver una duda o tomar una decisión.

4.  **Como Construcción Social**: Un producto no neutral, influenciado por el contexto y las relaciones de poder de quien lo recolecta.

5.  **Como Respuesta a Preguntas**: El nivel que organiza los datos para responder al **Quién, Qué, Dónde y Cuándo**.

#### Intentando sintetizar las 5 modos de pensarla, tenemos que la **información** no es solo un conjunto de datos. Es el resultado de **organizar datos de forma verdadera y útil**, pero recordando siempre que esa organización depende de **quién tiene el poder** de contar la historia.


- - - - - 

Sobre esta base es que se presenta el segundo trabajo grupal. Esta vez con evaluación sumativa.


### Presentación del trabajo sobre sesgos, la propagación de información errónea y la desinformación

En las sesiones previas hemos desglosado la información como una construcción que **no es neutral**. En esta etapa, enfrentamos dos problemas críticos del ecosistema digital actual:

1.  **La recolección sesgada:** Cuando "solo cuenta lo que se cuenta", los datos reflejan el poder de quien los recolecta, invisibilizando realidades. Aquí aplicamos el concepto de **conocimiento situado** (Donna Haraway) y los principios del **Data Feminism** (Catherine D'Ignazio y Lauren Klein).

2.  **La propagación de la mentira:** La distinción técnica entre **información** (verídica), **información errónea** (*misinformation* o error sin dolo) y **desinformación** (*disinformation* o engaño deliberado).

Para abordar estos ejes, trabajaremos en una entrega **sumativa (20% de la nota final)**.

#### Temas de ejemplo

* **Sesgo Algorítmico en Políticas Públicas:** Análisis de visualizaciones basadas en IA que discriminan a grupos vulnerables.

* **Cartografía de la Invisibilidad:** Proyectos que mapean datos ignorados por instituciones oficiales (ej. crisis hídricas locales o violencia de género).

* **Anatomía de una noticia falsa:** Deconstrucción de una visualización viral que resultó ser contenido fabricado o manipulado.

#### Formatos de trabajo

* **Grupos:** 4 o 5 estudiantes.

* **Soporte:** Artículo web publicado como archivo `index.html` mediante **GitHub Pages**.

* **Nota:** Resultará de la media entre una nota por estructura del artículo y otra por criterios de evaluación del artículo.

#### Estructura del artículo

El documento debe mantener rigor académico con la estructura ofrecida en el [index.html](https://github.com/profesorfaco/troncal/blob/main/clase-02/index.html) preparado, con: 

1. **Resumen:** con Introducción, Objetivo, Métodos, Resultados y Conclusiones, presentándose a cada una en 50 palabras aprox. 

2. **Introduccion**: 250 a 350 palabras.

3. **Marco teórico:** 250 a 500 palabras.

4. **Métodos:** 250 a 350 palabras.

5. **Resultados**: 250 a 350 palabras y un [método de visualización](https://www.visual-literacy.org/periodic_table/periodic_table.html#)

6. **Conclusión**: 250 a 350 palabras.

7. **Referencias Bibliográficas:** Mínimo de 5, todas en formato **APA (7ma edición)**. En caso que las fuentes referidas en clases previas no sean suficientes, se evaluará positivamente la inclusión de alguna(s) de las siguientes:

  * Cairo, A. (2020). _How charts lie: Getting smarter about visual information_. W. W. Norton & Company.

  * Cairo, A. (2023). _The art of insight: How great visualization designers think_. Wiley.

  * Lupi, G., & Cox, P. (2024). _Speak data: Artists, scientists, thinkers, and dreamers on how we live our lives in numbers_. Princeton Architectural Press.

  * Meirelles, I. (2014). _La información en el diseño: Introducción a las historias, las teorías y las mejores prácticas para la visualización eficaz de información_. Parramon.

  * Schwabish, J. A. (2021). _Better data visualizations: A guide for scholars, researchers, and designers_. Columbia University Press.

  * Tufte, E. R. (2020). _Seeing with fresh eyes: Meaning, space, data, truth_. Graphics Press.

Cada indicación de estructura será evaluada hasta con 1,0 si se logra completamente.

#### Criterios de evaluación del artículo

* **Profundidad analítica e integración bibliográfica:** No es un resumen de prensa. Se exige un cruce crítico entre el caso de estudio y la bibliografía de las clases 01 a 04, con los complementos recién referidos.

* **Calidad Editorial:** Redacción clara, coherente y ortografía impecable.

* **Estándar Web:** Uso correcto de etiquetas HTML5 para jerarquizar el contenido (`<h1>`, `<h2>`, `<p>`, `<blockquote>`, `<cite>`, `<table>`).

Cada criterio puede ser evaluado hasta con 2,0 si se logra completamente, a lo que se agregará 1,0 de base. 


- - - - - 



[clase-01](https://github.com/profesorfaco/troncal/blob/main/clase-01/README.md) ⇆ [clase-03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md)
