# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 08 → 28 de abril

### Aplicando la presentación de datos con HTML y (un `fetch` de) JavaScript

1.0. PUNTO BASE: Crear un repositorio en github con un README.md, activar GitHub Pages. Tomar la dirección donde se despliega la página (que mientras tanto sólo muestra el contenido en su README.md). Ingresarla a la TAREA DE **EL PUNTO BASE DE LA SEGUNDA NOTA** antes de que den las 15:30 hrs. 

1.0 DATOS: Genere su propia copia de este documento: https://docs.google.com/spreadsheets/d/18t1UAEzCetVr7oCzuVQ1tC0svGR50ldqJoGumYIuo7s/copy

1.0 DATOS: Descargue su copia como *.CSV para luego poder pasar sus datos a JSON con el servicio de https://csvjson.com/csv2json

1.0 DATOS: En su propia cuenta de myjson.online genere un nuevo registro, con los datos del JSON. Usted debe usar su propio registro y no uno ajeno para obtener este punto.

Después de la imagen de referencia, siguen instrucciones para sumar puntos hasta el 7.0

<img width="1300" height="899" alt="ejemplo" src="https://github.com/user-attachments/assets/19574b37-4319-436d-a51e-c8c791144242" />

1.0 HTML: Reutilice el trabajo de la clase recién pasada, ajustando todos los textos que antes referían a electivos, para referir ahora a proyectos de título de diseño.

1.0 CSS: Borre todo el CSS del trabajo de la clase recién pasada (el código contenido entre etiquetas `<style>` y `</style>`, sin borrar las etiquetas). Pegue en su lugar lo que sigue, y después de pegarlo, cambie únicamente los colores definidos en `:root{} ` y el SVG de imagen de fondo en el `input{}`

```
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");

:root {
    --color-oscurisimo: #000;
    --color-oscuro: #444;
    --color-normal: #999;
    --color-iluminado: #aaa;
    --color-iluminadisimo: #ddd;
    --fuente: "Source Code Pro", monospace;
}

body {
    font-family: var(--fuente);
    color: var(--color-normal);
    text-align: center;
    font-size: 100%;
}

a {
    color: var(--color-oscuro);
    text-decoration: none;
}

a:hover {
    color: var(--color-oscurisimo);
    text-decoration: underline;
}
div#contenedor {
    margin: 1rem auto;
    width: 90%;
    max-width: 980px;
}

h1 {
    margin: 1rem 0;
    font-weight: 400;
    font-size: calc(100% + 3vw + 3vh);
}

h2 {
    margin: 3rem 0;
    font-weight: 400;
    letter-spacing: 0.25rem;
    font-size: calc(100% + 1vw + 1vh);
    color: var(--color-oscuro);
}

input {
    border: 0.1rem solid var(--color-iluminado);
    padding: 0.5rem 1rem;
    font-family: inherit;
    font-size: 15px;
    color: var(--color-oscuro);
    outline: none;
    margin-bottom: 1.5rem;
    width: 100%;
    display: block;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M10.15,61.5H25.77V68H10.15a3.13,3.13,0,0,1-3.08-3.08v-.49A3.1,3.1,0,0,1,10.15,61.5Zm0,18.33H25.77v6.52H10.15a3.11,3.11,0,0,1-3.08-3V82.9A3.12,3.12,0,0,1,10.15,79.83ZM23.92,37.27H19v-24a4.09,4.09,0,0,1,4.06-4h49.7a4.08,4.08,0,0,1,4,4v.87H23.92ZM19,43.05v-.86H71.89V19.06h4.92l7.51,1.23V35.55l-7.51,1.72v5.78a4.09,4.09,0,0,1-4,4.06H23.06A4.1,4.1,0,0,1,19,43.05Zm9.84-5.17V18.45H39.67V37.88ZM92.93,77.74H71.28a16.85,16.85,0,0,1-16.36,13H31.3V57.07H54.92A16.88,16.88,0,0,1,71.28,70H92.93Z"></path></svg>');
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 99% center;
}

input::placeholder {
    color: var(--color-iluminado);
}

input:focus {
    border-color: var(--color-normal);
}

div#contenedordetabla {
    overflow-x: auto;
    font-size: 90%;
}

table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    margin-bottom: 3rem;
}

thead {
    background: var(--color-iluminadisimo);
    color: var(--color-oscuro);
}

tbody {
    color: var(--color-normal);
}

td,
th {
    border: 1px solid var(--color-normal);
    padding: 0.75rem;
}

th:nth-child(1),
td:nth-child(1),
th:nth-child(4),
td:nth-child(4) {
    text-align: center;
}

td:nth-child(2) {
    color: var(--color-oscuro);
    font-weight: 800;
}

td:nth-child(3) {
    font-style: italic;
}
```

1.0 JAVASCRIPT: Haga funcionar la tabla para mostrar, al menos nombre de Titulad@, nombre de Proyecto, nota, categoría del proyecto y Prof. Guía; ideal sería sumar numeración, y hacer que cada nombre de Proyecto vincule a su dirección en el repositorio académico de la universidad de Chile. Pero llegar al ideal sólo bonificaría su nota en caso de que otro punto esté débil, si logra lo mínimo, con una tabla bien ordenada, ya tiene el punto completo.

_ _ _ _ 

[clase-07](https://github.com/profesorfaco/troncal/blob/main/clase-07/README.md) ⇆ [clase-09](https://github.com/profesorfaco/troncal/blob/main/clase-09/README.md)
