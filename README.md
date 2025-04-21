<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Microservicio de audit

El microservicio calcula la ruta óptima es responsable de calcular la ruta óptima usando un algoritmo mock (ej: A\* simplificado):

Este servicio forma parte de una arquitectura de microservicios para un sistema de monitoreo y control de flotas, y actúa como calculo de rutas.

Está construido con NestJS.

## Características

- Calcula la ruta óptima usando un algoritmo mock (ej: A\* simplificado).
- Manejar bloqueos de recurso (deadlocks) si dos vehículos solicitan rutas simultáneas.
- Validación de datos mediante DTOs y class-validator.
- Swagger API Documentation.
- Persistencia en PostgreSQL usando Prisma ORM.

## Requisitos

- Node.js (v16 o superior)
- npm
- Docker y Docker Compose (para la versión containerizada)

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
PORT=3002
AUDIT_SERVICE_URL=http://127.0.0.1:3003
```

## Download the repository

```bash
$
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

## Endpoints

### Audit Alerts

```
POST /route
```

**Parámetros de consulta:**

```bash
{
    "deviceId": "AZD-123",
    "origin": {
        "lat": 4.1225,
        "lng": 8.1225
    },
    "destination": {
        "lat": 12.1225,
        "lng": 12.1225
    }
}
```

**Respuesta:**

```bash
{
    "deviceId": "AZD-123",
    "origin": {
        "lat": 4.1225,
        "lng": 8.1225
    },
    "destination": {
        "lat": 12.1225,
        "lng": 12.1225
    },
    "route": [
        {
            "lat": 8.1225,
            "lng": 10.1225
        }
    ],
    "status": "success",
    "cacheTTL": 300
}
```

## Documentación API

La documentación de la API está disponible en Swagger UI:

http://localhost:3002/api/docs

La documentación de la API está disponible en CompoDoc UI:

http://localhost:3002/docs/

Incluye:

Tags por módulo (Alert)
Ejemplos de payloads

## Pruebas

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas con cobertura
npm run test:cov
```
