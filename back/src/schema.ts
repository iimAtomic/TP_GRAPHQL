import ggl from "graphql-tag";

export const typeDefs = ggl`
    type Mutation {
        createUser(username: String!, password: String!): CreateUserResponse
        logIn(username: String!, password: String!): LogInResponse
        addArticle(title: String!, content: String!): AddArticleResponse
        deleteArticle(id: ID!): DeleteArticleResponse
        updateArticle(id: ID!, data: UpdateArticleProps!): UpdateArticleResponse
        addComment(articleId: ID!, content: String!): AddCommentResponse
        deleteComment(id: ID!): DeleteCommentResponse
        addLike(articleId: ID!): AddLikeResponse
        deleteLike(id: ID!): DeleteLikeResponse
    }

    type Query {
        me: getUserResponse
        getArticle(id: ID!): GetArticleResponse
        getArticles(authorId: String, orderByLikesAsc: Boolean, orderByLikesDesc: Boolean): GetArticlesResponse
        getAuthors: GetAuthorsResponse
    }

    type User {
        id: ID!
        username: String!
    }

    type Article {
        id: ID!
        title: String!
        content: String!
        author: User!
        createdAt: String!
        updatedAt: String
        likes: [Like]
    }

    type ArticleDetails {
        id: ID!
        title: String!
        content: String!
        author: User!
        comments: [Comment]
        likes: [Like]
    }

    type Like {
        id: ID!
        user: User!
    }

    type Comment {
        id: ID!
        content: String!
        author: User!
        createdAt: String!
    }

    input UpdateArticleProps {
        title: String
        content: String
    }

    type getUserResponse {
        code: Int!
        success: Boolean!
        message: String!
        user: User
    }

    type CreateUserResponse {
        code: Int!
        success: Boolean!
        message: String!
        user: User
    }

    type LogInResponse {
        code: Int!
        success: Boolean!
        message: String!
        token: String
        user: User
    }

    type AddArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: Article
    }

    type GetArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: ArticleDetails
    }

    type GetArticlesResponse {
        code: Int!
        success: Boolean!
        message: String!
        articles: [Article]
    }
    
    type DeleteArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
    }
    
    type UpdateArticleResponse {
        code: Int!
        success: Boolean!
        message: String!
        article: Article
    }

    type AddCommentResponse {
        code: Int!
        success: Boolean!
        message: String!
        comment: Comment
    }

    type DeleteCommentResponse {
        code: Int!
        success: Boolean!
        message: String!
    }
    
    type AddLikeResponse {
        code: Int!
        success: Boolean!
        message: String!
        like: Like
    }

    type DeleteLikeResponse {
        code: Int!
        success: Boolean!
        message: String!
    }
    
    type GetAuthorsResponse {
        code: Int!
        success: Boolean!
        message: String!
        authors: [User]
    }
`;
