import { QueryResolvers } from "../../types.js";

export const getAuthors: QueryResolvers["getAuthors"] = async (_, __, context) => {
    if (!context.user) {
        return {
        code: 401,
        message: "Unauthorized",
        success: false,
        authors: null,
        };
    }
    
    try {
        const authors = await context.dataSources.db.user.findMany();
        if (!authors) {
        return {
            code: 404,
            message: "Authors not found",
            success: false,
            authors: null,
        };
        }
        return {
        code: 200,
        message: "Authors found",
        success: true,
        authors: authors
        };
    } catch (error) {
        return {
        code: 400,
        message: "Failed to get authors",
        success: false,
        authors: null,
        };
    }
}