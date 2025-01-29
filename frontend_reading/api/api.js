// api.js
const API_BASE_URL = "https://localhost:3000/";

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("jwt");
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  //   if (!response.ok) {
  //     throw new Error(`Error ${response.status}: ${response.statusText}`);
  //   }

  return response.json();
}
