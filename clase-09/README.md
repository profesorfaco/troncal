# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 09 → 5 de mayo

### RawGraph *et al*

Revisemos datos en dos documentos: 

- Exámenes de Título aprobados (334): https://docs.google.com/spreadsheets/d/1Mr7L5r97WHkFV6JAjPga6LHx4ddkM1KrKpx7zspPqDY/copy

- Inscripciones de Proyecto de Título II (685): https://docs.google.com/spreadsheets/d/1-9RXg80pRE4M8RN6WEO3jwWYlWvl9CwcFwEMdMhmApE/copy

Busquemos qué datos cruzar para luego probar un [Gráfico de barras](https://www.chartjs.org/docs/latest/getting-started/) [apiladas](https://www.chartjs.org/docs/latest/samples/bar/stacked.html) con Chart.js, partiendo desde: 

```
<!doctype html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TITULARSE</title>
        <style>
            *,
            *::before,
            *::after {
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
        </style>
    </head>
    <body>
        <div id="contenedor">
            <canvas id="myChart"></canvas>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <script>
            new Chart(document.getElementById("myChart"), {
                type: "bar",
                data: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: [12, 19, 3, 5, 2, 3],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        </script>
    </body>
</html>
```

_ _ _ _ 

[clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md) ⇆ [clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md)
