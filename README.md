# React Microservicio Autor

Este proyecto es una aplicación React que consume un microservicio para gestionar autores. Permite crear nuevos autores y obtener información sobre ellos a través de diferentes endpoints.

## Estructura del Proyecto

```
react-microservicio-autor
├── public
│   └── index.html          # Punto de entrada HTML de la aplicación
├── src
│   ├── components
│   │   └── AutorForm.jsx   # Componente para manejar el formulario de autores
│   ├── services
│   │   └── autorService.js  # Servicio para interactuar con el microservicio
│   ├── App.jsx             # Componente principal de la aplicación
│   └── index.js            # Punto de entrada de JavaScript
├── package.json             # Configuración del proyecto para npm
└── README.md                # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```
   cd react-microservicio-autor
   ```

3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación, utiliza el siguiente comando:

```
npm start
```

Esto abrirá la aplicación en `http://localhost:3000`.

## Endpoints del Microservicio

- **GET** `/api/autor`: Obtiene la lista de autores.
- **POST** `/api/autor`: Crea un nuevo autor. El cuerpo de la solicitud debe ser:
  ```json
  {
    "nombre": "ali",
    "apellido": "campos",
    "fechaNacimiento": "2004-06-09T07:11:50.526Z"
  }
  ```
- **GET** `/api/Autor/{id}`: Obtiene un autor por su ID.
- **GET** `/api/Autor/nombre?nombre=`: Obtiene un autor por su nombre.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.