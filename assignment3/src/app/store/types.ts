export interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
    authorName: string;
    authorRole: string;
    datetime: string;
  }

  export interface PostFormData {
    title: string;
    description: string;
    category: string;
    authorName: string;
    authorRole: string;
  }

  export interface PostsState {
    posts: Post[];
  }

  export interface RootState {
    posts: PostsState;
  }