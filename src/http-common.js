import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASEURL || "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});