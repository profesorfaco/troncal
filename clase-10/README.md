
# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 10 → 23 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Coordenadas cartesianas en un ViewPort: Estructura y codificación de gráficos vectoriales escalables (SVG) integrados de forma nativa en HTML

En la clase previa utilizamos **RAWGraphs** para obtener un gráfico —*chart*, *Diagramm*— en SVG. Sin embargo, ya vimos que el código exportado resulta "sucio": redundante, denso, cargado de transformaciones innecesarias y estilos incrustados directamente; y sí, pareciera que, como invita a evitar el dicho: estamos contando los dientes en este caballo regalado por herramientas de código abierto.

Para que un archivo SVG pueda integrarse como un componente web nativo, limpio, mantenible y responsivo, es fundamental comprender la anatomía de sus coordenadas en el *viewport* e incorporar tanto CSS como sea posible.

---

### Limpiando un SVG de RAWGraphs en tres pasos

A continuación, analizaremos el proceso de refinamiento técnico –en dos pasos– y conceptual –en un tercer paso– desde un **gráfico de radar** generado en RAWGraphs.

#### Paso 1: Un SVG exportado desde RAWGraphs

El siguiente código corresponde a lo generado por RAWGraphs con los datos de las [4 Universidades Chilenas mejor posicionadas en el Ranking QS publicado el 18 de junio de 2026](https://docs.google.com/spreadsheets/d/1fU6s-Sc92OAK0UI1sjDOBBAXEKIhTNsmqV1VP_8UMIE/edit?usp=sharing). Conviene observar la gran cantidad de grupos (`<g></g>`), la repetición de atributos de estilo y la presencia de rutas complejas con exceso de decimales, junto con la falta de un [atributo `viewBox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/viewBox) en su elemento principal:

```
<svg xmlns="http://www.w3.org/2000/svg" width="880" height="600"><rect width="880" height="600" x="0" y="0" fill="#FFFFFF" id="background"/><clipPath id="serieClipPath"><rect x="0" y="0" width="600" height="600"/></clipPath><g transform="translate(0,0)" clip-path="url(#serieClipPath)"><g transform="translate(300, 300)"><g id="axes"><circle r="240" fill="none" stroke="LightGray" class="grid" id="100"/><circle r="216" fill="none" stroke="LightGray" class="grid" id="90"/><circle r="192" fill="none" stroke="LightGray" class="grid" id="80"/><circle r="168" fill="none" stroke="LightGray" class="grid" id="70"/><circle r="144" fill="none" stroke="LightGray" class="grid" id="60"/><circle r="120" fill="none" stroke="LightGray" class="grid" id="50"/><circle r="96" fill="none" stroke="LightGray" class="grid" id="40"/><circle r="72" fill="none" stroke="LightGray" class="grid" id="30"/><circle r="48" fill="none" stroke="LightGray" class="grid" id="20"/><circle r="24" fill="none" stroke="LightGray" class="grid" id="10"/><circle r="0" fill="none" stroke="LightGray" class="grid" id="0"/><g><line x1="0" y1="0" x2="1.469576158976824e-14" y2="-240" stroke="black"/><text text-anchor="middle" dy="0.35em" x="1.5308084989341916e-14" y="-250" font-family="Arial, sans-serif" font-size="12">Staff with PhD</text></g><g><line x1="0" y1="0" x2="228.25356391083685" y2="-74.16407864998737" stroke="black"/><text text-anchor="middle" dy="0.35em" x="237.76412907378838" y="-77.25424859373685" font-family="Arial, sans-serif" font-size="12">Academic Reputation</text></g><g><line x1="0" y1="0" x2="141.06846055019355" y2="194.1640786499874" stroke="black"/><text text-anchor="middle" dy="0.35em" x="146.9463130731183" y="202.25424859373686" font-family="Arial, sans-serif" font-size="12">International Research Network</text></g><g><line x1="0" y1="0" x2="-141.06846055019352" y2="194.1640786499874" stroke="black"/><text text-anchor="middle" dy="0.35em" x="-146.94631307311826" y="202.25424859373686" font-family="Arial, sans-serif" font-size="12">Papers Per Faculty</text></g><g><line x1="0" y1="0" x2="-228.25356391083687" y2="-74.16407864998735" stroke="black"/><text text-anchor="middle" dy="0.35em" x="-237.7641290737884" y="-77.25424859373682" font-family="Arial, sans-serif" font-size="12">Citations per Paper</text></g><g id="y axis" fill="none" font-size="10" font-family="sans-serif" text-anchor="end" transform="translate(0, -240)"><path class="domain" stroke="currentColor" d="M-6,0.5H0.5V240.5H-6"/><g class="tick" opacity="1" transform="translate(0,0.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">100</text></g><g class="tick" opacity="1" transform="translate(0,24.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">90</text></g><g class="tick" opacity="1" transform="translate(0,48.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">80</text></g><g class="tick" opacity="1" transform="translate(0,72.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">70</text></g><g class="tick" opacity="1" transform="translate(0,96.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">60</text></g><g class="tick" opacity="1" transform="translate(0,120.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">50</text></g><g class="tick" opacity="1" transform="translate(0,144.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">40</text></g><g class="tick" opacity="1" transform="translate(0,168.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">30</text></g><g class="tick" opacity="1" transform="translate(0,192.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">20</text></g><g class="tick" opacity="1" transform="translate(0,216.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">10</text></g><g class="tick" opacity="1" transform="translate(0,240.5)"><line stroke="currentColor" x2="-6"/><text fill="currentColor" x="-9" dy="0.32em">0</text></g></g></g><g id="radars"><g id="0"><path d="M0,-236L228.254,-74.164L140.481,193.355L-137.542,189.31L-176.897,-57.477Z" stroke="#f8e71c" fill="#f8e71c" fill-opacity="0.1"/><g id="dots"><circle cx="1.4450832229938766e-14" cy="-236" r="1.5" stroke="none" fill="#f8e71c"/><circle cx="228.25356391083685" cy="-74.16407864998737" r="1.5" stroke="none" fill="#f8e71c"/><circle cx="140.4806752979011" cy="193.35506165561245" r="1.5" stroke="none" fill="#f8e71c"/><circle cx="-137.5417490364387" cy="189.30997668373772" r="1.5" stroke="none" fill="#f8e71c"/><circle cx="-176.89651203089858" cy="-57.477160953740196" r="1.5" stroke="none" fill="#f8e71c"/></g></g><g id="1"><path d="M0,-173L228.254,-74.164L140.481,193.355L-140.481,193.355L-175.945,-57.168Z" stroke="#1d4c9a" fill="#1d4c9a" fill-opacity="0.1"/><g id="dots"><circle cx="1.0593194812624605e-14" cy="-173" r="1.5" stroke="none" fill="#1d4c9a"/><circle cx="228.25356391083685" cy="-74.16407864998737" r="1.5" stroke="none" fill="#1d4c9a"/><circle cx="140.4806752979011" cy="193.35506165561245" r="1.5" stroke="none" fill="#1d4c9a"/><circle cx="-140.48067529790106" cy="193.35506165561245" r="1.5" stroke="none" fill="#1d4c9a"/><circle cx="-175.94545551460342" cy="-57.168143959365246" r="1.5" stroke="none" fill="#1d4c9a"/></g></g><g id="2"><path d="M0,-153L205.428,-66.748L139.305,191.737L-126.374,173.939L-200.673,-65.203Z" stroke="#2ca02c" fill="#2ca02c" fill-opacity="0.1"/><g id="dots"><circle cx="9.368548013477251e-15" cy="-153" r="1.5" stroke="none" fill="#2ca02c"/><circle cx="205.42820751975316" cy="-66.74767078498864" r="1.5" stroke="none" fill="#2ca02c"/><circle cx="139.30510479331613" cy="191.73702766686256" r="1.5" stroke="none" fill="#2ca02c"/><circle cx="-126.3738292428817" cy="173.9386537906137" r="1.5" stroke="none" fill="#2ca02c"/><circle cx="-200.67292493827742" cy="-65.20258581311387" r="1.5" stroke="none" fill="#2ca02c"/></g></g><g id="3"><path d="M0,-70L216.841,-70.456L138.13,190.119L-114.03,156.949L-139.805,-45.425Z" stroke="#d62728" fill="#d62728" fill-opacity="0.1"/><g id="dots"><circle cx="4.2862637970157365e-15" cy="-70" r="1.5" stroke="none" fill="#d62728"/><circle cx="216.840885715295" cy="-70.455874717488" r="1.5" stroke="none" fill="#d62728"/><circle cx="138.12953428873118" cy="190.11899367811264" r="1.5" stroke="none" fill="#d62728"/><circle cx="-114.03033894473977" cy="156.9492969087398" r="1.5" stroke="none" fill="#d62728"/><circle cx="-139.80530789538759" cy="-45.42549817311725" r="1.5" stroke="none" fill="#d62728"/></g></g></g></g><text x="5" y="5" style="font-family: Arial, sans-serif; font-size: 12px; fill: black; font-weight: bold; dominant-baseline: hanging;"/></g><g id="grid"><rect x="0" y="0" width="600" height="600" fill="none" stroke="#ccc"/></g><g id="legend" transform="translate(600,60)"><g transform="translate(5,0)"><g class="legendColor" transform="translate(0,0)"><g class="legendCells" transform="translate(0,16.25)"><g class="cell" transform="translate(0, 0)"><rect class="swatch" height="15" width="15" style="fill: rgb(248, 231, 28);"/><text class="label" transform="translate( 20, 12.5)" font-family="&quot;Arial&quot;, sans-serif" font-size="10px"><tspan x="0" dy="0em">Pontificia Universidad Católica de Chile</tspan></text></g><g class="cell" transform="translate(0, 21.25)"><rect class="swatch" height="15" width="15" style="fill: rgb(29, 76, 154);"/><text class="label" transform="translate( 20, 12.5)" font-family="&quot;Arial&quot;, sans-serif" font-size="10px"><tspan x="0" dy="0em">Universidad de Chile</tspan></text></g><g class="cell" transform="translate(0, 42.5)"><rect class="swatch" height="15" width="15" style="fill: rgb(44, 160, 44);"/><text class="label" transform="translate( 20, 12.5)" font-family="&quot;Arial&quot;, sans-serif" font-size="10px"><tspan x="0" dy="0em">Universidad de Concepción</tspan></text></g><g class="cell" transform="translate(0, 63.75)"><rect class="swatch" height="15" width="15" style="fill: rgb(214, 39, 40);"/><text class="label" transform="translate( 20, 12.5)" font-family="&quot;Arial&quot;, sans-serif" font-size="10px"><tspan x="0" dy="0em">Universidad de Santiago de Chile</tspan></text></g></g><text class="legendTitle" font-family="&quot;Arial&quot;, sans-serif" font-size="12px" font-weight="bold"><tspan x="0" dy="0em">Institution Name</tspan></text></g></g></g></svg>
```

---

#### Paso 2: El SVG optimizado, semántico y estilizado por CSS

Mediante una limpieza sistemática de atributos:

1. Reemplazamos los parámetros fijos de `width` y `height` por la propiedad `viewBox="0 0 880 580"`, permitiendo una escalabilidad fluida (*responsive layout*).
2. Extraemos los estilos a un bloque `<style>` interno usando clases CSS (`.grid`, `.axis`, `.area`, `.label`).
3. Reemplazamos los trazados poligonales redundantes (`<path d="..." />`) por la etiqueta nativa `<polygon points="..." />`.
4. Añadimos estados interactivos simples (transición mediante `:hover` en las áreas del radar).

Para esta limpieza conviene apoyarse en asistentes de código como [Claude](https://claude.ai/), pegando el código del paso 1 con un *prompt* enfocado en estructurar y optimizar la sintaxis.

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 580" font-family="Helvetica, Arial, sans-serif">
  <style>
    .grid  { fill: none; stroke: lightgray; }
    .axis  { stroke: #000; }
    .label { font-size: 12px; text-anchor: middle; dominant-baseline: middle; }
    .tick  { font-size: 10px; text-anchor: end; dominant-baseline: middle; }
    .area  { fill-opacity: .1; stroke-width: 1; transition: all ease .4s;}
    .area:hover { fill-opacity: .3; transition: all ease .4s; }
    .legend-text { font-size: 10px; }
    .legend-title { font-size: 12px; font-weight: bold; }
  </style>
  <g transform="translate(300 300)">
    <g class="grid">
      <circle r="0"/>
      <circle r="24"/>
      <circle r="48"/>
      <circle r="72"/>
      <circle r="96"/>
      <circle r="120"/>
      <circle r="144"/>
      <circle r="168"/>
      <circle r="192"/>
      <circle r="216"/>
      <circle r="240"/>
    </g>
    <g class="axis">
      <line x2="0.0" y2="-240.0"/>
      <line x2="228.3" y2="-74.2"/>
      <line x2="141.1" y2="194.2"/>
      <line x2="-141.1" y2="194.2"/>
      <line x2="-228.3" y2="-74.2"/>
    </g>
    <g>
      <text class="label" x="0.0" y="-250.0">Staff with PhD</text>
      <text class="label" x="237.8" y="-77.3">Academic Reputation</text>
      <text class="label" x="146.9" y="202.3">International Research Network</text>
      <text class="label" x="-146.9" y="202.3">Papers Per Faculty</text>
      <text class="label" x="-237.8" y="-77.3">Citations per Paper</text>
    </g>
    <g class="tick">
      <path class="axis" fill="none" d="M-6-240H0V0H-6"/>
      <text x="-9" y="0">0</text>
      <text x="-9" y="-24">10</text>
      <text x="-9" y="-48">20</text>
      <text x="-9" y="-72">30</text>
      <text x="-9" y="-96">40</text>
      <text x="-9" y="-120">50</text>
      <text x="-9" y="-144">60</text>
      <text x="-9" y="-168">70</text>
      <text x="-9" y="-192">80</text>
      <text x="-9" y="-216">90</text>
      <text x="-9" y="-240">100</text>
    </g>
    <g fill="#FEC60D" stroke="#FEC60D">
      <polygon class="area" points="0.0,-236.0 228.3,-74.2 141.1,194.2 -137.5,189.3 -176.9,-57.5"/>
      <circle cx="0.0" cy="-236.0" r="1.5" stroke="none"/>
      <circle cx="228.3" cy="-74.2" r="1.5" stroke="none"/>
      <circle cx="141.1" cy="194.2" r="1.5" stroke="none"/>
      <circle cx="-137.5" cy="189.3" r="1.5" stroke="none"/>
      <circle cx="-176.9" cy="-57.5" r="1.5" stroke="none"/>
    </g>
    <g fill="#1F5592" stroke="#1F5592">
      <polygon class="area" points="0.0,-173.0 228.3,-74.2 141.1,194.2 -141.1,194.2 -175.9,-57.2"/>
      <circle cx="0.0" cy="-173.0" r="1.5" stroke="none"/>
      <circle cx="228.3" cy="-74.2" r="1.5" stroke="none"/>
      <circle cx="141.1" cy="194.2" r="1.5" stroke="none"/>
      <circle cx="-141.1" cy="194.2" r="1.5" stroke="none"/>
      <circle cx="-175.9" cy="-57.2" r="1.5" stroke="none"/>
    </g>
    <g fill="#2ca02c" stroke="#2ca02c">
      <polygon class="area" points="0.0,-153.0 205.4,-66.7 139.3,191.7 -126.4,173.9 -200.7,-65.2"/>
      <circle cx="0.0" cy="-153.0" r="1.5" stroke="none"/>
      <circle cx="205.4" cy="-66.7" r="1.5" stroke="none"/>
      <circle cx="139.3" cy="191.7" r="1.5" stroke="none"/>
      <circle cx="-126.4" cy="173.9" r="1.5" stroke="none"/>
      <circle cx="-200.7" cy="-65.2" r="1.5" stroke="none"/>
    </g>
    <g fill="#d62728" stroke="#d62728">
      <polygon class="area" points="0.0,-70.0 216.8,-70.5 138.1,190.1 -114.0,156.9 -139.8,-45.4"/>
      <circle cx="0.0" cy="-70.0" r="1.5" stroke="none"/>
      <circle cx="216.8" cy="-70.5" r="1.5" stroke="none"/>
      <circle cx="138.1" cy="190.1" r="1.5" stroke="none"/>
      <circle cx="-114.0" cy="156.9" r="1.5" stroke="none"/>
      <circle cx="-139.8" cy="-45.4" r="1.5" stroke="none"/>
    </g>
  </g>
  <g transform="translate(605 60)">
    <text class="legend-title">Institution Name</text>
    <rect y="16.0" width="15" height="15" fill="#FEC60D"/>
    <text class="legend-text" x="20" y="28.5">Pontificia Universidad Católica de Chile</text>
    <rect y="37.25" width="15" height="15" fill="#1F5592"/>
    <text class="legend-text" x="20" y="49.75">Universidad de Chile</text>
    <rect y="58.5" width="15" height="15" fill="#2ca02c"/>
    <text class="legend-text" x="20" y="71.0">Universidad de Concepción</text>
    <rect y="79.75" width="15" height="15" fill="#d62728"/>
    <text class="legend-text" x="20" y="92.25">Universidad de Santiago de Chile</text>
  </g>
</svg>
```

Pero conviene poner atención a los metadatos que la misma IA pondrá en el resultado, para alcanzar una optimización técnica real.

---

#### Paso 3: Vuelta a la inteligencia no-artificial: ¿Acaso se muestra, sin distorsiones, el desempeño institucional en el Ranking QS de Universidades?

Habiendo resuelto la optimización técnica, queda la atención en **lo que la configuración visual revela sobre los números de las cuatro universidades chilenas mejor posicionadas en el Ranking QS**.

Los gráficos de araña o radar organizan variables cuantitativas a lo largo de ejes radiales que parten de un mismo origen. En este caso, la figura evalúa cinco métricas clave del **QS World University Rankings**:

1. **Staff with PhD:** Porcentaje de académicos con grado de doctorado.
2. **Academic Reputation:** Reputación académica según la percepción de la comunidad global.
3. **International Research Network:** Capacidad de articulación e integración en redes internacionales de investigación.
4. **Papers Per Faculty:** Productividad científica promedio medida por publicaciones por académico.
5. **Citations per Paper:** Impacto y calidad de la investigación científica medida por la tasa de citación de sus publicaciones.

Corresponde insistir en la idea clave trabajada a lo largo del curso: *Lo que se cuenta, cuenta*. La forma del gráfico no es un contenedor neutro; la geometría del radar (al cerrar una superficie poligonal entre ejes) tiende a magnificar visualmente el área de las instituciones con puntajes altos en métricas contiguas y a castigar de forma asimétrica a aquellas con caídas puntuales.

Al analizar la superposición de estas superficies, surgen interrogantes críticas de lectura interpretativa:

* **La hegemonía del centro metropolitano:** Los polígonos de la Pontificia Universidad Católica de Chile (PUC) y la Universidad de Chile (UCH) expanden sus vértices principalmente hacia la *Reputación Académica* y las *Redes Internacionales de Investigación*, métricas fuertemente condicionadas por la visibilidad y el volumen histórico de vinculación global. Esto reproduce, a escala local, las mismas jerarquías de visibilidad que revisamos al analizar cómo se agrupan los bloques globales frente a la fragmentación latinoamericana.
* **La distancia percibida frente al impacto real:** ¿Acaso hay tan poca diferencia entre la PUC y la UCH, y tanta brecha con la Universidad de Concepción (UdeC) y la Universidad de Santiago de Chile (USACH)? La comparación resulta aún más sugerente al cruzar la naturaleza jurídica de las instituciones: mientras la Universidad de Chile y la USACH son públicas y estatales, la PUC y la Universidad de Concepción corresponden a instituciones privadas tradicionales (corporaciones de derecho privado pertenecientes al CRUCH).

La herramienta técnica (limpiar y estructurar el SVG, con ayuda de [Claude](https://claude.ai/)) no resuelve un **criterio analítico que exige voz propia**: nuestro diseño y visualización de información debe hacer visibles las tensiones métricas sin dar por sentada la objetividad incontestable de cualquier *ranking*.

_ _ _ _ 

[clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md) ⇆ [clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md)
