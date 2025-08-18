let API_BASE_URL;

if (process.env.NODE_ENV === "production") {
  API_BASE_URL = "https://digitaldental.onrender.com"; // your backend on Render
} else {
  API_BASE_URL = "http://127.0.0.1:4000"; // local dev backend
}

export default API_BASE_URL;
