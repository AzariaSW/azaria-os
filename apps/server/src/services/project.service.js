import prisma from "../prisma/client.js";


export async function getProjects(){

    return prisma.project.findMany({

        orderBy:{
            createdAt:"desc"
        }

    });

}



export async function getFeaturedProjects(){

    return prisma.project.findMany({

        where:{
            featured:true
        },

        orderBy:{
            createdAt:"desc"
        }

    });

}