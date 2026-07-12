import prisma from "../prisma/client.js";


export async function healthCheck(req,res){


    const startTime = Date.now();


    try{


        await prisma.$queryRaw`SELECT 1`;


        res.status(200).json({

            success:true,

            data:{

                status:"healthy",

                database:"connected",

                uptime:
                process.uptime(),

                responseTime:
                `${Date.now()-startTime}ms`

            }

        });


    }
    catch(error){


        res.status(503).json({

            success:false,

            data:{

                status:"unhealthy",

                database:"disconnected"

            }

        });


    }

}