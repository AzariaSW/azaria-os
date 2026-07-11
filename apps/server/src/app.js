import express from "express";

import {
    securityMiddleware,
    limiter
}
from "./middleware/security.js";

import requestId from "./middleware/requestId.js";

import loggerMiddleware 
from "./middleware/logger.js";

import healthRoutes 
from "./routes/health.routes.js";

import notFound 
from "./middleware/notFound.js";

import errorHandler
from "./middleware/errorHandler.js";


const app = express();


securityMiddleware.forEach(
    middleware => app.use(middleware)
);


app.use(
    limiter
);


app.use(
    requestId
);


app.use(
    loggerMiddleware
);


app.use(
    express.json()
);



app.use(
    "/api/health",
    healthRoutes
);



app.use(
    notFound
);


app.use(
    errorHandler
);



export default app;