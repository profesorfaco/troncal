# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 11 → 30 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Integración del trinomio front-end: Interacción y dinamismo mediante HTML, SVG y JavaScript.

- - - -

En la clase pasada tomamos un SVG "sucio" exportado desde RAWGraphs y lo dejamos limpio: con `viewBox`, estilos en un bloque `<style>`, formas nativas como `<polygon>` y un primer gesto de interacción, el `:hover` sobre las áreas del radar.

Hoy sumamos la pieza que falta del trinomio, **JavaScript**, pero con una exigencia deliberadamente baja: **una sola función de dos líneas**. No se trata de aprender a programar en una sesión, sino de comprobar que un SVG en línea es parte del documento y que, con muy poco código, puede responder a quien lo mira.

Y hay una razón de calendario: **lo que veamos hoy antecede a la clase de evaluación**. Al final de estos apuntes está el encargo, para que lean cada técnica con ese horizonte.

---

### El trinomio y sus responsabilidades

| Lenguaje | Responsabilidad | En nuestro radar |
|:---------|:----------------|:-----------------|
| **HTML** | Estructura y significado | El título, el texto y el contenedor `<svg>` |
| **SVG** | Forma y coordenadas | Círculos de la grilla, líneas de ejes, polígonos de cada universidad |
| **CSS** | Apariencia y estados visuales | Colores, `:hover`, y las clases `.oculta` y `.apagado` |
| **JavaScript** | Comportamiento | Decidir *cuándo* se activa un estado |

La regla práctica para hoy: **JavaScript no pinta, solo avisa.** El script agrega o quita una clase; lo que esa clase significa visualmente lo define el CSS que ya sabemos escribir.

#### Una advertencia sobre `<object>`

Vinculamos `viz.svg` con `<object data="viz.svg" type="image/svg+xml"></object>`. Sirve para un gráfico estático, pero el SVG queda dentro de **otro documento**: el CSS y el JavaScript de la página no lo alcanzan. Para interactuar, **el SVG debe estar escrito dentro del HTML**, como lo dejamos al final de la clase pasada.

---

### Ejercicio: Mostrar y ocultar universidades en el radar

Objetivo: que al hacer clic en el nombre de una universidad en la leyenda, su polígono aparezca o desaparezca. Son **cuatro cambios** sobre el SVG que ya tenemos, y solo el último es JavaScript.

El archivo completo ya modificado está en [`radar-interactivo.html`](./radar-interactivo.html), para comparar con el propio.

#### Cambio 1: Un documento HTML que contenga el SVG

Creen un `index.html` y peguen el SVG del paso 2 dentro de `<body>`:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Radar QS interactivo</title>
    <style>
      svg { width: 100%; height: auto; display: block; }
    </style>
  </head>
  <body>
    <h1>Cuatro universidades chilenas en el Ranking QS</h1>
    <p>Haga clic en el nombre de una universidad para mostrarla u ocultarla.</p>

    <!-- AQUÍ VA EL SVG DEL PASO 2 -->

  </body>
</html>
```

Ábranlo en el navegador: el radar ya debería verse y reaccionar al `:hover`. Hasta aquí, nada nuevo.

#### Cambio 2: Ponerle nombre a cada universidad

A cada grupo `<g>` de color le agregamos un `id`, que funciona como un nombre propio dentro del documento:

```html
<g id="puc" fill="#FEC60D" stroke="#FEC60D">
```

| Color | `id` |
|:------|:-----|
| `#FEC60D` (amarillo) | `puc` |
| `#1F5592` (azul) | `uch` |
| `#2ca02c` (verde) | `udec` |
| `#d62728` (rojo) | `usach` |

Solo se agrega `id="..."`; el resto de la línea no cambia.

#### Cambio 3: Hacer clicable cada ítem de la leyenda

Cada cuadrado de color y su texto se envuelven en un `<g>` que dice *qué hacer al hacer clic*. Por ejemplo, para la PUC:

```html
<g class="item" onclick="alternar('puc', this)">
  <rect y="16.0" width="15" height="15" fill="#FEC60D"/>
  <text class="legend-text" x="20" y="28.5">Pontificia Universidad Católica de Chile</text>
</g>
```

Lo único nuevo es `onclick="alternar('puc', this)"`, que se lee casi como una frase: *"al hacer clic, ejecute **alternar** con el nombre `puc` y con este mismo elemento (`this`)"*. Repitan el patrón con `uch`, `udec` y `usach`.

Y en el bloque `<style>` del SVG, agreguen los tres estados que usaremos:

```css
.item { cursor: pointer; }
.item:hover { opacity: .6; }
.apagado { opacity: .35; }
.oculta { display: none; }
```

#### Cambio 4: La función de JavaScript

Antes de cerrar `</body>`:

```html
<script>
  function alternar(id, item) {
    document.getElementById(id).classList.toggle("oculta");
    item.classList.toggle("apagado");
  }
</script>
```

Cómo se lee, línea por línea:

* `function alternar(id, item) { ... }` → *"Defino una acción llamada `alternar`, que recibe un nombre (`id`) y un elemento (`item`)."*
* `document.getElementById(id)` → *"Busca en el documento el elemento que tiene ese nombre."* Con `'puc'`, encuentra el polígono amarillo.
* `.classList.toggle("oculta")` → *"Si tiene la clase `oculta`, quítasela; si no la tiene, agrégasela."* Y como `.oculta { display: none; }`, el polígono desaparece o reaparece.
* La segunda línea hace lo mismo con el ítem de la leyenda, que se opaca cuando su universidad está oculta.

**Prueben:** oculten y muestren distintas combinaciones. ¿Qué se ve cuando solo quedan la PUC y la Universidad de Chile? ¿Y cuando quedan la Universidad de Concepción y la USACH? ¿Cambia la conversación que provoca el radar al ver las instituciones de a pares?

#### Para quien quiera ir un paso más allá (opcional)

Agreguen un párrafo antes del SVG y una segunda función:

```html
<p id="lectura">Haga clic en una universidad.</p>
```

```js
function anunciar(texto) {
  document.getElementById("lectura").textContent = texto;
}
```

Y en un ítem de la leyenda: `onclick="alternar('puc', this); anunciar('Pontificia Universidad Católica de Chile')"`. Es la misma idea: buscar un elemento por su nombre y cambiarle algo.

---

### Del código a la mirada editorial

Las visualizaciones de [Reuters Graphics](https://www.reuters.com/graphics/) son una referencia útil no por su sofisticación técnica, sino por **cómo organizan la lectura**. Al revisarlas, conviene fijarse en:

* **Un título que afirma algo**, y no solo rotula el tema.
* **Una figura, un mensaje principal.** El resto apoya, no compite.
* **Anotaciones cerca del dato** que explican.
* **Interacción al servicio de la lectura**: sirve para comparar, filtrar o precisar, no para adornar. Nuestro mostrar y ocultar universidades es un ejemplo mínimo: permite comparar de a pares.
* **Fuente y nota metodológica visibles.**
* **Funciona en el teléfono.** Para eso es el `viewBox`.

Y regresa la idea que atraviesa el curso: *lo que se cuenta, cuenta*. Cada decisión (qué series mostrar primero, qué color lleva cada caso, qué escala se usa) es una decisión editorial, aunque se vea técnica.

---

### Antesala de la evaluación

**La siguiente clase es de evaluación.** Se les pedirá presentar, mediante visualizaciones de datos cercanas a las que ofrece [Reuters Graphics](https://www.reuters.com/graphics/), **las alternativas que tienen los estudiantes de la Universidad de Chile** entre estas cinco instituciones:

- **Politecnico di Milano** (polimi; Italia): Es la principal opción europea del ranking con convenio directo disponible.

- **Universidade de São Paulo** (Brasil): Referente regional destacado en la clasificación mundial de Arte y Diseño.

- **Universidad de Buenos Aires** (UBA; Argentina): Una de las instituciones históricas más prominentes de Sudamérica dentro del índice.

- **Tecnológico de Monterrey** (Tec; México): Presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.

- **Universidad Nacional Autónoma de México** (UNAM; México): Una de las macro-escuelas más reconocidas de la región en artes y humanidades.

Pueden resolverlo con las herramientas que ya conocemos: gráficos de RAWGraphs limpiados como SVG, Chart.js, o un SVG en línea con la interacción mínima de hoy. **No se exige más JavaScript que el visto en clase**; se exige criterio. Para avanzar durante lo que queda de la sesión:

1. **Definir a quién le hablan.** Una persona que decide su intercambio no lee igual que una autoridad académica. Esa decisión determina el título, el tono y el detalle.

2. **Construir su hoja de datos.** Una fila por institución y una columna por variable, anotando **fuente y fecha de cada dato**. Si un dato no existe o no es comparable, déjenlo vacío y díganlo: un vacío también es información.

3. **Elegir qué mostrar y qué dejar fuera.** Un ranking mide algunas cosas y calla otras. Pregúntense qué necesita saber quien viaja que el ranking *no* cuenta, y si pueden incorporarlo con una fuente confiable o, al menos, señalarlo como ausencia.

4. **Bosquejar antes de programar.** Prueben en RAWGraphs qué tipo de gráfico responde a cada pregunta, y luego decidan cuál merece quedar como figura estática, cuál como Chart.js y cuál como SVG interactivo.

Recuerden además que las herramientas de IA son asistentes útiles para explorar y avanzar rápido, pero **no reemplazan la reflexión crítica, el criterio analítico ni la voz propia**.

---

### Para dejar a mano

* Referencias: [SVG en MDN](https://developer.mozilla.org/en-US/docs/Web/SVG), [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) y [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList).
* El ejercicio de hoy debe quedar publicado en su repositorio de GitHub Pages: es material base para la evaluación.

- - - - - - - 

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
