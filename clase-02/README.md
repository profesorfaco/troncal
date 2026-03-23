# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 02 → 17 de marzo

### Presentación de herramientas del curso: GitHub y un poco más

#### GitHub

GitHub es una **plataforma de gestión de repositorios remotos** que abstrae las complejidades técnicas de [Git](https://git-scm.com/) para facilitar la persistencia, trazabilidad y administración integral de cualquier base de código fuente. 

Al proporcionar una interfaz intuitiva y herramientas de visualización, GitHub trasciende la ingeniería informática; permite que investigadores y profesionales de diversas disciplinas colaboren mediante flujos de trabajo estructurados (*branching* y *pull requests*), garantizando la integridad de los datos y la consolidación de un portafolio técnico tanto en el ámbito académico como profesional.

A continuación, se presentan los conceptos fundamentales para trabajar con GitHub, los cuales serán claves en este curso:

1.  **El Repositorio (Tu Carpeta Inteligente):** Piensa en el "Repo" como la carpeta raíz de tu proyecto. Al crear uno, marca la opción **"Add a README file"**. Este será tu documento de presentación donde explicas de qué trata el proyecto en lenguaje sencillo.

2.  **El Commit (La Foto del Momento):** A diferencia de un archivo de Word que guardas repetidamente, en GitHub realizas un *Commit*. Es como tomar una fotografía de tus archivos en un punto exacto.

3.  **La Rama o "Branch" (Tu Borrador de Riesgo):** Si quieres probar una idea nueva sin alterar el trabajo principal, crea una *Branch*. Es una copia exacta donde puedes experimentar. Si el resultado es erróneo, se elimina; si es exitoso, se solicita su integración.

4.  **El Pull Request (La Revisión por Pares):** Es el corazón de la colaboración. Cuando terminas una tarea en tu rama, generas un *Pull Request (PR)*. Es la solicitud formal para que el equipo revise tus cambios y, tras su aprobación, los fusione con el proyecto principal.

5.  **Issues (Tu Lista de Tareas):** No todo es código. Usa la pestaña **Issues** para registrar errores, sugerencias o tareas pendientes. Funciona como un tablero de gestión vinculado directamente a la evolución del proyecto.

**Importante:** GitHub no es una herramienta exclusiva para programadores. En disciplinas como las Ciencias Sociales o la Biología, resulta invaluable para gestionar bases de datos (CSV), manuscritos en Markdown o protocolos de laboratorio, asegurando un historial de versiones inalterable que evita la pérdida accidental de información.

### GitHub Pages

GitHub ofrece la posibilidad de activar **GitHub Pages** por cada repositorio, permitiendo publicar contenidos de forma gratuita. Antes de activarlo, **asegúrate de tener al menos un archivo llamado `index.html`** o `README.md` en la raíz de tu repositorio; este será la "portada" de tu sitio web.

Sigue estos pasos para la activación:

1.  **Ingresa a la Configuración:** Entra a tu repositorio y haz clic en la pestaña **Settings**, ubicada en la barra superior.

2.  **Localiza la sección de Pages:** En el menú lateral izquierdo, bajo el apartado *Code and automation*, haz clic en **Pages**.

3.  **Define la Fuente de Despliegue:** En el apartado *Branch*, asegúrate de que esté seleccionada la opción *Deploy from a branch*.
    * Selecciona la rama: Normalmente elegirás la rama `main`.
    * Selecciona la carpeta: Elige `/(root)`.
    * Haz clic en el botón **Save**.

4.  **Espera el Procesamiento:** GitHub comenzará a construir el servidor. Cuando esté listo, verás un aviso resaltado indicando que el sitio está al aire (*live*) junto a su dirección URL.

5.  **Vincula tu URL en la portada:** Vuelve a la pestaña principal (**Code**). En la barra lateral derecha busca la sección **About** y presiona el icono del engranaje. Marca la opción **"Use your GitHub Pages website"** y guarda los cambios.

### Entendiendo el archivo index.html

Para comprender cómo se construye un archivo que se desplegará en un navegador como página web, debemos responder a cuatro preguntas fundamentales:

#### 1. ¿Qué muestra el archivo en el navegador web?

Esta pregunta se responde con **HTML** (*HyperText Markup Language*): Lenguaje que describe la **estructura** y el contenido. Su bloque constructivo básico es el **elemento**, el cual se escribe entre etiquetas: `<etiqueta>contenido</etiqueta>`.

* **Para profundizar:** [Bases de HTML en MDN](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics).

#### 2. ¿Cómo se ve lo que muestra el navegador web?

Esta pregunta se responde con **CSS** (*Cascading Style Sheets*): Lenguaje que describe la **presentación** y el diseño visual. Su bloque constructivo básico es la **regla**, la cual se compone de un **selector** seguido de llaves `{…}` entre las que se definen pares de `propiedad: valor;`.

* **Para profundizar:** [Conceptos básicos de CSS en MDN](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics).

#### 3. ¿Qué hace el archivo mientras se muestra en el navegador?

Esta pregunta se responde con **JS** (**JavaScript**): Lenguaje de programación que controla el **comportamiento** y la interactividad. Permite realizar tareas dinámicas basándose en lógica, eventos y el uso de bibliotecas o *frameworks*.

* **Para profundizar:** [¿Qué es JavaScript? en MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript).

#### 4. ¿Cómo se representan los gráficos y las formas en el navegador?

Esta pregunta se puede responder con **imágenes rasterizadas** (JPG, PNG o WEBP), pero en este contexto conviene responderla con **SVG** (*Scalable Vector Graphics*): Dialecto basado en XML que describe **gráficos vectoriales**. A diferencia de los píxeles, el SVG no pierde calidad al cambiar de tamaño y puede ser manipulado directamente mediante código usando etiquetas de forma como `<circle>` o `<path>`.

* **Para profundizar:** [Guía de SVG en MDN](https://developer.mozilla.org/es/docs/Web/SVG).

**En resumen**, un archivo **index.html** constituye la base de cualquier sitio web al integrar armónicamente cuatro pilares tecnológicos: el **HTML** define la estructura y el contenido esencial; el **CSS** se encarga de la estética y el diseño; el **JS** aporta la lógica y el comportamiento interactivo; y el **SVG** permite la inclusión de gráficos vectoriales que mantienen su nitidez en cualquier resolución y pueden ser programados directamente.


[clase-01](https://github.com/profesorfaco/troncal/blob/main/clase-01/README.md) ⇆ [clase-03](https://github.com/profesorfaco/troncal/blob/main/clase-03/README.md)
