// Clase para manejar la API de clima
class ApiClient {
    constructor(apiKey, baseUrl = 'https://api.openweathermap.org/data/2.5', useMock = true) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.useMock = useMock; // Para desarrollo sin API key
    }

    // Método para obtener clima actual
    async getCurrentWeather(city) {
        if (this.useMock) {
            return this.getMockCurrentWeather(city);
        }
        try {
            const response = await fetch(`${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=es`);
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('API key inválida. Verifica tu clave de OpenWeatherMap.');
                } else if (response.status === 404) {
                    throw new Error(`Ciudad "${city}" no encontrada.`);
                } else {
                    throw new Error(`Error en la API: ${response.status} - ${response.statusText}`);
                }
            }
            const data = await response.json();
            return this.mapCurrentWeather(data);
        } catch (error) {
            console.error('Error obteniendo clima actual:', error);
            throw error;
        }
    }

    // Método para obtener pronóstico de 5 días
    async getForecast(city) {
        if (this.useMock) {
            return this.getMockForecast(city);
        }
        try {
            const response = await fetch(`${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=es`);
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('API key inválida. Verifica tu clave de OpenWeatherMap.');
                } else if (response.status === 404) {
                    throw new Error(`Ciudad "${city}" no encontrada.`);
                } else {
                    throw new Error(`Error en la API: ${response.status} - ${response.statusText}`);
                }
            }
            const data = await response.json();
            return this.mapForecast(data);
        } catch (error) {
            console.error('Error obteniendo pronóstico:', error);
            throw error;
        }
    }

    // Datos mock para desarrollo
    getMockCurrentWeather(city) {
        const mockData = {
            'Santiago': { temp: 18, humidity: 65, wind: 12, weather: 'Clear' },
            'Valparaíso': { temp: 14, humidity: 80, wind: 15, weather: 'Rain' },
            'Antofagasta': { temp: 20, humidity: 60, wind: 8, weather: 'Clear' },
            'Puerto Varas': { temp: 12, humidity: 85, wind: 18, weather: 'Clouds' },
            'Punta Arenas': { temp: 8, humidity: 75, wind: 25, weather: 'Wind' },
            'Atacama': { temp: 25, humidity: 40, wind: 5, weather: 'Clear' },
            'Concepción': { temp: 16, humidity: 72, wind: 14, weather: 'Clouds' },
            'Ovalle': { temp: 22, humidity: 55, wind: 9, weather: 'Clear' },
            'Temuco': { temp: 13, humidity: 82, wind: 16, weather: 'Rain' }
        };

        const data = mockData[city] || mockData['Santiago'];
        return {
            id: city.toLowerCase().replace(/\s+/g, '-'),
            nombre: city,
            tempActual: data.temp,
            estadoActual: this.getWeatherDescription(data.weather),
            icono: this.getWeatherIcon(data.weather),
            humedad: data.humidity,
            viento: data.wind
        };
    }

    getMockForecast(city) {
        // Simular pronóstico semanal basado en datos mock
        const baseTemp = this.getMockCurrentWeather(city).tempActual;
        const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        const forecast = [];

        for (let i = 0; i < 7; i++) {
            const variation = Math.floor(Math.random() * 6) - 3; // -3 to +3
            const min = baseTemp + variation - 2;
            const max = baseTemp + variation + 2;
            const weatherTypes = ['Clear', 'Clouds', 'Rain'];
            const weather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

            forecast.push({
                dia: days[i],
                min: Math.max(min, 0),
                max: Math.max(max, min + 1),
                estado: this.getWeatherDescription(weather),
                icono: this.getWeatherIcon(weather)
            });
        }
        return forecast;
    }

    getWeatherDescription(weatherMain) {
        const descriptions = {
            'Clear': 'Soleado',
            'Clouds': 'Nublado',
            'Rain': 'Lluvioso',
            'Drizzle': 'Lluvioso',
            'Thunderstorm': 'Tormentoso',
            'Snow': 'Nevado',
            'Mist': 'Neblinoso',
            'Fog': 'Neblinoso',
            'Wind': 'Ventoso'
        };
        return descriptions[weatherMain] || 'Desconocido';
    }

    // Mapear respuesta de clima actual
    mapCurrentWeather(data) {
        return {
            id: data.name.toLowerCase().replace(/\s+/g, '-'),
            nombre: data.name,
            tempActual: Math.round(data.main.temp),
            estadoActual: data.weather[0].description,
            icono: this.getWeatherIcon(data.weather[0].main),
            humedad: data.main.humidity,
            viento: Math.round(data.wind.speed * 3.6), // m/s to km/h
        };
    }

    // Mapear pronóstico (simplificado a 7 días)
    mapForecast(data) {
        const dailyForecast = [];
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const today = new Date().getDay();

        // Tomar una entrada por día (aprox 12:00)
        for (let i = 0; i < 7; i++) {
            const forecastIndex = i * 8 + 4; // Aprox mediodía
            if (forecastIndex < data.list.length) {
                const item = data.list[forecastIndex];
                const dayIndex = (today + i) % 7;
                dailyForecast.push({
                    dia: days[dayIndex],
                    min: Math.round(item.main.temp_min),
                    max: Math.round(item.main.temp_max),
                    estado: item.weather[0].description,
                    icono: this.getWeatherIcon(item.weather[0].main)
                });
            }
        }
        return dailyForecast;
    }

    // Función auxiliar para íconos
    getWeatherIcon(weatherMain) {
        const icons = {
            'Clear': '☀️',
            'Clouds': '☁️',
            'Rain': '🌧️',
            'Drizzle': '🌧️',
            'Thunderstorm': '⛈️',
            'Snow': '❄️',
            'Mist': '🌫️',
            'Fog': '🌫️',
            'Wind': '💨'
        };
        return icons[weatherMain] || '☁️';
    }
}

// Clase para representar un lugar
class Place {
    constructor(data, forecast = []) {
        this.id = data.id;
        this.nombre = data.nombre;
        this.tempActual = data.tempActual;
        this.estadoActual = data.estadoActual;
        this.icono = data.icono;
        this.humedad = data.humedad;
        this.viento = data.viento;
        this.pronosticoSemanal = forecast;
    }

    // Método para calcular estadísticas
    calcularEstadisticas() {
        if (!this.pronosticoSemanal || this.pronosticoSemanal.length === 0) {
            return null;
        }

        let minSemanal = Infinity;
        let maxSemanal = -Infinity;
        let sumaTempPromedio = 0;

        let diasSoleados = 0;
        let diasNublados = 0;
        let diasLluviosos = 0;
        let diasVentosos = 0;

        this.pronosticoSemanal.forEach(dia => {
            if (dia.min < minSemanal) minSemanal = dia.min;
            if (dia.max > maxSemanal) maxSemanal = dia.max;

            const promedioDia = (dia.min + dia.max) / 2;
            sumaTempPromedio += promedioDia;

            const estadoLower = dia.estado.toLowerCase();
            if (estadoLower.includes('soleado') || estadoLower.includes('clear')) diasSoleados++;
            else if (estadoLower.includes('nublado') || estadoLower.includes('cloud')) diasNublados++;
            else if (estadoLower.includes('lluvioso') || estadoLower.includes('rain')) diasLluviosos++;
            else if (estadoLower.includes('ventoso') || estadoLower.includes('wind')) diasVentosos++;
        });

        const promedioSemanal = (sumaTempPromedio / this.pronosticoSemanal.length).toFixed(1);

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

    // Método para generar alertas
    generarAlertas() {
        const alertas = [];
        const stats = this.calcularEstadisticas();

        if (stats) {
            if (parseFloat(stats.promedio) > 25) {
                alertas.push("Alerta de calor: Temperatura promedio alta esta semana.");
            }
            if (stats.diasLluviosos >= 3) {
                alertas.push("Semana lluviosa: Prepárate para días con lluvia.");
            }
            if (this.viento > 20) {
                alertas.push("Vientos fuertes: Ten cuidado al salir.");
            }
        }

        return alertas;
    }
}

// Clase principal de la aplicación
class WeatherApp {
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.lugares = [];
        this.cities = ['Santiago', 'Valparaíso', 'Antofagasta', 'Puerto Varas', 'Punta Arenas', 'Atacama', 'Concepción', 'Ovalle', 'Temuco'];
    }

    // Método para cargar lugares desde la API
    async cargarLugares() {
        try {
            this.mostrarCargando('Cargando lugares...');
            const lugaresPromises = this.cities.map(async (city) => {
                const currentData = await this.apiClient.getCurrentWeather(city);
                const forecastData = await this.apiClient.getForecast(city);
                return new Place(currentData, forecastData);
            });

            this.lugares = await Promise.all(lugaresPromises);
            this.ocultarCargando();
            return this.lugares;
        } catch (error) {
            console.error('Error cargando lugares:', error);
            this.mostrarError('Error al cargar los datos del clima. Inténtalo más tarde.');
            throw error;
        }
    }

    // Método para cargar detalle de un lugar
    async cargarDetalleLugar(id) {
        const lugar = this.lugares.find(l => l.id === id);
        if (!lugar) {
            throw new Error('Lugar no encontrado');
        }
        return lugar;
    }

    // Método para renderizar Home
    renderizarHome() {
        const contenedor = document.getElementById('contenedor-cards');
        if (!contenedor) return;

        contenedor.innerHTML = '';

        this.lugares.forEach((lugar) => {
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

    // Método para renderizar detalles
    renderizarDetalles(id) {
        const lugar = this.lugares.find(l => l.id === id);
        if (!lugar) {
            console.error("Lugar no encontrado");
            return;
        }

        // Renderizar detalles principales
        document.getElementById('detalle-nombre').textContent = lugar.nombre;
        document.getElementById('detalle-temp').textContent = `${lugar.tempActual}°C ${lugar.icono}`;
        document.getElementById('detalle-estado').textContent = lugar.estadoActual;
        document.getElementById('detalle-humedad').textContent = `${lugar.humedad}%`;
        document.getElementById('detalle-viento').textContent = `${lugar.viento} km/h`;

        // Estadísticas
        const stats = lugar.calcularEstadisticas();
        const contenedorStats = document.getElementById('contenedor-estadisticas');
        if (contenedorStats && stats) {
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

        // Alertas
        const alertas = lugar.generarAlertas();
        const contenedorAlertas = document.getElementById('contenedor-alertas');
        if (contenedorAlertas) {
            if (alertas.length > 0) {
                contenedorAlertas.innerHTML = `
                    <div class="card bg-warning border-warning mb-4">
                        <div class="card-header bg-warning text-dark fw-bold">Alertas de Clima ⚠️</div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                ${alertas.map(alerta => `<li class="mb-2">• ${alerta}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            } else {
                contenedorAlertas.innerHTML = `
                    <div class="card bg-success border-success mb-4">
                        <div class="card-header bg-success text-white fw-bold">Sin Alertas</div>
                        <div class="card-body">
                            <p class="mb-0">El clima se ve tranquilo esta semana.</p>
                        </div>
                    </div>
                `;
            }
        }

        // Pronóstico semanal
        const contenedorPronostico = document.getElementById('pronostico-semanal');
        if (contenedorPronostico) {
            contenedorPronostico.innerHTML = '';
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

    // Métodos auxiliares para UI
    mostrarCargando(mensaje = 'Cargando...') {
        const contenedor = document.getElementById('contenedor-cards');
        if (contenedor) {
            contenedor.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Cargando...</span>
                    </div>
                    <p class="mt-3">${mensaje}</p>
                </div>
            `;
        }
    }

    ocultarCargando() {
        // El contenido se reemplaza en renderizarHome
    }

    mostrarError(mensaje) {
        const contenedor = document.getElementById('contenedor-cards');
        if (contenedor) {
            contenedor.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Error</h4>
                        <p>${mensaje}</p>
                    </div>
                </div>
            `;
        }
    }
}

// Configuración e inicialización
const API_KEY = '0239b58f96c686e45a3e0e90f2ede352'; // API key proporcionada (también inválida según OpenWeatherMap)
const apiClient = new ApiClient(API_KEY, 'https://api.openweathermap.org/data/3.0', true); // true = usar datos simulados, false = API real
const weatherApp = new WeatherApp(apiClient);

// Función para obtener parámetros de URL
function obtenerParametroURL(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Función para mostrar la fecha actual en el navbar
function mostrarFechaActual() {
    const opcionesFecha = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fechaActual = new Date().toLocaleDateString('es-ES', opcionesFecha);
    const elementoFecha = document.getElementById('current-date');
    const elementoFechaDetalle = document.getElementById('current-date-detail');

    if (elementoFecha) {
        elementoFecha.textContent = fechaActual;
    }
    if (elementoFechaDetalle) {
        elementoFechaDetalle.textContent = fechaActual;
    }
}

// Inicializar fecha al cargar la página
document.addEventListener('DOMContentLoaded', mostrarFechaActual);

// Función global para renderizar Home (llamada desde HTML)
async function renderizarHome() {
    try {
        await weatherApp.cargarLugares();
        weatherApp.renderizarHome();
    } catch (error) {
        console.error('Error en renderizarHome:', error);
    }
}

// Función global para renderizar Detalles (llamada desde HTML)
async function renderizarDetalles() {
    const id = obtenerParametroURL('id');
    if (!id) {
        window.location.href = 'index.html';
        return;
    }

    try {
        await weatherApp.cargarLugares(); // Asegurar que los datos estén cargados
        weatherApp.renderizarDetalles(id);
    } catch (error) {
        console.error('Error en renderizarDetalles:', error);
        document.getElementById('detalle-nombre').textContent = 'Error al cargar datos';
    }
}
