# Simple API (NestJS)

This project is a simple REST API built with NestJS for HNG Stage 0. It exposes three basic endpoints for status, health check, and profile details.

## Run locally

```bash
npm install
npm run start:dev
```

The app runs on `http://localhost:3000` by default.

## Endpoints and responses

| Method | Endpoint  | Response                                                                                                              |
| ------ | --------- | --------------------------------------------------------------------------------------------------------------------- |
| GET    | `/`       | `{"message":"API is running"}`                                                                                        |
| GET    | `/health` | `{"message":"healthy"}`                                                                                               |
| GET    | `/me`     | `{"name":"The Supreme Gojo","email":"yhungdew@gmail.com","github":"https://github.com/mr-nightmaare/devops-stage-0"}` |

## Live deployment URL

``

