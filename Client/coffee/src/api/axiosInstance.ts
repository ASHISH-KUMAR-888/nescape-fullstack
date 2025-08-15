import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_URL}api`,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default axiosInstance;
