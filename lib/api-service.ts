import axiosInstance from './axios';
import type { Post, Comment } from './types';

export const authService = {
  login: async (username: string): Promise<any> => {
    const response = await axiosInstance.post('/auth/login', { username });
    return response.data;
  },
  logout: async (): Promise<void> => {
    await axiosInstance.post('/auth/logout');
  },
};

export const postService = {
  getPosts: async (): Promise<Post[]> => {
    const response = await axiosInstance.get('/posts');
    return response.data;
  },
  getPost: async (id: number): Promise<Post> => {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  },
  createPost: async (data: Partial<Post>): Promise<Post> => {
    const response = await axiosInstance.post('/posts', data);
    return response.data;
  },
  updatePost: async (id: number, data: Partial<Post>): Promise<Post> => {
    const response = await axiosInstance.put(`/posts/${id}`, data);
    return response.data;
  },
  deletePost: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/posts/${id}`);
  },
};

export const commentService = {
  getComments: async (postId: number): Promise<Comment[]> => {
    const response = await axiosInstance.get(`/posts/${postId}/comments`);
    return response.data;
  },
  createComment: async (postId: number, data: Partial<Comment>): Promise<Comment> => {
    const response = await axiosInstance.post(`/posts/${postId}/comments`, data);
    return response.data;
  },
  updateComment: async (postId: number, commentId: number, data: Partial<Comment>): Promise<Comment> => {
    const response = await axiosInstance.put(`/posts/${postId}/comments/${commentId}`, data);
    return response.data;
  },
  deleteComment: async (postId: number, commentId: number): Promise<void> => {
    await axiosInstance.delete(`/posts/${postId}/comments/${commentId}`);
  },
};
