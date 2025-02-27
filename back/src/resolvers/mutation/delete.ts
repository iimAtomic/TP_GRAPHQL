import { MutationResolvers } from "../../types.js";

export const deleteArticle: MutationResolvers["deleteArticle"] = async(_, { id }, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
        };
    }
    try {
        const article = await context.dataSources.db.article.findFirstOrThrow({where: {id}, include: { author: true }})
        if (article.authorId !== context.user.id) {
            return {
                code: 403,
                message: "Forbidden",
                success: false
            }
        }
        await context.dataSources.db.article.delete({where: {id}})
        return {
            code: 200,
            message: "Article deleted",
            success: true
        }
    } catch (e) {
        console.error(e);
        return {
            code: 400,
            message: "Failed to delete article",
            success: false,
        };
    }
};

export const deleteComment: MutationResolvers["deleteComment"] = async(_, { id }, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
        };
    }
    try {
        const comment = await context.dataSources.db.comment.findFirstOrThrow({where: {id}, include: { author: true }})
        if (comment.authorId !== context.user.id) {
            return {
                code: 403,
                message: "Forbidden",
                success: false
            }
        }
        await context.dataSources.db.comment.delete({where: {id}})
        return {
            code: 200,
            message: "Comment deleted",
            success: true
        }
    } catch (e) {
        return {
            code: 400,
            message: "Failed to delete comment",
            success: false,
        };
    }
};

export const deleteLike: MutationResolvers["deleteLike"] = async (_, __, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
        };
    }
    try {
        const like = await context.dataSources.db.like.findFirstOrThrow({
            where: { userId: context.user.id }
        });

        if (like.userId !== context.user.id) {
            return {
                code: 403,
                message: "Forbidden",
                success: false
            }
        }
        await context.dataSources.db.like.delete({ where: { id: like.id } });
        return {
            code: 200,
            message: "Like deleted",
            success: true
        }
    } catch (e) {
        console.error(e);
        return {
            code: 400,
            message: "Failed to delete like",
            success: false,
        };
    }
}