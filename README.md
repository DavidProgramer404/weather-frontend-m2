# App Clima 🌦️ - Módulo 5 (POO, ES6+ y Consumo de API)

Esta es la evolución de la aplicación de clima, ahora implementada con **Programación Orientada a Objetos (POO)**, funcionalidades modernas de **JavaScript ES6+** y **consumo de API externa** para obtener datos reales de clima.

[ENLACE_GITHUB] [https://github.com/DavidProgramer404/weather-frontend-m2.git]

## 1) Propósito
Reestructurar la lógica de la App de Clima utilizando Programación Orientada a Objetos (POO) y funcionalidades modernas de JavaScript ES6+, e implementar el consumo de una API de clima mediante programación asíncrona (fetch, promesas, async/await).

## 2) Estructura de Clases (POO)
La aplicación está organizada en clases modulares:

### `ApiClient`
- **Propósito**: Manejar todas las interacciones con la API externa de clima.
- **Métodos principales**:
  - `getCurrentWeather(city)`: Obtiene clima actual de una ciudad.
  - `getForecast(city)`: Obtiene pronóstico de 5 días.
  - `mapCurrentWeather(data)`: Mapea respuesta JSON a formato interno.
  - `mapForecast(data)`: Mapea pronóstico a formato semanal simplificado.

### `Place`
- **Propósito**: Representa un lugar con sus datos de clima.
- **Propiedades**: `id`, `nombre`, `tempActual`, `estadoActual`, `icono`, `humedad`, `viento`, `pronosticoSemanal`.
- **Métodos**:
  - `calcularEstadisticas()`: Calcula estadísticas semanales (mín, máx, promedio, días por tipo).
  - `generarAlertas()`: Genera alertas basadas en reglas simples de clima.

### `WeatherApp`
- **Propósito**: Clase principal que orquesta toda la aplicación.
- **Propiedades**: `apiClient`, `lugares` (arreglo de instancias `Place`).
- **Métodos principales**:
  - `cargarLugares()`: Carga datos de clima desde API para múltiples ciudades.
  - `cargarDetalleLugar(id)`: Obtiene detalle de un lugar específico.
  - `renderizarHome()`: Renderiza la vista principal con cards.
  - `renderizarDetalles(id)`: Renderiza vista de detalle con estadísticas y alertas.

## 3) Tecnologías y ES6+
- **POO en JavaScript**: Clases, constructores, métodos de instancia.
- **ES6+ Features**:
  - `let` y `const` en lugar de `var`.
  - Arrow functions (`=>`) para callbacks.
  - Template literals (`` `${}` ``) para construcción de strings.
  - Parámetros por defecto en funciones.
  - `async/await` para manejo asíncrono.
- **Programación Asíncrona**:
  - Fetch API para consumir datos externos.
  - Promesas y async/await para manejar respuestas.
  - Manejo de errores con try/catch.

## 4) API de Clima Utilizada
- **Nombre**: OpenWeatherMap API
- **URL Base**: `https://api.openweathermap.org/data/2.5/`
- **Endpoints usados**:
  - `/weather`: Clima actual.
  - `/forecast`: Pronóstico de 5 días (cada 3 horas).
- **Para usar datos reales**:
  1. Ve a https://openweathermap.org/api
  2. Crea una cuenta gratuita y **verifica tu email**
  3. Ve a "My API keys" en tu dashboard
  4. Copia la API key (debe ser una cadena alfanumérica de 32 caracteres)
  5. **Espera hasta 2 horas** para que se active la API key
 

## 5) Funcionalidades
### Home
- Muestra listado dinámico de ≥ 5 lugares chilenos.
- Datos obtenidos en tiempo real desde API.
- Cards con temperatura actual y estado del clima.

### Detalle de Lugar
- **Pronóstico Semanal**: 7 días con min/max y estado.
- **Estadísticas de la Semana**:
  - Temperatura mínima, máxima y promedio.
  - Conteo de días soleados, nublados, lluviosos.
  - Resumen inteligente basado en clima predominante.
- **Alertas de Clima**: Reglas simples como:
  - Promedio > 25°C → "Alerta de calor".
  - ≥ 3 días lluviosos → "Semana lluviosa".
  - Viento > 20 km/h → "Vientos fuertes".

## 6) Cálculo de Estadísticas
Las estadísticas se calculan dinámicamente a partir de los datos obtenidos de la API:
- **Mínima/Máxima**: Valores extremos de la semana.
- **Promedio**: Media aritmética de temperaturas diarias.
- **Conteo por tipo**: Basado en descripción del clima (soleado, nublado, lluvia, etc.).
- **Resumen**: Lógica condicional para generar mensaje contextual.

## 7) Estructura del Proyecto
- `index.html`: Home con cards dinámicas.
- `detalles.html`: Vista de detalle con estadísticas y alertas.
- `assets/js/script.js`: Clases POO y lógica de aplicación.
- `assets/css/main.css`: Estilos (mantenidos de módulos anteriores).

---
**Desarrollado como proyecto educativo / David Valdés.**
