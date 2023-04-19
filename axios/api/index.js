import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_DOMAIN,
  headers: {},
});

class postsAPI {
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

export default new postsAPI();
