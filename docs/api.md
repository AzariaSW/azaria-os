# Azaria-OS Backend API

## Base URL

```
http://localhost:5000/api/v1
```

## Authentication

| Method | Endpoint          | Authentication                | Description            |
| ------ | ----------------- | ----------------------------- | ---------------------- |
| POST   | `/auth/challenge` | X-Admin-Challenge: <token>    | Verify admin challenge |
| POST   | `/auth/login`     | Authorization: Bearer <token> | Login                  |

## Health

## GET /health

Returns the health status of the API and database connection.

### Response Format

```json
{
  {
    "success": true,
    "statusCode": 200,
    "message": "Health check successful",
    "data": {
        "status": "healthy",
        "database": "connected",
        "uptime": 3644.2243995,
        "responseTime": "103ms"
    }
}
}
```

## Profile

## GET /profile

Returns portfolio profile.

## PUT /profile

Updates the portfolio profile.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "fullName": "3-100 character",
  "title": "upto 150 character",
  "bio": "upto 3000 character",
  "email": "example@gmail.com",
  "location": "upto 100 character",
  "profileImage": "/picture/azaria.jpg",
  "resumeUrl": "/uploads/....",
  "cvUrl": "/uploads/....",
  "github": "http://www.github.com/Azari_SW",
  "linkedin": "https://www.linkedin.com/in/azaria-abenet-795875377"
}
```

## Projects

## GET /projects

Returns paginated projects.

### Query Parameters

| Parameter | Type    | Default         | Description                                       |
| --------- | ------- | --------------- | ------------------------------------------------- |
| page      | number  | 1               | Page number                                       |
| limit     | number  | 10              | Maximum 50                                        |
| sort      | string  | createdAt(desc) | `title`, `createdAt`,`description` or `updatedAt` |
| order     | string  | asc             | `asc` or `desc`                                   |
| featured  | boolean |                 | Filter featured projects                          |
| search    | string  |                 | Search title/description                          |

## GET /projects/:id

Returns specific project.

## POST /projects

Creates a project.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "title": "3-100 character(REQUIRED)",
  "description": "10-1000 character(REQUIRED)",
  "githubUrl": "http://www.github.com/Azari_SW/...",
  "liveUrl": "http://...",
  "imageUrl": "/picture/ex.png",
  "featured": true
}
```

## PUT /projects/:id

updates a project.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "title": "3-100 character",
  "description": "10-1000 character",
  "githubUrl": "http://www.github.com/Azari_SW/...",
  "liveUrl": "http://...",
  "imageUrl": "/picture/ex.png",
  "featured": true
}
```

## DELETE /projects/:id

Deletes a project.

Authentication Required:
Authorization: Bearer <token>

## Skills

## GET /skills

Returns paginated skills.

### Query Parameters

| Parameter | Type   | Default       | Description                              |
| --------- | ------ | ------------- | ---------------------------------------- |
| page      | number | 1             | Page number                              |
| limit     | number | 10            | Maximum 50                               |
| sort      | string | category(asc) | `name`, `category`,`createdAt`or `level` |
| order     | string | asc           | `asc` or `desc`                          |
| category  | string |               | search for the specific category skills  |
| search    | string |               | Search name                              |

## GET /skills/:id

Returns specific skill.

## POST /skills

Creates a skill.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "name": "2-100 character(REQUIRED)",
  "category": "5-50 character(REQUIRED)",
  "level": "3-30 character(REQUIRED)",
  "icon": "http://..."
}
```

## PUT /skills/:id

updates a skill.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "name": "2-100 character",
  "category": "5-50 character",
  "level": "3-30 character",
  "icon": "http://..."
}
```

## DELETE /skills/:id

Deletes a skill.

Authentication Required:
Authorization: Bearer <token>

## Experiences

## GET /experiences

Returns paginated experiences.

### Query Parameters

| Parameter | Type   | Default   | Description                                 |
| --------- | ------ | --------- | ------------------------------------------- |
| page      | number | 1         | Page number                                 |
| limit     | number | 10        | Maximum 50                                  |
| sort      | string | role(asc) | `company`, `role`,`createdAt`or `startDate` |
| order     | string | asc       | `asc` or `desc`                             |
| role      | string |           | search for the specific role experiences    |
| search    | string |           | Search company/description                  |

## GET /experiences/:id

Returns specific experience.

## POST /experiences

Creates an experience.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "company": "2-100 character(REQUIRED)",
  "role": "5-50 character(REQUIRED)",
  "description": "10-1000 character(REQUIRED)",
  "startDate": "dd/mm/yyyy(REQUIRED)",
  "endDate": "dd/mm/yyyy"
}
```

## PUT /experiences/:id

updates a experience.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "company": "2-100 character",
  "role": "5-50 character",
  "description": "10-1000 character",
  "startDate": "dd/mm/yyyy",
  "endDate": "dd/mm/yyyy"
}
```

## DELETE /experiences/:id

Deletes a experience.

Authentication Required:
Authorization: Bearer <token>

## Education

## GET /education

Returns paginated educations.

### Query Parameters

| Parameter | Type   | Default         | Description                                                          |
| --------- | ------ | --------------- | -------------------------------------------------------------------- |
| page      | number | 1               | Page number                                                          |
| limit     | number | 10              | Maximum 50                                                           |
| sort      | string | intitution(asc) | `institution`, `degree`,`field`,`endDate`,`createdAt` or `startDate` |
| order     | string | asc             | `asc` or `desc`                                                      |
| search    | string |                 | Search institution/field/degree                                      |

## GET /education/degrees

Returns all distinct attained degrees.

## GET /education/:id

Returns specific education.

## POST /education

Creates an education.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "institution": "2-100 character(REQUIRED)",
  "degree": "5-50 character(REQUIRED)",
  "field": "5-100 character(REQUIRED)",
  "startDate": "dd/mm/yyyy(REQUIRED)",
  "endDate": "dd/mm/yyyy"
}
```

## PUT /education/:id

updates a education.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "institution": "2-100 character",
  "degree": "5-50 character",
  "field": "5-100 character",
  "startDate": "dd/mm/yyyy",
  "endDate": "dd/mm/yyyy"
}
```

## DELETE /education/:id

Deletes a education.

Authentication Required:
Authorization: Bearer <token>

## Certificates

## GET /certificates

Returns paginated certificates.

### Query Parameters

| Parameter | Type   | Default   | Description                                 |
| --------- | ------ | --------- | ------------------------------------------- |
| page      | number | 1         | Page number                                 |
| limit     | number | 10        | Maximum 50                                  |
| sort      | string | name(asc) | `name`, `issuer`,`createdAt` or `issueDate` |
| order     | string | asc       | `asc` or `desc`                             |
| search    | string |           | Search name/issuer                          |

## GET /certificates/:id

Returns specific certificate.

## POST /certificates

Creates a certificate.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "name": "2-100 character(REQUIRED)",
  "issuer": "5-100 character(REQUIRED)",
  "issuDate": "dd/mm/yyyy(REQUIRED)",
  "credentialUrl": "https://...."
}
```

## PUT /certificates/:id

updates a certificate.

Authentication Required:
Authorization: Bearer <token>

### Request Body

```json
{
  "name": "2-100 character",
  "issuer": "5-100 character",
  "issuDate": "dd/mm/yyyy",
  "credentialUrl": "https://...."
}
```

## DELETE /certificates/:id

Deletes a certificate.

Authentication Required:
Authorization: Bearer <token>

## GitHub

Cached for 15 minutes.

Data fetched from GitHub API.

## GET /github/profile

Returns github profile.

## GET /github/repositories

Returns repositories from github.

## GET /github/activity

Returns recent github activities.

## Messages

## GET /messages

Returns paginated messages.

Authentication Required:
Authorization: Bearer <token>

### Query Parameters

| Parameter | Type    | Default    | Description                                                |
| --------- | ------- | ---------- | ---------------------------------------------------------- |
| page      | number  | 1          | Page number                                                |
| limit     | number  | 10         | Maximum 50                                                 |
| sort      | string  | email(asc) | `name`,`email`,`subject`,`message`,`createdAt` or `isRead` |
| order     | string  | asc        | `asc` or `desc`                                            |
| isRead    | boolean |            | filter meassage                                            |
| search    | string  |            | Search name/subject/message/email                          |

## GET /messages/:id

Returns specific message.

Authentication Required:
Authorization: Bearer <token>

## POST /messages

Sends a message.

### Request Body

```json
{
  "name": "2-100 character(REQUIRED)",
  "email": "eg@gmail.com(REQUIRED)",
  "subject": "10-100 character(REQUIRED)",
  "message": "5-2000 character(REQUIRED)"
}
```

## PATCH /messages/:id

mark message as read.

Authentication Required:
Authorization: Bearer <token>

### Request Body

empty body {}

## DELETE /messages/:id

Deletes a message.

Authentication Required:
Authorization: Bearer <token>

## Common Query Parameters

| Parameter | Description                                     | Example                            |
| --------- | ----------------------------------------------- | ---------------------------------- |
| `page`    | Page number (default: 1)                        | GET /project?page=2                |
| `limit`   | Number of items per page (default: 10, max: 50) | GET /project?limit=2               |
| `search`  | Case-insensitive search                         | GET /project?search=node           |
| `sort`    | Field to sort by                                | GET /project?sort=title            |
| `order`   | `asc` or `desc`                                 | GET /project?sort=title&order=desc |

## Response Format

### For paginated multiple data

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Projects retrieved successfully",
  "data": {
    "item": [{}],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

### For single record

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Profile retrieved successfully",
  "data": {}
}
```

## Error Responses

```json
{
  "success": false,
  "message": "Project not found",
  "errors": [],
  "requestId": "..."
}
```
