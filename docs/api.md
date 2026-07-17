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
  "fullName": "Azaria Abenet",
  "title": "Software Engineer",
  "bio": "...",
  "email": "example@gmail.com",
  "location": "Addis Ababa",
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
  "title": "ProjectX(REQUIRED)",
  "description": "...(REQUIRED)",
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
  "title": "ProjectX",
  "description": "...",
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
  "name": "c++(REQUIRED)",
  "category": "...(REQUIRED)",
  "level": "http://www.github.com/Azari_SW/...",
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
  "name": "c++",
  "category": "...",
  "level": "http://www.github.com/Azari_SW/...",
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
  "company": "company name(REQUIRED)",
  "role": "role(REQUIRED)",
  "description": "...(REQUIRED)",
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
  "company": "company name",
  "role": "role",
  "description": "...",
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
  "institution": "institution name(REQUIRED)",
  "degree": "Bachelor of Science(REQUIRED)",
  "field": "Software Engineering",
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
  "institution": "institution name",
  "degree": "Bachelor of Science",
  "field": "Software Engineering",
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
  "name": "cerificate name(REQUIRED)",
  "issuer": "issuer name(REQUIRED)",
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
  "name": "cerificate name",
  "issuer": "issuer name",
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
  "name": "sender name(REQUIRED)",
  "email": "sender email(REQUIRED)",
  "subject": "subject(REQUIRED)",
  "message": "message(REQUIRED)"
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
