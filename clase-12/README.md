# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 12 → 4 de noviembre

### Aplicando HTML, SVG y JavaScript

#### Los terremotos

| N° | Nombre | GitHub | Está temblando en… |
|:------------:|:-----------------------------------|:-------------------|:--------------------|
| 1 | Sofía Aliaga | https://github.com/SofiaAliaga | Alaska |
| 2 | Constanza Astudillo | https://github.com/cinnamonrolllabubu | — |
| 3 | Sophia Bahamonde | https://github.com/sophibahamonde | — |
| 4 | Irenko Blasco | https://github.com/Irenk0 | Indonesia |
| 5 | Nicole Cerpa | https://github.com/nicoc1404 | Filipinas |
| 6 | Matias Chavez | https://github.com/macc965 | Japón (1) |
| 7 | Anyela Cid | https://github.com/anyelacid | China (1) |
| 8 | José Cortez | https://github.com/marcedzgn | Perú |
| 9 | Valentina Cristi | https://github.com/Balee10 | — |
| 10 | Damien Czugaj | — | — |
| 11 | Alberto Gallegos | https://github.com/Alberto101102 | Chile (Exclusivo) |
| 12 | Constanza Garrido | https://github.com/NikoGarrido | Haiti |
| 13 | Carla González | https://github.com/carlagonzalezv-del | Turquía |
| 14 | Pía Muñoz | https://github.com/piamunoz | Canadá |
| 15 | Martina Muñoz | https://github.com/lionmarty | Japón (2) |
| 16 | Belén Porras | https://github.com/belenporras | — |
| 17 | Macarena Torres | https://github.com/MacNCheese03 | Malasia |
| 18 | Paz Valenzuela | https://github.com/pazvp | — |
| 19 | Francys Vásquez | https://github.com/Francys-vs | Ecuador |

#### La partida

´´´
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
                background: rgba(255,255,255,1);
                color: #222;
                  background-image: linear-gradient(rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 1) 30%), url("img/terremoto-valdivia-1960.jpg");
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-position: 0px -10vw;
            }
            div.container {
                width: min(800px, 90%);
                margin: 10rem auto 2rem auto;
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

            th svg, td svg {
                width: 1.5rem;
                height: 1.5rem;
                margin-bottom: -0.25rem;
                margin-left:-0.25rem;
                fill: gray;
            }

            th:nth-child(2) svg{
                width:1rem;
                height:1rem;
                margin-bottom: -0.2rem;
                margin-left:-0.1rem;
            }

            @keyframes corre{
                0%{transform:rotate(3deg); fill:red; }
                100%{transform:rotate(-3deg); fill:darkred; }
            }

            td svg{
                animation-name: corre;
                animation-duration: .25s;
                animation-direction: alternate;
                animation-iteration-count: infinite;
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

            figure{
                width:80%;
                margin:1rem auto;
                padding:0.25rem;
                border:1px solid #eee;
                box-shadow: 0 0 5px #fcfcfc;
            }
            figure img{
                width:100%;
                height: auto;
            }

            figure figcaption{
                font-size:90%;
                color:gray;
                padding:0.5rem;
            }

            p span{
                border-radius: 6px 6px;
                padding:0 0.5rem 0 1.5rem;
                background-color:yellow;
                background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M5.47,58.58H17A44.19,44.19,0,0,0,5.47,82.93Zm17.84,0h7.62l-3.56-35.8,13.4-5.66V30.65l12.06,4.8-4.06,22A31.82,31.82,0,0,0,18.39,89.08H9.53A40.25,40.25,0,0,1,23.31,58.58ZM50,61.9A27.18,27.18,0,0,1,77.18,89.08h-9a18.27,18.27,0,1,0-36.53,0H22.82A27.18,27.18,0,0,1,50,61.9Zm0,13.28a13.86,13.86,0,0,1,13.78,13.9H54.92a4.92,4.92,0,0,0-9.84,0h-9A14,14,0,0,1,50,75.18Zm8.24-16.6a35.85,35.85,0,0,0-5.29-1L57.5,32.87,45,28V15.28l4.42-1.85L69.56,18.6l3.81,40h3.32a40.25,40.25,0,0,1,13.78,30.5H81.61A31.68,31.68,0,0,0,58.24,58.58Zm24.72,0H94.53V82.93A45.16,45.16,0,0,0,83,58.58Z"></path></svg>');
                background-position: 0.3rem 0;
                background-size:1rem 1rem;
                background-repeat: no-repeat;
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

            <symbol id="time" viewBox="0 0 16 16">
                  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527"/></path>
            </symbol>

            <symbol id="tsunami" viewBox="0 0 100 100">
                <path
                    d="M91.33,88.22H8.92c-2.22,0-3.57-1.23-3.57-3a4.63,4.63,0,0,1,.61-2L17.77,62.51c5.17-9,16.36-13.9,27.06-13.9,11.57,0,17.35,5.54,17.35,10.46,0,4.3-3.32,7.13-6.77,8.12H53.07a3.49,3.49,0,0,0-3.56-3.82,3.42,3.42,0,0,0-3.32,3.45c0,3.81,4.79,7.5,13.16,7.5,7.75,0,18-3.57,24.6-9.1L94.28,83.3a3.51,3.51,0,0,1,.37,1.84A3,3,0,0,1,91.33,88.22Zm-10.21-28L52.71,10.36a3.19,3.19,0,0,0-5.66,0L26.14,47.51a36.15,36.15,0,0,1,12.67-4.06L49.88,23.89,73.37,64.36A19.72,19.72,0,0,0,81.12,60.17Z"
                ></path>
            </symbol>

            <symbol id="evacuar" viewBox="0 0 100 100">
                <path d="M91.7,94.34H86.16a4,4,0,0,1-3.69-2.7L74.85,70.85,69.93,70l-.74,5.9a3.19,3.19,0,0,1-3.08,3h-13L51,72.45H61.32l.61-3.82L53.69,67c-2.95-.62-3.69-4.31-1.84-6.89L55,55.84a22.88,22.88,0,0,0,4.06-9l3.45-16c-3.32,0-5.91,3-6.89,7.75l-1.72,8.24a3.13,3.13,0,0,1-3.08,2.83h-.12a9.47,9.47,0,0,1-2.59-.49L42.5,47.48,41.27,55.1,55.53,94.34H49.88a4.42,4.42,0,0,1-3.69-2.7L33.89,60.52h-2V75.77a3,3,0,0,1-3.08,3H8.3V74.91a2.83,2.83,0,0,1,3.08-2.71H23.8V56.33a17.22,17.22,0,0,1,.37-3.56l4.67-21.9c-3.32,0-6,3-7,7.75l-1.72,8.24A3.12,3.12,0,0,1,17,49.69a3.22,3.22,0,0,1-3-4.06l1.73-8C17.9,28,23.43,23.86,34.38,23.86c7.26,0,11.56,3.32,10.21,11.2l-1,5.78,5,1.47,1-4.67c2.09-9.47,7.63-13.78,18.45-13.78,6.27,0,11.69,3.32,10.09,11.2l-1.48,6.76,12.06,3.32a3.4,3.4,0,0,1,2.58,3.2,3.3,3.3,0,0,1-3.08,3.44,9.47,9.47,0,0,1-2.58-.49l-9.35-2.7ZM34.62,19.56c-.73-1.48-1.1-6.52-1.1-9.47a3,3,0,0,1,.74-2.46,6.82,6.82,0,0,1,9.59,0c.62.49.62,1.35.62,2.7,0,2.95-.25,7.75-.87,9.23-.37.61-1.84,1.6-4.55,1.6C36.59,21.16,35,20.17,34.62,19.56Zm32.6.37c-.74-1.48-1.11-6.65-1.11-9.72A2.71,2.71,0,0,1,67,7.75a6.83,6.83,0,0,1,9.84,0c.5.49.5,1.23.5,2.71,0,3.07-.13,8-.87,9.47-.36.73-1.84,1.72-4.55,1.72S67.59,20.66,67.22,19.93Z"></path>
            </symbol>

            <symbol id="magnitude" viewBox="0 0 100 100">
                <path d="M22.82,34.26a3.72,3.72,0,0,1-5.29,0L9.9,26.63a3.84,3.84,0,0,1,0-5.29,3.57,3.57,0,0,1,5.17,0L22.82,29A3.72,3.72,0,0,1,22.82,34.26ZM73.74,58.49l1.11,16.73v6.64H50v-36H43.85c-4.55,0-9.23,2.33-10.09,13.41L32.53,75.46v6.4H25.15V75.22l1.23-16.73c.74-10.7,5.78-20.05,17.47-20.05H56.27C67.71,38.44,73,47.29,73.74,58.49ZM25.15,87.39h49.7v5.54H25.15Zm21.16-65.8V10.76A3.78,3.78,0,0,1,50,7.07a3.7,3.7,0,0,1,3.69,3.69V21.59A3.71,3.71,0,0,1,50,25.28,3.79,3.79,0,0,1,46.31,21.59ZM90.1,26.88,82.47,34.5a3.69,3.69,0,1,1-5.29-5.16l7.75-7.75a3.79,3.79,0,0,1,5.17,0A3.84,3.84,0,0,1,90.1,26.88Z"></path>
            </symbol>
        </svg>

        <div class="container">
            <h1>Chile</h1>
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

            <h2>Últimos movimientos telúricos</h2>

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

            <h2>Comparando con otros países</h2>
            <p>Registros sobre 2.5 M de la última semana:</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" id="viz"></svg>


            <h2>Historia de Terremotos en Chile</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet eros semper dui tempor <span>8.9</span> congue ut vel nisi. Nam vestibulum, tortor non volutpat gravida, risus ante imperdiet dolor, non iaculis leo ante vel lectus. Curabitur a tincidunt ex, a tincidunt neque. Suspendisse potenti. Donec quis pellentesque metus, sed lacinia odio. Integer vulputate vehicula tortor, in consequat ante aliquam accumsan. Sed porttitor egestas consequat. Cras euismod vitae dui id <span>7.8</span> hendrerit. Integer placerat varius tortor, sit amet molestie purus consectetur eu. Quisque sit amet scelerisque lorem, eget pretium eros. Curabitur a libero tempus, volutpat ipsum ut, molestie nunc. Quisque vestibulum ornare diam eu eleifend.</p>

            <figure>
                <img src="img/concepcion.jpg">
                <figcaption>Edificio destruido en concepción (2010)</figcaption>
            </figure>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet eros semper dui tempor congue ut vel nisi. Nam vestibulum, tortor non volutpat gravida, risus <span>9.1</span> ante imperdiet dolor, non iaculis leo ante vel lectus. Curabitur a tincidunt ex, a tincidunt neque. Suspendisse potenti. Donec quis pellentesque metus, sed lacinia odio. Integer vulputate vehicula tortor, in consequat ante aliquam accumsan. Sed porttitor egestas consequat. Cras euismod vitae dui id hendrerit. Integer placerat varius tortor, sit amet molestie purus consectetur eu. Quisque sit amet scelerisque lorem, eget pretium eros. Curabitur a libero tempus, volutpat ipsum ut, molestie nunc. Quisque vestibulum ornare diam eu eleifend.</p>

            <footer>
                <p>Desarrollado por <a href="#" target="_blank">Nombre Apellido</a> &copy; 2025</p>
            </footer>
        </div>
        <script>
            const chilenos = document.getElementById("cl");

            var conteoChilenos = 0;

            async function datos(url) {
                try {
                    let consulta = await fetch(url);
                    let data = await consulta.json();
                    let temblores = data.features;
                    console.log(temblores);

                    //acá meto el mapa de Chile
                    const mapaChile = L.map("mapaCL").setView([-33.4422116, -70.6406473], 3);
                    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
                        maxZoom: 19,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                    }).addTo(mapaChile);



                    temblores.forEach((t) => {
                        //si es que dice Chile en el place
                        if (t.properties.place.includes("Chile")) {
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
  
                    const divido = conteoChilenos/3;

                    document.getElementById("viz").innerHTML = `<g><circle cx="10" cy="25" r="${
                        conteoChilenos / divido
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoChilenos}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">Chile</text><g>`;

                    document.getElementById("viz").innerHTML += `<g transform="translate(25)"><circle cx="10" cy="25" r="${
                        conteoJaponeses / divido
                    }" fill="#2A86BF"></circle><text x="10" y="25" font-size="1.5" dominant-baseline="middle" text-anchor="middle" fill="white">${conteoJaponeses}</text><text x="10" y="45" font-size="2" dominant-baseline="middle" text-anchor="middle">Japón</text><g>`;

                } catch (error) {
                    console.error("Error al cargar los datos:", error);
                }
            }

            datos("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson");

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
                    mensaje = "<svg><use href='#evacuar'></use></svg><strong> ¡tsunami!</strong>";
                }
                return mensaje;
            }
        </script>
    </body>
</html>
´´´


**HTML (HyperText Markup Language)**. Lenguaje estándar que describe la estructura de las páginas web. HTML5 es la versión más reciente de este lenguaje. El bloque constructivo más básico del HTML es el elemento. Cada elemento de HTML se escribe, generalmente, entre etiquetas: `<etiqueta>contenido</etiqueta>` → Podemos complementar esta breve introducción a HTML con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

**JavaScript**. Lenguaje de programación que controla el comportamiento de las páginas web. Con JS se pueden escribir secuencias de instrucciones con las que una computadora realizará una tarea determinada. Su estructura puede variar dependiendo de la lógica de cada instrucción, la versión en uso, la library en la que nos apoyemos para resolver algo específico, o el framework de programación con el que se levanta todo el trabajo → Podemos complementar esta breve introducción a JS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript

**JPG (Joint Photographic Experts Group)**. Más información en https://jpeg.org/about.html

**PNG (Portable Network Graphics)**. Más información en https://www.libpng.org/pub/png/ 

**WebP**. Más información en https://developers.google.com/speed/webp?hl=es

**SVG (Scalable Vector Graphics)**. Más información en https://www.w3.org/Graphics/SVG/

**JSON (JavaScript Object Notation)**. Más información en https://www.json.org/json-es.html

**CSV (Coma Separated Values)**. Más información en https://www.adobe.com/es/acrobat/resources/document-files/text-files/csv-file.html 

**XML (eXtensible Markuo Language)**. Más información en https://developer.mozilla.org/es/docs/Web/XML/Guides/XML_introduction

Esta herramienta puede ser muy útil: https://csvjson.com/csv2json 

_ _ _ _ 

[clase-11](https://github.com/profesorfaco/troncal/blob/main/clase-11/README.md) ⇆ [clase-13](https://github.com/profesorfaco/troncal/blob/main/clase-13/README.md)
