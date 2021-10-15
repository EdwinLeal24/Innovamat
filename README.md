# Innovamat

El objetivo del proyecto es dar a los alumnos la mejor solución para que puedan disponer de los recursos de una manera cómoda y sencilla. 
En esta web el alumno puede navegar para encontrar los recursos según su categoría, ordenarlos alfabéticamente o añadirlos a una lista de favoritos.

https://innovamat.vercel.app/

## Comenzando 🚀

$ git clone https://github.com/EdwinLeal24/Innovamat.git

$ npm install

$ npm run dev

## Construido con 🛠️

El proyecto está construido con React. He decidido crearlo con la herramienta Vite por su rapidez a la hora de compilar y por su ayuda en la perfomance del proyecto.

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
 ┣ context
 ┃ ┣ AppContext.jsx
 ┃ ┣ actions.js
 ┃ ┣ appReducer.js
 ┃ ┗ types.js
 ┣ hooks
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
 ┃ ┣ api
 ┃ ┃ ┣ api.js
 ┃ ┃ ┗ httpManager.js
 ┃ ┣ favorite
 ┃ ┃ ┗ handleFavorites.js
 ┃ ┗ service.js
 ┣ icon.png
 ┣ index.css
 ┗ main.jsx
 ```
 
### Components
Guarda cada uno de los componentes que componen la aplicación ordenados por subcarpetas

### Context
En esta carpeta se encontrará todo lo relacionado con el store de la app. He separado en diferentes archivos las acciones, los tipos y los dispatch. A medida que vaya creciendo la aplicación se podría separar también por módulos. He decidido utilizar los patrones Redux porque en cuanto el proyecto se haga más grande, será más fácil controlarla desde un estado global. 

### Hooks
He creado un hook para saber el size de la pantalla para la versión mobile. En caso de querer crear más hook, se guardarán en esta carpeta.

### Pages
Cada archivo en esta carpeta es una ruta del proyecto, excepto el index que se encarga de hacer las importaciones de cada una de ellas en el momento en que se necesite. 

### Services
Están los servicios que se usarán en la aplicación, como por ejemplo las llamadas a la API y la instancia de axios. Cualquier petición a la base de datos, sea get, post, put.. se controlarán desde aquí.

### routing
Están los archivos que controlan las rutas para simplificar la generación del componente switch a medida que crezca la aplicación

 
 
