import { comparePasswords, createJWT } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const logIn: MutationResolvers["logIn"] =async (_, { username, password }, context) => {
    const user = await context.dataSources.db.user.findUnique({
      where: { username },
    });
    if (!user) {
      return {
        code: 404,
        message: "User not found",
        success: false,
        token: null,
        user: null,
      };
    }
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return {
        code: 401,
        message: "Invalid password",
        success: false,
        token: null,
        user: null,
      };
    }
    return {
      code: 200,
      message: "Successfully signed in",
      success: true,
      token: "Bearer " + createJWT(user),
      user: {
        id: user.id,
        username: user.username,
      },
    };
  };
  