import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 2_000 * 60,
});
