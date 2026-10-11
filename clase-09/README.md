# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 09 → 16 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Prototipado rápido y taxonomías visuales: Uso de *RAWGraphs et al.*

El cierre de la segunda unidad, de la clase recién pasada, nos entrega algunos resultados destacables en la integración de las dos unidades tratadas hasta la fecha:

| N° | Nombre | GitHub Pages | Repositorio en GitHub |
|:--:|:-------|:-------------|:----------------------|
| 1 | Antonia Padilla Ortega | https://evorakie.github.io/TROCAL_E2/ | https://github.com/evorakie/TROCAL_E2/ |
| 2 | Giulia Pepe Vargas | https://catsgugu.github.io/Clase-8/ | https://github.com/catsgugu/Clase-8/ |
| 3 | Veronica Soto Sandoval | https://ronnistp.github.io/PRUEBA_09-10/ | https://github.com/ronnistp/PRUEBA_09-10/ |

El valor de los casos destacados radica en sus respuestas a la instrucción:

> *En la lista sin numerar que está bajo el subtítulo de **Claves de la edición 2026 para Arte y Diseño**, agregue un tercer ítem sobre el caso chileno que desplace al actual tercero (**Metodología basada en reputación**) al cuarto lugar. El nuevo punto debe destacar que solo 3 instituciones chilenas figuran en la medición. No limite el ítem a los datos; considere que lo que se cuenta, cuenta frente a una [Latinoamérica con sólo 24 instituciones de 6 países](https://www.topuniversities.com/university-subject-rankings/art-design?region=Latin%20America&countries=mx%2Ccl%2Cbr%2Cco%2Car%2Cpe), mientras [*United Kingdom* presenta 34](https://www.topuniversities.com/university-subject-rankings/art-design?items_per_page=50&region=Europe&countries=gb). La etiqueta unificada de **UK**, que es referente del centro del mundo cartográfico, opera como un bloque homogéneo que infla la representatividad central de la **metrópoli**, difuminando las tensiones identitarias entre sus naciones constitutivas y acentuando la brecha de visibilidad frente a nuestra región.*

Sus respuestas no se limitan a una repetición mecánica de la misma instrucción, ni parecen ser el primer resultado de una consulta genérica a herramientas de IA, que consideraremos como asistentes útiles para la exploración inicial y la rápida obtención de resultados, pero que no reemplazan la reflexión crítica, el criterio analítico ni la voz propia (recordemos el ejercicio de evaluación con IA, donde bastaba cambiar una sola palabra en el *prompt* para cambiar un severo 4 por un benévolo 6).

Tal aproximación resulta altamente pertinente en el marco de un curso centrado en el diseño y la visualización de información cuando sobran evidencias sobre cómo la *in-formación* propagada en contextos digitales, dinámicos e interactivos en línea, de alcance global, da *forma* a la opinión pública, instala marcos narrativos extremados e incide en definiciones político-electorales hacia giros anarcocapitalistas.

La pertinencia de su aproximación, con reflexión crítica, criterio analítico y voz propia, destaca principalmente en tres ejes:

1. **Deconstrucción de los criterios de clasificación:** Se enfoca en cómo la reagrupación del Reino Unido como un solo bloque —frente a una Latinoamérica fragmentada por países— altera la percepción de la representatividad académica y condiciona la lectura interpretativa de los datos.

2. **Crítica a las jerarquías de visibilidad:** Cuestiona el modo en que los *rankings* no solo ordenan métricas, sino que actúan como dispositivos pedagógicos y políticos que imponen qué regiones son leídas como centros legítimos de producción de conocimiento.

3. **Lectura de la proyección territorial:** Expone las consecuencias de la escasa presencia nacional en índices globales, visibilizando cómo las desigualdades de representación afectan la proyección internacional del desarrollo artístico e intelectual de la región.

En su conjunto, estos tres ejes demuestran una apropiación que, en el cierre de la unidad 2, no ha olvidado el cierre de la unidad 1: la [Evaluación Sumativa 1 (Grupal - 20%): Presentación e investigación crítica sobre metadatos, sesgos y desinformación](https://github.com/profesorfaco/troncal/tree/main/clase-03).

---

**En la sesión de hoy iniciamos la tercera unidad**, complementando los lenguajes de interfaces web de complejidad media-alta que ya comenzaron a conocer, con herramientas para la producción rápida de visualizaciones que, desde la [clase 04](https://github.com/profesorfaco/troncal/blob/main/clase-04/README.md), exploramos desde el *chart* inglés o *Diagramm* alemán.

Las dos primeras herramientas que revisaremos serán:

- [**RAWGraphs**](https://app.rawgraphs.io/), para explorar posibilidades de visualización más adecuadas para cada caso, poniendo especial cuidado en las metodologías de exportación de estos gráficos hacia vectores limpios para embeber en HTML su elemento `<svg></svg>` o vincular mediante `<object></object>`.

- [**Chart.js**](https://www.chartjs.org/), para implementar gráficos interactivos y responsivos en entornos web nativos, aprovechando el aporte de esta biblioteca especializada de JavaScript y el elemento HTML `<canvas></canvas>`.

---

### RAWGraphs

RAWGraphs es una herramienta de código abierto diseñada para transformar conjuntos de datos estructurados —como archivos CSV o tablas— en visualizaciones de datos —como *chart* en inglés, o *Diagramm* en alemán— sin necesidad de escribir código. Funciona como un entorno de prototipado rápido que permite probar configuraciones visuales convencionales que muestran lo que nunca podría verse sin más en columnas de números —desde diagramas de *Sankey* hasta aluviales o *treemaps*—. Su mayor fortaleza radica en que procesa los datos localmente en el navegador y permite exportar los resultados en SVG, facilitando su edición e integración posterior a cualquier proyecto web.

**Para probarlo:**

1. Seleccionar todo lo que está en la Hoja RAWGraphs en https://docs.google.com/spreadsheets/d/1p8GCNRKneagede_DL0HkavLf8n6WXkYyFmHMM5jjPs8/
2. Copiar todo lo seleccionado.
3. Acceder a https://app.rawgraphs.io/
4. En el recuadro blanco, proceda según la indicación: *Paste your data*.
5. En *Choose a chart*, marcar *Bar chart*.
6. En *Mapping*, arrastrar el recuadro verde de `country` al espacio de *CHART VARIABLES* que dice *Bars*, y que está marcado con un asterisco rojo (*mandatory*).
7. En *Customize*, hacer clic en el signo `+` junto a *CHART* y cambiar *Bars orientation* a *Horizontally*.
8. Lo que sigue son ajustes de *Artboard* y *Colors*.
9. Tan pronto el resultado le conforme, baje a *Export* para obtener un archivo `viz.svg`.
10. Abra el archivo descargado en un editor de código fuente, seleccione todo y cópielo.
11. Pegue lo copiado en https://webformatter.com/ para darle un *Format* que permita la lectura limpia del código.

Para lo que sigue, ponga atención a las indicaciones que se presentarán en clase, donde se usará `<object data="viz.svg" type="image/svg+xml"></object>`.

---

### Chart.js

Chart.js es una biblioteca de JavaScript orientada a la creación de visualizaciones de datos —como *chart* en inglés, o *Diagramm* en alemán— dinámicas, animadas y completamente responsivas en la web. A diferencia del enfoque vectorial de SVG, Chart.js utiliza el elemento `<canvas>` de HTML5 para renderizar gráficos mediante mapas de bits a través de código ejecutable. Ofrece diversos tipos de gráficos estándar altamente personalizables —como barras, líneas, tarta o radar— y destaca por su ligereza y facilidad de configuración.

**Para comenzar a probar esta biblioteca, aprovechemos el siguiente código fuente:**

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Usando Chart.js</title>
  </head>
  <body>
    <canvas id="identidad"></canvas>
    <script src="[https://cdn.jsdelivr.net/npm/chart.js](https://cdn.jsdelivr.net/npm/chart.js)"></script>
    <script>
      new Chart(document.getElementById("identidad"), {
        type: "bar",
        data: {
          labels: ["Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "China (Mainland)", "Colombia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Hong Kong", "India", "Ireland", "Italy", "Japan", "Malaysia", "Mexico", "Netherlands", "Saudi Arabia", "Singapore", "South Korea", "Sweden", "Switzerland", "Taiwan", "Thailand", "United Kingdom", "United States", "Vietnam"],
          datasets: [
            {
              label: "Veces en el top 100",
              data: [2, 5, 2, 1, 1, 2, 1, 6, 1, 1, 1, 1, 1, 3, 2, 2, 1, 1, 6, 2, 2, 2, 4, 1, 3, 3, 3, 2, 1, 1, 11, 24, 1],
              backgroundColor: 'rgb(214, 214, 214)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
        },
      });
    </script>
  </body>
</html>

```

---

[clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md) ⇆ [clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md)
