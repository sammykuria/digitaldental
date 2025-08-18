const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://digitaldental.onrender.com"
    : "http://127.0.0.1:4000";

export default API_BASE_URL;
