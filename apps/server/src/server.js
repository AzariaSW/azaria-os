import "dotenv/config";

import app from "./app.js";

import {
    connectDatabase,
    disconnectDatabase
}
from "./config/database.js";




const PORT =
process.env.PORT || 5000;


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