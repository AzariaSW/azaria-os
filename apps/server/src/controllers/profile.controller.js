import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {HTTP_STATUS} from "../constants/httpStatus.js";

import {getProfile} from "../services/profile.service.js";



export const getMyProfile = asyncHandler(

    async(req,res)=>{

        const profile = await getProfile();

        res

        .status(HTTP_STATUS.OK)

        .json(

            new ApiResponse(

                HTTP_STATUS.OK,

                profile,

                "Profile retrieved successfully"

            )

        );

    }

);