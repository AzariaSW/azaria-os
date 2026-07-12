import "dotenv/config";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import express from "express";

import requestId from "./middleware/requestId.js";
import httpLogger from "./middleware/logger.js";
import apiRoutes from "./routes/index.js";

import {
    connectDatabase,
    disconnectDatabase
}
from "./config/database.js";


const app = express();


const PORT =
process.env.PORT || 5000;



app.use(express.json());

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(requestId);

app.use(httpLogger);

app.use(
    "/api",
    apiRoutes
);



async function startServer(){


    await connectDatabase();



    app.listen(
        PORT,
        ()=>{

            console.log(
                `Server running on port ${PORT}`
            );

        }
    );


}



startServer();




process.on(
    "SIGINT",
    async()=>{

        console.log(
            "Shutting down server..."
        );


        await disconnectDatabase();


        process.exit(0);

    }
);


process.on(
    "SIGTERM",
    async()=>{

        await disconnectDatabase();

        process.exit(0);

    }
);