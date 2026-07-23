# Backend Architecture

## Overview

The backend follows a layered architecture that separates HTTP handling, business logic, validation, and database operations.

Each layer has a single responsibility and communicates only with the layer directly below it.

```
HTTP Request
      │
      ▼
Routes
      │
      ▼
Middleware
      │
      ▼
Controllers
      │
      ▼
Services
      │
      ▼
Prisma ORM
      │
      ▼
PostgreSQL
```

---

# Architecture Layers

## Routes

Routes define the API endpoints.

Responsibilities:

- Endpoint registration
- Middleware composition
- Controller selection

Routes contain no business logic.

---

## Middleware

Middleware processes requests before controllers execute.

Examples include:

- Authentication
- Validation
- Logging
- Compression
- Rate limiting
- Security headers
- Request IDs
- File uploads

Each middleware performs a single task.

---

## Controllers

Controllers handle HTTP requests and responses.

Responsibilities:

- Read request data
- Invoke services
- Return API responses

Controllers do not access the database directly.

---

## Services

Services contain all business logic.

Responsibilities:

- Database operations
- Transactions
- File management
- External API communication
- Business rules

Services remain independent of Express whenever possible.

---

## Prisma

Prisma provides the application's database abstraction layer.

Responsibilities:

- Query generation
- Transactions
- Relationship handling
- Schema synchronization

All database interactions occur through Prisma.

---

## Database

PostgreSQL stores all persistent application data.

Primary entities include:

- Profile
- Projects
- Project Images
- Skills
- Experience
- Education
- Certificates
- Contact Messages

---

# Directory Responsibilities

| Directory | Responsibility |
|------------|----------------|
| config | Configuration files |
| constants | Shared constants |
| controllers | HTTP handlers |
| logger | Winston logger configuration |
| middleware | Request middleware |
| prisma | Database client |
| routes | API routes |
| services | Business logic |
| uploads | Uploaded files |
| utils | Shared helper functions |
| validators | Zod validation schemas |

---

# Dependency Flow

The project follows one-way dependencies.

```
Routes
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
Prisma
```

Lower layers never import higher layers.

For example:

- Services never import controllers.
- Controllers never import routes.
- Prisma never depends on Express.

This separation keeps the architecture modular and testable.

---

# Request Lifecycle

```
Incoming Request
        │
        ▼
Helmet
        │
        ▼
CORS
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
Logger
        │
        ▼
Body Parser
        │
        ▼
Router
        │
        ▼
Authentication
        │
        ▼
Validation
        │
        ▼
Controller
        │
        ▼
Service
        │
        ▼
Database
        │
        ▼
Response
```

---

# Error Flow

```
Controller
      │
      ▼
Service
      │
 throws ApiError
      │
      ▼
Global Error Handler
      │
      ▼
Standard Error Response
```

Unexpected exceptions are also captured by the global error handler.

---

# File Upload Flow

```
Client
      │
multipart/form-data
      │
      ▼
Multer
      │
      ▼
Validation
      │
      ▼
Temporary Storage
      │
      ▼
Service
      │
      ▼
Final Upload Directory
      │
      ▼
Database Update
```

Transactions and cleanup logic ensure that uploaded files and database records remain synchronized.

---

# Design Principles

The architecture emphasizes:

- Separation of concerns
- Single responsibility
- Modularity
- Reusability
- Maintainability
- Scalability
- Secure defaults
- Consistent coding patterns
- Production-ready organization