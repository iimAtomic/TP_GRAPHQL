import { MutationResolvers } from "../types";

export const addComment: MutationResolvers["addComment"] = async (_, { articleId, content }, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
            comment: null,
        };
    }

    try {
        const newComment = await context.dataSources.db.comment.create({
            data: {
                content,
                authorId: context.user.id,
                articleId,
            },
            include: { author: true },
        });

        return {
            code: 201,
            message: "Comment successfully created",
            success: true,
            comment: {
                id: newComment.id,
                content: newComment.content,
                author: {
                    id: newComment.author.id,
                    username: newComment.author.username,
                },
                createdAt: newComment.createdAt.toISOString(),
            },
        };
    } catch (error) {
        console.error(error);
        return {
            code: 400,
            message: "Failed to create comment",
            success: false,
            comment: null,
        };
    }
};

export const addLike: MutationResolvers["addLike"] = async (_, { articleId }, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
            like: null,
        };
    }

    try {
        const existingLike = await context.dataSources.db.like.findFirst({
            where: {
                articleId,
                userId: context.user.id,
            },
        });

        if (existingLike) {
            return {
                code: 400,
                message: "User has already liked this article",
                success: false,
                like: null,
            };
        }

        const newLike = await context.dataSources.db.like.create({
            data: {
                articleId,
                userId: context.user.id,
            },
            include: { user: true },
        });

        return {
            code: 201,
            message: "Like successfully created",
            success: true,
            like: {
                id: newLike.id,
                user: {
                    id: newLike.user.id,
                    username: newLike.user.username,
                },
            },
        };
    } catch (error) {
        console.error(error);
        return {
            code: 400,
            message: "Failed to add like",
            success: false,
            like: null,
        };
    }
};

export const addArticle: MutationResolvers["addArticle"] = async (_, { title, content }, context) => {
    if (!context.user) {
        return {
            code: 401,
            message: "Unauthorized",
            success: false,
            article: null,
        };
    }

    try {
        const newArticle = await context.dataSources.db.article.create({
            data: {
                title,
                content,
                authorId: context.user.id,
            },
            include: { author: true },
        });

        return {
            code: 201,
            message: "Article successfully created",
            success: true,
            article: {
                id: newArticle.id,
                title: newArticle.title,
                content: newArticle.content,
                author: {
                    id: newArticle.author.id,
                    username: newArticle.author.username,
                },
                createdAt: newArticle.createdAt.toISOString(),
            },
        };
    } catch (error) {
        console.error(error);
        return {
            code: 400,
            message: "Failed to create article",
            success: false,
            article: null,
        };
    }
};
