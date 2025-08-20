---

# Porthos-PT - Prueba Técnica de Citas

Aplicación web fullstack para mostrar citas motivacionales y explorar más citas por palabra clave.  
Desarrollada con **React** en el frontend y **Node.js + Express + Sequelize** en el backend.

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
  Utiliza una API propia que consume datos de [Quotable](https://api.quotable.io/) para obtener citas y filtrar por palabra clave.

- **Manejo de errores:**  
  Si la API falla, se muestra un spinner y se evita que la app se caiga.

- **Responsive y accesible:**  
  El diseño se adapta a distintos dispositivos y es accesible.

---

## Estructura del proyecto

```
📦api
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┣ 📂handler
 ┃ ┣ 📂model
 ┃ ┣ 📂routes
 ┃ ┣ 📂utils
 ┃ ┣ app.js
 ┃ ┣ db.js
 ┃ ┗ index.js
 ┣ index.js

📦client
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂pages
 ┣ 📂service
 ┣ 📂utils
 ┣ App.jsx
 ┣ index.css
 ┗ main.jsx
```

---

## Instalación y ejecución

### Backend

1. Instala dependencias:
   ```bash
   cd api
   npm install
   ```
2. Configura las variables de entorno en un archivo `.env`:
   ```
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_HOST=localhost
   DB_NAME=nombre_db
   PORT=3001
   ```
3. Inicia el servidor:
   ```bash
   npm start
   ```

### Frontend

1. Instala dependencias:
   ```bash
   cd client
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Accede a [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## Personalización

- Cambia el diseño de los bricks en `QuoteCard.jsx`.
- El carrusel de citas adicionales está en `QuotesCarousel.jsx`.
- El spinner se puede personalizar en `Spinner.jsx` o usando `react-spinners`.
- Puedes modificar la lógica de seed en el backend para poblar la base de datos con más o menos citas/tags.

---

## Notas técnicas

- El proyecto usa React, TailwindCSS y react-spinners en el frontend.
- El backend usa Express, Sequelize y PostgreSQL.
- El manejo de rutas se realiza con `react-router-dom`.
- El código está comentado para facilitar su comprensión y mantenimiento.
- El backend se encarga de poblar la base de datos con citas y tags desde la API de Quotable.

---

## Autor

Desarrollado por [Jorge Nieva](https://github.com/jorgenieva23)
