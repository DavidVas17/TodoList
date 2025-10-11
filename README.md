📋 Todo App – README

Este proyecto es una aplicación Todo List con backend en Node.js + Express + MongoDB y frontend en React + Vite + TailwindCSS.

🚀 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

Node.js
 (versión recomendada: 18+)

npm
 (se instala con Node.js)

MongoDB
 (local o en la nube con MongoDB Atlas
)

📦 Instalación

Clona este repositorio:

git clone <url-del-repositorio>
cd TODO-APP


Instala dependencias para backend:

cd backend
npm install


Esto instalará express, mongoose, cors, dotenv y demás dependencias que usa el servidor.

Instala dependencias para frontend:

cd ../frontend
npm install


Esto instalará react, vite, tailwindcss, lucide-react y demás dependencias de la interfaz.

⚙️ Configuración
1. Variables de entorno (backend)

En la carpeta backend crea un archivo .env (o config.env si así lo tienes en tu app.js) con el contenido:

PORT=8000
MONGO_URI=mongodb://localhost:27017/todoapp


PORT → puerto donde se ejecuta el backend.

MONGO_URI → conexión a MongoDB local (puedes cambiarlo por la URL de Atlas).

▶️ Cómo correr el proyecto
1. Levantar backend (API)

En una terminal:

cd backend
npm start


Esto iniciará el servidor Express en http://localhost:8000/api/v2.

2. Levantar frontend (React + Vite)

En otra terminal:

cd frontend
npm run dev


Esto abrirá la interfaz en http://localhost:5173.

🗄️ Base de datos

El proyecto usa MongoDB para almacenar las tareas.
Por defecto, la BD se conecta a mongodb://localhost:27017/todoapp.

Asegúrate de tener MongoDB corriendo antes de iniciar el backend.
Si usas Atlas, reemplaza la URI en tu .env.

🎨 Stack usado

Frontend: React + Vite + TailwindCSS + Lucide-react

Backend: Node.js + Express + Mongoose

DB: MongoDB

📌 Estado actual del proyecto
- Crear tareas
- Ver tareas
- Editar tareas
- Eliminar tareas
- Filtros avanzados (pendiente/completadas, búsqueda por texto, prioridad)
