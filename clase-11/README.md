# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 11 → 28 de octubre

### HTML, SVG y JavaScript

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Está temblando…</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: "Chivo", sans-serif;
                font-optical-sizing: auto;
                font-style: normal;
                font-weight: 300;
                line-height: 1.2;
                background: #fafafa;
                color: #222;
            }
            div.container {
                width: min(800px, 90%);
                margin: 2rem auto;
            }
            h1 {
                font-size: calc(2rem + 3vw);
                font-weight: 900;
                padding: 0.125rem;
            }
            h2 {
                margin: 2rem 0 1rem 0;
                border-bottom: 1px solid black;
                font-weight: 800;
                padding: 0.25rem;
            }
            a {
                color: #000;
                font-weight: 400;
            }
            a:hover {
                text-decoration: none;
            }
            p {
                margin: 0.5rem 0;
                padding: 0.25rem;
            }
            code {
                font-size: 110%;
                color: #2B678C;
                background: #A7D0D9;
                border-radius: 2px;
                border: 1px solid #2A86BF;
            }
            table {
                width: 100%;
                text-align: center;
            }
            table a {
                text-decoration: none;
            }
            table a:hover:after {
                content: " ⤴";
            }
            th,
            td {
                border-bottom: 1px solid black;
                border-collapse: collapse;
                padding: 0.25rem;
            }
            td {
                font-size: 90%;
            }
            th,
            td strong {
                font-weight: 700;
            }
            td span {
                color: #999;
            }
            th:nth-child(1),
            th:nth-child(2),
            td:nth-child(1),
            td:nth-child(2) {
                text-align: left;
            }
            footer {
                border-top: 3px solid black;
                margin: 2rem 0 0 0;
                padding: 1rem;
                text-align: center;
                font-size: 80%;
                letter-spacing: 1px;
            }
            .escondido {
                display: none;
            }

            th {
                line-height: 1.5;
            }

            th svg {
                width: 1.5rem;
                height: 1.5rem;
                margin-bottom: -0.25rem;
                margin-left:-0.25rem;
                fill: #2B678C;
            }

            div.mapas {
                width: 100%;
                height: 400px;
                margin: 1rem 0 3rem 0;
                box-shadow: 0 0 4px #eee;
            }
            
            .leaflet-control {
                display:none
            }
        </style>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
        <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    </head>
    <body>
        <svg xmlns="http://www.w3.org/2000/svg" class="escondido">
            <symbol id="location" viewBox="0 0 100 100">
                <path
                    d="M36.73,36.09a13,13,0,0,0,13,12.67A12.65,12.65,0,0,0,62.44,36.09a13.22,13.22,0,0,0-9.59-12.67v-18A31.37,31.37,0,0,1,81.14,36.58a30.89,30.89,0,0,1-4.55,16.36l-25,41.21H47.93L23,52.94A31.36,31.36,0,0,1,46.7,5.46v18A13.41,13.41,0,0,0,36.73,36.09Z"
                ></path>
            </symbol>

            <symbol id="time" viewBox="0 0 100 100">
                <path
                    d="M15.44,49H6.33a43.68,43.68,0,0,1,87.34,0L89.24,52.1,84.56,49a34.57,34.57,0,0,0-69.12,0Zm1.84,29.77A44.16,44.16,0,0,1,6.83,56.65h9.22a33.86,33.86,0,0,0,7.63,15.62Zm5.66,5.41,6.4-6.52A34.17,34.17,0,0,0,46.19,84.2v9.22A42.43,42.43,0,0,1,22.94,84.2ZM86.53,64.64,54.31,47.91V25.16H47.05V52.22l36,18.94ZM77.55,84a43.22,43.22,0,0,1-23.61,9.47V84.2a32.11,32.11,0,0,0,17-6.77Z"
                ></path>
            </symbol>

            <symbol id="tsunami" viewBox="0 0 100 100">
                <path
                    d="M91.33,88.22H8.92c-2.22,0-3.57-1.23-3.57-3a4.63,4.63,0,0,1,.61-2L17.77,62.51c5.17-9,16.36-13.9,27.06-13.9,11.57,0,17.35,5.54,17.35,10.46,0,4.3-3.32,7.13-6.77,8.12H53.07a3.49,3.49,0,0,0-3.56-3.82,3.42,3.42,0,0,0-3.32,3.45c0,3.81,4.79,7.5,13.16,7.5,7.75,0,18-3.57,24.6-9.1L94.28,83.3a3.51,3.51,0,0,1,.37,1.84A3,3,0,0,1,91.33,88.22Zm-10.21-28L52.71,10.36a3.19,3.19,0,0,0-5.66,0L26.14,47.51a36.15,36.15,0,0,1,12.67-4.06L49.88,23.89,73.37,64.36A19.72,19.72,0,0,0,81.12,60.17Z"
                ></path>
            </symbol>

            <symbol id="magnitude" viewBox="0 0 100 100">
                <path
                    d="M5.47,58.58H17A44.19,44.19,0,0,0,5.47,82.93Zm17.84,0h7.62l-3.56-35.8,13.4-5.66V30.65l12.06,4.8-4.06,22A31.82,31.82,0,0,0,18.39,89.08H9.53A40.25,40.25,0,0,1,23.31,58.58ZM50,61.9A27.18,27.18,0,0,1,77.18,89.08h-9a18.27,18.27,0,1,0-36.53,0H22.82A27.18,27.18,0,0,1,50,61.9Zm0,13.28a13.86,13.86,0,0,1,13.78,13.9H54.92a4.92,4.92,0,0,0-9.84,0h-9A14,14,0,0,1,50,75.18Zm8.24-16.6a35.85,35.85,0,0,0-5.29-1L57.5,32.87,45,28V15.28l4.42-1.85L69.56,18.6l3.81,40h3.32a40.25,40.25,0,0,1,13.78,30.5H81.61A31.68,31.68,0,0,0,58.24,58.58Zm24.72,0H94.53V82.93A45.16,45.16,0,0,0,83,58.58Z"
                ></path>
            </symbol>
        </svg>

        <div class="container">
            <h1>Está temblando…</h1>
            <p>
                El <abbr title="United States Geological Survey">USGS</abbr> (Servicio Geológico de Estados Unidos) es responsable del
                <a href="https://www.usgs.gov/programs/earthquake-hazards" target="_blank">Earthquake Hazards Program</a>, que monitorea e informa sobre movimientos telúricos, además de evaluar sus impactos y riesgos. Los resultados de su
                monitoreo son compartidos mediante <a href="https://earthquake.usgs.gov/earthquakes/feed/" target="_blank">Real-time Notifications</a>, que pueden consultarse en distintos formatos.
            </p>
            <p>
                Entre los compartidos está el GeoJSON Summary Format, que es actualizado a cada minuto y tiene una estructura (Output) que se explica en su página oficial. Aprovechando la
                <a href="https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php" target="_blank">explicación de la estructura (Output)</a>, y lo ya preparado en este código fuente, que entra al <code>features:[]</code> para obtener
                los datos, podemos visualizar lo que sigue:
            </p>
            <h2>En Chile</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <svg><use href="#location"></use></svg> place
                        </th>
                        <th>
                            <svg><use href="#time"></use></svg> time
                        </th>
                        <th>
                            <svg><use href="#magnitude"></use></svg> mag
                        </th>
                        <th>
                            <svg><use href="#tsunami"></use></svg> tsunami
                        </th>
                    </tr>
                </thead>
                <tbody id="cl"></tbody>
            </table>

            <div class="mapas" id="mapaCL"></div>

            <h2>En Japón</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <svg><use href="#location"></use></svg> place
                        </th>
                        <th>
                            <svg><use href="#time"></use></svg> time
                        </th>
                        <th>
                            <svg><use href="#magnitude"></use></svg> mag
                        </th>
                        <th>
                            <svg><use href="#tsunami"></use></svg> tsunami
                        </th>
                    </tr>
                </thead>
                <tbody id="jp"></tbody>
            </table>
            <h2>En México</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <svg><use href="#location"></use></svg> place
                        </th>
                        <th>
                            <svg><use href="#time"></use></svg> time
                        </th>
                        <th>
                            <svg><use href="#magnitude"></use></svg> mag
                        </th>
                        <th>
                            <svg><use href="#tsunami"></use></svg> tsunami
                        </th>
                    </tr>
                </thead>
                <tbody id="mx"></tbody>
            </table>
            <h2>En Rusia</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <svg><use href="#location"></use></svg> place
                        </th>
                        <th>
                            <svg><use href="#time"></use></svg> time
                        </th>
                        <th>
                            <svg><use href="#magnitude"></use></svg> mag
                        </th>
                        <th>
                            <svg><use href="#tsunami"></use></svg> tsunami
                        </th>
                    </tr>
                </thead>
                <tbody id="ru"></tbody>
            </table>
            <h2>Resumen</h2>
            <p>Registros sobre 2.5 M de la última semana:</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" id="viz"></svg>
            <footer>
                <p>Desarrollado por <a href="#" target="_blank">Nombre Apellido</a> &copy; 2025</p>
            </footer>
        </div>
        <script>
            const chilenos = document.getElementById("cl");
            const mexicanos = document.getElementById("mx");
            const japoneses = document.getElementById("jp");
            const rusos = document.getElementById("ru");

            var conteoChilenos = 0;
            var conteoMexicanos = 0;
            var conteoJaponeses = 0;
            var conteoRusos = 0;

            async function datos(url) {
                try {
                    let consulta = await fetch(url);
                    let data = await consulta.json();
                    let temblores = data.features;
                    console.log(temblores);

                    //acá meto el mapa
                    const mapaChile = L.map("mapaCL").setView([-33.4488897, -70.6692655], 3);
                    const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        maxZoom: 19,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    }).addTo(mapaChile);

                    temblores.forEach((t) => {
                        //si es que dice Chile en el place
                        if (t.properties.place.includes("Chile") && t.properties.mag > 3.9) {
                            chilenos.innerHTML += `<tr>
                            <td><a href="${t.properties.url}" target="_blank">${t.properties.place}</a></td>
                            <td>${tiempo(t.properties.time)}</td>
                            <td>${magnitud(t.properties.mag)}</td>
                            <td>${tsunami(t.properties.tsunami)}</td>
                        </tr>`;
                            conteoChilenos++;
                            //atención a este cambio
                            L.marker([t.geometry.coordinates[1], t.geometry.coordinates[0]]).addTo(mapaChile).bindPopup(t.properties.place);
                        }
                        //si es que dice Mexico en el place
                        if (t.properties.place.includes("Mexico") && t.properties.mag > 3.9) {
                            mexicanos.innerHTML += `<tr>
                            <td><a href="${t.properties.url}" target="_blank">${t.properties.place}</a></td>
                            <td>${tiempo(t.properties.time)}</td>
                            <td>${magnitud(t.properties.mag)}</td>
                            <td>${tsunami(t.properties.tsunami)}</td>
                        </tr>`;
                            conteoMexicanos++;
                        }
                        //si es que dice Japan en el place
                        if (t.properties.place.includes("Japan") && t.properties.mag > 3.9) {
                            japoneses.innerHTML += `<tr>
                            <td><a href="${t.properties.url}" target="_blank">${t.properties.place}</a></td>
                            <td>${tiempo(t.properties.time)}</td>
                            <td>${magnitud(t.properties.mag)}</td>
                            <td>${tsunami(t.properties.tsunami)}</td>
                        </tr>`;
                            conteoJaponeses++;
                        }
                        //si es que dice Russia en el place
                        if (t.properties.place.includes("Russia") && t.properties.mag > 3.9) {
                            rusos.innerHTML += `<tr>
                            <td><a href="${t.properties.url}" target="_blank">${t.properties.place}</a></td>
                            <td>${tiempo(t.properties.time)}</td>
                            <td>${magnitud(t.properties.mag)}</td>
                            <td>${tsunami(t.properties.tsunami)}</td>
                        </tr>`;
                            conteoRusos++;
                        }
                    });

                    document.getElementById("viz").innerHTML = `<g><circle cx="10" cy="25" r="${
                        conteoChilenos / 2
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoChilenos}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">Chile</text><g>`;

                    document.getElementById("viz").innerHTML += `<g transform="translate(25)"><circle cx="10" cy="25" r="${
                        conteoJaponeses / 2
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoJaponeses}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">Japón</text><g>`;

                    document.getElementById("viz").innerHTML += `<g transform="translate(50)"><circle cx="10" cy="25" r="${
                        conteoMexicanos / 2
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoMexicanos}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">México</text><g>`;

                    document.getElementById("viz").innerHTML += `<g transform="translate(75)"><circle cx="10" cy="25" r="${
                        conteoRusos / 2
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoRusos}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">Rusia</text><g>`;
                } catch (error) {
                    console.error("Error al cargar los datos:", error);
                }
            }

            datos("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson");

            function magnitud(x) {
                var numero = x;
                if (x > 4.9) {
                    numero = "<strong>" + x + "</strong>";
                }
                return numero;
            }

            function tiempo(x) {
                var unix = x;
                var dato = new Date(unix);
                var formato = dato.toISOString();
                var corte = formato.split("T");
                return corte[0] + " a las " + corte[1].split(":")[0] + ":" + corte[1].split(":")[1] + " hrs.";
            }

            function tsunami(x) {
                var mensaje = "<span>Sin alerta</span>";
                if (x == 1) {
                    mensaje = "<strong>¡Alerta de tsunami!</strong>";
                }
                return mensaje;
            }
        </script>
    </body>
</html>
```

- - - - - - - 

[clase-10](https://github.com/profesorfaco/troncal/blob/main/clase-10/README.md) ⇆ [clase-12](https://github.com/profesorfaco/troncal/blob/main/clase-12/README.md)
