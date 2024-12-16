import axios from "axios";

// axios.defaults.baseURL = "https://fakestoreapi.com/";

const api = axios.create({ baseURL: "https://fakestoreapi.com/" });

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
