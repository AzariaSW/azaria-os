import {HTTP_STATUS} from "../constants/httpStatus.js";

export default function notFound(
    req,
    res
){

    res.status(HTTP_STATUS.NOT_FOUND)
    .json({

        success:false,

        message:"Endpoint not found",

        path:req.originalUrl

    });

}