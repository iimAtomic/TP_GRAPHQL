import { GraphQLResolveInfo } from 'graphql';
import { Article, Comment, Like } from './src/models';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddArticleResponse = {
  __typename?: 'AddArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddCommentResponse = {
  __typename?: 'AddCommentResponse';
  code: Scalars['Int']['output'];
  comment?: Maybe<Comment>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type AddLikeResponse = {
  __typename?: 'AddLikeResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Like>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Article = {
  __typename?: 'Article';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Maybe<Like>>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ArticleDetails = {
  __typename?: 'ArticleDetails';
  author: User;
  comments?: Maybe<Array<Maybe<Comment>>>;
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  likes?: Maybe<Array<Maybe<Like>>>;
  title: Scalars['String']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DeleteArticleResponse = {
  __typename?: 'DeleteArticleResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteCommentResponse = {
  __typename?: 'DeleteCommentResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteLikeResponse = {
  __typename?: 'DeleteLikeResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type GetArticleResponse = {
  __typename?: 'GetArticleResponse';
  article?: Maybe<ArticleDetails>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type GetArticlesResponse = {
  __typename?: 'GetArticlesResponse';
  articles?: Maybe<Array<Maybe<Article>>>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type GetAuthorsResponse = {
  __typename?: 'GetAuthorsResponse';
  authors?: Maybe<Array<Maybe<User>>>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['ID']['output'];
  user: User;
};

export type LogInResponse = {
  __typename?: 'LogInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticle?: Maybe<AddArticleResponse>;
  addComment?: Maybe<AddCommentResponse>;
  addLike?: Maybe<AddLikeResponse>;
  createUser?: Maybe<CreateUserResponse>;
  deleteArticle?: Maybe<DeleteArticleResponse>;
  deleteComment?: Maybe<DeleteCommentResponse>;
  deleteLike?: Maybe<DeleteLikeResponse>;
  logIn?: Maybe<LogInResponse>;
  updateArticle?: Maybe<UpdateArticleResponse>;
};


export type MutationAddArticleArgs = {
  content: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationAddCommentArgs = {
  articleId: Scalars['ID']['input'];
  content: Scalars['String']['input'];
};


export type MutationAddLikeArgs = {
  articleId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLogInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationUpdateArticleArgs = {
  data: UpdateArticleProps;
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  getArticle?: Maybe<GetArticleResponse>;
  getArticles?: Maybe<GetArticlesResponse>;
  getAuthors?: Maybe<GetAuthorsResponse>;
  me?: Maybe<GetUserResponse>;
};


export type QueryGetArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetArticlesArgs = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  orderByLikesAsc?: InputMaybe<Scalars['Boolean']['input']>;
  orderByLikesDesc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateArticleProps = {
  content?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArticleResponse = {
  __typename?: 'UpdateArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type GetUserResponse = {
  __typename?: 'getUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddArticleResponse: ResolverTypeWrapper<Omit<AddArticleResponse, 'article'> & { article?: Maybe<ResolversTypes['Article']> }>;
  AddCommentResponse: ResolverTypeWrapper<Omit<AddCommentResponse, 'comment'> & { comment?: Maybe<ResolversTypes['Comment']> }>;
  AddLikeResponse: ResolverTypeWrapper<Omit<AddLikeResponse, 'like'> & { like?: Maybe<ResolversTypes['Like']> }>;
  Article: ResolverTypeWrapper<Article>;
  ArticleDetails: ResolverTypeWrapper<Omit<ArticleDetails, 'comments' | 'likes'> & { comments?: Maybe<Array<Maybe<ResolversTypes['Comment']>>>, likes?: Maybe<Array<Maybe<ResolversTypes['Like']>>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Comment: ResolverTypeWrapper<Comment>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  DeleteArticleResponse: ResolverTypeWrapper<DeleteArticleResponse>;
  DeleteCommentResponse: ResolverTypeWrapper<DeleteCommentResponse>;
  DeleteLikeResponse: ResolverTypeWrapper<DeleteLikeResponse>;
  GetArticleResponse: ResolverTypeWrapper<Omit<GetArticleResponse, 'article'> & { article?: Maybe<ResolversTypes['ArticleDetails']> }>;
  GetArticlesResponse: ResolverTypeWrapper<Omit<GetArticlesResponse, 'articles'> & { articles?: Maybe<Array<Maybe<ResolversTypes['Article']>>> }>;
  GetAuthorsResponse: ResolverTypeWrapper<GetAuthorsResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Like: ResolverTypeWrapper<Like>;
  LogInResponse: ResolverTypeWrapper<LogInResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateArticleProps: UpdateArticleProps;
  UpdateArticleResponse: ResolverTypeWrapper<Omit<UpdateArticleResponse, 'article'> & { article?: Maybe<ResolversTypes['Article']> }>;
  User: ResolverTypeWrapper<User>;
  getUserResponse: ResolverTypeWrapper<GetUserResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddArticleResponse: Omit<AddArticleResponse, 'article'> & { article?: Maybe<ResolversParentTypes['Article']> };
  AddCommentResponse: Omit<AddCommentResponse, 'comment'> & { comment?: Maybe<ResolversParentTypes['Comment']> };
  AddLikeResponse: Omit<AddLikeResponse, 'like'> & { like?: Maybe<ResolversParentTypes['Like']> };
  Article: Article;
  ArticleDetails: Omit<ArticleDetails, 'comments' | 'likes'> & { comments?: Maybe<Array<Maybe<ResolversParentTypes['Comment']>>>, likes?: Maybe<Array<Maybe<ResolversParentTypes['Like']>>> };
  Boolean: Scalars['Boolean']['output'];
  Comment: Comment;
  CreateUserResponse: CreateUserResponse;
  DeleteArticleResponse: DeleteArticleResponse;
  DeleteCommentResponse: DeleteCommentResponse;
  DeleteLikeResponse: DeleteLikeResponse;
  GetArticleResponse: Omit<GetArticleResponse, 'article'> & { article?: Maybe<ResolversParentTypes['ArticleDetails']> };
  GetArticlesResponse: Omit<GetArticlesResponse, 'articles'> & { articles?: Maybe<Array<Maybe<ResolversParentTypes['Article']>>> };
  GetAuthorsResponse: GetAuthorsResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Like: Like;
  LogInResponse: LogInResponse;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  UpdateArticleProps: UpdateArticleProps;
  UpdateArticleResponse: Omit<UpdateArticleResponse, 'article'> & { article?: Maybe<ResolversParentTypes['Article']> };
  User: User;
  getUserResponse: GetUserResponse;
};

export type AddArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AddArticleResponse'] = ResolversParentTypes['AddArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AddCommentResponse'] = ResolversParentTypes['AddCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AddLikeResponse'] = ResolversParentTypes['AddLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArticleDetailsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ArticleDetails'] = ResolversParentTypes['ArticleDetails']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Like']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteArticleResponse'] = ResolversParentTypes['DeleteArticleResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCommentResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteCommentResponse'] = ResolversParentTypes['DeleteCommentResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteLikeResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DeleteLikeResponse'] = ResolversParentTypes['DeleteLikeResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GetArticleResponse'] = ResolversParentTypes['GetArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['ArticleDetails']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetArticlesResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GetArticlesResponse'] = ResolversParentTypes['GetArticlesResponse']> = {
  articles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Article']>>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAuthorsResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['GetAuthorsResponse'] = ResolversParentTypes['GetAuthorsResponse']> = {
  authors?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LogInResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LogInResponse'] = ResolversParentTypes['LogInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addArticle?: Resolver<Maybe<ResolversTypes['AddArticleResponse']>, ParentType, ContextType, RequireFields<MutationAddArticleArgs, 'content' | 'title'>>;
  addComment?: Resolver<Maybe<ResolversTypes['AddCommentResponse']>, ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'articleId' | 'content'>>;
  addLike?: Resolver<Maybe<ResolversTypes['AddLikeResponse']>, ParentType, ContextType, RequireFields<MutationAddLikeArgs, 'articleId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserResponse']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  deleteArticle?: Resolver<Maybe<ResolversTypes['DeleteArticleResponse']>, ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteComment?: Resolver<Maybe<ResolversTypes['DeleteCommentResponse']>, ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deleteLike?: Resolver<Maybe<ResolversTypes['DeleteLikeResponse']>, ParentType, ContextType, RequireFields<MutationDeleteLikeArgs, 'id'>>;
  logIn?: Resolver<Maybe<ResolversTypes['LogInResponse']>, ParentType, ContextType, RequireFields<MutationLogInArgs, 'password' | 'username'>>;
  updateArticle?: Resolver<Maybe<ResolversTypes['UpdateArticleResponse']>, ParentType, ContextType, RequireFields<MutationUpdateArticleArgs, 'data' | 'id'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getArticle?: Resolver<Maybe<ResolversTypes['GetArticleResponse']>, ParentType, ContextType, RequireFields<QueryGetArticleArgs, 'id'>>;
  getArticles?: Resolver<Maybe<ResolversTypes['GetArticlesResponse']>, ParentType, ContextType, Partial<QueryGetArticlesArgs>>;
  getAuthors?: Resolver<Maybe<ResolversTypes['GetAuthorsResponse']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['getUserResponse']>, ParentType, ContextType>;
};

export type UpdateArticleResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UpdateArticleResponse'] = ResolversParentTypes['UpdateArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetUserResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['getUserResponse'] = ResolversParentTypes['getUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  AddArticleResponse?: AddArticleResponseResolvers<ContextType>;
  AddCommentResponse?: AddCommentResponseResolvers<ContextType>;
  AddLikeResponse?: AddLikeResponseResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleDetails?: ArticleDetailsResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DeleteArticleResponse?: DeleteArticleResponseResolvers<ContextType>;
  DeleteCommentResponse?: DeleteCommentResponseResolvers<ContextType>;
  DeleteLikeResponse?: DeleteLikeResponseResolvers<ContextType>;
  GetArticleResponse?: GetArticleResponseResolvers<ContextType>;
  GetArticlesResponse?: GetArticlesResponseResolvers<ContextType>;
  GetAuthorsResponse?: GetAuthorsResponseResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LogInResponse?: LogInResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UpdateArticleResponse?: UpdateArticleResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  getUserResponse?: GetUserResponseResolvers<ContextType>;
};

