import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getProjects,
  getProjectById,
  getFeaturedProjects,
} from "../services/project.service.js";

export const getAllProjects = asyncHandler(async (req, res) => {
  const result = await getProjects(req.query);

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        result.projects,

        "Projects retrieved successfully",

        result.pagination,
      ),
    );
});

export const getProject = asyncHandler(async (req, res) => {
  const project = await getProjectById(req.params.id);

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        project,

        "Project retrieved successfully",
      ),
    );
});

export const getFeatured = asyncHandler(async (req, res) => {
  const projects = await getFeaturedProjects();

  res

    .status(HTTP_STATUS.OK)

    .json(
      new ApiResponse(
        HTTP_STATUS.OK,

        projects,

        "Featured projects retrieved successfully",
      ),
    );
});
