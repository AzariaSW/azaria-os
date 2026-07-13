import { Router } from "express";

import { API } from "../constants/index.js";

import v1Routes from "./v1/index.js";

const router = Router();

router.use(
  `/${API.VERSION}`,

  v1Routes,
);

export default router;
