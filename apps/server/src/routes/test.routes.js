import { Router } from "express";

import validate from "../middleware/validate.js";

import {
    projectSchema
}
from "../validators/project.validator.js";


const router = Router();



router.post(

    "/project",

    validate(projectSchema),

    (req,res)=>{


        res.json({

            success:true,

            data:req.validated

        });


    }

);



export default router;