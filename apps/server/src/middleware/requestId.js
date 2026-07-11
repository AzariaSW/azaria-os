import { v4 as uuid } from "uuid";


export default function requestId(req, res, next){

    req.id = uuid();

    res.setHeader(
        "X-Request-ID",
        req.id
    );

    next();

}