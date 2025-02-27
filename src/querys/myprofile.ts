import { QueryResolvers } from "../types";

export const myprofile: QueryResolvers["me"] = async (_, __, context) => {
    if (!context.user) {
      return {
        code: 401,
        message: "Unauthorized",
        success: false,
        user: null,
      };
    }

    try {
      const user = await context.dataSources.db.user.findUnique({
        where: { id: context.user?.id },
      });

      if (!user) {
        return {
          code: 404,
          message: "User not found",
          success: false,
          user: null,
        };
      }

      return {
        code: 200,
        message: "User found",
        success: true,
        user: {
          id: user.id,
          username: user.username,
        },
      };
    } catch (error) {
      return {
        code: 400,
        message: "Failed to get user",
        success: false,
        user: null,
      };
    }
};
