import { MutationResolvers } from "../types";

export const deleteArticle: MutationResolvers["deleteArticle"] = async (_, { id }, context) => {
    if (!context.user) {
        return {
            success: false,
            code: 401,
            message: "Unauthorized",
        };
    }

    try {
        const article = await context.dataSources.db.article.findFirstOrThrow({
            where: { id },
            include: { author: true },
        });

        if (article.authorId !== context.user.id) {
            return {
                success: false,
                code: 403,
                message: "Forbidden",
            };
        }

        await context.dataSources.db.article.delete({ where: { id } });

        return {
            success: true,
            code: 200,
            message: "Article deleted",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            code: 400,
            message: "Failed to delete article",
        };
    }
};

export const deleteComment: MutationResolvers["deleteComment"] = async (_, { id }, context) => {
    if (!context.user) {
        return {
            success: false,
            code: 401,
            message: "Unauthorized",
        };
    }

    try {
        const comment = await context.dataSources.db.comment.findFirstOrThrow({
            where: { id },
            include: { author: true },
        });

        if (comment.authorId !== context.user.id) {
            return {
                success: false,
                code: 403,
                message: "Forbidden",
            };
        }

        await context.dataSources.db.comment.delete({ where: { id } });

        return {
            success: true,
            code: 200,
            message: "Comment deleted",
        };
    } catch (error) {
        return {
            success: false,
            code: 400,
            message: "Failed to delete comment",
        };
    }
};

export const deleteLike: MutationResolvers["deleteLike"] = async (_, __, context) => {
    if (!context.user) {
        return {
            success: false,
            code: 401,
            message: "Unauthorized",
        };
    }

    try {
        const like = await context.dataSources.db.like.findFirstOrThrow({
            where: { userId: context.user.id },
        });

        if (like.userId !== context.user.id) {
            return {
                success: false,
                code: 403,
                message: "Forbidden",
            };
        }

        await context.dataSources.db.like.delete({ where: { id: like.id } });

        return {
            success: true,
            code: 200,
            message: "Like deleted",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            code: 400,
            message: "Failed to delete like",
        };
    }
};
