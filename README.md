# Proyecto de Prueba Michael Velasquez

Hola, esta es una pequeña documentación donde detallo algunas de las decisiones de diseño tomadas para el proyecto. Para acceder al proyecto en línea, por favor visita el siguiente enlace: [Lista de Tareas](https://lista-de-tareas-9050c.web.app/tareas).

## Aplicación Angular

### Componentes

En la aplicación de Angular, se han creado 3 componentes:

- **tarea**: Maneja las funciones y visualización de una tarea individual.
  
- **tarea-formulario**: Se encarga del formulario (específicamente los campos de entrada) para agregar nuevas tareas.
  
- **tarea-lista**: Actúa como el componente principal, orquestando los otros dos componentes.

### Servicios

Se creó un servicio para interactuar con el backend. Este servicio gestiona todas las comunicaciones con el backend incluyendo operaciones como get, post, put y delete.

### Interfaces

Definí una interfaz para facilitar el tipado y el manejo del objeto `Tarea`, que incluye atributos como id, título, descripción y estado.

### Routing

Aunque la aplicación es sencilla y no requiere múltiples rutas, se implementó una funcionalidad de enrutamiento para redirigir automáticamente a `/tareas` si el usuario no lo especifica en la dirección URL. Además, si en el futuro se necesitan más rutas, ya está todo configurado.

### Environments

Se han definido archivos de ambiente para facilitar la conexión con el API, y queda la opción abierta para tener un API de pruebas separado del API productivo.

### Librerías de Diseño

Para la estética de la aplicación, opté por usar Angular Material y sus componentes. También se aplicaron reglas de CSS específicas para garantizar un diseño adaptable y responsive para cualquier dispositivo.

### Pruebas Unitarias

El proyecto tiene habilitadas y configuradas pruebas unitarias que se pueden ejecutar usando `ng test`. Si bien la mayoría son pruebas básicas, para el componente `Tarea`, se agregaron pruebas adicionales para cubrir más casos de uso.

## API

El backend fue desarrollado usando Express y TypeScript. Se crearon los endpoints necesarios para el correcto funcionamiento de la aplicación. Además, la API está alojada en Firebase y se conecta a una colección en la que se almacenan las tareas.

