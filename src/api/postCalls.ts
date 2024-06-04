import axios from "axios";
import { Comment, Pagination, Post, User } from "./postTypes";

//const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllPosts = () => {
  return getPaginatedPosts();
};

export const getPaginatedPosts = (pagination?: Pagination) => {
  return axios.get<Post[]>(`${BASE_URL}/posts`, { params: pagination }).then(({ data }) => data);
};

export const getPostById = (postId: string) => {
  return axios.get<Post>(`${BASE_URL}/posts/${postId}`).then(({ data }) => data);
};

export const getUserById = (userId: string) => {
  return axios.get<User>(`${BASE_URL}/users/${userId}`).then(({ data }) => data);
};

export const getUsersByIds = (userIds: string[]) => {
  const uniqueUserIds = [...new Set(userIds)];

  return axios
    .get<User[]>(`${BASE_URL}/users`, { params: { id: uniqueUserIds } })
    .then(({ data }) => data);
};

export const getCommentsByPostId = (postId: string) => {
  return axios.get<Comment[]>(`${BASE_URL}/posts/${postId}/comments`).then(({ data }) => data);
};

export const postNewPost = (newPost: Post) => {
  return axios.post<Post>(`${BASE_URL}/posts`, newPost).then(({ data }) => data);
};
