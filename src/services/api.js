import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
export const FILE_BASE_URL = API_BASE_URL.replace(/\/api\/?$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("ideaxToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handling + auto logout on 401 (expired/invalid token)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message || error?.message || "Something went wrong. Please try again.";

    if (status === 401) {
      localStorage.removeItem("ideaxToken");
      localStorage.removeItem("ideaxUser");
      if (!window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
      }
    }

    return Promise.reject({ ...error, message });
  }
);

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------
export const authAPI = {
  register: (payload) => api.post("/auth/register", payload),
  login: (payload) => api.post("/auth/login", payload),
  me: () => api.get("/auth/me"),
};

// ---------------------------------------------------------------------------
// User / Profile
// ---------------------------------------------------------------------------
export const userAPI = {
  getProfile: () => api.get("/users/profile"),
  updateProfile: (payload) => api.put("/users/profile", payload),
  changePassword: (payload) => api.put("/users/change-password", payload),
};

// ---------------------------------------------------------------------------
// Submissions
// ---------------------------------------------------------------------------
export const submissionAPI = {
  create: (formData) =>
    api.post("/submissions", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  getMy: (limit) => api.get("/submissions/my", { params: limit ? { limit } : {} }),
  getMyStats: () => api.get("/submissions/my/stats"),
  getById: (id) => api.get(`/submissions/${id}`),
  fileUrl: (id) => {
    const token = localStorage.getItem("ideaxToken");
    return `${API_BASE_URL}/submissions/${id}/file${token ? `?token=${encodeURIComponent(token)}` : ""}`;
  },

  // Admin
  getAll: (params) => api.get("/submissions", { params }),
  update: (id, payload) => api.put(`/submissions/${id}`, payload),
  updateStatus: (id, status) => api.patch(`/submissions/${id}/status`, { status }),
  remove: (id) => api.delete(`/submissions/${id}`),
};

// ---------------------------------------------------------------------------
// Copyright
// ---------------------------------------------------------------------------
export const copyrightAPI = {
  upload: (formData) =>
    api.post("/copyright", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  getMy: () => api.get("/copyright/my"),
  fileUrl: (id) => {
    const token = localStorage.getItem("ideaxToken");
    return `${API_BASE_URL}/copyright/${id}/file${token ? `?token=${encodeURIComponent(token)}` : ""}`;
  },

  // Admin
  getAll: (params) => api.get("/copyright", { params }),
  updateStatus: (id, status) => api.patch(`/copyright/${id}/status`, { status }),
  remove: (id) => api.delete(`/copyright/${id}`),
};

// ---------------------------------------------------------------------------
// Authors (admin)
// ---------------------------------------------------------------------------
export const authorAPI = {
  getAll: (params) => api.get("/authors", { params }),
  getById: (userId) => api.get(`/authors/${userId}`),
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const contactAPI = {
  send: (payload) => api.post("/contact", payload),

  // Admin
  getAll: (params) => api.get("/contact", { params }),
  remove: (id) => api.delete(`/contact/${id}`),
};

// ---------------------------------------------------------------------------
// Admin dashboard
// ---------------------------------------------------------------------------
export const adminAPI = {
  getDashboardStats: () => api.get("/admin/dashboard"),
  updateUserStatus: (userId, isActive) => api.patch(`/admin/users/${userId}/status`, { isActive }),
};

export default api;
