# Porthos-PT - Prueba Técnica de Citas

Este proyecto es una aplicación web que muestra citas motivacionales y permite explorar más citas por palabra clave. Está desarrollado con React y utiliza una API para obtener las citas.

---

## Características principales

- **Landing Page tipo "bricks":**  
  Muestra bloques con citas, palabra clave y botón "More" para ver más citas relacionadas.

- **Quote of the Day:**  
  Página `/qod` que muestra una cita aleatoria con su autor.

- **Funcionalidad "More":**  
  Al hacer clic en "More", se muestran 10 citas relacionadas en un modal tipo carrusel.

- **Manejo de cookies:**  
  Al usar "More", se guarda la palabra clave en una cookie. Al recargar, la primera cita corresponde a esa palabra clave.

- **Consumo de API:**  
  Utiliza una API (ZenQuotes o propia) para obtener citas y filtrar por palabra clave.

- **Manejo de errores:**  
  Si la API falla, se muestra un spinner y se evita que la app se caiga.

- **Responsive y accesible:**  
  El diseño se adapta a distintos dispositivos y es accesible.

---

## Estructura del proyecto

```
src/
 ┣ assets/
 ┣ components/
 ┃ ┣ Footer.jsx
 ┃ ┣ Modal.jsx
 ┃ ┣ MoreButton.jsx
 ┃ ┣ Navbar.jsx
 ┃ ┣ Quote.jsx
 ┃ ┣ QuoteCard.jsx
 ┃ ┣ QuotesCarousel.jsx
 ┃ ┗ Spinner.jsx
 ┣ pages/
 ┃ ┣ LandingPage.jsx
 ┃ ┗ QuoteOfDay.jsx
 ┣ service/
 ┃ ┗ quoteService.js
 ┣ utils/
 ┃ ┗ getCookie.js
 ┣ App.jsx
 ┣ index.css
 ┗ main.jsx
```

---

## Instalación y ejecución

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Personalización

- Puedes cambiar el diseño de los bricks en `QuoteCard.jsx`.
- El carrusel de citas adicionales está en `QuotesCarousel.jsx`.
- El spinner se puede personalizar en `Spinner.jsx` o usando `react-spinners`.

---

## Notas técnicas

- El proyecto usa React, TailwindCSS y react-spinners.
- El manejo de rutas se realiza con `react-router-dom`.
- El código está comentado para facilitar su comprensión y mantenimiento.

---

## Autor

Desarrollado por
