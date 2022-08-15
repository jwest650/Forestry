import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store/UserStore";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const user = useUserStore((state) => state.user);

    useEffect(() => {
        if (!user) {
            return navigate("/", { replace: true });
        }
    }, [user]);

    return children;
};

export default ProtectedRoute;
