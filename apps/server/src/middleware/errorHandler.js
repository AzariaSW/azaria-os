import logger from "../logger/logger.js";


export default function errorHandler(
    err,
    req,
    res,
    next
){

    logger.error({

        requestId:req.id,

        message:err.message,

        stack:err.stack

    });


    res.status(
        err.status || 500
    )
    .json({

        success:false,

        message:
        "Internal Server Error",

        requestId:req.id

    });

}