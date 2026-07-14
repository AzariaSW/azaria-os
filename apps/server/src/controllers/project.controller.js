import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

import {
  getProjects,
  getProjectById,
  getFeaturedProjects,
  createProjects,
  updateProjects,
  deleteProjects
} from "../services/project.service.js";

export const getAllProjects = asyncHandler(async (req, res) => {
  const result = await getProjects(req.query);

  res.status(HTTP_STATUS.OK).json(
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

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      project,

      "Project retrieved successfully",
    ),
  );
});

export const getFeatured = asyncHandler(async (req, res) => {
  const projects = await getFeaturedProjects();

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      projects,

      "Featured projects retrieved successfully",
    ),
  );
});

export const createProject = asyncHandler(async (req, res) => {
  const projects = await createProjects(req.body);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      projects,

      "Project created successfully",
    ),
  );
});

export const updateProject = asyncHandler(async (req, res) => {
  const projects = await updateProjects(req.body,req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      projects,

      "Project updated successfully",
    ),
  );
});

export const deleteProject = asyncHandler(async (req, res) => {
  const projects = await deleteProjects(req.params.id);

  res.status(HTTP_STATUS.OK).json(
    new ApiResponse(
      HTTP_STATUS.OK,

      projects,

      "Project deleted successfully",
    ),
  );
});