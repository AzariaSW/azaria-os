# Backend Architecture


## Stack

- Express.js
- Prisma ORM
- PostgreSQL


## API Health Check


GET

/api/health


Returns:

- Server status
- Database connection status
- Response time
- Server uptime


## Database

Prisma manages communication between Express and PostgreSQL.