import { Resolvers } from "./types";
import { createUser } from "./mutations/createUser.js";
import { connexion } from "./mutations/connexion.js";
import { updateArticle } from "./mutations/updateArticle.js";
import { myprofile } from "./querys/myprofile.js";
import { getArticle } from "./querys/getArticle.js";
import { getArticles } from "./querys/getArticles.js";
import { getAuthors } from "./querys/getAuthors.js";
import {addArticle, addComment, addLike} from "./mutations/Add.js";
import {deleteArticle, deleteComment, deleteLike} from "./mutations/delete.js";

export const resolvers: Resolvers = {
  Mutation: {
    createUser,
    logIn: connexion,
    addArticle,
    deleteArticle,
    updateArticle,
    addComment,
    deleteComment,
    addLike,
    deleteLike
  },
  Query: {
    me: myprofile,
    getArticle,
    getArticles,
    getAuthors
  },
};
