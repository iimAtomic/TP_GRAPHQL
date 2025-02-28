import { hashPassword } from "../auth.js";
import { MutationResolvers } from "../types";

export const createUser: MutationResolvers["createUser"] = async (_, { username, password }, context) => {
  try {
    const hashedPassword = await hashPassword(password);

    const newUser = await context.dataSources.db.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      code: 201,
      message: `User ${username} has been created`,
      user: {
        id: newUser.id,
        username: newUser.username,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      code: 400,
      message: "Something bad happened",
      user: null,
    };
  }
};
