## TiendaCoder

# ![TiendaCoder](./src/assets/images/logochico.png)

**TiendaCoder** es una aplicación de e-commerce desarrollada con **React** como proyecto educativo. Permite a los usuarios explorar una tienda virtual, filtrar productos por categorías y gestionar su carrito de compras.

---

## 🚀 Funcionalidades

- **Explorar productos**: Visualiza todos los productos disponibles.
- **Filtrar por categorías**: Laptops, Teléfonos y Tablets.
- **Gestión del carrito**:
  - Agregar productos al carrito.
  - Vaciar carrito.
  - Eliminar productos de forma individual.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**
  - React: Biblioteca principal para construir la interfaz.
React Router DOM: Para la navegación y manejo de rutas dinámicas dentro de la app.

- **Estilo**
  - CSS personalizado: Cada componente tiene su propio archivo CSS para mantener un diseño modular y organizado.
  - Bootstrap/React Bootstrap: Para componentes de estilo reutilizables y diseño responsivo.
  - SweetAlert2: Para mostrar notificaciones y alertas visuales interactivas.

- **Backend**
  - Firebase Firestore: Base de datos en tiempo real para almacenar productos, órdenes y gestionar la persistencia de datos.
  - Firebase Timestamp: Para registrar las fechas de las órdenes y otras acciones importantes.

---

## 📂 Estructura del proyecto

```plaintext
TiendaCoder/
├── public/
│   └── vite.svg
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── context/            # Contexto global para el carrito
│   ├── assets/             # Logos
│   ├── firebase/           # Base de datos
│   ├── App.js              # Componente principal
│   └── index.js            # Punto de entrada de la aplicación
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación del proyecto
```

## 🧰 Instalación y ejecución
**Clona el repositorio en tu máquina local:**
- git clone https://github.com/dumma11/CoderHouse-React-Entregable2.git

**Instala las dependencias:**
- npm install

**Inicia el servidor de desarrollo:**
- npm start

**Dependencias principales:**
- react: La biblioteca principal para construir la interfaz de usuario de la aplicación.
- react-dom: Necesaria para renderizar la aplicación React en el navegador.
- react-router-dom: Para manejar el enrutamiento en la aplicación, permitiendo la navegación entre diferentes vistas.
- firebase: Para interactuar con la base de datos de Firebase, como la creación de órdenes en el carrito de compras.
- bootstrap: Framework de CSS para estilos y componentes responsivos.
- react-bootstrap: Biblioteca de componentes de Bootstrap para React, que proporciona componentes listos para usar como botones, tarjetas, formularios, etc.
- sweetalert2: Para mostrar alertas y mensajes interactivos.

**Dependencias de desarrollo:**
- vite: Herramienta de construcción y servidor de desarrollo rápida para React.
- eslint: Herramienta de análisis de código estático para mantener la calidad del código.
- @vitejs/plugin-react: Plugin necesario para trabajar con React en Vite.
- gh-pages: Para desplegar la aplicación en GitHub Pages.
- @eslint/js: Configuración de ESLint para asegurar la calidad del código.
- @types/react y @types/react-dom: Tipos de TypeScript para React (aunque no estés usando TypeScript, algunas herramientas pueden aprovechar estos tipos).
- eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh: Plugins de ESLint para asegurar que las mejores prácticas de React se sigan.