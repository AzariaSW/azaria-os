import prisma from "../prisma/client.js";

import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

export async function getAllCertificates() {
  const where = {};

  return prisma.certificate.findMany({

    orderBy: [
      {
        issuer: "asc",
      },

      {
        issueDate: "desc",
      },
    ],
  });
}

export async function getCertificate(id) {
  const certificate = await prisma.certificate.findUnique({
    where: { id },
  });

  if (!certificate) {
    throw new ApiError(
      HTTP_STATUS.NOT_FOUND,

      "Certificate not found",
    );
  }

  return certificate;
}



export async function createCertificate(data) {
  return prisma.certificate.create({
    data,
  });
}



export async function updateCertificate(data, certificateId) {
 try {
    return await prisma.certificate.update({
      where: {
        id: certificateId
      },
      data
    });
  } catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Certificate not found"
      );
    }
      throw error;
  }
}



export async function deleteCertificate(certificateId) { 
  try {
    return await prisma.certificate.delete({
    where: {
      id: certificateId
    }
  });
} catch (error) {
    if (error.code === "P2025") {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "Experience not found"
      );
    }

      throw error;
}
}