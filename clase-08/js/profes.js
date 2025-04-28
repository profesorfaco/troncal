const resumen = document.querySelector("h2");
const tabla = document.querySelector("#mencion");
const palabreo = document.querySelector("#palabreo");
const dona = document.querySelector("#donnut");
const profeNotas = document.querySelector("#slope");
const profeGuia = document.querySelector("#profe");

function eficiencia(profe) {
    var esto;
    if (alfabetico == profe) {
        esto = `<svg width="100%" height="100%" viewBox="0 0 42 42"><circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranjita)" stroke-width="2"></circle><circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranja)" stroke-width="2" stroke-dasharray="${
            d.porcentajes
        } ${100 - d.porcentajes}" stroke-dashoffset="25"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="7" ${color(d.porcentajes)}>${
            d.porcentajes
        }%</text><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="2" ${color(d.porcentajes)}>${d.titulades} de ${d.guiades}</text></svg>`;
    }
    return esto;
}

function desviacionEstandar(array) {
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    return Math.sqrt(array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n);
}

function mediana(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

const profes = [
    {
        profe: "Jenny Abud Carrillo",
        alfabetico: "Abud Carrillo, Jenny",
        guiades: 12,
        titulades: 10,
        porcentajes: 83,
    },
    {
        profe: "Paola Benavides Bermúdez",
        alfabetico: "Benavides Bermúdez, Paola",
        guiades: 5,
        titulades: 2,
        porcentajes: 40,
    },
    {
        profe: "Eduardo Castillo Espinoza",
        alfabetico: "Castillo Espinoza, Eduardo",
        guiades: 21,
        titulades: 9,
        porcentajes: 43,
    },
    {
        profe: "Felipe Cortez Orellana",
        alfabetico: "Cortez Orellana, Felipe",
        guiades: 17,
        titulades: 9,
        porcentajes: 53,
    },
    {
        profe: "Paola De la Sotta Lazzerini",
        alfabetico: "De la Sotta Lazzerini, Paola",
        guiades: 19,
        titulades: 7,
        porcentajes: 37,
    },
    {
        profe: "Pablo Domínguez González",
        alfabetico: "Domínguez González, Pablo",
        guiades: 53,
        titulades: 25,
        porcentajes: 47,
    },
    {
        profe: "Sergio Donoso Cisternas",
        alfabetico: "Donoso Cisternas, Sergio",
        guiades: 16,
        titulades: 7,
        porcentajes: 44,
    },
    {
        profe: "Rodrigo Dueñas Santander",
        alfabetico: "Dueñas Santander, Rodrigo",
        guiades: 24,
        titulades: 12,
        porcentajes: 50,
    },
    {
        profe: "Pamela Gatica Ramírez",
        alfabetico: "Gatica Ramírez, Pamela",
        guiades: 12,
        titulades: 6,
        porcentajes: 50,
    },
    {
        profe: "Cristián Gómez Moya",
        alfabetico: "Gómez Moya, Cristián",
        guiades: 8,
        titulades: 3,
        porcentajes: 38,
    },
    {
        profe: "Rubén Jacob Dazarola",
        alfabetico: "Jacob Dazarola, Rubén",
        guiades: 40,
        titulades: 13,
        porcentajes: 33,
    },
    {
        profe: "Trinidad Jove Avilés",
        alfabetico: "Jove Avilés, Trinidad",
        guiades: 3,
        titulades: 2,
        porcentajes: 67,
    },
    {
        profe: "Lorna Lares López",
        alfabetico: "Lares López, Lorna",
        guiades: 14,
        titulades: 4,
        porcentajes: 29,
    },
    {
        profe: "Juan Carlos Lepe Muñoz",
        alfabetico: "Lepe Muñoz, Juan Carlos",
        guiades: 3,
        titulades: 2,
        porcentajes: 67,
    },
    {
        profe: "Félix Maldonado de la Fuente",
        alfabetico: "Maldonado de la Fuente, Felix",
        guiades: 9,
        titulades: 3,
        porcentajes: 33,
    },
    {
        profe: "Antonio Marín Pacheco",
        alfabetico: "Marín Pacheco, Antonio",
        guiades: 6,
        titulades: 4,
        porcentajes: 67,
    },
    {
        profe: "Raúl Molina Oyarzún",
        alfabetico: "Molina Oyarzún, Raúl",
        guiades: 2,
        titulades: 1,
        porcentajes: 50,
    },
    {
        profe: "Alfredo Mora Briones",
        alfabetico: "Mora Briones, Alfredo",
        guiades: 2,
        titulades: 1,
        porcentajes: 50,
    },
    {
        profe: "María Paz Morales Mujica",
        alfabetico: "Morales Mujica, María Paz",
        guiades: 9,
        titulades: 6,
        porcentajes: 67,
    },
    {
        profe: "Iván Méndez Olivares",
        alfabetico: "Méndez Olivares, Iván",
        guiades: 6,
        titulades: 2,
        porcentajes: 33,
    },
    {
        profe: "Pablo Nuñez Gutiérrez",
        alfabetico: "Nuñez Gutiérrez, Pablo",
        guiades: 6,
        titulades: 4,
        porcentajes: 67,
    },
    {
        profe: "Verónica Ode Saleh",
        alfabetico: "Ode Saleh, Verónica",
        guiades: 27,
        titulades: 15,
        porcentajes: 56,
    },
    {
        profe: "Roberto Osses Flores",
        alfabetico: "Osses Flores, Roberto",
        guiades: 19,
        titulades: 7,
        porcentajes: 37,
    },
    {
        profe: "Sebastián Pagueguy Fenner",
        alfabetico: "Pagueguy Fenner, Sebastián",
        guiades: 14,
        titulades: 5,
        porcentajes: 36,
    },
    {
        profe: "René Perea Morales",
        alfabetico: "Perea Morales, René",
        guiades: 7,
        titulades: 3,
        porcentajes: 43,
    },
    {
        profe: "Bruno Perelli Soto",
        alfabetico: "Perelli Soto, Bruno",
        guiades: 7,
        titulades: 2,
        porcentajes: 29,
    },
    {
        profe: "Gabriela Pradenas Guentherodt",
        alfabetico: "Pradenas Guentherodt, Gabriela",
        guiades: 4,
        titulades: 3,
        porcentajes: 75,
    },
    {
        profe: "Daniel Reyes León",
        alfabetico: "Reyes León, Daniel",
        guiades: 5,
        titulades: 4,
        porcentajes: 80,
    },
    {
        profe: "Macarena Ruiz Balart",
        alfabetico: "Ruiz Balart, Macarena",
        guiades: 2,
        titulades: 1,
        porcentajes: 50,
    },
    {
        profe: "Mónica Santibañez Boric",
        alfabetico: "Santibañez Boric, Mónica",
        guiades: 2,
        titulades: 1,
        porcentajes: 50,
    },
    {
        profe: "Rebeca Silva Roquefort",
        alfabetico: "Silva Roquefort, Rebeca",
        guiades: 1,
        titulades: 1,
        porcentajes: 100,
    },
    {
        profe: "Leonardo Soto Calquín",
        alfabetico: "Soto Calquín, Leonardo",
        guiades: 21,
        titulades: 8,
        porcentajes: 38,
    },
    {
        profe: "Hans Stange Marcus",
        alfabetico: "Stange Marcus, Hans",
        guiades: 3,
        titulades: 1,
        porcentajes: 33,
    },
    {
        profe: "Mauricio Tapia Reyes",
        alfabetico: "Tapia Reyes, Mauricio",
        guiades: 5,
        titulades: 4,
        porcentajes: 80,
    },
    {
        profe: "Mauricio Vico Sánchez",
        alfabetico: "Vico Sánchez, Mauricio",
        guiades: 4,
        titulades: 2,
        porcentajes: 50,
    },
    {
        profe: "Andrea Wechsler Pizarro",
        alfabetico: "Wechsler Pizarro, Andrea",
        guiades: 38,
        titulades: 11,
        porcentajes: 29,
    },
    {
        profe: "Mariana Young Araya",
        alfabetico: "Young Araya, Mariana",
        guiades: 12,
        titulades: 6,
        porcentajes: 50,
    },
    {
        profe: "Osvaldo Zorzano Betancourt",
        alfabetico: "Zorzano Betancourt, Osvaldo",
        guiades: 11,
        titulades: 3,
        porcentajes: 27,
    },
];

async function datos(criterio) {
    var seleccion = [];
    var profeSeleccion = [];
    var notas = [];
    var notasPrevias = [];
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/troncal/refs/heads/main/clase-07/titulades.json");
    const data = await consulta.json();
    console.log("Lo que sigue son todos los datos:");
    console.log(data);

    //Creo una selección, basándome en el selector
    data.forEach((d) => {
        if (d.profe_guia == criterio) {
            seleccion.push(d);
        }
    });

    //Creo una selección, basándome en el selector
    profes.forEach((d) => {
        if (d.alfabetico == criterio) {
            profeSeleccion = d;
        }
    });

    console.log(profeSeleccion);

    //Ordeno la selección por nombre de tituladas/os
    seleccion.sort(function (a, b) {
        if (a.nota_proyecto < b.nota_proyecto) {
            return 1;
        }
        if (a.nota_proyecto > b.nota_proyecto) {
            return -1;
        }
        return 0;
    });

    //Genero una tabla que muestre la selección ya ordenada
    seleccion.forEach((s, i) => {
        if (s.repositorio_academico) {
            tabla.innerHTML += `
                    <tr><td>${s.nombre}</td><td>${s.titulo_profesional}</td><td>${s.semestre_examen}</td><td><a href="${s.repositorio_academico}" target="_blank">${s.proyecto}</a></td><td class="text-center">${s.nota_proyecto.toFixed(
                1
            )}</td></tr>`;
        } else {
            tabla.innerHTML += `<tr><td>${s.nombre}</td><td>${s.titulo_profesional}</td><td>${s.semestre_examen}</td><td>${s.proyecto}</td><td class="text-center">${s.nota_proyecto.toFixed(1)}</td></tr>`;
        }
        notas.push(s.nota_proyecto);
        notasPrevias.push(s.nota_anteproyecto);
    });

    //Saco un promedio de las notas en la tabla
    var i = 0;
    var total = 0;
    notas.forEach((n) => {
        total += n;
        i++;
    });
    var promedio = (total / i).toFixed(1);

    if (notas.length == 1) {
        resumen.innerHTML = `<em>${promedio}</em> es la nota del proyecto guiado por ${profeSeleccion.profe} hasta un Examen de Título aprobado`;
    } else {
        resumen.innerHTML = `<em>${promedio}</em> es la nota promedio de los <em>${notas.length}</em> proyectos guiados por ${profeSeleccion.profe} hasta un Examen de Título aprobado; la mediana es de <em>${mediana(notas).toFixed(
            1
        )}</em>, y la desviación estándar es de <em>${desviacionEstandar(notas).toFixed(2)}</em>`;
    }

    //Buscando las palabras frecuentes del "para qué" en su selección
    var words = "";
    seleccion.forEach((s) => {
        s.proyecto = s.proyecto.replace(".", "");
        s.proyecto = s.proyecto.toLowerCase();
        words = words + " " + s.proyecto;
    });
    var palabras = words.split(" ");
    palabras = palabras.sort();
    const nopalabras = [
        "",
        ":",
        "a",
        "al",
        "así",
        "como",
        "con",
        "de",
        "De",
        "del",
        "dentro",
        "desde",
        "e",
        "el",
        "El",
        "en",
        "entre",
        "esta",
        "este",
        "esto",
        "estos",
        "fin",
        "hacia",
        "la",
        "las",
        "le",
        "les",
        "lo",
        "los",
        "más",
        "mediante",
        "no",
        "o",
        "para",
        "por",
        "que",
        "qué",
        "se",
        "sin",
        "sobre",
        "son",
        "su",
        "sus",
        "tanto",
        "través",
        "un",
        "una",
        "unas",
        "unos",
        "vez",
        "y",
        "Una",
        "bajo",
    ];
    const sacaPalabras = (arreglo, sacar) => {
        return arreglo.filter((palabra) => {
            return !sacar.includes(palabra);
        });
    };
    var palabrasAcotadas = sacaPalabras(palabras, nopalabras);
    const cuentaRepeticiones = (arreglo = []) => {
        const resultado = [];
        arreglo.forEach((el) => {
            const index = resultado.findIndex((obj) => {
                return obj["name"] === el;
            });
            if (index === -1) {
                resultado.push({
                    name: el,
                    count: 1,
                });
            } else {
                resultado[index]["count"]++;
            }
        });
        return resultado;
    };
    var total = cuentaRepeticiones(palabrasAcotadas);
    var texto = "";
    total.forEach((x) => {
        if (x.count > 1) {
            texto = texto + `<span><em>${x.name}</em> (${x.count} veces)</span> `;
        }
    });
    if (texto) {
        palabreo.innerHTML = `<p>Se revisan los nombres de los proyectos en el grupo buscando palabras repetidas (omitiendo artículos, adverbios, preposiciones y conjunciones). El resultado:</p>
                        <p>${texto}</p>`;
    } else {
        palabreo.innerHTML = `<p>Se revisan los nombres de los proyectos en el grupo, pero <em>no</em> se encuentran palabras repetidas.</p>`;
    }

    dona.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 42 42"><circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranjita)" stroke-width="2"></circle><circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--naranja)" stroke-width="2" stroke-dasharray="${
        profeSeleccion.porcentajes
    } ${100 - profeSeleccion.porcentajes}" stroke-dashoffset="25"></circle><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="7" ${profeSeleccion.porcentajes}>${
        profeSeleccion.porcentajes
    }%</text><text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" font-size="2" ${profeSeleccion.porcentajes}>${profeSeleccion.titulades} de ${profeSeleccion.guiades}</text></svg>`;
    profeGuia.innerHTML = profeSeleccion.profe;
    profeNotas.innerHTML = `
    <circle cx="5" cy="2.5" r=".5" fill="silver"/>
    <line x1="5" y1="2.5" x2="5" y2="62" stroke="silver" stroke-width=".3" />
    <circle cx="5" cy="62" r=".5" fill="silver"/>
    <circle cx="60" cy="2.5" r=".5" fill="silver"/>
    <line x1="60" y1="2.5" x2="60" y2="62.5" stroke="silver" stroke-width=".3" />
    <circle cx="60" cy="62.5" r=".5" fill="silver"/>
    `;
    for (var i = 0; i < notas.length; i++) {
        profeNotas.innerHTML += `<g>    
<text x="0.5" y="${140 - notasPrevias[i] * 20 + 2.5}" font-size="2.3" dominant-baseline="middle">${notasPrevias[i].toFixed(1)}</text>
<circle cx="5" cy="${140 - notasPrevias[i] * 20 + 2.5}" r=".5" fill="var(--naranja)"/>
<line x1="5" y1="${140 - notasPrevias[i] * 20 + 2.5}" x2="60" y2="${140 - notas[i] * 20 + 2.5}" stroke="var(--naranja)" stroke-width=".3"/>
<circle cx="60" cy="${140 - notas[i] * 20 + 2.5}" r=".5" fill="var(--naranja)"/>
<text x="61.25" y="${140 - notas[i] * 20 + 2.5}" font-size="2.3" dominant-baseline="middle">${notas[i].toFixed(1)}</text>
</g>`;
    }
}

datos("Abud Carrillo, Jenny").catch((error) => console.error(error));

document.querySelectorAll("select")[0].addEventListener("change", (event) => {
    tabla.innerHTML = " ";
    palabreo.innerHTML = " ";
    profeNotas.innerHTML = "";
    console.clear();
    var seleccion = [];
    var notas = [];
    var notasPrevias = [];
    datos(event.target.value).catch((error) => console.error(error));
});