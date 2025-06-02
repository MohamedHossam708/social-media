import api from "./apiEvironment";

export async function getAllPosts() {
  const req = await api.get("/posts?limit=50");
  return await req.data.posts;
}
