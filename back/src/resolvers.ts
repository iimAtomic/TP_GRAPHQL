import { Resolvers } from "./types";
import { createUser } from "./mutations/createUser";
import { connexion } from "./mutations/connexion";
import { updateArticle } from "./mutations/updateArticle";
import { myprofile } from "./querys/myprofile";
import { getArticle } from "./querys/getArticle";
import { getArticles } from "./querys/getArticles";
import { getAuthors } from "./querys/getAuthors";
import {addArticle, addComment, addLike} from "./mutations/Add";
import {deleteArticle, deleteComment, deleteLike} from "./mutations/delete";

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
