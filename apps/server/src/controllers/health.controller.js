export function health(req,res){

    res.json({

        status:"healthy",

        service:"AzariaOS API",

        timestamp:
        new Date(),

        uptime:
        process.uptime(),

        environment:
        process.env.NODE_ENV

    });

}