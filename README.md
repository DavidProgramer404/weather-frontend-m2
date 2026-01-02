# App Clima 🌦️ - Módulo 4 (Lógica y Estadísticas en JavaScript)

Esta es la evolución de la aplicación de clima, enfocada ahora en la **lógica de programación y manejo de datos**. Se ha implementado un modelo de datos robusto en JavaScript para gestionar pronósticos y calcular estadísticas dinámicas.

[ENLACE_GITHUB] [https://github.com/DavidProgramer404/weather-frontend-m2.git]

## 1) Propósito
Reforzar los fundamentos de programación en JavaScript implementando la lógica interna de la App: modelar datos, recorrer estructuras con ciclos, aplicar condicionales y manipular el DOM para mostrar información dinámica.

## 2) Modelado de Datos
Los datos ya no están estáticos en el HTML. Se gestionan en un archivo JavaScript (`script.js`) utilizando:
- **Arreglo de Lugares**: Una colección de objetos donde cada lugar tiene propiedades como `id`, `nombre`, `tempActual`, etc.
- **Pronóstico Semanal**: Un arreglo anidado de objetos con información diaria (`dia`, `min`, `max`, `estado`), permitiendo cálculos precisos.

## 3) Funcionalidades y Estadísticas
La aplicación ahora calcula automáticamente en la vista de detalles:
- **Temperaturas Extremas**: Mínima y máxima de toda la semana.
- **Promedio Semanal**: Temperatura media calculada a partir de los datos diarios.
- **Conteo de Climas**: Cantidad de días soleados, nublados, lluviosos, etc.
- **Resumen Inteligente**: Un mensaje de texto generado dinámicamente según el clima predominante de la semana (ej. "Semana mayormente soleada").

## 4) Tecnologías
- HTML5 & CSS3 (SASS + BEM)
- Bootstrap 5
- **JavaScript (ES6+)**:
  - Manipulación del DOM.
  - Funciones de orden superior (`forEach`, `find`).
  - Lógica de control y ciclos.

## 5) Estructura del Proyecto
- `index.html`: Home dinámica que renderiza las cards desde JS.
- `detalles.html`: Vista de detalle que calcula y muestra estadísticas y pronósticos.
- `assets/js/script.js`: Contiene el modelo de datos y toda la lógica de la aplicación.
- `assets/css/main.css`: Estilos compilados.

---
**Desarrollado como proyecto educativo / David Valdes.**
