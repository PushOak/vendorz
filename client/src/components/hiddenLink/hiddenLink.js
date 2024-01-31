import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";

// wrap with this component in order to show the links
const ShowOnLogin = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return children;
    }
    return null;
};

export const ShowOnLogout = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return children;
    }
    return null;
};

export default ShowOnLogin;
