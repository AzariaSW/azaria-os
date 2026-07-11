import app from "./app.js";
import env from "./config/env.js";
import logger from "./logger/logger.js";


const server = app.listen(
    env.PORT,
    ()=>{

        logger.info(
            `AzariaOS API running on port ${env.PORT}`
        );

    }
);



process.on(
    "SIGTERM",
    ()=>{

        logger.info(
            "Server shutting down"
        );


        server.close();

    }
);