import axios from "axios";

const apiServer = axios.create({
  baseURL: process.env.BACKEND_API_URL,
});

apiServer.interceptors.response.use(
  (response) => (response.data ? response.data : response),
  (error) => {
    const errorData = error.response;

    return Promise.reject(errorData);
  }
);

export { apiServer };
