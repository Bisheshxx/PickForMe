import { api } from "./api";

export const setupInterceptors = () => {
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        window.location.href = "/login";
      }

      return Promise.reject(error);
    },
  );
};
