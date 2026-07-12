import express from "express";
import compression from "compression";

import {
    securityMiddleware,
    limiter
}
from "./middleware/security.js";

import requestId from "./middleware/requestId.js";

import httpLogger 
from "./middleware/logger.js";

import apiRoutes 
from "./routes/index.js";

import notFound 
from "./middleware/notFound.js";

import errorHandler
from "./middleware/errorHandler.js";


const app = express();


securityMiddleware.forEach(
    middleware => app.use(middleware)
);

app.use(
    compression()
);

app.use(
    limiter
);


app.use(
    requestId
);


app.use(
    httpLogger
);


app.use(
    express.json()
);



app.use(
    "/api",
    apiRoutes
);



app.use(
    notFound
);


app.use(
    errorHandler
);


export default app;