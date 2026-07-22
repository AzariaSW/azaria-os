# Security

## Overview

The Azaria-OS backend follows a layered security approach. Instead of relying on a single security mechanism, multiple independent protections are applied throughout the application to reduce attack surfaces and protect sensitive resources.

The security implementation covers:

- HTTP security headers
- CORS protection
- Rate limiting
- Hidden administrator authentication
- Password hashing
- JWT authentication
- Request validation
- File upload validation
- Environment variable protection
- Error handling
- Request tracing
- Database security

---

# Security Layers

```
                Client Request
                       │
                       ▼
              HTTP Security Headers
                       │
                       ▼
                  CORS Validation
                       │
                       ▼
                 Rate Limiting
                       │
                       ▼
                 Request ID
                       │
                       ▼
                 HTTP Logging
                       │
                       ▼
              Request Validation
                       │
                       ▼
           Authentication (if required)
                       │
                       ▼
            Controller / Service Layer
                       │
                       ▼
                 Prisma Database
```

---

# HTTP Security

Helmet is used to automatically configure secure HTTP response headers.

Configured protections include:

- Removes `X-Powered-By`
- Prevents MIME sniffing
- Clickjacking protection
- DNS prefetch control
- Cross-Origin Resource Policy
- Additional browser security headers

Example:

```javascript
helmet({
    crossOriginResourcePolicy: {
        policy: "cross-origin"
    }
});
```

---

# Cross-Origin Resource Sharing (CORS)

Only approved frontend applications are allowed to communicate with the API.

Allowed origins include:

- Production frontend URL
- Local development server

Unknown origins are rejected before reaching the application logic.

Example:

```
https://myportfolio.com        ✓
http://localhost:5173          ✓
https://unknown-domain.com     ✗
```

---

# Rate Limiting

Global rate limiting protects the API against brute-force attacks and abuse.

Configuration:

- Window: configurable
- Maximum requests: 100
- Standard rate-limit headers enabled

If exceeded:

```json
{
    "success": false,
    "message": "Too many requests. Please try again later."
}
```

Sensitive endpoints such as authentication and contact requests use stricter rate limits.

---

# Hidden Administrator Authentication

The administration panel is intentionally hidden.

There is:

- No visible login page
- No public administrator interface
- No discoverable authentication endpoint

Authentication requires successfully completing a challenge before administrator credentials are accepted.

Authentication flow:

```
Secret Sequence
        │
        ▼
Challenge Verification
        │
        ▼
Challenge JWT
        │
        ▼
Username + Password
        │
        ▼
Admin JWT
```

This significantly reduces automated attacks because attackers must first discover the secret challenge sequence.

---

# Password Security

Administrator credentials are never stored in plaintext.

Passwords and secret challenge sequences are hashed using bcrypt before storage.

Verification uses:

```
bcrypt.compare()
```

Only hashes are stored inside environment variables.

---

# JWT Authentication

JWT is used for administrator authentication.

Two token types exist.

## Challenge Token

Issued after the secret sequence is successfully verified.

Purpose:

- Proves the hidden challenge was completed
- Required before administrator login

Contains:

```json
{
    "type": "challenge",
    "authorized": true
}
```

Expires after a short duration.

---

## Administrator Token

Issued after successful username/password authentication.

Contains:

```json
{
    "role": "admin",
    "username": "..."
}
```

This token authorizes all protected administrator endpoints.

Expired or invalid tokens automatically return Unauthorized responses.

---

# Request Validation

Every endpoint validates incoming data before reaching the service layer.

Validation is performed using Zod.

Examples include:

- UUID validation
- Email validation
- String length
- Required fields
- Optional fields
- File metadata
- Dates
- Arrays

Invalid requests never reach database operations.

---

# File Upload Security

File uploads are validated before storage.

Checks include:

## Allowed MIME Types

Images:

- image/jpeg
- image/png
- image/webp

Documents:

- application/pdf

---

## Extension Validation

Extensions are verified independently of MIME type.

Examples:

Allowed

```
resume.pdf
photo.jpg
```

Rejected

```
virus.exe
script.js
image.php
```

---

## File Size Limits

Maximum sizes are enforced for every upload type.

Examples include:

- Profile images
- Project images
- Certificates
- Resume
- CV

Oversized uploads are rejected automatically.

---

## Random File Names

Uploaded files are never stored using user-provided names.

Instead:

```
timestamp-randomUUID.extension
```

Example:

```
1784378888024-ea4f37b4-b1a8-4d9c-aa24-a22691ad69af.pdf
```

This prevents filename collisions and path manipulation.

---

## Upload Directories

Uploads are separated by category.

```
uploads/
  profile/
  resume/
  cv/
  certificates/
  projects/
```

Project images are additionally isolated inside project-specific folders.

---

# Environment Variables

Sensitive configuration is never committed to source control.

Stored values include:

- Database URL
- JWT secret
- Administrator username
- Password hash
- Challenge hash
- GitHub token

A `.env.example` file documents required variables without exposing secrets.

---

# Error Handling

A centralized error handler prevents leaking internal implementation details.

Expected errors return meaningful responses.

Unexpected errors return generic responses.

Example:

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```

Internal stack traces are only written to server logs.

---

# Request Logging

Every request receives a unique Request ID.

Example:

```
[a3d6dbe4-8df0-4cf1-b16d-89f8baf3b9fa]
```

Logs include:

- Method
- URL
- Status code
- Response time
- Request ID

This allows tracing requests throughout the application.

---

# Database Security

Database access is handled exclusively through Prisma ORM.

Advantages include:

- Parameterized queries
- SQL injection protection
- Type-safe queries
- Transaction support
- Automatic escaping

No raw SQL is executed for standard CRUD operations.

---

# Authentication Middleware

Protected routes require administrator authentication.

Middleware performs:

1. JWT verification
2. Token expiration check
3. Role validation
4. User attachment to request

Unauthorized requests are rejected before reaching controllers.

---

# Security Logging

Application logs are written into:

```
logs/

combined.log
error.log
exceptions.log
rejections.log
```

Logs include:

- Server errors
- Unhandled exceptions
- Promise rejections
- Request information

---

# Security Best Practices

The backend follows several secure development practices:

- Passwords are hashed
- Secrets remain in environment variables
- JWT expiration is enforced
- Administrator interface is hidden
- Input validation is centralized
- Uploads are validated
- Random filenames are generated
- SQL injection protection through Prisma
- Global error handling
- Request tracing
- Rate limiting
- Secure HTTP headers
- CORS restrictions
- Principle of least privilege

---

# Future Security Improvements

Potential future enhancements include:

- Refresh tokens
- CSRF protection
- Content Security Policy (CSP)
- Audit logging
- Two-factor authentication
- Automatic IP blocking
- API key support
- File virus scanning
- Signed upload URLs
- Security monitoring and alerting