// @/lib/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://dbs-website.ratoguras.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if we are in a browser environment
    if (typeof window !== "undefined") {
      const { toast } = require("sonner");

      if (!error.response) {
        toast.error("Network Error: Please check your internet connection.");
      } else {
        const status = error.response.status;
        const message = error.response.data?.message || "Something went wrong. Please try again.";

        switch (status) {
          case 401:
            toast.error("Unauthorized: Please log in again.");
            break;
          case 403:
            toast.error("Forbidden: You don't have permission to access this resource.");
            break;
          case 404:
            toast.error("Not Found: The requested resource could not be found.");
            break;
          case 429:
            window.location.href = "/rate-limited";
            break;
          case 500:
            toast.error("Server Error: Internal server error. Please try again later.");
            break;
          default:
            toast.error(message);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
