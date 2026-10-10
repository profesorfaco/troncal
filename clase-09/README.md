# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 09 → 16 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Prototipado rápido y taxonomías visuales: Uso de *RawGraphs et al.*

El cierre de la segunda unidad, de la clase recién pasada, nos entrega algunos resultados destacables en la integración de las dos unidades tratadas hasta la fecha:

|	N°	|	Nombre	|	GitHub Pages | Repositorio en GitHub |
|:--------:|:---------|:---------|:--------------------|
|	1	|	Antonia Padilla Ortega	|	https://evorakie.github.io/TROCAL_E2/| https://github.com/evorakie/TROCAL_E2/ | 
|	2	|	Giulia Pepe Vargas	|	https://catsgugu.github.io/Clase-8/ | https://github.com/catsgugu/Clase-8/ |
|	3	|	Veronica Soto Sandoval	|	https://ronnistp.github.io/PRUEBA_09-10/ | https://github.com/ronnistp/PRUEBA_09-10/ |

El destaque guarda relación con el cumplimiento de la siguiente indicación:

> En la lista sin numerar que está bajo el subtítulo de *Claves de la edición 2026 para Arte y Diseño*, agregue un tercer ítem sobre el caso chileno que desplace al actual tercero (*Metodología basada en reputación*) al cuarto lugar. El nuevo punto debe destacar que solo 3 instituciones chilenas figuran en la medición. No limite el ítem a los datos; considere que *lo que se cuenta, cuenta* frente a una [Latinoamérica con sólo 24 instituciones de 6 países](https://www.topuniversities.com/university-subject-rankings/art-design?region=Latin%20America&countries=mx%2Ccl%2Cbr%2Cco%2Car%2Cpe), mientras [*United Kingdom* presenta 34](https://www.topuniversities.com/university-subject-rankings/art-design?items_per_page=50&region=Europe&countries=gb). La etiqueta unificada de *UK*, que es referente del centro del mundo cartográfico, opera como un bloque homogéneo que infla la representatividad central de la *metrópoli*, difuminando las tensiones identitarias entre sus naciones constitutivas y acentuando la brecha de visibilidad frente a nuestra región

Lo valioso de estos tres casos es que no se limitaron a una reproducción autómata de la indicación dada ni delegaron el razonamiento al primer resultado que entrega un _prompt_ genérico. Entendieron las herramientas de inteligencia artificial como lo que son: valiosos asistentes de exploración, pero jamás un reemplazo para el criterio, la postura reflexiva y la voz propia.

En un entorno académico donde el costo, el tiempo y el esfuerzo invertidos en formarse buscan desarrollar un pensamiento analítico de alto nivel, la IA es un medio, no el cerebro de la operación. Cada uno de estos trabajos evidencia cómo el discernimiento humano permite abordar el problema desde ángulos complementarios y profundos:

1. **La deconstrucción del criterio de clasificación**: Enfocándose en cómo la agrupación arbitraria del Reino Unido como un bloque unificado —frente a una Latinoamérica fragmentada en países— altera la percepción de relevancia académica y condiciona la lectura de los datos.

2. **La crítica a las jerarquías de visibilidad**: Cuestionando cómo las mediciones no solo ordenan cifras, sino que actúan como dispositivos que construyen referentes e imponen qué regiones son reconocidas como centros de producción de conocimiento.

3. **La lectura de la proyección territorial**: Exponiendo las consecuencias de la limitada presencia nacional en índices globales y cómo las desigualdades de representación afectan la proyección internacional del desarrollo artístico y académico regional.

Esta capacidad de edición y mirada crítica demuestra el aprovechamiento real de la [Evaluación Sumativa 1 (Grupal - 20%): Presentación e investigación crítica sobre metadatos, sesgos y desinformación](https://github.com/profesorfaco/troncal/tree/main/clase-03). 

La tecnología puede agilizar la ejecución, pero son las personas quienes otorgan sentido, dirección y ética a lo que se ejecute.

---

**En la sesión de hoy iniciamos la tercera unidad**, complementando los lenguajes de interfaces web de complejidad media-alta que ya comenzaron a conocer, con herramientas para la producción rápida de visualizaciones de datos (entendidas como *chart* en inglés, o *Diagramm* en alemán, según vimos en [clase 4](https://github.com/profesorfaco/troncal/blob/main/clase-04/README.md)).

Las dos primeras herramientas que revisaremos serán:

- [**RawGraphs**](https://app.rawgraphs.io/), para explorar posibilidades de visualización más adecuadas para cada caso, poniendo especial cuidado en las metodologías de exportación de estos gráficos hacia vectores limpios para embeber en HTML su elemento `<svg></svg>` o vincular mediante `<object></object>`.

- [**Chart.js**](https://www.chartjs.org/), para implementar gráficos interactivos y responsivos en entornos web nativos, aprovechando el aporte de esta biblioteca especializada de JavaScript y el elemento HTML `<canvas></canvas>`.

---

### RawGraph

RawGraphs es una herramienta de código abierto diseñada para transformar rápidamente conjuntos de datos estructurados —como archivos CSV o tablas— en diagramas visuales complejos sin necesidad de escribir código. Funciona como un entorno de prototipado rápido que permite probar múltiples taxonomías gráficas (desde diagramas de Sankey hasta aluviales o *treemaps*) para evaluar cuál comunica mejor la información. Su mayor fortaleza radica en que procesa los datos localmente en el navegador y permite exportar los resultados en formatos vectoriales limpios (SVG), facilitando su posterior edición gráfica o su integración directa en el marcado HTML de cualquier proyecto web.

**Para probarlo:** 

1. Seleccionar todo lo que está en la Hoja RAWGraphs en https://docs.google.com/spreadsheets/d/1p8GCNRKneagede_DL0HkavLf8n6WXkYyFmHMM5jjPs8/
2. Copiar todo lo seleccionado
2. Acceder a https://app.rawgraphs.io/
3. En el recuadro blanco, proceda según la indicación: *Paste your data*
4. En *Choose a chart* marcar *Bar chart*
5. En *Mapping* arrastrar el recuadro verde de country al espacio de *CHART VARIABLES* que dice Bars, y está marcado con un asterisco rojo (*mandatory*)
6. En *Customize* hacer clic en el signo + junto a *CHART* y cambiar *Bars orientation* por *Horizontally*.
7. Lo que siguen son ajustes al *Artboard* y *Colors*
8. Tan pronto el resultado le conforme, baje al *Export* para obtener un `viz.svg`
9. Abra lo descargado en un editor de código fuente, seleccione todo y cópielo. 
10. Pegue lo copiado en https://webformatter.com/ para darle un *Format* que permita la lectura del código.

Para lo que sigue, ponga atención a las indicaciones a presentar en clase, donde se usará `<object data="viz.svg" type="image/svg+xml"></object>`

---

### Chart.js

Chart.js es una biblioteca de JavaScript orientada a la creación de visualizaciones de datos dinámicas, animadas y completamente responsivas en la web. A diferencia del enfoque vectorial de SVG, Chart.js utiliza el elemento `<canvas>` de HTML5 para renderizar gráficos mediante mapas de bits a través de código ejecutable. Ofrece diversos tipos de gráficos estándar altamente personalizables —como barras, líneas, tarta o radar— y destaca por su ligereza y facilidad de configuración. Resulta ideal para integrar *dashboards* interactivos, adaptar las visualizaciones automáticamente a distintos tamaños de pantalla y procesar datos dinámicos en tiempo real dentro del desarrollo *frontend*.

_ _ _ _ 

[clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md) ⇆ [clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md)
