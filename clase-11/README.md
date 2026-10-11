# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 11 → 30 de octubre

## UNIDAD 3: Herramientas, lenguajes y producción de interfaces web de complejidad media-alta

### Integración del trinomio front-end: Interacción y dinamismo mediante HTML, SVG y JavaScript.

En la clase pasada tomamos un SVG "sucio" exportado desde RAWGraphs y lo limpiamos con su `viewBox`, estilos en un bloque `<style>`, formas nativas como `<polygon>` y un primer gesto de interacción con un `:hover` sobre las áreas del radar. Pero ese gráfico, aunque ordenado, sigue siendo **una imagen que reacciona**: no sabe nada de sus datos, no puede reordenarse, filtrarse ni responder a quien lo lee.

Hoy damos el paso que falta: conectar el SVG con **JavaScript** para que el gráfico deje de ser un dibujo y pase a ser una interfaz.

Y hay una razón de calendario para hacerlo ahora: **lo que veamos hoy antecede a la clase de la segunda calificación individual**.

---

### El trinomio y sus responsabilidades

Cuando hablamos de *front-end* conviene separar qué hace cada lenguaje, porque la mayoría de los errores de integración nacen de pedirle a una tecnología lo que le corresponde a otra:

| Lenguaje | Responsabilidad | En nuestro gráfico |
|:---------|:----------------|:-------------------|
| **HTML** | Estructura y significado del documento | El título, el texto de lectura, el contenedor `<svg>`, las fuentes y notas |
| **SVG** | Estructura de las formas: coordenadas, geometría y texto vectorial | Barras (`<rect>`), áreas (`<polygon>`), ejes (`<line>`), etiquetas (`<text>`) |
| **CSS** | Presentación y estados visuales de lo estructurado | Colores, transiciones, `:hover`, clases como `.oculta` o `.apagado` |
| **JavaScript** | Comportamiento y datos | Crear elementos desde datos, escuchar eventos, cambiar clases y textos |

Dos ideas que sostienen todo lo que sigue:

1. **Un SVG en línea es parte del DOM.** Cada `<rect>` o `<g>` es un nodo al que JavaScript puede acceder igual que a un `<p>` o un `<div>`.
2. **JavaScript decide *cuándo*; CSS decide *cómo se ve*.** Lo más mantenible es que el script solo agregue o quite clases, y que el aspecto viva en la hoja de estilos.

#### Una advertencia sobre `<object>`

La clase 9 vinculamos un `viz.svg` mediante `<object data="viz.svg" type="image/svg+xml"></object>`. Es una buena solución para un gráfico estático, pero el SVG queda dentro de **otro documento**: el CSS de la página no lo alcanza y el JavaScript de la página no puede seleccionar sus elementos de forma directa. Para interactuar, **el SVG debe estar incrustado en el HTML** (en línea), tal como lo dejamos en el paso 2 de la clase 10.

---

### Ejercicio 1: Encender y apagar series en el radar

Partimos del radar optimizado de la clase pasada. Se trata de lograr que, al hacer clic en el nombre de una universidad en la leyenda, su polígono aparezca o desaparezca, y que al pasar el cursor sobre ella las demás se atenúen.

**1. Pegar el SVG del paso 2 dentro del `<body>`** de un documento HTML nuevo.

**2. Marcar con identificadores** cada serie y su ítem de leyenda. Cada grupo de color recibe una clase y un `data-id`:

```html
<g class="serie" data-id="puc" fill="#FEC60D" stroke="#FEC60D">
  <polygon class="area" points="0.0,-236.0 228.3,-74.2 141.1,194.2 -137.5,189.3 -176.9,-57.5"/>
  <!-- círculos de los vértices -->
</g>
```

Y en la leyenda, cada par cuadrado + texto queda envuelto en un grupo con el mismo `data-id`:

```html
<g class="item" data-id="puc">
  <rect y="16.0" width="15" height="15" fill="#FEC60D"/>
  <text class="legend-text" x="20" y="28.5">Pontificia Universidad Católica de Chile</text>
</g>
```

Los identificadores del resto serán, por ejemplo, `uch`, `udec` y `usach`.

**3. Agregar al bloque `<style>`** los estados que el script va a activar:

```css
.item { cursor: pointer; transition: opacity .3s; }
.item.apagado { opacity: .35; }
.serie { transition: opacity .3s; }
.serie.oculta { display: none; }
svg.enfoque .serie:not(.activa) { opacity: .15; }
```

**4. Escribir el script**, justo antes de cerrar `</body>`:

```html
<script>
  const svg = document.querySelector("svg");
  const items = document.querySelectorAll(".item");

  const serieDe = (item) =>
    document.querySelector(`.serie[data-id="${item.dataset.id}"]`);

  items.forEach((item) => {
    // Clic: mostrar u ocultar la serie
    item.addEventListener("click", () => {
      serieDe(item).classList.toggle("oculta");
      item.classList.toggle("apagado");
    });

    // Cursor encima: enfocar una serie y atenuar las demás
    item.addEventListener("mouseenter", () => {
      svg.classList.add("enfoque");
      serieDe(item).classList.add("activa");
    });

    item.addEventListener("mouseleave", () => {
      svg.classList.remove("enfoque");
      serieDe(item).classList.remove("activa");
    });
  });
</script>
```

Observen la división del trabajo: el script **no pinta nada**; solo nombra estados (`oculta`, `apagado`, `enfoque`, `activa`), y es el CSS el que los traduce a una apariencia.

---

### Ejercicio 2: Dibujar un gráfico desde los datos

En el ejercicio 1 el SVG ya existía y JavaScript lo animó. Ahora invertimos el orden: **los datos viven en JavaScript y el SVG se construye a partir de ellos**. Es la diferencia entre *dibujar* un gráfico y *programar* un gráfico: si cambia un número, cambia la figura, sin tocar coordenadas a mano.

Usaremos un subconjunto de los datos de la clase 9 (veces que cada país aparece en el top 100) para armar barras horizontales, destacando el caso chileno.

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trinomio front-end</title>
    <style>
      body { font-family: Helvetica, Arial, sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; }
      svg { width: 100%; height: auto; display: block; }
      .barra { fill: #d6d6d6; transition: fill .3s; cursor: pointer; }
      .barra:hover { fill: #1F5592; }
      .barra.chile { fill: #d62728; }
      .nombre, .valor { font-size: 12px; dominant-baseline: middle; }
      .nombre { text-anchor: end; }
      #lectura { min-height: 1.5em; color: #444; }
    </style>
  </head>
  <body>
    <h1>¿Cuántas veces aparece cada país en el top 100?</h1>
    <svg id="grafico" viewBox="0 0 600 270" role="img"
         aria-label="Barras horizontales con las veces que cada país aparece en el top 100"></svg>
    <p id="lectura">Pase el cursor sobre una barra.</p>

    <script>
      const datos = [
        { pais: "Estados Unidos", valor: 24 },
        { pais: "Reino Unido",    valor: 11 },
        { pais: "Italia",         valor: 6 },
        { pais: "Argentina",      valor: 2 },
        { pais: "México",         valor: 2 },
        { pais: "Brasil",         valor: 1 },
        { pais: "Chile",          valor: 1, chile: true },
      ];

      const NS = "http://www.w3.org/2000/svg";
      const svg = document.getElementById("grafico");
      const lectura = document.getElementById("lectura");

      // Los elementos SVG se crean con createElementNS, no con createElement
      function crear(etiqueta, atributos, texto) {
        const el = document.createElementNS(NS, etiqueta);
        for (const clave in atributos) el.setAttribute(clave, atributos[clave]);
        if (texto) el.textContent = texto;
        return el;
      }

      const margen = { izq: 130, der: 40, sup: 10 };
      const paso = 36;                               // alto de cada fila
      const maximo = Math.max(...datos.map((d) => d.valor));
      const escala = (v) => (v / maximo) * (600 - margen.izq - margen.der);

      datos.forEach((d, i) => {
        const y = margen.sup + i * paso;
        const ancho = escala(d.valor);

        const barra = crear("rect", {
          class: d.chile ? "barra chile" : "barra",
          x: margen.izq, y: y, width: ancho, height: 24,
        });

        barra.addEventListener("mouseenter", () => {
          lectura.textContent = `${d.pais}: ${d.valor} ${d.valor === 1 ? "vez" : "veces"} en el top 100.`;
        });
        barra.addEventListener("mouseleave", () => {
          lectura.textContent = "Pase el cursor sobre una barra.";
        });

        svg.append(
          crear("text", { class: "nombre", x: margen.izq - 8, y: y + 12 }, d.pais),
          barra,
          crear("text", { class: "valor", x: margen.izq + ancho + 6, y: y + 12 }, d.valor)
        );
      });
    </script>
  </body>
</html>
```

**Para observar y modificar en clase:**

1. Agreguen un país al arreglo `datos`. ¿Qué pasa con el `viewBox`? ¿Qué número habría que cambiar para que la barra nueva no quede cortada?
2. Cambien `Math.max(...)` por un valor fijo, por ejemplo `30`. ¿Qué le ocurre a la longitud de las barras y por qué esa decisión **también es una decisión de diseño**?
3. Reemplacen la barra roja de Chile por un color que **no** sea el de la alerta. ¿Qué connotación pierde o gana el caso chileno?
4. Ordenen alfabéticamente en lugar de por valor. ¿Cambia lo que el gráfico cuenta?

---

### Del código a la mirada editorial

Las visualizaciones de [Reuters Graphics](https://www.reuters.com/graphics/) son una referencia útil no por su sofisticación técnica, sino por **cómo organizan la lectura**. Al revisar varias, conviene mirar con la lista del trinomio en la mano:

* **Título que afirma algo**, y no solo rotula el tema. Es HTML bien escrito.
* **Una figura, un mensaje principal.** El resto del gráfico apoya, no compite. Es SVG y CSS con jerarquía.
* **Anotaciones sobre la figura**, cerca del dato que explican. Es texto SVG posicionado con criterio.
* **Interacción al servicio de la lectura**, no como adorno: sirve para comparar, filtrar o precisar un valor. Es JavaScript con propósito.
* **Fuente y nota metodológica visibles.** Quien lee debe poder saber qué se contó y qué no.
* **Funciona en el teléfono.** Es `viewBox`, unidades relativas y pruebas reales.

Y regresa la idea que atraviesa el curso: *lo que se cuenta, cuenta*. Cada decisión de este código (el máximo de la escala, el orden de las filas, el color de un caso) es una decisión editorial, aunque se vea como una decisión técnica.

---

### Antesala de la evaluación

**La siguiente clase es de evaluación.** Se les pedirá presentar, mediante visualizaciones de datos cercanas a las que ofrece [Reuters Graphics](https://www.reuters.com/graphics/), **las alternativas que tienen los estudiantes de la Universidad de Chile** entre estas cinco instituciones:

- **Politecnico di Milano** (polimi; Italia): Es la principal opción europea del ranking con convenio directo disponible.

- **Universidade de São Paulo** (Brasil): Referente regional destacado en la clasificación mundial de Arte y Diseño.

- **Universidad de Buenos Aires** (UBA; Argentina): Una de las instituciones históricas más prominentes de Sudamérica dentro del índice.

- **Tecnológico de Monterrey** (Tec; México): Presente en el ranking de Arte y Diseño, con convenio de movilidad vigente.

- **Universidad Nacional Autónoma de México** (UNAM; México): Una de las macro-escuelas más reconocidas de la región en artes y humanidades.

Lo que se trabaja hoy es la preparación para ese encargo. Para no llegar con las manos vacías, usen lo que queda de la sesión para avanzar en cuatro frentes:

1. **Definir a quién le hablan.** Una persona que está decidiendo su intercambio no lee igual que una autoridad académica. Esa decisión determina el título, el tono y el nivel de detalle.

2. **Construir su hoja de datos.** Una fila por institución y una columna por variable. Anoten la **fuente y la fecha de cada dato**, como en las hojas de cálculo que hemos usado en la unidad. Si un dato no existe o no es comparable, déjenlo vacío y dígalo: un vacío también es información.

3. **Elegir qué mostrar y qué dejar fuera.** Un ranking mide algunas cosas y calla otras. Antes de graficar, pregúntense qué necesita saber quien viaja que el ranking *no* cuenta, y si pueden incorporarlo con una fuente confiable o, al menos, señalarlo como ausencia.

4. **Bosquejar antes de programar.** Prueben en RAWGraphs qué tipo de gráfico funciona para cada pregunta, y luego decidan cuál merece vivir como SVG en línea con JavaScript, cuál como Chart.js y cuál como una figura estática bien hecha.

Recuerden además lo conversado en clases anteriores: las herramientas de IA son asistentes útiles para explorar y avanzar rápido, pero **no reemplazan la reflexión crítica, el criterio analítico ni la voz propia**. Quien mire sus gráficos debe poder notar de inmediato que hubo alguien pensando detrás de ellos.

---

### Para dejar a mano

* Documentos de referencia: [SVG en MDN](https://developer.mozilla.org/en-US/docs/Web/SVG), [`createElementNS`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS) y [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
* Los ejercicios 1 y 2 deben quedar publicados en su repositorio de GitHub Pages: son el material base para la evaluación.
Volviendo a la idea central: cuando limpiamos, mapeamos y corregimos una base de datos para poder visualizarla, estamos asumiendo ese rol de servidores: realizamos el trabajo invisible que "la inteligencia del señor" no puede resolver por sí sola.

- - - - - - - 

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
