# [Diseño y visualización de información](https://github.com/profesorfaco/troncal) → Clase 05 → 11 de septiembre

## UNIDAD 1: Historia, actualidad y variables de percepción en la visualización

### Marco teórico para la visualización de datos desde la percepción.

Cerramos la primera unidad del curso concentrándonos en el factor humano: el modo en que las usuarias y los usuarios procesan la información visual. Revisaremos los fundamentos de la percepción visual, la cognición y la enacción aplicados al diseño. Comprender cómo reaccionamos las arquitectas de información y los diseñadores ante el color, la forma, el contraste y la posición espacial les proveerá de los principios analíticos necesarios para estructurar gráficos legibles, justificando cada decisión de la interfaz más allá de criterios estéticos particulares.

---

#### Jacques Bertin y la Semiología Gráfica

Para estructurar la información de manera eficiente, debemos recurrir a las bases teóricas de la visualización de datos. El cartógrafo francés **Jacques Bertin** publicó en 1967 su obra fundacional *Sémiologie Graphique* (Semiología Gráfica), donde propuso el primer sistema unificado para describir cómo los elementos visuales transmiten significado en una superficie bidimensional.

Bertin identificó que cualquier representación visual opera sobre un **plano** (definido por dos dimensiones espaciales: ejes $X$ e $Y$) en el cual disponemos **marcas** (puntos, líneas o áreas). Para asociar estas marcas con datos numéricos o categóricos, modificamos sus propiedades físicas mediante lo que denominó las **Variables Retinianas** o propiedades visuales.

#### Las 6 Variables Retinianas de Bertin

Cuando los ojos de un usuario escanean una pantalla, la retina reacciona instantáneamente a seis estímulos diferenciales:

1. **Posición:** La ubicación de la marca en el plano coordinado ($X, Y$). Es, por amplio margen, la variable más potente y precisa para la percepción humana.
2. **Tamaño:** La variación en la longitud, área o volumen de la marca. Es ideal para representar magnitudes cuantitativas.
3. **Valor (Luminosidad):** El grado de claridad u oscuridad de un color (desde el blanco al negro). Nuestro cerebro lo interpreta de forma innata como una jerarquía u orden.
4. **Textura (Grano):** La variación en la escala o densidad de los patrones internos que rellenan una marca (por ejemplo, líneas continuas vs. líneas punteadas).
5. **Color (Matiz/Tono):** La variación cromática propiamente tal (rojo, verde, azul). Es una variable de alta carga cognitiva, ideal para clasificar identidades.
6. **Orientación:** El ángulo de la marca respecto a un eje visual de referencia (horizontal, vertical, diagonal).
7. **Forma:** El contorno geométrico o figurativo que define la marca (un círculo, un cuadrado, una cruz).

---

#### Niveles de Organización y Eficiencia Perceptiva

No todas las variables sirven para los mismos tipos de datos. Bertin sistematizó este comportamiento definiendo cuatro **niveles de organización** (o características perceptivas) que las variables pueden activar en el cerebro del usuario:

* **Asociativa (=):** Permite agrupar marcas de forma equitativa, sin establecer jerarquías. El ojo asume que todos los elementos tienen el mismo peso conceptual (ej: diferentes *formas* o *colores*).
* **Selectiva ($\neq$):** Permite el aislamiento visual inmediato. El usuario puede aislar mentalmente una categoría del resto del gráfico en un solo vistazo (ej: buscar todos los elementos *rojos*).
* **Ordenada ($>$):** Permite clasificar de manera inmediata si una marca representa "más" o "menos" que otra de forma cualitativa (ej: el *valor* o los tonos de gris establecen un orden natural).
* **Cuantitativa ($Q$):** Permite estimar relaciones numéricas y proporciones directas entre marcas (ej: un *tamaño* del doble de superficie equivale al doble del valor del dato).

##### Matriz de Eficiencia (Bertin adaptado a la Web)

Para el desarrollo front-end con `HTML`, `CSS` y `SVG`, la articulación de estas propiedades se traduce directamente en atributos de código. Evaluamos su rendimiento de la siguiente forma:

| Variable | Canal CSS / Atributo SVG | Cuantitativa | Ordenada | Selectiva | Asociativa |
| --- | --- | --- | --- | --- | --- |
| **Posición** | `top`, `left`, `cx`, `cy`, `transform` | **Alta** | **Alta** | **Alta** | **Alta** |
| **Tamaño** | `width`, `height`, `r`, `font-size` | **Alta** | **Alta** | **Alta** | Media |
| **Valor** | `opacity`, `filter: brightness()` | Baja | **Alta** | **Alta** | Media |
| **Color** | `fill`, `stroke`, `background-color` | No apta | Baja | **Alta** | **Alta** |
| **Orientación** | `transform: rotate()` | No apta | No apta | Media | **Alta** |
| **Forma** | `d` (en paths SVG), `border-radius` | No apta | No apta | Baja | **Alta** |

💡 **El error más común** al programar interfaces de información es usar una variable con bajo nivel de orden (como la *Forma* o el *Color/Matiz*) para representar datos cuantitativos. Un color rojo no es numéricamente "el doble" de un color azul; en cambio, un círculo con un *Tamaño* de $20px$ sí duplica perceptivamente a uno de $10px$.

---

[clase-04](https://github.com/profesorfaco/troncal/blob/main/clase-04/README.md) ⇆ [clase-06](https://github.com/profesorfaco/troncal/blob/main/clase-06/README.md)
