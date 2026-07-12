import prisma from "../prisma/client.js";

import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const healthCheck =
asyncHandler(async(req,res)=>{
    const startTime = Date.now();

    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json(
      new ApiResponse(
        200,
        {
          status: "healthy",
          database: "connected",
          uptime: process.uptime(),
          responseTime: `${Date.now() - startTime}ms`,
        },
        "Health check successful",
      ),
    );
        
});