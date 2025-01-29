const API_BASE_URL = "https://localhost:3000";

async function apiFetch(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API request failed");
    }

    return response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export const api = {
  getAllPublishedBlogs: () => apiFetch("/blogs"),

  getUserBlogs: () => apiFetch("/blogs/user"),

  createBlog: (blogData) =>
    apiFetch("/blogs/new", {
      method: "POST",
      body: JSON.stringify(blogData),
    }),

  updateBlog: (id, blogData) =>
    apiFetch(`/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(blogData),
    }),

  getBlogById: (id) => apiFetch(`/blogs/${id}`),

  deleteBlog: (id) =>
    apiFetch(`/blogs/${id}`, {
      method: "DELETE",
    }),

  addComment: (id, commentData) =>
    apiFetch(`/blogs/comment/${id}`, {
      method: "POST",
      body: JSON.stringify(commentData),
    }),
};
