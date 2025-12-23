# App Clima 🌦️ - Módulo 3

Esta es la evolución de la aplicación de clima desarrollada en el Módulo 2. Se ha realizado un refactoring completo de la capa de estilos para aplicar metodologías profesionales y herramientas modernas.

[ENLACE_GITHUB] [https://github.com/DavidProgramer404/weather-frontend-m2.git]

## 1) Propósito
Refactorizar la interfaz aplicando metodologías de organización de estilos, preprocesamiento con SASS y el modelo de cajas para construir un layout más claro, mantenible y responsivo.

## 2) Metodología de Estilos
Se ha implementado la metodología **BEM (Block Element Modifier)** para organizar las clases CSS, asegurando un código modular.
Ejemplos de clases utilizadas:
- `.weather-app__header`
- `.place-card__title`
- `.place-card__temp`

## 3) Estructura SASS
El proyecto utiliza SASS para modularizar los estilos:
- `/scss/base`: Variables globales (`_variables.scss`).
- `/scss/layout`: Estilos para estructuras principales (`_header.scss`, `_footer.scss`, `_layout.scss`).
- `/scss/components`: Estilos para componentes (`_place-card.scss`).
- `main.scss`: Archivo principal que importa todos los parciales.

## 4) Tecnologías
- HTML5
- SASS (SCSS)
- Bootstrap 5 (vía CDN)
- JavaScript 

## 5) Páginas
- `index.html`: Home con listado de localidades en grid responsivo.
- `detalles.html`: Detalle y pronóstico semanal.
- `about.html`: Información del proyecto.

---
**Desarrollado como proyecto educativo / David Valdes.**
