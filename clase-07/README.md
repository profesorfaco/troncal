# [Diseño y visualización de información](https://github.com/profesorfaco/troncal/) → Clase 07 → 30 de septiembre

### Presentando datos con HTML y (un `fetch` de) JavaScript

A los perritos se les adiestran en inglés. El `fetch` implica, para el perrito adiestrado, el deber de ir a buscar algo que ya se lanzó.

En línea, con GitHub o servicios tales como https://myjson.online/, usted puede lanzar un JSON. 

Al lenguaje de programación JavaScript le podría pedir, tal como a un perrito adiestrado, que para llenar una variable vaya a buscar un JSON:

```
var perrito = await fetch("https://raw.githubusercontent.com/profesorfaco/troncal/main/clase-07/datos.json");
```

Al mismo lenguaje de programación le podría indicar que trate a lo que ha llenado la variable como un documento de intercambio ligero de datos basado en la notación de objetos de JavaScript, para luego imprimirlo en la consola:

```
var perrito = await fetch("https://raw.githubusercontent.com/profesorfaco/troncal/main/clase-07/datos.json");
var data = await perrito.json();
console.log(data);
```

Este lenguaje de programación podría ser incluido entre etiquetas que así lo marquen, como embebido entre definiciones de hypertexto, quedando en: 

```
<script>
var perrito = await fetch("https://raw.githubusercontent.com/profesorfaco/troncal/main/clase-07/datos.json");
var data = await perrito.json();
console.log(data);
</script>
```




 y un contexto de función asincrónica, siendo el marcado `<script>…</script>` que corresponde al modo en que el lenguaje de descripción HTML le indica a un navegador que lea otro lenguaje, que no se limita a la descripción sino que crece a la programación.


- - - - - - - 

El código que nos entregó Claude.ai

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Este sitio hace cosas choriflais">
        <title>Comparador de Valores</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: #f5f5f5;
                padding: 20px;
            }
            
            .container {
                background: white;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                max-width: 600px;
                width: 100%;
            }
            
            h1 {
                text-align: center;
                color: #333;
                margin-bottom: 30px;
                font-size: 24px;
                font-weight: 500;
            }
            
            .inputs {
                display: flex;
                gap: 20px;
                margin-bottom: 30px;
            }
            
            .input-group {
                flex: 1;
            }
            
            label {
                display: block;
                margin-bottom: 8px;
                color: #666;
                font-size: 14px;
            }
            
            input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 6px;
                font-size: 16px;
                transition: border-color 0.3s;
            }
            
            input:focus {
                outline: none;
                border-color: #4a90e2;
            }
            
            svg {
                display: block;
                margin: 0 auto;
            }
            
            .circle-label {
                font-size: 14px;
                fill: #666;
                text-anchor: middle;
            }
            
            .circle-value {
                font-size: 18px;
                font-weight: 600;
                text-anchor: middle;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Comparador de Valores</h1>
            
            <div class="inputs">
                <div class="input-group">
                    <label for="valor1">Valor 1</label>
                    <input type="number" id="valor1" value="50" min="1" max="1000">
                </div>
                <div class="input-group">
                    <label for="valor2">Valor 2</label>
                    <input type="number" id="valor2" value="80" min="1" max="1000">
                </div>
            </div>
            
            <svg id="comparador" width="500" height="300" viewBox="0 0 500 300">
                <circle id="circulo1" cx="150" cy="150" r="50" fill="#4a90e2" opacity="0.8"/>
                <text class="circle-label" x="150" y="240" fill="#4a90e2">Valor 1</text>
                <text id="texto1" class="circle-value" x="150" y="150" fill="white">50</text>
                
                <circle id="circulo2" cx="350" cy="150" r="80" fill="#e94b3c" opacity="0.8"/>
                <text class="circle-label" x="350" y="260" fill="#e94b3c">Valor 2</text>
                <text id="texto2" class="circle-value" x="350" y="150" fill="white">80</text>
            </svg>
        </div>

        <script>
            const input1 = document.getElementById('valor1');
            const input2 = document.getElementById('valor2');
            const circulo1 = document.getElementById('circulo1');
            const circulo2 = document.getElementById('circulo2');
            const texto1 = document.getElementById('texto1');
            const texto2 = document.getElementById('texto2');
            
            function actualizarCirculos() {
                const v1 = parseFloat(input1.value) || 0;
                const v2 = parseFloat(input2.value) || 0;
                
                const maxValor = Math.max(v1, v2, 1);
                const escalaBase = 100;
                const radioMin = 20;
                
                const r1 = Math.max(radioMin, (v1 / maxValor) * escalaBase);
                const r2 = Math.max(radioMin, (v2 / maxValor) * escalaBase);
                
                circulo1.setAttribute('r', r1);
                circulo2.setAttribute('r', r2);
                
                texto1.textContent = v1;
                texto2.textContent = v2;
            }
            
            input1.addEventListener('input', actualizarCirculos);
            input2.addEventListener('input', actualizarCirculos);
            
            actualizarCirculos();
        </script>
    </body>
</html>
```


_ _ _ _ 

[clase-06](https://github.com/profesorfaco/troncal/blob/main/clase-06/README.md) ⇆ [clase-08](https://github.com/profesorfaco/troncal/blob/main/clase-08/README.md)
