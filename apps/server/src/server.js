import "dotenv/config";

import express from "express";

import apiRoutes from "./routes/index.js";

import {
    connectDatabase,
    disconnectDatabase
}
from "./config/database.js";


const app = express();


const PORT =
process.env.PORT || 5000;



app.use(
    express.json()
);



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