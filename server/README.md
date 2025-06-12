# NoTraffic Polygons Server

## Overview
A NestJS + TypeORM backend service for managing polygons, storing them in a PostgreSQL database via Docker. Supports creating, fetching, and deleting polygons.

## Tech Stack
- Node.js (on port 3000)
- NestJS
- TypeORM
- PostgreSQL (Dockerized on port 5432) 
- Jest (Unit Testing)

## API Endpoints
- Get all polygons `GET`    | `/polygons`
- Create new polygon `POST`   | `/polygons`
- Delete polygon by id `DELETE` | `/polygons/:id`

All actions have a simulated 5s delay using interceptor.

Uses CORS for client requests.

## Database
```bash
docker exec -it <db-container-name> psql -U postgres polygonsdb
```

## Tests
- Unit tests cover services and controllers
```bash
npm run test
```

## Setup & Run

```bash
npm install
docker-compose up --build