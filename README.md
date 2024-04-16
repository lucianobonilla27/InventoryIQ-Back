# Backend del Proyecto

Este repositorio contiene el backend de la aplicación XYZ, desarrollada con Express.js y MongoDB.

## Configuración

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
3. Instala las dependencias utilizando el siguiente comando:

    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y proporciona los siguientes valores:

    ```plaintext
    PORT=3000
    MONGODB_URI=uri_de_tu_base_de_datos_mongodb
    JWT_SECRET=secreto_para_jwt
    ```

## Ejecución

Para ejecutar el servidor, utiliza el siguiente comando:

```bash
npm start
```

El servidor se iniciará en el puerto especificado en tu archivo `.env`.

## Endpoints Disponibles

### Usuarios

- **GET /api/users**: Obtiene todos los usuarios.
- **POST /api/register**: Registra un nuevo usuario.
- **DELETE /api/user/delete/:id**: Elimina un usuario por su ID.
- **PATCH /api/user/:id**: Actualiza la información de un usuario.
- **POST /api/login**: Inicia sesión y genera un token JWT.

### Productos

- **GET /api/products**: Obtiene todos los productos disponibles.
- **POST /api/products**: Agrega un nuevo producto.
- **GET /api/products/:id**: Obtiene un producto por su ID.
- **PUT /api/products/:id**: Actualiza la información de un producto.
- **DELETE /api/products/:id**: Elimina un producto por su ID.

### Consultas

- **GET /api/contact**: Obtiene todas las consultas.
- **GET /api/consultaById/:id**: Obtiene una consulta por su ID.
- **POST /api/newConsulta**: Agrega una nueva consulta.
- **POST /api/respConsulta/:id**: Responde una consulta.
- **DELETE /api/deleteConsulta/:id**: Elimina una consulta por su ID.

### Rutas Privadas

- Todas las rutas bajo `/api` que requieren autenticación JWT deben ser precedidas por `/api` y estar protegidas con el middleware `comprobationJwt`.

## Contribución

¡Las contribuciones son bienvenidas! Si tienes alguna sugerencia o encuentras un error, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
