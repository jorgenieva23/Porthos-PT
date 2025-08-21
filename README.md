# Porthos-PT - Prueba Técnica 

(https://porthos-pt.vercel.app/)

Aplicación web fullstack para mostrar citas motivacionales y explorar más citas por palabra clave.  
Desarrollada con **React** en el frontend y **Node.js + Express + Sequelize** en el backend.

---

## Aclaración importante

> **Sobre el uso de la API y el backend propio:**  
> El challenge requería mostrar citas relacionadas con palabras clave (keywords/tags) y funcionalidades avanzadas con la API de ZenQuotes. Sin embargo, la API original solo permitía obtener una cita por llamada limitada y el acceso a keywords era una funcionalidad premium (de pago).  
> Para cumplir con todos los requisitos del challenge, utilicé la API pública de [Quotable](https://api.quotable.io/) que sí provee citas y tags.  
> Debido a limitaciones de CORS, HTTPS y problemas de DNS (la API de Quotable no siempre respondía correctamente en entornos locales o con ciertas configuraciones de red), desarrollé un backend propio que almacena las citas y tags en una base de datos.  
> Para evitar caídas y problemas de conectividad, convertí los datos obtenidos de la API en archivos JSON (`quotes.json` y `tags.json`) y los uso para poblar la base de datos localmente.  
> Así, la aplicación puede cumplir con todos los requisitos funcionales, de experiencia de usuario y manejo de cookies, trabajando de forma estable y escalable.

---

## ⚠️ Nota para ejecución local

Si vas a trabajar de forma local y quieres usar la API externa (Quotable), debes **descomentar** las funciones que hacen llamados directos a la API en los archivos del backend:

Por ejemplo, en `api/src/utils/saveQuotesdb.js` y `api/src/utils/saveTags.js`:

```javascript
// Para poblar la base de datos desde la API externa, descomenta estas líneas:

// const response = await axios.get("https://api.quotable.io/tags", { ... });
// const data = response.data;

// const data = await fetchQuotes(total);
```

Y comenta o elimina el uso de los archivos JSON:

```javascript
// Si quieres usar los archivos locales, mantén estas líneas activas:
const rawData = fs.readFileSync("./data/quotes.json", "utf8");
const data = JSON.parse(rawData);
```

> **Recomendación:**  
> Usar los archivos JSON es más seguro y rápido en local, ya que evita problemas de DNS, CORS y límites de la API externa.

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
 ┣ 📂data
 ┃ ┣ quotes.json
 ┃ ┗ tags.json
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
   DATABASE_URL=postgres://usuario:contraseña@localhost/nombre_db
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
- El backend se encarga de poblar la base de datos con citas y tags desde la API de Quotable o desde archivos JSON locales.

---

## Autor

Desarrollado por [Jorge Nieva](https://github.com/jorgenieva23)
