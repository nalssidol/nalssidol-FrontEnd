import axios from "axios";

export const API = axios.create({
  baseURL: "http://nalssidol.site/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
