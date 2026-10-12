LO DEJARÉ COMO SIGUE:

# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 11 → 30 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Integración del trinomio front-end: Interacción y dinamismo mediante HTML, SVG y JavaScript

En la clase pasada tomamos un SVG "sucio" exportado desde RAWGraphs y lo transformamos en un componente limpio, mantenible y semántico: añadimos el atributo `viewBox`, consolidamos sus estilos en un bloque `<style></style>`, simplificamos sus formas a etiquetas nativas como `<polygon>` e implementamos nuestra primera capa de interacción a través de pseudoclases CSS como `:hover`.

Hoy sumamos la pieza que completa el trinomio del desarrollo web nativo: **JavaScript**, pero bajo una máxima metodológica deliberada: **intervención mínima, impacto funcional alto**. No se trata de aprender lógica de programación abstracta en una sesión, sino de comprender que un gráfico SVG incrustado directamente en el HTML pasa a ser parte viva del documento (*DOM*) y que, con apenas dos líneas de código, puede responder de forma fluida a las acciones de quien lo explora.

---

### El trinomio web y el principio de "Diseño orientado a estados"

Al abordar la producción de interfaces interactivas desde el diseño, es fundamental comprender la división de responsabilidades que rige en la web:

| Capa | Lenguaje / Formato | Sintaxis / Naturaleza | Función en la web |
|:-----|:-------------------|:----------------------|:------------------|
| Estructura | HTML / SVG | Etiquetas `elemento>...</elemento>` | Define los componentes y el contenido (texto, enlaces, formas vectoriales).
| Estética | CSS | Reglas `propiedad: valor;` | Controla dimensiones, colores, tipografía y disposición visual. |
| Comportamiento | JavaScript | Código imperativo / funcional | Maneja la lógica, eventos, datos dinámicos e interacción. |

El lenguaje de marcado de hipertexto (HTML) y el dialecto de los gráficos vectoriales (SVG) comparten la misma naturaleza estructural, que va marcando elementos usando bloques de la forma `<etiqueta>contenido</etiqueta>`, razón suficiente para tratarlos como un único concepto práctico. Por su parte, CSS y JavaScript controlan las dimensiones estética y comportamental respectivamente. De esta articulación surge el trinomio fundamental del desarrollo front-end.

**Conviene recordar:** *JavaScript no pinta; JavaScript solo avisa.* Como diseñadores/as, nuestro trabajo consiste en prever y diseñar los **estados visuales** de la interfaz dentro de la hoja de estilos (CSS). JavaScript se limita a cambiar las reglas de juego (agregar o quitar una clase), permitiendo que la hoja de estilos ejecute la transformación gráfica.

#### La importancia de incrustar el SVG en línea (In-line SVG)

Hasta la clase anterior exploramos la vinculación de archivos externos mediante `<object data="viz.svg" type="image/svg+xml"></object>`. Si bien este método es válido para ilustraciones vectoriales estáticas o aisladas, crea un documento independiente (un árbol *DOM* aislado). Esto impide que las hojas de estilo globales o los scripts de la página principal puedan acceder a las formas del gráfico. Para lograr verdadera interactividad y control fino, **el código SVG debe integrarse directamente dentro del marcado HTML**.

---

### Ejercicio práctico: Control de visibilidad mediante interacción en la leyenda

**Objetivo:** Desarrollar una interfaz en un solo archivo donde, al hacer clic sobre el nombre de una universidad en la leyenda, el gráfico responda ocultando o mostrando su polígono correspondiente.

#### Código fuente unificado: `index.html`

Creen un archivo nuevo, llamarlo `index.html` y pegar en él la siguiente estructura:

```
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Radar QS simplificado</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 2rem auto; }
    svg  { width: 100%; }

    /* --- Estructura del gráfico --- */
    .grid  { fill: none; stroke: #ddd; }
    .eje   { stroke: #aaa; }
    .texto { font-size: 12px; text-anchor: middle; }

    /* --- Polígonos: lo común va en .area, el color en cada clase --- */
    .area       { fill-opacity: 0.2; stroke-width: 2; }
    .area:hover { fill-opacity: 0.5; }

    .puc   { fill: #FEC60D; stroke: #FEC60D; }
    .uch   { fill: #1F5592; stroke: #1F5592; }
    .udec  { fill: #2ca02c; stroke: #2ca02c; }
    .usach { fill: #d62728; stroke: #d62728; }

    /* --- Leyenda --- */
    .item   { cursor: pointer; font-size: 12px; }
    .item rect { width: 14px; height: 14px; }

    /* --- Estados que activa el JavaScript --- */
    .oculta { display: none; }
    .apagado { opacity: 0.3; }
  </style>
</head>
<body>
  <h1>Cuatro universidades chilenas en el Ranking QS</h1>
  <p>Haga clic en la leyenda para mostrar u ocultar cada universidad.</p>

  <svg viewBox="0 0 880 580">

    <!-- Todo el radar se dibuja con el centro en (0,0) y luego se mueve -->
    <g transform="translate(300 300)">

      <!-- Círculos concéntricos (0 a 100, cada 20 puntos) -->
      <g class="grid">
        <circle r="48" />
        <circle r="96" />
        <circle r="144" />
        <circle r="192" />
        <circle r="240" />
      </g>

      <!-- Cinco ejes, uno por indicador -->
      <g class="eje">
        <line x2="0"      y2="-240" />
        <line x2="228.3"  y2="-74.2" />
        <line x2="141.1"  y2="194.2" />
        <line x2="-141.1" y2="194.2" />
        <line x2="-228.3" y2="-74.2" />
      </g>

      <!-- Nombres de los indicadores -->
      <text class="texto" x="0"      y="-255">Staff with PhD</text>
      <text class="texto" x="246"    y="-77">Academic Reputation</text>
      <text class="texto" x="151"    y="208">International Research Network</text>
      <text class="texto" x="-151"   y="208">Papers Per Faculty</text>
      <text class="texto" x="-246"   y="-77">Citations per Paper</text>

      <!-- Un polígono por universidad: id para JS, clase para CSS -->
      <polygon id="puc"   class="area puc"   points="0,-236 228.3,-74.2 141.1,194.2 -137.5,189.3 -176.9,-57.5" />
      <polygon id="uch"   class="area uch"   points="0,-173 228.3,-74.2 141.1,194.2 -141.1,194.2 -175.9,-57.2" />
      <polygon id="udec"  class="area udec"  points="0,-153 205.4,-66.7 139.3,191.7 -126.4,173.9 -200.7,-65.2" />
      <polygon id="usach" class="area usach" points="0,-70 216.8,-70.5 138.1,190.1 -114,156.9 -139.8,-45.4" />
    </g>

    <!-- Leyenda -->
    <g transform="translate(605 60)">
      <text font-weight="bold" font-size="12">Instituciones</text>

      <g class="item" onclick="alternar('puc', this)">
        <rect y="16" fill="#FEC60D" />
        <text x="22" y="28">Pontificia Universidad Católica</text>
      </g>
      <g class="item" onclick="alternar('uch', this)">
        <rect y="38" fill="#1F5592" />
        <text x="22" y="50">Universidad de Chile</text>
      </g>
      <g class="item" onclick="alternar('udec', this)">
        <rect y="60" fill="#2ca02c" />
        <text x="22" y="72">Universidad de Concepción</text>
      </g>
      <g class="item" onclick="alternar('usach', this)">
        <rect y="82" fill="#d62728" />
        <text x="22" y="94">Universidad de Santiago</text>
      </g>
    </g>
  </svg>

  <script>
    // Agrega o quita una clase CSS: el JS solo cambia clases, el CSS decide cómo se ve
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

Al examinar la función JavaScript de 2 instrucciones, la lógica se desglosa en pasos muy sencillos:

1. **El evento de entrada**: En el grupo `<g></g>` de la leyenda escribimos `onclick="alternar('puc', this)"`. Esto le indica al navegador: “Cuando el usuario haga clic aquí, ejecuta la función alternar pasándole dos datos: el texto 'puc' y la referencia a este mismo grupo de la leyenda (this).”

2. **Localización de la figura**: document.getElementById(id) le pide al navegador buscar en todo el documento el elemento que tiene ese identificador único. En nuestro código es el polígono <polygon id="puc" class="area puc" ...>.

3. **Cambio de estado**: .classList.toggle("oculta") revisa el elemento: si la clase oculta no está presente, la agrega; si ya la tiene, la quita.

4. **Respuesta visual**: En el CSS declaramos previamente .oculta { display: none; }. Por lo tanto, al agregar esa clase, el polígono desaparece del renderizado al instante. La segunda instrucción (item.classList.toggle("apagado")) hace lo propio con el grupo de la leyenda (cuadro de color y texto), que pasa a opacity: 0.3 para indicar que esa universidad está desactivada.

**Idea clave: el JavaScript solo agrega o quita clases; es el CSS el que decide cómo se ve cada estado.**

#### Recursos de consulta rápida

* **MDN Web Docs:** [Guía de elementos y atributos SVG](https://developer.mozilla.org/es/docs/Web/SVG)
* **MDN Web Docs:** [Método Document.getElementById()](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById)
* **MDN Web Docs:** [Uso de Element.classList y toggle](https://developer.mozilla.org/es/docs/Web/API/Element/classList)

---

### PARA LA PRÓXIMA EVALUACIÓN SUMATIVA INDIVIDUAL

En la próxima sesión realizaremos la **Evaluación Sumativa de la Unidad 3**. Sobre la base de ciertas instrucciones, se les solicitará desarrollar una interfaz web interactiva que presente a la comunidad estudiantil de **Diseño de la Universidad de Chile** una comparativa sobre una de sus opciones reales de movilidad académica entre las destacadas del área de **Arte y Diseño** según el Ranking QS, tomando como estándar gráfico y comunicacional el modelo de *Reuters Graphics*.

Las 5 instituciones internacionales entre las que corresponde escoger para la comparativa, son: 

1. **Politecnico di Milano** (polimi; Italia): Principal opción europea del ranking con convenio directo disponible.
2. **Universidade de São Paulo** (Brasil): Referente regional destacado en la clasificación mundial de Arte y Diseño.
3. **Universidad de Buenos Aires** (UBA; Argentina): Institución pública histórica y referente continental en el índice.
4. **Tecnológico de Monterrey** (Tec; México): Destacada opción privada con convenio de movilidad vigente.
5. **Universidad Nacional Autónoma de México** (UNAM; México): Una de las macro-escuelas más reconocidas del continente en artes y humanidades.

Para la próxima evaluación sumativa de la próxima sesión, y hasta el final del curso, recordemos: las herramientas de inteligencia artificial y los entornos de código abierto son asistentes eficientes para la iteración técnica, pero **la voz propia, el criterio analítico y la responsabilidad editorial pertenecen a quien diseña.**


---

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
