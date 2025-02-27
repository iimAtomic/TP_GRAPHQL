import { QueryResolvers } from "../../types.js";

type orderBy = {
  updatedAt?: 'desc',
  createdAt?: 'desc',
}

export const getArticles : QueryResolvers["getArticles"] = async(_, {authorId, orderByLikesAsc, orderByLikesDesc}, context) => {
    if (!context.user) {
      return {
        code: 401,
        message: "Unauthorized",
        success: false,
        article: null,
      };
    }

    try {
      const orderBy: orderBy[] = [{ updatedAt: 'desc'}, { createdAt: 'desc'}];
      const where = authorId ? { author: { id: authorId } } : {};
      const articles = await context.dataSources.db.article.findMany(
        { where,
          include: 
            {author: true, 
              likes: 
              { include: 
                { user: true }
              } 
          }, 
          orderBy
      });
      if (orderByLikesAsc) {
        articles.sort((a, b) => a.likes.length - b.likes.length);
      } else if (orderByLikesDesc) {
        articles.sort((a, b) => b.likes.length - a.likes.length);
      }
      if (!articles) {
        return {
          code: 404,
          message: "Articles not found",
          success: false,
          article: null,
        };
      }
      return {
        code: 200,
        message: "Articles found",
        success: true,
        articles: articles.map(article => {
          return {
            ...article,
            createdAt: article.createdAt.toISOString(),
            updatedAt: article.updatedAt.toISOString(),
            likes: article.likes.map(like => {
              return {
                ...like,
                user: {
                  ...like.user,
                  createdAt: like.user.createdAt.toISOString(),
                }
              }
            })
          }
        })
        }
    } catch (e) {
      console.error(e);
      return {
        code: 400,
        message: "Failed to get articles",
        success: false,
        article: null,
      };
    }
  };
