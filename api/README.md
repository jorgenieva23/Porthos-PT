---

# 📚 Quotes API

API para obtener citas (quotes) y tags desde **Quotable.io**, almacenarlas en una base PostgreSQL y servirlas vía Express.
Incluye **seed automático al levantar el servidor**.

---

## 🔧 Tecnologías

* Node.js 24
* Express
* Sequelize ORM
* PostgreSQL
* Axios
* dotenv

---

## ⚙️ Instalación

1. Cloná el repositorio:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Instalá dependencias:

```bash
npm install
```

3. Configurá variables de entorno en un archivo `.env` en la raíz:

```
PORT=3001
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_NAME=nombre_db
```

---

## 🏃‍♂️ Ejecutar servidor

```bash
npm run dev
```

* Al iniciar, la API:

  1. Conecta a la base de datos.
  2. Sincroniza los modelos (`force: true`).
  3. Carga automáticamente los **tags**.
  4. 4 segundos, carga automáticamente los **quotes** (300 por defecto).
* Escucha en el puerto definido en `.env` (default `3001`).

---

## ⏳ Seed automático

Durante el arranque verás en consola algo como:

```
⏳ Espere... Sembrando tags...
Tags seeded ✅
⏳ Espere... Sembrando citas...
................
Quotes seeded ✅
```

* Esto reemplaza la necesidad de endpoints `/seedTag` y `/seedQuote` manuales.
* Las funciones de seed están en `src/utils/saveTags.js` y `src/utils/saveQuotesdb.js`.

---

## 📦 Endpoints (opcionales)

> Solo si querés exponerlos, aunque el seed se haga automáticamente:

| Método | Ruta                | Descripción                               |
| ------ | ------------------- | ----------------------------------------- |
| GET    | `/quotes`           | Obtener 10 quotes aleatorias con sus tags |
| GET    | `/quotes/:tag`      | Obtener quotes filtradas por tag          |
| GET    | `/quotes/tags`      | Obtener lista de todos los tags           |

---

## 💻 Estructura de archivos

```
api/
 ┣ src/
 ┃ ┣ controllers/
 ┃ ┃ ┗ quotesControllers.js
 ┃ ┣ handler/      <- opcional si mantenés endpoints manuales
 ┃ ┃ ┗ quotesHandlers.js
 ┃ ┣ model/
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ quotes.js
 ┃ ┃ ┗ tags.js
 ┃ ┣ routes/
 ┃ ┃ ┗ routesQuotes.js
 ┃ ┣ utils/
 ┃ ┃ ┣ saveQuotesdb.js  <- lógica pura para quotes
 ┃ ┃ ┗ saveTags.js      <- lógica pura para tags
 ┃ ┣ app.js
 ┃ ┗ db.js
 ┣ .env
 ┣ index.js
 ┣ package.json
```

---

## ⚡ Notas

* La API de **Quotable.io** tiene límite de 50 quotes por request.
  Por eso `seedQuotesLogic` hace múltiples requests para juntar la cantidad deseada (por defecto 300).
* Todos los seeds se hacen con funciones puras y `try/catch`, evitando la necesidad de “handlers falsos”.
* El servidor arranca limpio, sincroniza la base y pobla los datos automáticamente.

---
