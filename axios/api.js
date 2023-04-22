import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  headers: { "Content-Type": "application/json" },
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization =
    typeof window !== "undefined" ? localStorage.getItem("token") : false;
  return config;
});

export class postsAPI {
  createPost(post) {
    return instance.post("/api/posts", post);
  }
  updatePost(id, updatedPost) {
    return instance.put(`/api/posts/${id}`, updatedPost);
  }
  getPosts() {
    return instance.get("/api/posts");
  }
  getPostById(id) {
    return instance.get(`/api/posts/${id}`);
  }
  deletePost(id) {
    return instance.delete(`/api/posts/${id}`);
  }
  upload(formData) {
    return instance.post("/api/upload", formData);
  }
}

class authAPI {
  register(user) {
    return instance.post("/api/register", user);
  }
  login(user) {
    return instance.post("/api/login", user);
  }
  authMe() {
    return instance.get("/api/auth-me");
  }
}
export const postsApi = new postsAPI();
export const authApi = new authAPI();
