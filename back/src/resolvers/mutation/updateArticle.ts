import { MutationResolvers } from "../../types.js";

export const updateArticle: MutationResolvers["updateArticle"] = async (_, { id, data }, context) => {
    try {
      if (!context.user) {
        return {
          code: 401,
          message: "Unauthorized",
          success: false
        };
      }
  
      const article = await context.dataSources.db.article.findUnique({ where: { id }, include: {author: true} });
  
      if (!article) {
        return {
          code: 404,
          message: "Article not found",
          success: false
        };
      }
  
      if (article.authorId !== context.user.id) {
        return {
          code: 403,
          message: "Forbidden",
          success: false
        };
      }
  
      const updatedArticle = await context.dataSources.db.article.update({
        where: { id },
        data: {
          title: data.title ?? article.title,
          content: data.content ?? article.content
          
        },
        include: { author: true }
      });
  
      return {
        code: 200,
        message: "Article updated",
        success: true,
        article: {
          ...updatedArticle,
          createdAt: updatedArticle.createdAt.toISOString(),
          updatedAt: new Date().toISOString()
        }
      };
    } catch (e) {
      console.error(e);
      return {
        code: 400,
        message: "Failed to update article",
        success: false
      };
    }
  };
