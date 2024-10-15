import axios from "axios";

export const logout = async () => {
  try {
    await axios.post("/api/logout");
    window.location.href = "/login";
  } catch (error) {
    console.log(error);
  }
};
