import { Resolvers } from "../types.js";
import { createUser } from "./mutation/createUser.js";
import { logIn } from "./mutation/login.js";
import { updateArticle } from "./mutation/updateArticle.js";
import { me } from "./query/me.js";
import { getArticle } from "./query/getArticle.js";
import { getArticles } from "./query/getArticles.js";
import { getAuthors } from "./query/getAuthors.js";
import {addArticle, addComment, addLike} from "./mutation/Add.js";
import {deleteArticle, deleteComment, deleteLike} from "./mutation/delete.js";

export const resolvers: Resolvers = {
  Mutation: {
    createUser,
    logIn,
    addArticle,
    deleteArticle,
    updateArticle,
    addComment,
    deleteComment,
    addLike,
    deleteLike
  },
  Query: {
    me,
    getArticle,
    getArticles,
    getAuthors
  },
};
