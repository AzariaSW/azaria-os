import {checkDatabase} from "../services/health.service.js";
import {HTTP_STATUS} from "../constants/httpStatus.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const healthCheck =
asyncHandler(async(req,res)=>{
    const startTime = Date.now();

    await checkDatabase();

    res.status(HTTP_STATUS.OK).json(
      new ApiResponse(
        HTTP_STATUS.OK,
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