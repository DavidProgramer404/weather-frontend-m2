// Datos de clima (Modelo de datos)
const lugares = [
    {
        id: 'chile',
        nombre: 'Chile',
        tempActual: 15,
        estadoActual: 'Nublado',
        icono: '☁️',
        humedad: 78,
        viento: 10,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 10, max: 18, estado: 'Soleado', icono: '☀️' },
            { dia: 'Martes', min: 9, max: 16, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 11, max: 17, estado: 'Nublado', icono: '☁️' },
            { dia: 'Jueves', min: 12, max: 19, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 8, max: 15, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 10, max: 18, estado: 'Nublado', icono: '☁️' },
            { dia: 'Domingo', min: 11, max: 17, estado: 'Soleado', icono: '☀️' }
        ]
    },
    {
        id: 'santiago',
        nombre: 'Santiago',
        tempActual: 18,
        estadoActual: 'Soleado',
        icono: '☀️',
        humedad: 65,
        viento: 12,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 12, max: 25, estado: 'Soleado', icono: '☀️' },
            { dia: 'Martes', min: 11, max: 23, estado: 'Nublado', icono: '☁️' },
            { dia: 'Miércoles', min: 13, max: 26, estado: 'Soleado', icono: '☀️' },
            { dia: 'Jueves', min: 14, max: 28, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 10, max: 22, estado: 'Nublado', icono: '☁️' },
            { dia: 'Sábado', min: 12, max: 24, estado: 'Soleado', icono: '☀️' },
            { dia: 'Domingo', min: 13, max: 25, estado: 'Nublado', icono: '☁️' }
        ]
    },
    {
        id: 'valparaiso',
        nombre: 'Valparaíso',
        tempActual: 14,
        estadoActual: 'Lluvioso',
        icono: '🌧️',
        humedad: 80,
        viento: 15,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 10, max: 16, estado: 'Nublado', icono: '☁️' },
            { dia: 'Martes', min: 9, max: 14, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 11, max: 15, estado: 'Nublado', icono: '☁️' },
            { dia: 'Jueves', min: 10, max: 18, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 8, max: 13, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 10, max: 17, estado: 'Nublado', icono: '☁️' },
            { dia: 'Domingo', min: 11, max: 16, estado: 'Soleado', icono: '☀️' }
        ]
    },
    {
        id: 'antofagasta',
        nombre: 'Antofagasta',
        tempActual: 20,
        estadoActual: 'Soleado',
        icono: '☀️',
        humedad: 60,
        viento: 8,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 15, max: 22, estado: 'Soleado', icono: '☀️' },
            { dia: 'Martes', min: 14, max: 21, estado: 'Nublado', icono: '☁️' },
            { dia: 'Miércoles', min: 16, max: 23, estado: 'Soleado', icono: '☀️' },
            { dia: 'Jueves', min: 15, max: 24, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 14, max: 20, estado: 'Nublado', icono: '☁️' },
            { dia: 'Sábado', min: 15, max: 22, estado: 'Soleado', icono: '☀️' },
            { dia: 'Domingo', min: 16, max: 21, estado: 'Nublado', icono: '☁️' }
        ]
    },
    {
        id: 'puerto-varas',
        nombre: 'Puerto Varas',
        tempActual: 12,
        estadoActual: 'Nublado',
        icono: '☁️',
        humedad: 85,
        viento: 18,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 6, max: 14, estado: 'Nublado', icono: '☁️' },
            { dia: 'Martes', min: 5, max: 12, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 7, max: 13, estado: 'Nublado', icono: '☁️' },
            { dia: 'Jueves', min: 8, max: 15, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 4, max: 11, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 6, max: 14, estado: 'Nublado', icono: '☁️' },
            { dia: 'Domingo', min: 7, max: 13, estado: 'Soleado', icono: '☀️' }
        ]
    },
    {
        id: 'punta-arenas',
        nombre: 'Punta Arenas',
        tempActual: 8,
        estadoActual: 'Ventoso',
        icono: '💨',
        humedad: 75,
        viento: 25,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 2, max: 10, estado: 'Ventoso', icono: '💨' },
            { dia: 'Martes', min: 1, max: 8, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 3, max: 9, estado: 'Ventoso', icono: '💨' },
            { dia: 'Jueves', min: 4, max: 11, estado: 'Nublado', icono: '☁️' },
            { dia: 'Viernes', min: 0, max: 7, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 2, max: 10, estado: 'Ventoso', icono: '💨' },
            { dia: 'Domingo', min: 3, max: 9, estado: 'Nublado', icono: '☁️' }
        ]
    },
    {
        id: 'atacama',
        nombre: 'Atacama',
        tempActual: 25,
        estadoActual: 'Soleado',
        icono: '☀️',
        humedad: 40,
        viento: 5,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 15, max: 30, estado: 'Soleado', icono: '☀️' },
            { dia: 'Martes', min: 16, max: 29, estado: 'Soleado', icono: '☀️' },
            { dia: 'Miércoles', min: 17, max: 31, estado: 'Soleado', icono: '☀️' },
            { dia: 'Jueves', min: 18, max: 32, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 15, max: 28, estado: 'Nublado', icono: '☁️' },
            { dia: 'Sábado', min: 16, max: 30, estado: 'Soleado', icono: '☀️' },
            { dia: 'Domingo', min: 17, max: 29, estado: 'Soleado', icono: '☀️' }
        ]
    },
    {
        id: 'concepcion',
        nombre: 'Concepción',
        tempActual: 16,
        estadoActual: 'Nublado',
        icono: '☁️',
        humedad: 72,
        viento: 14,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 8, max: 18, estado: 'Nublado', icono: '☁️' },
            { dia: 'Martes', min: 9, max: 16, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 10, max: 17, estado: 'Nublado', icono: '☁️' },
            { dia: 'Jueves', min: 11, max: 19, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 8, max: 15, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 10, max: 18, estado: 'Nublado', icono: '☁️' },
            { dia: 'Domingo', min: 11, max: 17, estado: 'Soleado', icono: '☀️' }
        ]
    },
    {
        id: 'ovalle',
        nombre: 'Ovalle',
        tempActual: 22,
        estadoActual: 'Soleado',
        icono: '☀️',
        humedad: 55,
        viento: 9,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 12, max: 26, estado: 'Soleado', icono: '☀️' },
            { dia: 'Martes', min: 11, max: 24, estado: 'Nublado', icono: '☁️' },
            { dia: 'Miércoles', min: 13, max: 25, estado: 'Soleado', icono: '☀️' },
            { dia: 'Jueves', min: 14, max: 27, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 11, max: 23, estado: 'Nublado', icono: '☁️' },
            { dia: 'Sábado', min: 13, max: 26, estado: 'Soleado', icono: '☀️' },
            { dia: 'Domingo', min: 12, max: 25, estado: 'Nublado', icono: '☁️' }
        ]
    },
    {
        id: 'temuco',
        nombre: 'Temuco',
        tempActual: 13,
        estadoActual: 'Lluvioso',
        icono: '🌧️',
        humedad: 82,
        viento: 16,
        pronosticoSemanal: [
            { dia: 'Lunes', min: 5, max: 15, estado: 'Nublado', icono: '☁️' },
            { dia: 'Martes', min: 4, max: 13, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', min: 6, max: 14, estado: 'Nublado', icono: '☁️' },
            { dia: 'Jueves', min: 7, max: 16, estado: 'Soleado', icono: '☀️' },
            { dia: 'Viernes', min: 3, max: 12, estado: 'Lluvioso', icono: '🌧️' },
            { dia: 'Sábado', min: 5, max: 15, estado: 'Nublado', icono: '☁️' },
            { dia: 'Domingo', min: 6, max: 14, estado: 'Soleado', icono: '☀️' }
        ]
    }
];

// --- Lógica de Negocio ---

/**
 * Obtiene los parámetros de la URL
 */
function obtenerParametroURL(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

/**
 * Busca una localidad por ID
 */
function buscarLocalidad(id) {
    return lugares.find(lugar => lugar.id === id);
}

/**
 * Calcula estadísticas semanales a partir del pronóstico
 */
function calcularEstadisticas(pronostico) {
    let minSemanal = Infinity;
    let maxSemanal = -Infinity;
    let sumaTempPromedio = 0;

    // Contadores para tipos de clima
    let diasSoleados = 0;
    let diasNublados = 0;
    let diasLluviosos = 0;
    let diasVentosos = 0;

    pronostico.forEach(dia => {
        // Mínimo y Máximo absoluto de la semana
        if (dia.min < minSemanal) minSemanal = dia.min;
        if (dia.max > maxSemanal) maxSemanal = dia.max;

        // Para el promedio usamos el promedio del día (min+max)/2
        const promedioDia = (dia.min + dia.max) / 2;
        sumaTempPromedio += promedioDia;

        // Conteo de estados
        const estadoLower = dia.estado.toLowerCase();
        if (estadoLower.includes('soleado')) diasSoleados++;
        else if (estadoLower.includes('nublado')) diasNublados++;
        else if (estadoLower.includes('lluvioso')) diasLluviosos++;
        else if (estadoLower.includes('ventoso') || estadoLower.includes('viento')) diasVentosos++;
    });

    const promedioSemanal = (sumaTempPromedio / pronostico.length).toFixed(1);

    // Generar resumen textual
    let resumen = "Semana variable.";
    if (diasSoleados >= 4) {
        resumen = "Semana mayormente soleada ☀️. ¡Ideal para salir!";
    } else if (diasLluviosos >= 3) {
        resumen = "Semana con varias lluvias 🌧️. No olvides tu paraguas.";
    } else if (diasNublados >= 4) {
        resumen = "Semana mayormente nublada ☁️.";
    } else if (diasVentosos >= 3) {
        resumen = "Semana con vientos fuertes 💨.";
    }

    return {
        min: minSemanal,
        max: maxSemanal,
        promedio: promedioSemanal,
        diasSoleados,
        diasNublados,
        diasLluviosos,
        resumen
    };
}

// --- Lógica de Presentación (DOM) ---

/**
 * Función que renderiza las cards en el Home
 */
function renderizarHome() {
    const contenedor = document.getElementById('contenedor-cards');
    if (!contenedor) return;

    // Limpiamos contenido previo por si acaso
    contenedor.innerHTML = '';

    lugares.forEach((lugar) => {
        const card = document.createElement('div');
        card.className = 'place-card card h-100';
        card.innerHTML = `
            <div class="card-body text-center">
                <h3 class="card-title place-card__title">${lugar.nombre}</h3>
                <p class="display-6 place-card__icon">${lugar.icono}</p>
                <p class="card-text place-card__temp">${lugar.tempActual}°C</p>
                <p class="card-text text-secondary place-card__status">${lugar.estadoActual}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `detalles.html?id=${lugar.id}`;
        });
        contenedor.appendChild(card);
    });
}

/**
 * Función que renderiza los detalles de una localidad
 */
function renderizarDetalles() {
    const id = obtenerParametroURL('id');
    const lugar = buscarLocalidad(id);

    if (!lugar) {
        // Si no hay ID o no existe, volver al home (o mostrar error)
        // window.location.href = 'index.html';
        console.error("Lugar no encontrado");
        return;
    }

    // Renderizar detalles principales
    document.getElementById('detalle-nombre').textContent = lugar.nombre;
    document.getElementById('detalle-temp').textContent = `${lugar.tempActual}°C ${lugar.icono}`;
    document.getElementById('detalle-estado').textContent = lugar.estadoActual;
    document.getElementById('detalle-humedad').textContent = `${lugar.humedad}%`;
    document.getElementById('detalle-viento').textContent = `${lugar.viento} km/h`;

    // Calcular estadísticas
    const stats = calcularEstadisticas(lugar.pronosticoSemanal);

    // Renderizar sección de estadísticas si existe el contenedor (lo crearemos en el HTML)
    const contenedorStats = document.getElementById('contenedor-estadisticas');
    if (contenedorStats) {
        contenedorStats.innerHTML = `
            <div class="card bg-light border-info mb-4">
                <div class="card-header bg-info text-white fw-bold">Estadísticas de la Semana 📊</div>
                <div class="card-body">
                    <div class="row text-center">
                        <div class="col-4">
                            <h6 class="text-primary">Mínima</h6>
                            <p class="fs-4 fw-bold text-primary">${stats.min}°C</p>
                        </div>
                        <div class="col-4 border-start border-end">
                            <h6 class="text-success">Promedio</h6>
                            <p class="fs-4 fw-bold text-success">${stats.promedio}°C</p>
                        </div>
                        <div class="col-4">
                            <h6 class="text-danger">Máxima</h6>
                            <p class="fs-4 fw-bold text-danger">${stats.max}°C</p>
                        </div>
                    </div>
                    <hr>
                    <div class="text-center mb-2">
                        <span class="badge bg-warning text-dark me-2">☀️ ${stats.diasSoleados} Soleados</span>
                        <span class="badge bg-secondary me-2">☁️ ${stats.diasNublados} Nublados</span>
                        <span class="badge bg-primary me-2">🌧️ ${stats.diasLluviosos} Lluviosos</span>
                    </div>
                    <p class="text-center fst-italic mt-3 mb-0">"${stats.resumen}"</p>
                </div>
            </div>
        `;
    }

    // Renderizar pronóstico semanal
    const contenedorPronostico = document.getElementById('pronostico-semanal');
    if (contenedorPronostico) {
        contenedorPronostico.innerHTML = ''; // Limpiar
        lugar.pronosticoSemanal.forEach((dia) => {
            const card = document.createElement('div');
            card.className = 'col';
            card.innerHTML = `
                <div class="card h-100 text-center shadow-sm">
                    <div class="card-body p-2">
                        <h6 class="card-title text-muted mb-2">${dia.dia}</h6>
                        <p class="display-6 mb-1">${dia.icono}</p>
                        <div class="d-flex justify-content-between px-3 mt-2">
                           <span class="text-primary fw-bold">${dia.min}°</span>
                           <span class="text-danger fw-bold">${dia.max}°</span>
                        </div>
                        <p class="card-text small text-secondary mt-2">${dia.estado}</p>
                    </div>
                </div>
            `;
            contenedorPronostico.appendChild(card);
        });
    }
}
