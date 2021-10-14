# Innovamat

El objetivo del proyecto es dar a los alumnos la mejor solución para que puedan disponer de los recursos de la manera más fácil posible. 
En esta web el alumno puede navegar para encontrar los recursos según su categoría, ordenarlos alfabeticamente y añadirlos a una lista de favoritos.

https://innovamat-deploy.vercel.app/

## Comenzando 🚀

$ git clone https://github.com/EdwinLeal24/Innovamat.git

$ npm install

$ npm run dev

## Construido con 🛠️

El proyecto esta construido con React. He decidido crearlo con la herramienta Vite por su rapidez a la hora de compilar y por su ayuda en la perfomance del proyecto.

## Directorio 🖇️
```
src
 ┣ components
 ┃ ┣ dialog
 ┃ ┃ ┣ Dialog.jsx
 ┃ ┃ ┗ Dialog.module.css
 ┃ ┣ header
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Header.module.css
 ┃ ┃ ┣ SectionHeader.jsx
 ┃ ┃ ┗ SectionHeader.module.css
 ┃ ┗ items
 ┃ ┃ ┣ Card.jsx
 ┃ ┃ ┣ GridCards.jsx
 ┃ ┃ ┣ Items.jsx
 ┃ ┃ ┗ Items.module.css
 ┣ hooks
 ┃ ┣ useFetch.js
 ┃ ┗ useWindowWidth.js
 ┣ pages
 ┃ ┣ detail
 ┃ ┃ ┣ Detail.jsx
 ┃ ┃ ┗ Detail.module.css
 ┃ ┣ favorites
 ┃ ┃ ┣ Favorite.module.css
 ┃ ┃ ┗ Favorites.jsx
 ┃ ┣ notFound
 ┃ ┃ ┗ NotFound.jsx
 ┃ ┣ rincones
 ┃ ┃ ┗ Rincones.jsx
 ┃ ┣ talleres
 ┃ ┃ ┗ Talleres.jsx
 ┃ ┣ App.jsx
 ┃ ┣ App.module.css
 ┃ ┗ index.js
 ┣ routing
 ┃ ┣ paths.js
 ┃ ┗ router.js
 ┣ services
 ┃ ┗ handleFavorites.js
 ┣ icon.png
 ┣ index.css
 ┗ main.jsx
 ```
 
### Components
Guarda cada uno de los componentes que componen la aplicación ordenados por subcarpetas

### Hooks
Se encuentran los custom hooks. Para este proyecto he creado dos hooks, uno que se encarga de hacer las peticiones HTTP y otro hook que he utilizado para saber el risize 
de la pantalla para la versión movil.

### Pages
Cada archivo en esta carpeta es una ruta del proyecto excepto el index que se encarga de hacer las importaciones de cada una de ellas que luego seran usadas en el router.

### routing
Estan los archivos que controlan las rutas para simplificar la generación del componente switch a medida que crezca la aplicación
 
 
 
