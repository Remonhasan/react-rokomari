import axios from "axios";

export const fetchUserData = () => {
  return axios
    .get("http://localhost:8000/api/users")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      // Handle errors if needed
      console.error("Error fetching user data:", error);
      throw error; // Rethrow the error to handle it where the function is used
    });
};

export const addUserData = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/register",
      userData
    );
    return response.data;
  } catch (error) {
    // Handle errors if needed
    console.error("Error adding user data:", error);
    throw error; // Rethrow the error to handle it where the function is used
  }
};
