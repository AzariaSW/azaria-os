import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import env from "../config/env.js";


export const securityMiddleware = [

    helmet(),

    cors({
        origin: env.CLIENT_URL,
        credentials:true
    }),

];


export const limiter = rateLimit({

    windowMs:15 * 60 * 1000,

    max:100,

    message:{
        error:"Too many requests"
    }

});