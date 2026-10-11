LO DEJARÉ COMO SIGUE:

# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 11 → 30 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Integración del trinomio front-end: Interacción y dinamismo mediante HTML, SVG y JavaScript

En la clase pasada tomamos un SVG "sucio" exportado desde RAWGraphs y lo transformamos en un componente limpio, mantenible y semántico: añadimos el atributo `viewBox`, consolidamos sus estilos en un bloque `<style></style>`, simplificamos sus formas a etiquetas nativas como `<polygon>` e implementamos nuestra primera capa de interacción a través de pseudoclases CSS como `:hover`.

Hoy sumamos la pieza que completa el trinomio del desarrollo web nativo: **JavaScript**, pero bajo una máxima metodológica deliberada: **intervención mínima, impacto funcional alto**. No se trata de aprender lógica de programación abstracta en una sesión, sino de comprender que un gráfico SVG incrustado directamente en el HTML pasa a ser parte viva del documento (*DOM*) y que, con apenas dos líneas de código, puede responder de forma fluida a las acciones de quien lo explora.

Esta clase constituye el **último hito conceptual antes de nuestra evaluación sumativa**. Al final de estos apuntes encontrarán los requerimientos del encargo final, de modo que puedan articular cada técnica y reflexión de la sesión de hoy en función de dicho horizonte.

---

### El trinomio web y el principio de "Diseño orientado a estados"

Al abordar la producción de interfaces interactivas desde el diseño, es fundamental comprender la división de responsabilidades que rige en la web:

| Lenguaje | Dominio | Responsabilidad en nuestro Radar |
| --- | --- | --- |
| **HTML** | **Estructura y significado** | Los encabezados, textos narrativos y la etiqueta contenedora `<svg>` |
| **SVG** | **Geometría vectorial** | Grillas circulares, ejes cartesianos radiales y polígonos por universidad |
| **CSS** | **Apariencia y estados** | Paleta cromática, transiciones suavizadas y reglas visuales (`.oculta`, `.apagado`) |
| **JavaScript** | **Comportamiento y eventos** | Escuchar la interacción del usuario y conmutar (*toggle*) las clases visuales |

El lenguaje de marcado hipertextual (HTML) y el de gráficos vectoriales (SVG) comparten la misma naturaleza estructural basada en nodos. CSS y JavaScript, por su parte, controlan las dimensiones estética y comportamental respectivamente. De esta articulación surge el trinomio fundamental del desarrollo front-end.

> **Regla de oro para diseñadores:** *JavaScript no pinta; JavaScript solo avisa.*
> Como diseñadores/as, nuestro trabajo consiste en prever y diseñar los **estados visuales** de la interfaz dentro de la hoja de estilos (CSS). JavaScript se limita a cambiar las reglas de juego (agregar o quitar una clase), permitiendo que la hoja de estilos ejecute la transformación gráfica.

#### La importancia de incrustar el SVG en línea (In-line SVG)

Hasta la clase anterior exploramos la vinculación de archivos externos mediante `<object data="viz.svg" type="image/svg+xml"></object>`. Si bien este método es válido para ilustraciones vectoriales estáticas o aisladas, crea un documento independiente (un árbol *DOM* aislado). Esto impide que las hojas de estilo globales o los scripts de la página principal puedan acceder a las formas del gráfico. Para lograr verdadera interactividad y control fino, **el código SVG debe integrarse directamente dentro del marcado HTML**.

---

### Ejercicio práctico: Control de visibilidad mediante interacción en la leyenda

**Objetivo:** Desarrollar una interfaz en un solo archivo donde, al hacer clic sobre el nombre de una universidad en la leyenda, el gráfico responda ocultando o mostrando su polígono correspondiente.

#### Código fuente unificado: `index.html`

Creen un archivo `index.html` en sus editores y peguen la siguiente estructura:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Radar QS interactivo: Universidades Chilenas</title>
    <style>
      body {
        font-family: Helvetica, Arial, sans-serif;
        max-width: 900px;
        margin: 2rem auto;
        padding: 0 1rem;
        color: #222;
        line-height: 1.5;
      }
      svg {
        width: 100%;
        height: auto;
        display: block;
        margin-top: 1.5rem;
      }
    </style>
  </head>
  <body>
    <h1>Cuatro universidades chilenas en el Ranking QS</h1>
    <p>Haga clic en el nombre de una institución en la leyenda para alternar su visibilidad en el radar.</p>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 580" font-family="Helvetica, Arial, sans-serif">
      <style>
        /* 1. Estilos geométricos y tipográficos base */
        .grid { fill: none; stroke: #e0e0e0; stroke-width: 1; }
        .axis { stroke: #aaa; stroke-width: 1; }
        .label { font-size: 12px; text-anchor: middle; dominant-baseline: middle; fill: #333; }
        .tick { font-size: 10px; text-anchor: end; dominant-baseline: middle; fill: #666; }
        
        /* 2. Comportamiento transicional de las superficies */
        .area {
          fill-opacity: 0.15;
          stroke-width: 1.5;
          transition: fill-opacity 0.3s ease, stroke-width 0.3s ease;
        }
        .area:hover {
          fill-opacity: 0.45;
          stroke-width: 2.5;
        }

        /* 3. Estilos de la leyenda y ESTADOS ACTIVADOS POR JS */
        .legend-title { font-size: 12px; font-weight: bold; fill: #111; }
        .legend-text { font-size: 11px; fill: #333; }
        
        .item { cursor: pointer; transition: opacity 0.2s ease; }
        .item:hover { opacity: 0.7; }
        
        /* Clases de estado (gatilladas vía JavaScript) */
        .apagado { opacity: 0.3; }
        .oculta { display: none; }
      </style>

      <!-- Grilla radial y ejes -->
      <g transform="translate(300 300)">
        <g class="grid">
          <circle r="24" /><circle r="48" /><circle r="72" /><circle r="96" />
          <circle r="120" /><circle r="144" /><circle r="168" /><circle r="192" />
          <circle r="216" /><circle r="240" />
        </g>
        <g class="axis">
          <line x2="0.0" y2="-240.0" />
          <line x2="228.3" y2="-74.2" />
          <line x2="141.1" y2="194.2" />
          <line x2="-141.1" y2="194.2" />
          <line x2="-228.3" y2="-74.2" />
        </g>

        <!-- Etiquetas de dimensiones/indicadores -->
        <g>
          <text class="label" x="0.0" y="-255.0">Staff with PhD</text>
          <text class="label" x="245.8" y="-77.3">Academic Reputation</text>
          <text class="label" x="150.9" y="208.3">International Research Network</text>
          <text class="label" x="-150.9" y="208.3">Papers Per Faculty</text>
          <text class="label" x="-245.8" y="-77.3">Citations per Paper</text>
        </g>

        <!-- Escala numérica en eje central -->
        <g class="tick">
          <path class="axis" fill="none" d="M-6-240H0V0H-6" />
          <text x="-9" y="0">0</text><text x="-9" y="-48">20</text>
          <text x="-9" y="-96">40</text><text x="-9" y="-144">60</text>
          <text x="-9" y="-192">80</text><text x="-9" y="-240">100</text>
        </g>

        <!-- Polígonos identificados por ID -->
        <g id="puc" fill="#FEC60D" stroke="#FEC60D">
          <polygon class="area" points="0.0,-236.0 228.3,-74.2 141.1,194.2 -137.5,189.3 -176.9,-57.5" />
          <circle cx="0.0" cy="-236.0" r="2" stroke="none" />
          <circle cx="228.3" cy="-74.2" r="2" stroke="none" />
          <circle cx="141.1" cy="194.2" r="2" stroke="none" />
          <circle cx="-137.5" cy="189.3" r="2" stroke="none" />
          <circle cx="-176.9" cy="-57.5" r="2" stroke="none" />
        </g>
        <g id="uch" fill="#1F5592" stroke="#1F5592">
          <polygon class="area" points="0.0,-173.0 228.3,-74.2 141.1,194.2 -141.1,194.2 -175.9,-57.2" />
          <circle cx="0.0" cy="-173.0" r="2" stroke="none" />
          <circle cx="228.3" cy="-74.2" r="2" stroke="none" />
          <circle cx="141.1" cy="194.2" r="2" stroke="none" />
          <circle cx="-141.1" cy="194.2" r="2" stroke="none" />
          <circle cx="-175.9" cy="-57.2" r="2" stroke="none" />
        </g>
        <g id="udec" fill="#2ca02c" stroke="#2ca02c">
          <polygon class="area" points="0.0,-153.0 205.4,-66.7 139.3,191.7 -126.4,173.9 -200.7,-65.2" />
          <circle cx="0.0" cy="-153.0" r="2" stroke="none" />
          <circle cx="205.4" cy="-66.7" r="2" stroke="none" />
          <circle cx="139.3" cy="191.7" r="2" stroke="none" />
          <circle cx="-126.4" cy="173.9" r="2" stroke="none" />
          <circle cx="-200.7" cy="-65.2" r="2" stroke="none" />
        </g>
        <g id="usach" fill="#d62728" stroke="#d62728">
          <polygon class="area" points="0.0,-70.0 216.8,-70.5 138.1,190.1 -114.0,156.9 -139.8,-45.4" />
          <circle cx="0.0" cy="-70.0" r="2" stroke="none" />
          <circle cx="216.8" cy="-70.5" r="2" stroke="none" />
          <circle cx="138.1" cy="190.1" r="2" stroke="none" />
          <circle cx="-114.0" cy="156.9" r="2" stroke="none" />
          <circle cx="-139.8" cy="-45.4" r="2" stroke="none" />
        </g>
      </g>

      <!-- Leyenda interactiva -->
      <g transform="translate(605 60)">
        <text class="legend-title">Instituciones analizadas</text>
        
        <g class="item" onclick="alternar('puc', this)">
          <rect y="16.0" width="14" height="14" fill="#FEC60D" rx="2" />
          <text class="legend-text" x="22" y="27.5">Pontificia Universidad Católica</text>
        </g>
        <g class="item" onclick="alternar('uch', this)">
          <rect y="38.0" width="14" height="14" fill="#1F5592" rx="2" />
          <text class="legend-text" x="22" y="49.5">Universidad de Chile</text>
        </g>
        <g class="item" onclick="alternar('udec', this)">
          <rect y="60.0" width="14" height="14" fill="#2ca02c" rx="2" />
          <text class="legend-text" x="22" y="71.5">Universidad de Concepción</text>
        </g>
        <g class="item" onclick="alternar('usach', this)">
          <rect y="82.0" width="14" height="14" fill="#d62728" rx="2" />
          <text class="legend-text" x="22" y="93.5">Universidad de Santiago de Chile</text>
        </g>
      </g>
    </svg>

    <!-- La capa funcional de comportamiento -->
    <script>
      function alternar(id, item) {
        document.getElementById(id).classList.toggle("oculta");
        item.classList.toggle("apagado");
      }
    </script>
  </body>
</html>

```

---

### Desmontando el código: ¿Qué ocurre exactamente al hacer clic?

Al examinar la función JavaScript de 2 líneas, la lógica se desglosa en pasos muy sencillos:

1. **El evento de entrada:** En el elemento SVG de la leyenda escribimos `onclick="alternar('puc', this)"`. Esto le indica al navegador: *"Cuando el usuario haga clic aquí, ejecuta la función `alternar` pasándole dos datos: la palabra `'puc'` y la referencia a este mismo bloque de leyenda (`this`)."*
2. **Localización de la geometría:** `document.getElementById(id)` le pide al navegador buscar en todo el documento el grupo que tiene ese identificador único (por ejemplo, el grupo `<g id="puc">`).
3. **Inmutación del estado:** `.classList.toggle("oculta")` evalúa el elemento: si la clase `.oculta` no está presente, se la agrega; si ya la tiene, se la quita.
4. **Respuesta visual:** En el CSS declaramos previamente `.oculta { display: none; }`. Por lo tanto, al agregar esa clase, el polígono vectorial desaparece del renderizado al instante. La línea siguiente hace lo propio con la etiqueta de la leyenda (`item.classList.toggle("apagado")`), opacando el texto para indicar visualmente que ese conjunto de datos está desactivado.

#### Ejercicio de exploración analítica:

Al probar el archivo en el navegador, filtren y aíslen combinaciones de universidades:

* Compare únicamente las dos instituciones tradicionales de la capital (PUC y UCH). ¿En qué ejes sus polígonos son casi idénticos y en cuáles se aprecian sesgos o diferencias relativas?
* Oculte las instituciones metropolitanas y deje activas únicamente la Universidad de Concepción y la USACH. ¿Cómo cambia la escala visual percibida dentro del radar cuando desaparecen los picos de las universidades hegemónicas?

---

### De la técnica a la mirada editorial: El estándar de visualización periodística (*Reuters Graphics*)

Herramientas como RAWGraphs o librerías como Chart.js facilitan la generación rápida de figuras, pero **la efectividad del diseño de información depende de la estructura narrativa y editorial**. Referentes mundiales en periodismo visual de datos como [Reuters Graphics](https://www.reuters.com/graphics/) estructuran sus contenidos a partir de patrones clave:

1. **Titulación asertiva y descriptiva:** En lugar de titular simplemente "Ranking QS 2026", la pieza utiliza titulares que comunican el hallazgo principal (*ej: "La brecha de visibilidad: Cómo dos macrouniversidades concentran la reputación regional"*).
2. **Jerarquía cromática intencionada:** El uso del color no es meramente decorativo. Se asignan tonos neutros a los datos de contexto o fondo, mientras que se aplica un color de contraste acentuado (*highlight*) únicamente sobre la variable o caso sobre el cual se busca llamar la atención.
3. **Anotaciones directas (*Direct labeling* y micro-stories):** Los datos clave se explican mediante textos бреves ubicados junto al gráfico, eliminando la sobrecarga cognitiva de forzar al lector a descodificar códigos lejanos.
4. **Interacción orientada al análisis:** La interactividad no se usa como adorno estético (*chartjunk*), sino como un mecanismo funcional que permite comparar, aislar, profundizar o verificar hipótesis.
5. **Transparencia metodológica y créditos:** Fuentes, fechas de medición, limitaciones de la muestra y criterios de normalización de datos deben declararse de forma visible al pie del gráfico.

---

### ANTESALA DE LA EVALUACIÓN SUMATIVA (Unidad 3)

En la próxima sesión realizaremos la **Evaluación Sumativa de la Unidad 3**. Se les solicitará diseñar y publicar una interfaz web interactiva que presente a la comunidad estudiantil de Diseño de la **Universidad de Chile** una comparativa crítica sobre una de sus opciones reales de movilidad académica entre las destacadas del área de **Arte y Diseño** según el Ranking QS, tomando como estándar gráfico y comunicacional el modelo de *Reuters Graphics*.

Las 5 instituciones internacionales entre las que corresponde escoger, para hacer una comparación positiva para el intercambio, son: 

1. **Politecnico di Milano** (polimi; Italia): Principal opción europea del ranking con convenio directo disponible.
2. **Universidade de São Paulo** (Brasil): Referente regional destacado en la clasificación mundial de Arte y Diseño.
3. **Universidad de Buenos Aires** (UBA; Argentina): Institución pública histórica y referente continental en el índice.
4. **Tecnológico de Monterrey** (Tec; México): Destacada opción privada con convenio de movilidad vigente.
5. **Universidad Nacional Autónoma de México** (UNAM; México): Una de las macro-escuelas más reconocidas del continente en artes y humanidades.

Para la próxima evaluación sumativa, y hasta el final del curso, recordemos: las herramientas de inteligencia artificial y los entornos de código abierto son asistentes eficientes para la iteración técnica, pero **la voz propia, el criterio analítico y la responsabilidad editorial pertenecen al diseñador/a.**

---

### Recursos de consulta rápida

* **MDN Web Docs:** [Guía de elementos y atributos SVG](https://developer.mozilla.org/es/docs/Web/SVG)
* **MDN Web Docs:** [Método Document.getElementById()](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
* **MDN Web Docs:** [Uso de Element.classList y toggle](https://developer.mozilla.org/es/docs/Web/API/Element/classList)

---

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
