# Azaria-OS Backend

## Overview

The Azaria-OS backend is a RESTful API built with Node.js and Express.js. It provides the data and administrative functionality for the portfolio website while emphasizing security, maintainability, and clean architecture.

The backend is responsible for:

- Portfolio content management
- Authentication and authorization
- File uploads
- Database operations
- GitHub integration
- Contact message handling
- Request validation
- Error handling
- Logging
- Security

The project follows a layered architecture that separates routing, controllers, services, middleware, configuration, and database access.

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Express.js | Web framework |
| PostgreSQL | Database |
| Prisma ORM | Database access |
| Zod | Request validation |
| JWT | Authentication |
| Multer | File uploads |
| Winston | Logging |
| Morgan | HTTP request logging |
| Helmet | Security headers |
| CORS | Cross-origin protection |
| Express Rate Limit | Rate limiting |
| Compression | Response compression |
| Docker | Database container |

---

# Project Structure

```
src/
├── config/
├── constants/
├── controllers/
├── logger/
├── middleware/
├── prisma/
├── routes/
├── services/
├── uploads/
├── utils/
├── validators/
├── app.js
└── server.js
```

Each directory has a single responsibility.

---

# Request Flow

Every request follows approximately the following lifecycle:

```
Client
    │
    ▼
Express
    │
    ▼
Security Middleware
    │
    ▼
Compression
    │
    ▼
Rate Limiter
    │
    ▼
Request ID
    │
    ▼
Request Logger
    │
    ▼
Body Parser
    │
    ▼
Route
    │
    ▼
Validation
    │
    ▼
Authentication (if required)
    │
    ▼
Controller
    │
    ▼
Service
    │
    ▼
Prisma
    │
    ▼
PostgreSQL
```

Responses follow the reverse path before being returned to the client.

---

# Features

## Authentication

The administration system uses a two-step authentication process.

1. Challenge verification
2. Username/password login

Only after a valid challenge token has been obtained can an administrator log in.

JWTs are used for authenticated requests.

---

## Database

Prisma ORM is used as the data access layer.

Advantages include:

- Type-safe queries
- Database migrations
- Schema synchronization
- Transactions
- Connection management

---

## Validation

Incoming requests are validated using Zod before reaching controllers.

Validation includes:

- Body
- Route parameters
- Query parameters

Invalid requests never reach the business logic.

---

## File Uploads

The backend supports uploading:

- Profile images
- Project images
- Resume
- Curriculum Vitae

Uploads are validated by:

- MIME type
- File extension
- Maximum size

Files are automatically organized into their corresponding directories.

---

## GitHub Integration

The backend communicates with the GitHub API to retrieve:

- Profile
- Repository information
- Recent activity

Responses are cached to reduce API requests.

---

## Error Handling

Errors are centralized through a global error handler.

The application distinguishes between:

- Validation errors
- Authentication errors
- Prisma errors
- Multer errors
- Application errors
- Unexpected server errors

Every error response follows a consistent format.

---

## Logging

The backend provides structured logging through Winston.

Logs include:

- Request ID
- Method
- URL
- Status code
- Response time
- Stack traces

Morgan is used for HTTP logging while Winston stores application logs.

---

## Security

Security features include:

- Helmet
- CORS
- JWT authentication
- Password hashing
- Challenge authentication
- Request validation
- Rate limiting
- Secure file validation
- Request IDs
- Hidden administrative entry point

See `SECURITY.md` for additional details.

---

# Development Principles

The backend was designed around the following principles:

- Separation of concerns
- Modular architecture
- Stateless API design
- Consistent response format
- Centralized error handling
- Secure defaults
- Reusable utilities
- Production-ready code structure

---

# Future Improvements

Possible future enhancements include:

- Refresh tokens
- API versioning strategy
- Redis caching
- Unit testing
- Integration testing
- CI/CD pipeline
- Object storage (AWS S3, Cloudinary)
- Monitoring and metrics