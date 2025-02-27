export interface User {
    id: string;
    name: string;
    email: string;
    articles?: Article[];
    comments?: Comment[];
    likes?: Like[];
  }
  
  export interface Article {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author?: User;
    comments?: Comment[];
    likes?: Like[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Comment {
    id: string;
    content: string;
    authorId: string;
    articleId: string;
    author?: User;
    article?: Article;
    createdAt: Date;
  }
  
  export interface Like {
    id: string;
    userId: string;
    articleId: string;
    user?: User;
    article?: Article;
    createdAt: Date;
  }