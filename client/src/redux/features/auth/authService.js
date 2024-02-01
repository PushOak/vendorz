import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const API_URL = `${SERVER_URL}/api/users/`;

// Validate email
export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData, {
        withCredentials: true,
    });
    return response.data;
};

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData);
    return response.data;
};

// Logout user
const logout = async () => {
    const response = await axios.get(API_URL + "logout");
    return response.data.message;
};

// Get login status
const getLoginStatus = async () => {
    const response = await axios.get(API_URL + "getLoginStatus");
    return response.data;
};

const authService = {
    register,
    login,
    logout,
    getLoginStatus,
};

export default authService;
