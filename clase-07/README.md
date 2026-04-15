# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 07 → 21 de abril

### Presentando datos con HTML y (un `fetch` de) JavaScript

Vamos directo a la práctica. Corresponde usar lo que ya fue publicado en [myjson](https://myjson.online/) para reemplazar los puntos suspensivos (…) en el valor asignado a la `const URL`:

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ELECTIVOS DE DISEÑO</title>
        <style>
            *, *::before, *::after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            :root {
                --color-oscurisimo: #800a49;
                --color-oscuro: #bf0f6d;
                --color-normal: deeppink;
                --color-iluminado: pink;
                --color-iluminadisimo: lightpink;
            }

            body {
                font-family: Helvetica, Arial, sans-serif;
                color: var(--color-normal);
                text-align: center;
                font-size: 100%;
            }
            div#contenedor {
                margin: 1rem auto;
                width: 90%;
                max-width: 780px;
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
                background: var(--color-iluminado);
            }

            td,
            th {
                border: 1px solid var(--color-normal);
                padding: 0.75rem;
            }

            td:nth-child(1),
            th:nth-child(1),
            td:nth-child(3),
            th:nth-child(3) {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div id="contenedor">
            <h1>ᕙ( •̀ ᗜ •́ )ᕗ</h1>
            <h2>ELECTIVOS DE DISEÑO</h2>

            <input type="text" id="elInput" placeholder="Filtrar electivos…" />
            <div id="contenedordetabla">
                <table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Asignatura electiva</th>
                            <th>Mención</th>
                            <th>Grupo</th>
                            <th>Enfoque</th>
                        </tr>
                    </thead>
                    <tbody id="este"></tbody>
                </table>
            </div>
            <small>Diseño y visualización de información</small>
        </div>

        <script>
            const t = document.querySelector("#este");
            const URL = "…";

            fetch(URL)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("Error HTTP: " + respuesta.status);
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    var trabajo = datos.data;
                    console.log(trabajo);
                    trabajo.forEach((x) => {
                        t.innerHTML += `<tr style="${x.ok == 1 ? "background-color: var(--color-iluminadisimo); color: var(--color-oscurisimo)" : ""}"><td>${x.id}</td><td>${x.name}</td><td>${x.track}</td><td>${x.group}</td><td>${x.focus}</td></tr>`;
                    });
                })
                .catch((error) => {
                    console.error("Algo salió mal:", error);
                });

            function sinAcentos(str) {
                return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }

            document.getElementById("elInput").addEventListener("keyup", function () {
                const valor = sinAcentos(this.value.toLowerCase());
                document.querySelectorAll("#este tr").forEach(function (fila) {
                    fila.style.display = sinAcentos(fila.textContent.toLowerCase()).includes(valor) ? "" : "none";
                });
            });
        </script>
    </body>
</html>
```


_ _ _ _ 

[clase-06](https://github.com/profesorfaco/troncal/blob/main/clase-06/README.md) ⇆ [clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md)
