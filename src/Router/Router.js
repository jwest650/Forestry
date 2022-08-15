import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Main from "./Main";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<SignIn />} />

                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute>
                            <Main />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default Router;
