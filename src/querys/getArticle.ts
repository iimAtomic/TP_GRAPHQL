import { QueryResolvers } from "../types";

export const getArticle: QueryResolvers["getArticle"] = async(_, { id }, context) => {
    if (!context.user) {
      return {
        code: 401,
        message: "Unauthorized",
        success: false,
        article: null,
      };
    }

    try {
      console.log('ceci est un test');

      const comments = await context.dataSources.db.comment.findMany({
        where: { articleId: id },
        include: { author: true }
      });

      const article = await context.dataSources.db.article.findFirstOrThrow({
        where: { id },
        include: { 
          author: true, 
          comments: true, 
          likes: { 
            include: { user: true } 
          }
        }
      });

      if (!article) {
        return {
          code: 404,
          message: "Article not found",
          success: false,
          article: null,
        };
      }

      return {
        code: 200,
        message: "Article found",
        success: true,
        article: {
          ...article,
          likes: article.likes.map(like => ({
            ...like,
            user: {
              ...like.user,
              createdAt: like.user.createdAt.toISOString(), 
            }
          })),
          createdAt: article.createdAt.toISOString(),
          updatedAt: article.updatedAt.toISOString(),
          comments: comments.map(comment => ({
            ...comment,
            createdAt: comment.createdAt.toISOString() 
          }))
        }
      }
    } catch (e) {
      console.error(e);
      return {
        code: 400,
        message: "Failed to get article",
        success: false,
        article: null,
      };
    }
};
