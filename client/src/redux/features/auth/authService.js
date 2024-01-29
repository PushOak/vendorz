import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const API_URL = `${SERVER_URL}/api/users/`;

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData, {
        withCredentials: true,
    })
    return response.data
};

const authService = {
    register,
};

export default authService;
