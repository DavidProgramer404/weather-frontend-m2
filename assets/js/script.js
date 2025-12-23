// Datos clima de chile

const datosClimaChile = [
    { 
        id: 'chile', 
        nombre : 'Chile', 
        temperatura: 15, 
        estado: 'nublado', 
        icono: '☁️',
        humedad: 78, 
        viento: 10, 
        pronostico: [
            { dia: 'Lunes', temperatura: 16, estado: 'soleado', icono: '☀️' },
            { dia: 'Martes', temperatura: 14, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 15, estado: 'nublado', icono: '☁️' },
            { dia: 'Jueves', temperatura: 17, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 13, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 16, estado: 'nublado', icono: '☁️' },
            { dia: 'Domingo', temperatura: 15, estado: 'soleado', icono: '☀️' }
        ]
    },
    {
        id: 'santiago', 
        nombre : 'Santiago', 
        temperatura: 18, 
        estado: 'soleado', 
        icono: '☀️',
        humedad: 65, 
        viento: 12, 
        pronostico: [
            { dia: 'Lunes', temperatura: 19, estado: 'soleado', icono: '☀️' },
            { dia: 'Martes', temperatura: 17, estado: 'nublado', icono: '☁️' },
            { dia: 'Miércoles', temperatura: 18, estado: 'soleado', icono: '☀️' },
            { dia: 'Jueves', temperatura: 20, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 16, estado: 'nublado', icono: '☁️' },
            { dia: 'Sábado', temperatura: 19, estado: 'soleado', icono: '☀️' },
            { dia: 'Domingo', temperatura: 18, estado: 'nublado', icono: '☁️' }
        ]
    },
    {
        id: 'valparaiso', 
        nombre : 'Valparaíso', 
        temperatura: 14, 
        estado: 'lluvioso', 
        icono: '🌧️',
        humedad: 80, 
        viento: 15, 
        pronostico: [
            { dia: 'Lunes', temperatura: 15, estado: 'nublado', icono: '☁️' },
            { dia: 'Martes', temperatura: 13, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 14, estado: 'nublado', icono: '☁️' },
            { dia: 'Jueves', temperatura: 16, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 12, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 15, estado: 'nublado', icono: '☁️' },
            { dia: 'Domingo', temperatura: 14, estado: 'soleado', icono: '☀️' }
        ]
    },
    {
        id: 'antofagasta', 
        nombre : 'Antofagasta', 
        temperatura: 20,
        estado: 'soleado', 
        icono: '☀️',
        humedad: 60, 
        viento: 8, 
        pronostico: [
            { dia: 'Lunes', temperatura: 21, estado: 'soleado', icono: '☀️' },
            { dia: 'Martes', temperatura: 19, estado: 'nublado', icono: '☁️' },
            { dia: 'Miércoles', temperatura: 20, estado: 'soleado', icono: '☀️' },
            { dia: 'Jueves', temperatura: 22, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 18, estado: 'nublado', icono: '☁️' },
            { dia: 'Sábado', temperatura: 21, estado: 'soleado', icono: '☀️' },
            { dia: 'Domingo', temperatura: 20, estado: 'nublado', icono: '☁️' }
        ]
    },
    {
        id: 'puerto-varas',
        nombre: 'Puerto Varas',
        temperatura: 12,
        estado: 'nublado',
        icono: '☁️',
        humedad: 85,
        viento: 18,
        pronostico: [
            { dia: 'Lunes', temperatura: 13, estado: 'nublado', icono: '☁️' },
            { dia: 'Martes', temperatura: 11, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 12, estado: 'nublado', icono: '☁️' },
            { dia: 'Jueves', temperatura: 14, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 10, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 13, estado: 'nublado', icono: '☁️' },
            { dia: 'Domingo', temperatura: 12, estado: 'soleado', icono: '☀️' }
        ]
    },
    {
        id: 'punta-arenas',
        nombre: 'Punta Arenas',
        temperatura: 8,
        estado: 'ventoso',
        icono: '💨',
        humedad: 75,
        viento: 25,
        pronostico: [
            { dia: 'Lunes', temperatura: 9, estado: 'ventoso', icono: '💨' },
            { dia: 'Martes', temperatura: 7, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 8, estado: 'ventoso', icono: '💨' },
            { dia: 'Jueves', temperatura: 10, estado: 'nublado', icono: '☁️' },
            { dia: 'Viernes', temperatura: 6, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 9, estado: 'ventoso', icono: '💨' },
            { dia: 'Domingo', temperatura: 8, estado: 'nublado', icono: '☁️' }
        ]
    },
    {
        id: 'atacama',
        nombre: 'Atacama',
        temperatura: 25,
        estado: 'soleado',
        icono: '☀️',
        humedad: 40,
        viento: 5,
        pronostico: [
            { dia: 'Lunes', temperatura: 26, estado: 'soleado', icono: '☀️' },
            { dia: 'Martes', temperatura: 24, estado: 'soleado', icono: '☀️' },
            { dia: 'Miércoles', temperatura: 25, estado: 'soleado', icono: '☀️' },
            { dia: 'Jueves', temperatura: 27, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 23, estado: 'nublado', icono: '☁️' },
            { dia: 'Sábado', temperatura: 26, estado: 'soleado', icono: '☀️' },
            { dia: 'Domingo', temperatura: 25, estado: 'soleado', icono: '☀️' }
        ]
    },
    {
        id: 'concepcion',
        nombre: 'Concepción',
        temperatura: 16,
        estado: 'nublado',
        icono: '☁️',
        humedad: 72,
        viento: 14,
        pronostico: [
            { dia: 'Lunes', temperatura: 17, estado: 'nublado', icono: '☁️' },
            { dia: 'Martes', temperatura: 15, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 16, estado: 'nublado', icono: '☁️' },
            { dia: 'Jueves', temperatura: 18, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 14, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 17, estado: 'nublado', icono: '☁️' },
            { dia: 'Domingo', temperatura: 16, estado: 'soleado', icono: '☀️' }
        ]
    },
    {
        id: 'ovalle',
        nombre: 'Ovalle',
        temperatura: 22,
        estado: 'soleado',
        icono: '☀️',
        humedad: 55,
        viento: 9,
        pronostico: [
            { dia: 'Lunes', temperatura: 23, estado: 'soleado', icono: '☀️' },
            { dia: 'Martes', temperatura: 21, estado: 'nublado', icono: '☁️' },
            { dia: 'Miércoles', temperatura: 22, estado: 'soleado', icono: '☀️' },
            { dia: 'Jueves', temperatura: 24, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 20, estado: 'nublado', icono: '☁️' },
            { dia: 'Sábado', temperatura: 23, estado: 'soleado', icono: '☀️' },
            { dia: 'Domingo', temperatura: 22, estado: 'nublado', icono: '☁️' }
        ]
    },
    {
        id: 'temuco',
        nombre: 'Temuco',
        temperatura: 13,
        estado: 'lluvioso',
        icono: '🌧️',
        humedad: 82,
        viento: 16,
        pronostico: [
            { dia: 'Lunes', temperatura: 14, estado: 'nublado', icono: '☁️' },
            { dia: 'Martes', temperatura: 12, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Miércoles', temperatura: 13, estado: 'nublado', icono: '☁️' },
            { dia: 'Jueves', temperatura: 15, estado: 'soleado', icono: '☀️' },
            { dia: 'Viernes', temperatura: 11, estado: 'lluvioso', icono: '🌧️' },
            { dia: 'Sábado', temperatura: 14, estado: 'nublado', icono: '☁️' },
            { dia: 'Domingo', temperatura: 13, estado: 'soleado', icono: '☀️' }
        ]
    }
];

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
    return datosClimaChile.find(localidad => localidad.id === id);
}

/**
 * Función que renderiza las cards en el Home
 */
function renderizarHome() {
    const contenedor = document.getElementById('contenedor-cards');
    if (!contenedor) return;
    
    datosClimaChile.forEach((localidad) => {
        const card = document.createElement('div');
        // Usamos clases de Bootstrap y nuestra clase BEM "place-card"
        card.className = 'place-card card h-100'; 
        // card.style.cursor = 'pointer'; // Ya manejado en CSS
        card.innerHTML = `
            <div class="card-body text-center">
                <h3 class="card-title place-card__title">${localidad.nombre}</h3>
                <p class="display-6 place-card__icon">${localidad.icono}</p>
                <p class="card-text place-card__temp">${localidad.temperatura}°C</p>
                <p class="card-text text-secondary place-card__status">${localidad.estado}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = `detalles.html?id=${localidad.id}`;
        });
        contenedor.appendChild(card);
    });
}

/**
 * Función que renderiza los detalles de una localidad
 */
function renderizarDetalles() {
    const id = obtenerParametroURL('id');
    const localidad = buscarLocalidad(id);
    
    if (!localidad) {
        window.location.href = 'index.html';
        return;
    }
    
    // Renderizar detalles principales
    document.getElementById('detalle-nombre').textContent = localidad.nombre;
    document.getElementById('detalle-temp').textContent = `${localidad.temperatura}°C ${localidad.icono}`;
    document.getElementById('detalle-estado').textContent = localidad.estado;
    document.getElementById('detalle-humedad').textContent = `${localidad.humedad}%`;
    document.getElementById('detalle-viento').textContent = `${localidad.viento} km/h`;
    
    // Renderizar pronóstico semanal
    const contenedor = document.getElementById('pronostico-semanal');
    localidad.pronostico.forEach((dia) => {
        const card = document.createElement('div');
        card.className = 'col';
        card.innerHTML = `
            <div class="card h-100 text-center">
                <div class="card-body">
                    <h5 class="card-title">${dia.dia}</h5>
                    <p class="display-5">${dia.icono}</p>
                    <p class="card-text"><strong>${dia.temperatura}°C</strong></p>
                    <p class="card-text text-secondary">${dia.estado}</p>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}
